import { Helmet } from "react-helmet-async";
import { Phone, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ChatBot } from "./ChatBot";
import { MobileBottomBar } from "./MobileBottomBar";
import { OfferteModal } from "./OfferteModal";
import { QuoteForm } from "./QuoteForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { fadeUp, viewport } from "@/lib/animations";

export interface KennisFaq { q: string; a: string; }
export interface KennisData {
  metaTitle: string;
  metaDesc: string;
  canonical: string;
  h1: string;
  intro: string;
  body: string;
  faq: KennisFaq[];
}

export const KennisPageTemplate = ({ kennis }: { kennis: KennisData }) => {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": kennis.faq.map((f) => ({
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
      { "@type": "ListItem", "position": 2, "name": "Kennisbank", "item": "https://www.bv-bradico.be/kennis" },
      { "@type": "ListItem", "position": 3, "name": kennis.h1, "item": kennis.canonical },
    ],
  };

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": kennis.h1,
    "description": kennis.metaDesc,
    "url": kennis.canonical,
    "datePublished": "2026-05-19",
    "dateModified": "2026-05-19",
    "author": { "@type": "Organization", "name": "Bradico", "url": "https://www.bv-bradico.be" },
    "publisher": { "@type": "Organization", "name": "Bradico", "url": "https://www.bv-bradico.be", "sameAs": ["https://www.google.com/maps?cid=6730394896287073580"], "logo": { "@type": "ImageObject", "url": "https://www.bv-bradico.be/logo.webp" } },
  };

  return (
    <>
      <Helmet>
        <title>{kennis.metaTitle}</title>
        <meta name="description" content={kennis.metaDesc} />
        <link rel="canonical" href={kennis.canonical} />
        <meta property="og:title" content={kennis.metaTitle} />
        <meta property="og:description" content={kennis.metaDesc} />
        <meta property="og:url" content={kennis.canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="nl_BE" />
        <meta property="og:site_name" content="Bradico" />
        <meta property="og:image" content="https://www.bv-bradico.be/projects/bedrijfshal-na.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Bradico - industriebouw en staalconstructies Limburg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={kennis.metaTitle} />
        <meta name="twitter:description" content={kennis.metaDesc} />
        <meta name="twitter:image" content="https://www.bv-bradico.be/projects/bedrijfshal-na.jpg" />
        <meta name="twitter:image:alt" content="Bradico - industriebouw en staalconstructies Limburg" />
        <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
        <script type="application/ld+json">{JSON.stringify(articleLd)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero */}
        <section className="relative overflow-hidden pt-24 pb-14" aria-label={kennis.h1}>
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #070c18 0%, #0e1e35 60%, #152844 100%)" }} aria-hidden />
          <div className="container-x relative max-w-4xl">
            <motion.div className="text-white" variants={fadeUp} initial="hidden" animate="show">
              <nav aria-label="Breadcrumb" className="mb-4">
                <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/50">
                  <li><a href="/" className="hover:text-white/80 transition-colors">Home</a></li>
                  <li><ChevronRight className="h-3 w-3" /></li>
                  <li><a href="/kennis" className="hover:text-white/80 transition-colors">Kennisbank</a></li>
                  <li><ChevronRight className="h-3 w-3" /></li>
                  <li className="text-white/70">{kennis.h1}</li>
                </ol>
              </nav>
              <h1 className="text-3xl font-black leading-tight text-white md:text-4xl lg:text-5xl">{kennis.h1}</h1>
              <p className="mt-4 text-base text-white/70 leading-relaxed max-w-2xl">{kennis.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:brightness-110" style={{ background: "hsl(214 82% 56%)" }}>
                  Gratis offerte aanvragen
                </a>
                <a href="tel:+32472812952" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/8 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/15">
                  <Phone className="h-4 w-4" />
                  +32 472 81 29 52
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Body */}
        <section className="py-16">
          <div className="container-x max-w-4xl">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
              <div
                className="prose prose-gray max-w-none leading-relaxed space-y-4 text-muted-foreground [&_h2]:text-xl [&_h2]:font-black [&_h2]:text-foreground [&_h2]:mt-8 [&_h2]:mb-3 [&_h3]:text-base [&_h3]:font-bold [&_h3]:text-foreground [&_h3]:mt-6 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_strong]:text-foreground [&_strong]:font-semibold"
                dangerouslySetInnerHTML={{ __html: kennis.body }}
              />
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
                {kennis.faq.map((f, i) => (
                  <AccordionItem key={i} value={`f${i}`} className="rounded-xl border bg-card px-5 shadow-soft">
                    <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:no-underline py-4">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16">
          <div className="container-x max-w-xl">
            <motion.div className="text-center mb-10" variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
              <h2 className="text-2xl font-black text-foreground">Offerte aanvragen bij Bradico</h2>
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
