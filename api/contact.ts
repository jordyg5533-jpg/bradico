export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405 });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return Response.json({ error: "Not configured" }, { status: 503 });

  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid body" }, { status: 400 });
  }

  const { naam, telefoon, gemeente, type, bericht, source } = body;
  const isChatbot = source === "chatbot";

  const subject = isChatbot
    ? `[Bradico] Chatbot lead — ${naam} — ${gemeente}`
    : `[Bradico] Offerteaanvraag — ${naam} — ${gemeente}`;

  const rows = [
    ["Naam", naam],
    ["Telefoon", `<a href="tel:${telefoon}">${telefoon}</a>`],
    ["Gemeente", gemeente],
    type ? ["Type project", type] : null,
    bericht ? ["Bericht", bericht] : null,
  ]
    .filter(Boolean)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px 12px;font-weight:600;color:#334155;width:140px;vertical-align:top">${k}</td><td style="padding:8px 12px;color:#1e293b">${v}</td></tr>`
    )
    .join("");

  const html = `
    <div style="font-family:sans-serif;max-width:580px;margin:0 auto">
      <div style="background:linear-gradient(135deg,#0f2a4f,#1a3a6b);padding:24px 32px;border-radius:12px 12px 0 0">
        <h2 style="margin:0;color:#fff;font-size:18px">${isChatbot ? "🤖 Nieuwe chatbot lead" : "📋 Nieuwe offerteaanvraag"}</h2>
        <p style="margin:4px 0 0;color:rgba(255,255,255,0.65);font-size:13px">Via bv-bradico.be — ${new Date().toLocaleString("nl-BE")}</p>
      </div>
      <div style="border:1px solid #e2e8f0;border-top:none;border-radius:0 0 12px 12px;overflow:hidden">
        <table style="width:100%;border-collapse:collapse">${rows}</table>
      </div>
    </div>`;

  // Zodra RESEND_FROM_DOMAIN="bradico.be" ingesteld is in Vercel → stuurt vanuit noreply@bradico.be naar info@bradico.be
  // Zolang niet ingesteld → stuurt via onboarding@resend.dev enkel naar jordyg5533@gmail.com (Resend sandbox)
  const fromDomain = process.env.RESEND_FROM_DOMAIN;
  const jordyEmail = process.env.JORDY_EMAIL ?? "info@jgscale.be";
  const bramEmail = process.env.BRAM_EMAIL ?? "info@bradico.be";

  const from = fromDomain
    ? `Bradico Website <noreply@${fromDomain}>`
    : "Bradico Website <onboarding@resend.dev>";

  const to = fromDomain
    ? [bramEmail, jordyEmail]
    : [jordyEmail];

  const payload: Record<string, unknown> = { from, to, subject, html };

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    clearTimeout(timeout);

    const resBody = await res.text();
    if (!res.ok) return Response.json({ error: resBody }, { status: 500 });
    return Response.json({ ok: true });
  } catch (err) {
    clearTimeout(timeout);
    return Response.json({ error: String(err) }, { status: 500 });
  }
}
