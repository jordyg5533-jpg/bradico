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

export interface ServiceFaq { q: string; a: string; }
export interface ServiceData {
  metaTitle: string;
  metaDesc: string;
  canonical: string;
  h1: string;
  tagline: string;
  intro: string;
  body: string;
  img: string;
  imgAlt: string;
  badges: string[];
  steps: { nr: string; title: string; desc: string }[];
  why: { t: string; d: string }[];
  faq: ServiceFaq[];
}

const cityLinks = [
  { l: "Bedrijfshal Hasselt", h: "/bedrijfshal-hasselt" },
  { l: "Bedrijfshal Genk", h: "/bedrijfshal-genk" },
  { l: "Bedrijfshal Antwerpen", h: "/bedrijfshal-antwerpen" },
  { l: "Bedrijfshal Sint-Truiden", h: "/bedrijfshal-sint-truiden" },
  { l: "Bedrijfshal Tongeren", h: "/bedrijfshal-tongeren" },
  { l: "Bedrijfshal Bilzen", h: "/bedrijfshal-bilzen" },
  { l: "Bedrijfshal Lommel", h: "/bedrijfshal-lommel" },
];

export const ServicePageTemplate = ({ service }: { service: ServiceData }) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.h1,
    "description": service.metaDesc,
    "provider": {
      "@type": "GeneralContractor",
      "name": "Bradico",
      "telephone": "+32472812952",
      "url": "https://www.bradico.be",
      "address": { "@type": "PostalAddress", "addressLocality": "Kinrooi", "addressCountry": "BE" }
    },
    "areaServed": "Limburg, België",
    "url": service.canonical,
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faq.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  };

  return (
    <>
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDesc} />
        <link rel="canonical" href={service.canonical} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero */}
        <section className="relative overflow-hidden pt-24 pb-16" aria-label={service.h1}>
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #070c18 0%, #0e1e35 60%, #152844 100%)" }} aria-hidden />
          <div className="container-x relative">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <motion.div className="text-white" variants={fadeUp} initial="hidden" animate="show">
                <div className="mb-4 flex flex-wrap gap-2">
                  {service.badges.map((b) => (
                    <span key={b} className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
                      <Check className="h-3 w-3 text-accent" />
                      {b}
                    </span>
                  ))}
                </div>
                <h1 className="text-3xl font-black leading-tight text-white md:text-4xl lg:text-5xl">{service.h1}</h1>
                <p className="mt-4 text-base text-white/70 leading-relaxed">{service.tagline}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#contact" className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:brightness-110" style={{ background: "hsl(28 85% 52%)" }}>
                    Gratis offerte aanvragen
                  </a>
                  <a href="tel:+32472812952" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/8 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/15">
                    <Phone className="h-4 w-4" />
                    +32 472 81 29 52
                  </a>
                </div>
              </motion.div>
              <div className="hidden lg:block">
                <QuoteForm />
              </div>
            </div>
          </div>
        </section>

        {/* Foto + intro */}
        <section className="py-16 bg-soft">
          <div className="container-x">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
                <img src={service.img} alt={service.imgAlt} className="rounded-2xl shadow-card w-full object-cover aspect-[4/3]" loading="lazy" />
              </motion.div>
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport} transition={{ delay: 0.1 }}>
                <h2 className="text-2xl font-black text-foreground md:text-3xl">{service.h1}</h2>
                <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: service.intro }} />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Body tekst */}
        <section className="py-16">
          <div className="container-x max-w-4xl">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
              <div className="prose prose-gray max-w-none text-muted-foreground leading-relaxed space-y-4" dangerouslySetInnerHTML={{ __html: service.body }} />
            </motion.div>
          </div>
        </section>

        {/* Stappen */}
        <section className="py-16 bg-soft">
          <div className="container-x">
            <motion.div className="text-center mb-12" variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
              <h2 className="text-2xl font-black text-foreground md:text-3xl">Onze werkwijze</h2>
            </motion.div>
            <motion.div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewport}>
              {service.steps.map((s) => (
                <motion.div key={s.nr} variants={staggerItem} className="rounded-2xl border bg-card p-5 shadow-soft">
                  <div className="mb-3 text-2xl font-black" style={{ color: "hsl(28 85% 52% / 0.3)" }}>{s.nr}</div>
                  <h3 className="text-sm font-bold text-foreground">{s.title}</h3>
                  <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Waarom Bradico */}
        <section className="py-16">
          <div className="container-x">
            <motion.div className="text-center mb-12" variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
              <h2 className="text-2xl font-black text-foreground md:text-3xl">Waarom kiezen voor Bradico?</h2>
            </motion.div>
            <motion.div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewport}>
              {service.why.map((w) => (
                <motion.div key={w.t} variants={staggerItem} className="rounded-2xl border bg-card p-5 shadow-soft">
                  <div className="mb-2 h-1.5 w-10 rounded-full bg-accent" />
                  <h3 className="text-sm font-bold text-foreground">{w.t}</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{w.d}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-soft">
          <div className="container-x max-w-3xl">
            <motion.div className="text-center mb-10" variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
              <h2 className="text-2xl font-black text-foreground md:text-3xl">Veelgestelde vragen</h2>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
              <Accordion type="single" collapsible className="space-y-3">
                {service.faq.map((f, i) => (
                  <AccordionItem key={i} value={`f${i}`} className="rounded-xl border bg-card px-5 shadow-soft">
                    <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:no-underline py-4">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* Steden links */}
        <section className="py-12">
          <div className="container-x">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
              <h2 className="mb-6 text-lg font-bold text-foreground">Werkgebied — steden</h2>
              <div className="flex flex-wrap gap-2">
                {cityLinks.map((c) => (
                  <a key={c.h} href={c.h} className="inline-flex items-center gap-1 rounded-lg border bg-card px-3 py-1.5 text-sm font-medium text-foreground hover:border-accent hover:text-accent transition-colors">
                    <ChevronRight className="h-3.5 w-3.5" /> {c.l}
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
              <h2 className="text-2xl font-black text-foreground">Offerte aanvragen</h2>
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
