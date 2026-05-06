import { Helmet } from "react-helmet-async";
import { Check, Phone, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ChatBot } from "./ChatBot";
import { MobileBottomBar } from "./MobileBottomBar";
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

const diensten = [
  { t: "Staalconstructies", h: "/staalconstructies-limburg", img: "/projects/bhal.jpeg" },
  { t: "Bedrijfshallen", h: "/bedrijfshallen-bouwen", img: "/projects/bedrijfshal-na.jpg" },
  { t: "Loodsen", h: "/loodsen-magazijnen", img: "/projects/loods-na.jpg" },
  { t: "Sandwichpanelen", h: "/sandwichpanelen", img: "/projects/gvl5.jpeg" },
  { t: "Gevelrenovatie", h: "/gevelrenovatie-industrieel", img: "/projects/gevelrenovatie-na.jpg" },
];

export const CityPageTemplate = ({ city }: { city: CityData }) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "GeneralContractor"],
    "name": "Bradico",
    "description": city.metaDesc,
    "url": "https://www.bradico.be",
    "telephone": "+32472812952",
    "email": "info@bradico.be",
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

  return (
    <>
      <Helmet>
        <title>{city.metaTitle}</title>
        <meta name="description" content={city.metaDesc} />
        <link rel="canonical" href={city.canonical} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero */}
        <section className="relative overflow-hidden pt-24 pb-16" aria-label={`Bedrijfshal bouwen in ${city.stad}`}>
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #070c18 0%, #0e1e35 60%, #152844 100%)" }} aria-hidden />
          <div className="container-x relative">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <motion.div className="text-white" variants={fadeUp} initial="hidden" animate="show">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Bradico · {city.stad}
                </div>
                <h1 className="text-3xl font-black leading-tight text-white md:text-4xl lg:text-5xl">
                  Bedrijfshal of staalconstructie in {city.stad}?
                </h1>
                <p className="mt-4 text-base text-white/70 leading-relaxed">{city.intro}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#contact" className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:brightness-110" style={{ background: "hsl(28 85% 52%)" }}>
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
              <h2 className="text-2xl font-black text-foreground md:text-3xl">Bedrijfshallen in {city.stad} — wat Bradico voor u doet</h2>
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
                    <img src={d.img} alt={`${d.t} in ${city.stad} — Bradico`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
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
              <p className="mt-3 text-muted-foreground">Reactie binnen 48 uur — geen verplichtingen.</p>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
              <QuoteForm />
            </motion.div>
          </div>
        </section>

        <Footer />
        <ChatBot />
        <MobileBottomBar />
      </div>
    </>
  );
};
