import { Helmet } from "react-helmet-async";
import { Check, Phone, MapPin, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChatBot } from "@/components/ChatBot";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import { OfferteModal } from "@/components/OfferteModal";
import { QuoteForm } from "@/components/QuoteForm";
import { fadeUp, staggerContainer, staggerItem, viewport } from "@/lib/animations";

const expertise = [
  { t: "Staalconstructies", d: "Ontwerp, productie en montage van industriële staalconstructies voor hallen tot 40 m breed." },
  { t: "Bedrijfshallen", d: "Sleutelklare bedrijfshallen op maat voor productie, opslag en logistiek in Limburg en omstreken." },
  { t: "Loodsen & magazijnen", d: "Robuuste landbouw- en opslagloodsen, energiezuinig en snel gerealiseerd." },
  { t: "Sandwichpanelen", d: "Plaatsing en renovatie van isolerende sandwichpanelen voor wanden en daken." },
  { t: "Gevelrenovatie", d: "Industriële gevelrenovatie: nieuwe gevelbekleding, isolatie en modernisering van bestaande panden." },
];

const values = [
  { t: "Vaste prijs", d: "Na terreinbezoek ontvangt u een vaste offerte. Geen meerwerken, geen factuurverrassingen achteraf." },
  { t: "één aanspreekpunt", d: "Van vergunning tot oplevering werkt u met hetzelfde team. Geen miscommunicatie tussen onderaannemers." },
  { t: "Lokale kennis", d: "Gevestigd in Kinrooi, actief in heel Limburg. We kennen de lokale vergunningsprocedures en terreinomstandigheden." },
  { t: "Snelle uitvoering", d: "Dankzij eigen materieel en vaste ploegen realiseren we projecten snel en zonder onnodige vertragingen." },
];

const steden = [
  { naam: "Hasselt", href: "/bedrijfshal-hasselt" },
  { naam: "Genk", href: "/bedrijfshal-genk" },
  { naam: "Antwerpen", href: "/bedrijfshal-antwerpen" },
  { naam: "Sint-Truiden", href: "/bedrijfshal-sint-truiden" },
  { naam: "Tongeren", href: "/bedrijfshal-tongeren" },
  { naam: "Bilzen", href: "/bedrijfshal-bilzen" },
  { naam: "Lommel", href: "/bedrijfshal-lommel" },
  { naam: "Kinrooi", href: "/bedrijfshal-kinrooi" },
  { naam: "Maaseik", href: "/bedrijfshal-maaseik" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "Over Bradico",
  "url": "https://www.bv-bradico.be/over-bradico",
  "description": "Bradico is een erkend aannemer voor industriebouw, staalconstructies en bedrijfshallen in Limburg. Gevestigd in Kinrooi, actief in heel België.",
  "mainEntity": {
    "@type": "GeneralContractor",
    "name": "Bradico",
    "url": "https://www.bv-bradico.be",
    "telephone": "+32472812952",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Venlosesteenweg 418",
      "addressLocality": "Kinrooi",
      "postalCode": "3640",
      "addressCountry": "BE",
    },
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.bv-bradico.be/" },
    { "@type": "ListItem", "position": 2, "name": "Over Bradico", "item": "https://www.bv-bradico.be/over-bradico" },
  ],
};

