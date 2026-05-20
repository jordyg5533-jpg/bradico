import { Helmet } from "react-helmet-async";
import { Check, Phone, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ChatBot } from "./ChatBot";
import { MobileBottomBar } from "./MobileBottomBar";
import { OfferteModal } from "./OfferteModal";
import { QuoteForm } from "./QuoteForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { fadeUp, staggerContainer, staggerItem, viewport } from "@/lib/animations";

export interface CityFaq { q: string; a: string; }
export interface CityData {
  stad: string;
  metaTitle: string;
  metaDesc: string;
  canonical: string;
  intro: string;
  body: string;
  deelgemeenten: string[];
  buursteden: { naam: string; href: string }[];
  faq: CityFaq[];
}

const dienstenDefault = [
  { t: "Staalconstructies", h: "/staalconstructies-limburg", img: "/projects/bhal.jpeg" },
  { t: "Bedrijfshallen", h: "/bedrijfshallen-bouwen", img: "/projects/bedrijfshal-na.jpg" },
  { t: "Loodsen", h: "/loodsen-magazijnen", img: "/projects/loods-na.jpg" },
  { t: "Sandwichpanelen", h: "/sandwichpanelen", img: "/projects/gvl5.jpeg" },
  { t: "Gevelrenovatie", h: "/gevelrenovatie-industrieel", img: "/projects/gevelrenovatie-na.jpg" },
];

const dienstenPerStad: Record<string, { t: string; h: string; img: string }[]> = {
  "Hasselt": [
    { t: "Staalconstructies", h: "/staalconstructies-hasselt", img: "/projects/bhal.jpeg" },
    { t: "Bedrijfshallen", h: "/bedrijfshallen-bouwen", img: "/projects/bedrijfshal-na.jpg" },
    { t: "Loodsen", h: "/loodsen-hasselt", img: "/projects/loods-na.jpg" },
    { t: "Sandwichpanelen", h: "/sandwichpanelen-hasselt", img: "/projects/gvl5.jpeg" },
    { t: "Gevelrenovatie", h: "/gevelrenovatie-hasselt", img: "/projects/gevelrenovatie-na.jpg" },
  ],
  "Genk": [
    { t: "Staalconstructies", h: "/staalconstructies-genk", img: "/projects/bhal.jpeg" },
    { t: "Bedrijfshallen", h: "/bedrijfshallen-bouwen", img: "/projects/bedrijfshal-na.jpg" },
    { t: "Loodsen", h: "/loodsen-genk", img: "/projects/loods-na.jpg" },
    { t: "Sandwichpanelen", h: "/sandwichpanelen-genk", img: "/projects/gvl5.jpeg" },
    { t: "Gevelrenovatie", h: "/gevelrenovatie-genk", img: "/projects/gevelrenovatie-na.jpg" },
  ],
  "Antwerpen": [
    { t: "Staalconstructies", h: "/staalconstructies-antwerpen", img: "/projects/bhal.jpeg" },
    { t: "Bedrijfshallen", h: "/bedrijfshallen-bouwen", img: "/projects/bedrijfshal-na.jpg" },
    { t: "Loodsen", h: "/loodsen-antwerpen", img: "/projects/loods-na.jpg" },
    { t: "Sandwichpanelen", h: "/sandwichpanelen-antwerpen", img: "/projects/gvl5.jpeg" },
    { t: "Gevelrenovatie", h: "/gevelrenovatie-antwerpen", img: "/projects/gevelrenovatie-na.jpg" },
  ],
  "Sint-Truiden": [
    { t: "Staalconstructies", h: "/staalconstructies-sint-truiden", img: "/projects/bhal.jpeg" },
    { t: "Bedrijfshallen", h: "/bedrijfshallen-bouwen", img: "/projects/bedrijfshal-na.jpg" },
    { t: "Loodsen", h: "/loodsen-sint-truiden", img: "/projects/loods-na.jpg" },
    { t: "Sandwichpanelen", h: "/sandwichpanelen", img: "/projects/gvl5.jpeg" },
    { t: "Gevelrenovatie", h: "/gevelrenovatie-industrieel", img: "/projects/gevelrenovatie-na.jpg" },
  ],
  "Tongeren": [
    { t: "Staalconstructies", h: "/staalconstructies-tongeren", img: "/projects/bhal.jpeg" },
    { t: "Bedrijfshallen", h: "/bedrijfshallen-bouwen", img: "/projects/bedrijfshal-na.jpg" },
    { t: "Loodsen", h: "/loodsen-magazijnen", img: "/projects/loods-na.jpg" },
    { t: "Sandwichpanelen", h: "/sandwichpanelen", img: "/projects/gvl5.jpeg" },
    { t: "Gevelrenovatie", h: "/gevelrenovatie-industrieel", img: "/projects/gevelrenovatie-na.jpg" },
  ],
  "Lommel": [
    { t: "Staalconstructies", h: "/staalconstructies-lommel", img: "/projects/bhal.jpeg" },
    { t: "Bedrijfshallen", h: "/bedrijfshallen-bouwen", img: "/projects/bedrijfshal-na.jpg" },
    { t: "Loodsen", h: "/loodsen-lommel", img: "/projects/loods-na.jpg" },
    { t: "Sandwichpanelen", h: "/sandwichpanelen", img: "/projects/gvl5.jpeg" },
    { t: "Gevelrenovatie", h: "/gevelrenovatie-industrieel", img: "/projects/gevelrenovatie-na.jpg" },
  ],
  "Maasmechelen": [
    { t: "Staalconstructies", h: "/staalconstructies-maasmechelen", img: "/projects/bhal.jpeg" },
    { t: "Bedrijfshallen", h: "/bedrijfshallen-bouwen", img: "/projects/bedrijfshal-na.jpg" },
    { t: "Loodsen", h: "/loodsen-magazijnen", img: "/projects/loods-na.jpg" },
    { t: "Sandwichpanelen", h: "/sandwichpanelen", img: "/projects/gvl5.jpeg" },
    { t: "Gevelrenovatie", h: "/gevelrenovatie-industrieel", img: "/projects/gevelrenovatie-na.jpg" },
  ],
};

