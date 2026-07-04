// Prerender: rendert elke route naar statische HTML in dist/
// Draait na `vite build` (client) + `vite build --ssr` (server bundle).
// Elke pagina krijgt zo zijn eigen title/meta/canonical/OG/schema in de ruwe HTML.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");

const { render } = await import(
  pathToFileURL(join(root, "dist-server", "entry-server.js")).href
);

// Routes uit AppRoutes.tsx halen — één bron van waarheid, geen dubbele lijst.
const appRoutesSrc = readFileSync(join(root, "src", "AppRoutes.tsx"), "utf8");
const routes = [...appRoutesSrc.matchAll(/path="([^"*]+)"/g)].map((m) => m[1]);

// Sanity: sitemap en routes moeten overeenkomen.
const sitemap = readFileSync(join(root, "public", "sitemap.xml"), "utf8");
const sitemapPaths = [...sitemap.matchAll(/<loc>https:\/\/www\.bv-bradico\.be([^<]*)<\/loc>/g)]
  .map((m) => m[1].replace(/\/$/, "") || "/");
for (const p of sitemapPaths) {
  if (!routes.includes(p)) console.warn(`⚠️  In sitemap maar geen route: ${p}`);
}

const template = readFileSync(join(dist, "index.html"), "utf8");
const SEO_START = "<!--seo-head-start-->";
const SEO_END = "<!--seo-head-end-->";

function buildPage(url) {
  const { html, helmet } = render(url);
  if (!helmet) throw new Error(`Geen helmet-output voor ${url}`);

  let head = [
    helmet.title.toString(),
    helmet.meta.toString(),
    helmet.link.toString(),
    helmet.script.toString(),
  ]
    .filter(Boolean)
    .join("\n    ");

  // hreflang afleiden uit de canonical van de pagina zelf
  const canonical = /rel="canonical" href="([^"]+)"/.exec(head)?.[1];
  if (canonical) {
    head += `\n    <link rel="alternate" hreflang="nl-BE" href="${canonical}"/>`;
  }

  const startIdx = template.indexOf(SEO_START);
  const endIdx = template.indexOf(SEO_END) + SEO_END.length;
  if (startIdx === -1 || endIdx < SEO_END.length) {
    throw new Error("seo-head markers niet gevonden in dist/index.html");
  }
  let page =
    template.slice(0, startIdx) + head + template.slice(endIdx);

  const rootDiv = '<div id="root"></div>';
  if (!page.includes(rootDiv)) throw new Error("<div id=\"root\"></div> niet gevonden");
  page = page.replace(rootDiv, `<div id="root">${html}</div>`);
  return page;
}

let count = 0;
for (const route of routes) {
  const page = buildPage(route);
  if (page.includes("Pagina niet gevonden") && route !== "/404") {
    console.warn(`⚠️  Route rendert NotFound: ${route}`);
  }
  const outFile =
    route === "/" ? join(dist, "index.html") : join(dist, route.slice(1), "index.html");
  mkdirSync(dirname(outFile), { recursive: true });
  writeFileSync(outFile, page);
  count++;
}

// Echte 404-pagina voor Vercel (onbekende URL's krijgen status 404 + deze HTML)
writeFileSync(join(dist, "404.html"), buildPage("/__niet-bestaand__"));

console.log(`✅ ${count} pagina's geprerenderd + 404.html`);
