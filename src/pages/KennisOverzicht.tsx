import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import { OfferteModal } from "@/components/OfferteModal";

const artikelen = [
  {
    title: "Wat kost een bedrijfshal bouwen?",
    desc: "Welke factoren bepalen de prijs van een bedrijfshal? Van oppervlakte en constructietype tot fundering en afwerking. Inclusief hoe u een vaste prijs aanvraagt.",
    href: "/kennis/wat-kost-een-bedrijfshal-bouwen",
  },
  {
    title: "Industriele loods bouwen: alles wat u moet weten",
    desc: "Welke types industriele loodsen bestaan er? Wat zijn de vergunningsvereisten en hoe verloopt het bouwproces stap voor stap?",
    href: "/kennis/industriele-loods-bouwen",
  },
  {
    title: "Staalbouw vs. betonbouw: wanneer kiest u wat?",
    desc: "Een eerlijke vergelijking tussen staalskeletbouw en traditionele betonbouw voor industriele toepassingen. Snelheid, prijs, flexibiliteit en duurzaamheid.",
    href: "/kennis/staalbouw-vs-betonbouw",
  },
  {
    title: "Prijs industriebouw 2026: wat bepaalt de kostprijs?",
    desc: "Wat bepaalt de prijs van een industrieel gebouw? Factoren zoals type constructie, isolatiegraad, fundering en locatie uitgelegd.",
    href: "/kennis/prijs-industriebouw",
  },
  {
    title: "Stalen gevelbeplating: types en toepassingen",
    desc: "Sandwichpanelen, trapeziumplaat of cassettegevel? Vergelijking van de drie meestgebruikte types stalen gevelbeplating voor industriele gebouwen.",
    href: "/kennis/stalen-gevelbeplating",
  },
  {
    title: "Staal skeletbouw: hoe werkt het?",
    desc: "Hoe werkt een staalskelet als draagstructuur voor een bedrijfshal? Alles over kolommen, spanten, overspanning en de voordelen van staalskeletbouw.",
    href: "/kennis/staal-skeletbouw",
  },
  {
    title: "Omgevingsvergunning bedrijfshal: complete gids",
    desc: "Wanneer heeft u een omgevingsvergunning nodig voor een bedrijfshal? Procedure, doorlooptijd en wat Bradico voor u regelt.",
    href: "/kennis/omgevingsvergunning-bedrijfshal",
  },
  {
    title: "Loods bouwen of huren: wat is voordeliger?",
    desc: "Beter een loods bouwen of huren voor uw bedrijf? Een eerlijke vergelijking van voor- en nadelen, met aandacht voor de Limburgse markt.",
    href: "/kennis/loods-bouwen-of-huren",
  },
  {
    title: "Kosten sandwichpanelen per m² - complete gids 2026",
    desc: "Wat kosten sandwichpanelen per m² inclusief plaatsing? PIR, MW en EPS vergeleken. Realistische prijsranges voor wand- en dakpanelen plus de factoren die de prijs bepalen.",
    href: "/kennis/kosten-sandwichpanelen",
  },
  {
    title: "Energie-efficiënte bedrijfshal bouwen: isolatie, ventilatie en subsidies",
    desc: "EPB-normen, isolatiewaarden, verluchting en verwarmingssystemen voor industriële gebouwen in Vlaanderen. Met overzicht van VLAIO-subsidies en netbeheerderpremies 2026.",
    href: "/kennis/energie-efficiente-bedrijfshal",
  },
  {
    title: "Onderhoud van staalconstructies: tips, kosten en intervallen",
    desc: "Hoe houdt u een staalconstructie in topconditie? Inspectieschema, corrosiebestrijding, dakonderhoud en de ROI van preventief versus curatief onderhoud.",
    href: "/kennis/staalconstructie-onderhoud",
  },
  {
    title: "Industriebouw in Nederlands Limburg: werken met een Belgische aannemer",
    desc: "Bradico vanuit Kinrooi actief in Roermond, Venlo, Weert en Sittard. Alles over vergunningen, BTW-verlegd, werkgebied en voordelen van grensoverschrijdende samenwerking.",
    href: "/kennis/industriebouw-nederland",
  },
  {
    title: "Welke afmetingen voor uw bedrijfshal? Maatvoering en vrije hoogte",
    desc: "Vrije hoogte voor heftrucks en kranen, overspanning zonder tussenkolommen, optimale breedte-diepte verhoudingen en hoe u uitbreidingsmogelijkheden inbouwt van bij het ontwerp.",
    href: "/kennis/bedrijfshal-afmetingen",
  },
  {
    title: "Gevelrenovatie industrieel gebouw: wanneer, hoe en wat kost het?",
    desc: "Overkapseling of volledige vervanging? Subsidies via VLAIO en Fluvius, EPB-verplichting en wat te doen bij asbest in de bestaande gevelbeplating.",
    href: "/kennis/gevelrenovatie-industrieel-gids",
  },
];

const KennisOverzicht = () => (
  <>
    <Helmet>
      <title>Kennis & Inspiratie | Bradico</title>
      <meta name="description" content="Praktische artikelen over industriebouw, staalconstructies en bedrijfshallen in Limburg." />
      <link rel="canonical" href="https://www.bv-bradico.be/kennis" />
    </Helmet>
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="py-16 bg-dark text-white">
          <div className="container-x max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Kennisbank</span>
            <h1 className="mt-3 text-3xl font-black md:text-4xl">Kennis & Inspiratie</h1>
            <p className="mt-4 max-w-2xl text-white/70 leading-relaxed">
              Praktische artikelen over industriebouw, staalconstructies en bedrijfshallen in Limburg. Van vergunningen tot constructietypes - alles wat u moet weten voor uw industriebouwproject.
            </p>
          </div>
        </section>

        <section className="py-16 bg-soft">
          <div className="container-x max-w-4xl">
            <div className="grid gap-6 sm:grid-cols-2">
              {artikelen.map((artikel) => (
                <a
                  key={artikel.href}
                  href={artikel.href}
                  className="group rounded-2xl border bg-card p-6 shadow-soft hover:-translate-y-1 hover:shadow-card transition-all duration-300"
                >
                  <div className="mb-3 h-1 w-8 rounded-full bg-accent" />
                  <h2 className="text-base font-bold text-foreground group-hover:text-accent transition-colors">
                    {artikel.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {artikel.desc}
                  </p>
                  <div className="mt-4 text-sm font-semibold text-accent">
                    Lees artikel &rarr;
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-12 rounded-2xl bg-dark text-white p-8 text-center">
              <h2 className="text-xl font-black mb-3">Klaar om uw project te starten?</h2>
              <p className="text-white/70 mb-6 max-w-xl mx-auto">
                Elke situatie is anders. Bradico komt gratis ter plaatse en bezorgt u binnen 48 uur een vaste prijs voor uw industriebouwproject.
              </p>
              <a
                href="/offerte-industriebouw"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition-all hover:brightness-110"
                style={{ background: "hsl(214 82% 56%)" }}
              >
                Vraag een vrijblijvende offerte aan
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileBottomBar />
      <OfferteModal />
    </div>
  </>
);

export default KennisOverzicht;