export const CityPageTemplate = ({ city }: { city: CityData }) => {
  const diensten = dienstenPerStad[city.stad] ?? dienstenDefault;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "GeneralContractor"],
    "name": "Bradico",
    "description": city.metaDesc,
    "url": "https://www.bv-bradico.be",
    "telephone": "+32472812952",
    "email": "info@bradico.be",
    "image": "https://www.bv-bradico.be/projects/bedrijfshal-na.jpg",
    "sameAs": ["https://www.google.com/maps?cid=6730394896287073580"],
    "address": { "@type": "PostalAddress", "streetAddress": "Venlosesteenweg 418", "addressLocality": "Kinrooi", "postalCode": "3640", "addressCountry": "BE" },
    "areaServed": city.stad,
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": city.faq.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.bv-bradico.be/" },
      { "@type": "ListItem", "position": 2, "name": `Bedrijfshal ${city.stad}`, "item": city.canonical },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{city.metaTitle}</title>
        <meta name="description" content={city.metaDesc} />
        <link rel="canonical" href={city.canonical} />
        <meta property="og:title" content={city.metaTitle} />
        <meta property="og:description" content={city.metaDesc} />
        <meta property="og:url" content={city.canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nl_BE" />
        <meta property="og:site_name" content="Bradico" />
        <meta property="og:image" content="https://www.bv-bradico.be/projects/bedrijfshal-na.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Bradico - industriebouw en staalconstructies Limburg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={city.metaTitle} />
        <meta name="twitter:description" content={city.metaDesc} />
        <meta name="twitter:image" content="https://www.bv-bradico.be/projects/bedrijfshal-na.jpg" />
        <meta name="twitter:image:alt" content="Bradico - industriebouw en staalconstructies Limburg" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero */}
        <section className="relative overflow-hidden pt-24 pb-16" aria-label={`Bedrijfshal bouwen in ${city.stad}`}>
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #070c18 0%, #0e1e35 60%, #152844 100%)" }} aria-hidden />
          <div className="container-x relative">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <motion.div className="text-white" variants={fadeUp} initial="hidden" animate="show">
                <nav aria-label="Breadcrumb" className="mb-4">
                  <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/50">
                    <li><a href="/" className="hover:text-white/80 transition-colors">Home</a></li>
                    <li><ChevronRight className="h-3 w-3" /></li>
                    <li className="text-white/70">Bedrijfshal {city.stad}</li>
                  </ol>
                </nav>
                <h1 className="text-3xl font-black leading-tight text-white md:text-4xl lg:text-5xl">
                  Bedrijfshal of staalconstructie in {city.stad}?
                </h1>
                <p className="mt-4 text-base text-white/70 leading-relaxed">{city.intro}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#contact" className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:brightness-110" style={{ background: "hsl(214 82% 56%)" }}>
                    Gratis offerte aanvragen
                  </a>
                  <a href="tel:+32472812952" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/8 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/15">
                    <Phone className="h-4 w-4" />
                    +32 472 81 29 52
                  </a>
                </div>
                {city.deelgemeenten.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {city.deelgemeenten.map((d) => (
                      <span key={d} className="flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70">
                        <Check className="h-3 w-3 text-accent" /> {d}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
              <div className="hidden lg:block">
                <QuoteForm />
              </div>
            </div>
          </div>
        </section>

        {/* Lokale context */}
        <section className="py-16 bg-soft">
          <div className="container-x max-w-4xl">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
              <h2 className="text-2xl font-black text-foreground md:text-3xl">Bedrijfshallen in {city.stad} - wat Bradico voor u doet</h2>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: city.body }} />
            </motion.div>
          </div>
        </section>

        {/* Diensten */}
        <section className="py-16">
          <div className="container-x">
            <motion.div className="text-center mb-10" variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
              <h2 className="text-2xl font-black text-foreground md:text-3xl">Onze diensten in {city.stad}</h2>
            </motion.div>
            <motion.div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewport}>
              {diensten.map((d) => (
                <motion.a key={d.h} href={d.h} variants={staggerItem} className="group rounded-2xl overflow-hidden border bg-card shadow-soft hover:-translate-y-1 hover:shadow-card transition-all duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img src={d.img} alt={`${d.t} in ${city.stad} - Bradico`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="p-3 flex items-center justify-between">
                    <span className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">{d.t}</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-accent" />
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-soft">
          <div className="container-x max-w-3xl">
            <motion.div className="text-center mb-10" variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
              <h2 className="text-2xl font-black text-foreground md:text-3xl">Vragen over bouwen in {city.stad}</h2>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
              <Accordion type="single" collapsible className="space-y-3">
                {city.faq.map((f, i) => (
                  <AccordionItem key={i} value={`f${i}`} className="rounded-xl border bg-card px-5 shadow-soft">
                    <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:no-underline py-4">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* Buursteden */}
        <section className="py-12">
          <div className="container-x">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
              <h2 className="mb-5 text-lg font-bold text-foreground">Ook actief in buurgemeenten</h2>
              <div className="flex flex-wrap gap-2">
                {city.buursteden.map((b) => (
                  <a key={b.href} href={b.href} className="inline-flex items-center gap-1 rounded-lg border bg-card px-3 py-1.5 text-sm font-medium text-foreground hover:border-accent hover:text-accent transition-colors">
                    <ChevronRight className="h-3.5 w-3.5" /> Bedrijfshal {b.naam}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 bg-soft">
          <div className="container-x max-w-xl">
            <motion.div className="text-center mb-10" variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
              <h2 className="text-2xl font-black text-foreground">Offerte aanvragen in {city.stad}</h2>
              <p className="mt-3 text-muted-foreground">Reactie binnen 48 uur - geen verplichtingen.</p>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
              <QuoteForm />
            </motion.div>
          </div>
        </section>

        <Footer />
        <ChatBot />
        <MobileBottomBar />
        <OfferteModal />
      </div>
    </>
  );
};