const OverBradico = () => (
  <>
    <Helmet>
      <title>Over Bradico | Specialist in Industriebouw & Staalconstructies Limburg</title>
      <meta name="description" content="Bradico is uw erkend aannemer voor industriebouw, bedrijfshallen en staalconstructies in Limburg. Gevestigd in Kinrooi - 15+ jaar ervaring, vaste prijs, sleutelklaar." />
      <link rel="canonical" href="https://www.bv-bradico.be/over-bradico" />
      <meta property="og:title" content="Over Bradico | Specialist in Industriebouw & Staalconstructies Limburg" />
      <meta property="og:description" content="Bradico is uw erkend aannemer voor industriebouw, bedrijfshallen en staalconstructies in Limburg. Gevestigd in Kinrooi - 15+ jaar ervaring, vaste prijs, sleutelklaar." />
      <meta property="og:url" content="https://www.bv-bradico.be/over-bradico" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="nl_BE" />
      <meta property="og:site_name" content="Bradico" />
      <meta property="og:image" content="https://www.bv-bradico.be/projects/bedrijfshal-na.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Bradico - erkend aannemer industriebouw Limburg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Over Bradico | Industriebouw & Staalconstructies Limburg" />
      <meta name="twitter:description" content="Bradico is uw erkend aannemer voor industriebouw en staalconstructies in Limburg. 15+ jaar ervaring, vaste prijs." />
      <meta name="twitter:image" content="https://www.bv-bradico.be/projects/bedrijfshal-na.jpg" />
      <meta name="twitter:image:alt" content="Bradico - erkend aannemer industriebouw Limburg" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
    </Helmet>

    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-16" aria-label="Over Bradico">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #070c18 0%, #0e1e35 60%, #152844 100%)" }} aria-hidden />
        <div className="container-x relative">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div className="text-white" variants={fadeUp} initial="hidden" animate="show">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Bradico - Kinrooi, Limburg
              </div>
              <h1 className="text-3xl font-black leading-tight text-white md:text-4xl lg:text-5xl">
                Over Bradico - erkend aannemer voor industriebouw in Limburg
              </h1>
              <p className="mt-4 text-base text-white/70 leading-relaxed">
                Bradico bouwt bedrijfshallen, staalconstructies, loodsen en industriële gebouwen in Limburg en omstreken. Gevestigd in Kinrooi, actief in heel België en Nederlands Limburg.
              </p>
              <div className="mt-6 flex flex-col gap-2 text-sm text-white/70">
                <span className="flex items-center gap-2"><Check className="h-4 w-4 text-accent" />15+ jaar ervaring in industriebouw</span>
                <span className="flex items-center gap-2"><Check className="h-4 w-4 text-accent" />200+ gerealiseerde projecten</span>
                <span className="flex items-center gap-2"><Check className="h-4 w-4 text-accent" />Erkend aannemer, geregistreerd in België</span>
                <span className="flex items-center gap-2"><Check className="h-4 w-4 text-accent" />Vaste prijs na terreinbezoek - nooit meerwerken</span>
              </div>
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
            <div className="hidden lg:block">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Wie zijn we */}
      <section className="py-16 bg-soft">
        <div className="container-x max-w-4xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
            <h2 className="text-2xl font-black text-foreground md:text-3xl">Wie is Bradico?</h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>Bradico is een erkend aannemer gespecialiseerd in industriebouw, staalconstructies en bedrijfshallen. We zijn gevestigd in Kinrooi (Oost-Limburg) en actief in heel Belgisch en Nederlands Limburg, Antwerpen en Vlaams-Brabant.</p>
              <p>Met meer dan 15 jaar ervaring en meer dan 200 gerealiseerde projecten zijn we een vaste waarde in de Limburgse industriebouwmarkt. Onze klanten zijn kmo's, landbouwbedrijven, logistieke spelers en industriële ondernemers die nood hebben aan kwalitatieve, snel gebouwde en degelijk afgewerkte bedrijfsruimte.</p>
              <p>Wat Bradico onderscheidt: wij werken altijd met één vaste contactpersoon per project, altijd op vaste prijs na terreinbezoek, en altijd met eigen materieel en vaste ploegen. Dat maakt ons snel, betrouwbaar en transparant - van de eerste schets tot de sleutelklare oplevering.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-16">
        <div className="container-x">
          <motion.div className="text-center mb-12" variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
            <h2 className="text-2xl font-black text-foreground md:text-3xl">Onze expertise</h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Van staalconstructie tot gevelrenovatie - Bradico is uw totaalaannemer voor industriebouw.</p>
          </motion.div>
          <motion.div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewport}>
            {expertise.map((e) => (
              <motion.div key={e.t} variants={staggerItem} className="rounded-2xl border bg-card p-5 shadow-soft">
                <div className="mb-2 h-1.5 w-10 rounded-full bg-accent" />
                <h3 className="text-sm font-bold text-foreground">{e.t}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{e.d}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Aanpak */}
      <section className="py-16 bg-soft">
        <div className="container-x">
          <motion.div className="text-center mb-12" variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
            <h2 className="text-2xl font-black text-foreground md:text-3xl">Onze aanpak - vaste prijs, sleutelklaar</h2>
          </motion.div>
          <motion.div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewport}>
            {values.map((v) => (
              <motion.div key={v.t} variants={staggerItem} className="rounded-2xl border bg-card p-5 shadow-soft">
                <div className="mb-2 h-1.5 w-10 rounded-full bg-accent" />
                <h3 className="text-sm font-bold text-foreground">{v.t}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{v.d}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vestiging */}
      <section className="py-16">
        <div className="container-x max-w-4xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
            <h2 className="text-2xl font-black text-foreground md:text-3xl">Gevestigd in Kinrooi, actief in heel Limburg</h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>Bradico is gevestigd op de Venlosesteenweg 418 in Kinrooi (3640), centraal in Oost-Limburg aan de grens met Nederland. Vanuit Kinrooi zijn we snel ter plaatse in heel Belgisch Limburg, Antwerpen, Vlaams-Brabant en Nederlands Limburg (Roermond, Venlo, Weert).</p>
              <p>Onze lokale verankering is geen marketingverhaal - het is een concreet voordeel voor onze klanten. We kennen de lokale terreinomstandigheden, de vergunningsprocedures bij Limburgse gemeenten en de behoeften van ondernemers in de regio.</p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-accent shrink-0" />
              Venlosesteenweg 418, 3640 Kinrooi
            </div>
          </motion.div>
        </div>
      </section>

      {/* Steden */}
      <section className="py-12 bg-soft">
        <div className="container-x">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
            <h2 className="mb-5 text-lg font-bold text-foreground">Actief in deze steden</h2>
            <div className="flex flex-wrap gap-2">
              {steden.map((s) => (
                <a key={s.href} href={s.href} className="inline-flex items-center gap-1 rounded-lg border bg-card px-3 py-1.5 text-sm font-medium text-foreground hover:border-accent hover:text-accent transition-colors">
                  <ChevronRight className="h-3.5 w-3.5" /> Bedrijfshal {s.naam}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16">
        <div className="container-x max-w-xl">
          <motion.div className="text-center mb-10" variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
            <h2 className="text-2xl font-black text-foreground">Offerte aanvragen</h2>
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

export default OverBradico;
