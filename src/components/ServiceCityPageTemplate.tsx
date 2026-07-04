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

export interface ServiceCityFaq { q: string; a: string; }
export interface ServiceCityData {
  metaTitle: string;
  metaDesc: string;
  canonical: string;
  h1: string;
  service: { name: string; href: string };
  city: { name: string; href: string };
  tagline: string;
  intro: string; // HTML
  body: string;  // HTML met h2/h3/p/ul
  why: { t: string; d: string }[];
  faq: ServiceCityFaq[];
  relatedServices: { name: string; href: string }[];
  relatedCities: { name: string; href: string }[];
}

export const ServiceCityPageTemplate = ({ data }: { data: ServiceCityData }) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": data.h1,
    "description": data.metaDesc,
    "provider": {
      "@type": "GeneralContractor",
      "name": "Bradico",
      "telephone": "+32472812952",
      "url": "https://www.bv-bradico.be",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Venlosesteenweg 418",
        "addressLocality": "Kinrooi",
        "postalCode": "3640",
        "addressCountry": "BE",
      },
    },
    "areaServed": data.city.name,
    "url": data.canonical,
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faq.map((f) => ({
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
      { "@type": "ListItem", "position": 2, "name": data.service.name, "item": `https://www.bv-bradico.be${data.service.href}` },
      { "@type": "ListItem", "position": 3, "name": data.h1, "item": data.canonical },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{data.metaTitle}</title>
        <meta name="description" content={data.metaDesc} />
        <link rel="canonical" href={data.canonical} />
        <meta property="og:title" content={data.metaTitle} />
        <meta property="og:description" content={data.metaDesc} />
        <meta property="og:url" content={data.canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nl_BE" />
        <meta property="og:site_name" content="Bradico" />
        <meta property="og:image" content="https://www.bv-bradico.be/projects/bhal.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data.metaTitle} />
        <meta name="twitter:image" content="https://www.bv-bradico.be/projects/bhal.jpeg" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero */}
        <section className="relative overflow-hidden pt-24 pb-16" aria-label={data.h1}>
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(135deg, #070c18 0%, #0e1e35 60%, #152844 100%)" }}
            aria-hidden
          />
          <div className="container-x relative">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <motion.div className="text-white" variants={fadeUp} initial="hidden" animate="show">
                {/* Breadcrumb */}
                <nav aria-label="Breadcrumb" className="mb-4">
                  <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/50">
                    <li><a href="/" className="hover:text-white/80 transition-colors">Home</a></li>
                    <li><ChevronRight className="h-3 w-3" /></li>
                    <li><a href={data.service.href} className="hover:text-white/80 transition-colors">{data.service.name}</a></li>
                    <li><ChevronRight className="h-3 w-3" /></li>
                    <li className="text-white/70">{data.city.name}</li>
                  </ol>
                </nav>

                <h1 className="text-3xl font-black leading-tight text-white md:text-4xl lg:text-5xl">{data.h1}</h1>
                <p className="mt-4 text-base text-white/70 leading-relaxed">{data.tagline}</p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:brightness-110"
                    style={{ background: "hsl(214 82% 56%)" }}
                  >
                    Gratis offerte aanvragen
                  </a>
                  <a
                    href="tel:+32472812952"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/8 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/15"
                  >
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

        {/* Intro */}
        <section className="py-16 bg-soft">
          <div className="container-x max-w-4xl">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
              <div
                className="space-y-4 text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ __html: data.intro }}
              />
            </motion.div>
          </div>
        </section>

        {/* Body */}
        <section className="py-16">
          <div className="container-x max-w-4xl">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
              <div
                className="prose prose-gray max-w-none text-muted-foreground leading-relaxed space-y-4"
                dangerouslySetInnerHTML={{ __html: data.body }}
              />
            </motion.div>
          </div>
        </section>

        {/* Waarom Bradico */}
        <section className="py-16 bg-soft">
          <div className="container-x">
            <motion.div
              className="text-center mb-12"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <h2 className="text-2xl font-black text-foreground md:text-3xl">Waarom kiezen voor Bradico in {data.city.name}?</h2>
            </motion.div>
            <motion.div
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              {data.why.map((w) => (
                <motion.div key={w.t} variants={staggerItem} className="rounded-2xl border bg-card p-5 shadow-soft">
                  <div className="mb-2 h-1.5 w-10 rounded-full bg-accent" />
                  <h3 className="text-sm font-bold text-foreground">{w.t}</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{w.d}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Gerelateerde pagina's */}
        <section className="py-12">
          <div className="container-x">
            <motion.div
              className="grid gap-8 sm:grid-cols-2"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              {data.relatedServices.length > 0 && (
                <motion.div variants={staggerItem}>
                  <h2 className="mb-4 text-lg font-bold text-foreground">
                    Andere diensten in {data.city.name}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {data.relatedServices.map((s) => (
                      <a
                        key={s.href}
                        href={s.href}
                        className="inline-flex items-center gap-1 rounded-lg border bg-card px-3 py-1.5 text-sm font-medium text-foreground hover:border-accent hover:text-accent transition-colors"
                      >
                        <ChevronRight className="h-3.5 w-3.5" /> {s.name}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
              {data.relatedCities.length > 0 && (
                <motion.div variants={staggerItem}>
                  <h2 className="mb-4 text-lg font-bold text-foreground">
                    {data.service.name} in andere steden
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {data.relatedCities.map((c) => (
                      <a
                        key={c.href}
                        href={c.href}
                        className="inline-flex items-center gap-1 rounded-lg border bg-card px-3 py-1.5 text-sm font-medium text-foreground hover:border-accent hover:text-accent transition-colors"
                      >
                        <ChevronRight className="h-3.5 w-3.5" /> {c.name}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-soft">
          <div className="container-x max-w-3xl">
            <motion.div
              className="text-center mb-10"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <h2 className="text-2xl font-black text-foreground md:text-3xl">Veelgestelde vragen</h2>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
              <Accordion type="single" collapsible className="space-y-3">
                {data.faq.map((f, i) => (
                  <AccordionItem key={i} value={`f${i}`} className="rounded-xl border bg-card px-5 shadow-soft">
                    <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:no-underline py-4">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16">
          <div className="container-x max-w-xl">
            <motion.div
              className="text-center mb-10"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <h2 className="text-2xl font-black text-foreground">Offerte aanvragen in {data.city.name}</h2>
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
