import { ServicePageTemplate, ServiceData } from "@/components/ServicePageTemplate";

const service: ServiceData = {
  metaTitle: "Bedrijfshal Bouwen Limburg — vaste prijs, sleutelklaar | Bradico",
  metaDesc: "Bedrijfshal laten bouwen in Limburg? Bradico levert sleutelklaar op vaste prijs. Van ontwerp tot vergunning en oplevering. Offerte binnen 48 uur.",
  canonical: "https://www.bradico.be/bedrijfshallen-bouwen",
  h1: "Bedrijfshal bouwen in Limburg — van ontwerp tot oplevering",
  tagline: "Een nieuwe bedrijfshal laten bouwen? Bradico zorgt voor het volledige traject — van vergunning tot sleutelklare oplevering, altijd op vaste prijs.",
  img: "/projects/bedrijfshal-na.jpg",
  imgAlt: "Bedrijfshal bouwen Limburg — Bradico",
  badges: ["Sleutelklaar", "Vaste prijs", "Vergunning inbegrepen", "Offerte 48u"],
  intro: `<p>Een nieuwe bedrijfshal laten bouwen is een grote investering. U wilt zekerheid over de prijs, de planning en de kwaliteit. Bij Bradico krijgt u precies dat: een vaste prijs vanaf dag één, een heldere planning en één vast aanspreekpunt van begin tot einde.</p>
<p>Wij bouwen bedrijfshallen voor productie, opslag, handel, kantoor en combinaties daarvan. Elk project wordt volledig op maat uitgewerkt: uw activiteit bepaalt de indeling, de hoogte, de afmetingen en de afwerking.</p>`,
  body: `<h2>Waarom kiezen voor een stalen bedrijfshal?</h2>
<p>Stalen bedrijfshallen zijn de meest efficiënte oplossing voor industriële huisvesting. Ze kunnen worden opgetrokken in grote overspanningen zonder tussenkolommen, zijn snel te bouwen en later eenvoudig uit te breiden. De combinatie van sandwichpanelen voor isolatie en staalstructuur voor de draagkracht maakt het tot een energiezuinige en duurzame keuze.</p>
<p>Bradico werkt met bewezen constructiemethodes en kwalitatieve materialen. Onze bedrijfshallen zijn ontworpen voor een levensduur van meerdere decennia, met minimaal onderhoud.</p>
<h2>Wat is inbegrepen bij een bedrijfshal van Bradico?</h2>
<p>Onze totaalformule omvat: technisch ontwerp en berekeningen, begeleiding van de vergunningsaanvraag, prefabricage van de staalstructuur, plaatsing van sandwichpanelen voor gevel en dak, ramen, deuren en poorten, en een sleutelklare oplevering. U hoeft niets zelf te coördineren — dat doen wij.</p>
<h2>Hoeveel kost een bedrijfshal?</h2>
<p>De prijs van een bedrijfshal varieert sterk naargelang de afmetingen, hoogte, isolatiewaarde en afwerking. Een eenvoudige opslaghal van 20x30m start bij een andere prijs dan een complete productiehal van 40x60m met kantoorruimte. Bradico werkt altijd met een vaste prijs na terreinbezoek — zodat u exact weet waar u aan toe bent.</p>`,
  steps: [
    { nr: "01", title: "Terreinbezoek", desc: "We bezoeken uw locatie en bespreken uw noden." },
    { nr: "02", title: "Ontwerp & vergunning", desc: "Technisch ontwerp + begeleiding vergunningsaanvraag." },
    { nr: "03", title: "Vaste offerte", desc: "Gedetailleerde vaste-prijs offerte binnen 48u." },
    { nr: "04", title: "Bouw", desc: "Staalstructuur, panelen, deuren, poorten — alles inbegrepen." },
    { nr: "05", title: "Sleutelklaar", desc: "Oplevering met volledige documentatie en garantie." },
  ],
  why: [
    { t: "Totaalformule", d: "Van vergunning tot sleutelklare oplevering — niets te regelen." },
    { t: "Vaste prijs", d: "Wat wij offreren is wat u betaalt. Geen meerwerken." },
    { t: "Snelle bouwtijd", d: "Gemiddeld 10 tot 16 weken — sneller dan traditionele bouw." },
    { t: "Op maat", d: "Elke hal wordt uitgewerkt naar uw specifieke activiteit en noden." },
  ],
  faq: [
    { q: "Hoe lang duurt het bouwen van een bedrijfshal?", a: "Gemiddeld 10 tot 16 weken van ontwerp tot oplevering, afhankelijk van de omvang en vergunningsprocedure." },
    { q: "Wat kost een bedrijfshal bouwen?", a: "De prijs hangt af van afmetingen, hoogte en afwerking. Na terreinbezoek ontvangt u binnen 48u een vaste-prijs offerte zonder verborgen kosten." },
    { q: "Regelt Bradico de bouwvergunning?", a: "Ja, begeleiding van de vergunningsaanvraag is deel van onze totaalformule." },
    { q: "Kan ik mijn bedrijfshal later uitbreiden?", a: "Ja. Stalen bedrijfshallen zijn bij uitstek geschikt voor uitbreidingen. We houden bij het ontwerp al rekening met mogelijke toekomstige uitbreiding." },
    { q: "Bouwt Bradico ook bedrijfshallen met kantoorruimte?", a: "Absoluut. We combineren productie- of opslagruimte met geïntegreerde kantoren, sanitair en technische lokalen — volledig op maat." },
  ],
};

export default function BedrijfshallenBouwen() {
  return <ServicePageTemplate service={service} />;
}
