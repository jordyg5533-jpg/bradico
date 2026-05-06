import { ServicePageTemplate, ServiceData } from "@/components/ServicePageTemplate";

const service: ServiceData = {
  metaTitle: "Sandwichpanelen Plaatsen Limburg — isolatie & gevel | Bradico",
  metaDesc: "Sandwichpanelen laten plaatsen in Limburg? Bradico levert en monteert dak- en gevelpanelen voor industriële gebouwen. Vaste prijs, offerte binnen 48 uur.",
  canonical: "https://www.bradico.be/sandwichpanelen",
  h1: "Sandwichpanelen plaatsen in Limburg",
  tagline: "Dak- en gevelsandwichpanelen voor nieuwe hallen, renovaties en uitbreidingen. Bradico levert, monteert en werkt op vaste prijs — offerte binnen 48 uur.",
  img: "/projects/gvl5.jpeg",
  imgAlt: "Sandwichpanelen plaatsen Limburg — Bradico",
  badges: ["Levering + montage", "Vaste prijs", "Nieuwbouw & renovatie", "Offerte 48u"],
  intro: `<p>Sandwichpanelen zijn het meest gebruikte afwerkingsmateriaal voor industriële gebouwen. Ze combineren een hoge isolatiewaarde met een strakke uitstraling, snelle montage en minimaal onderhoud. Bradico levert en plaatst sandwichpanelen voor dak en gevel — bij nieuwbouw, renovatie en uitbreiding.</p>
<p>We werken met kwaliteitspanelen van bewezen leveranciers en onze eigen gespecialiseerde montageploegen. Elk project wordt vooraf technisch uitgetekend zodat panelen perfect aansluiten en de isolatiewaarden worden gehaald.</p>`,
  body: `<h2>Wat zijn sandwichpanelen?</h2>
<p>Een sandwichpaneel bestaat uit twee staalplaten met een isolatiekern van PUR, PIR of minerale wol. Door deze samenstelling bieden ze tegelijk draagkracht, isolatie en bescherming tegen weersinvloeden. Ze zijn verkrijgbaar in talloze kleuren en profielen — van strakke vlakke gevels tot geribbelde industriële uitvoeringen.</p>
<p>Voor dak worden speciale dakpanelen gebruikt met hogere druksterkte en uitgewerkte waterafdichtingssystemen. Voor gevel worden gevelpanelen gebruikt die ook functioneren als regenscherm en isolerende mantel van het gebouw.</p>
<h2>Wanneer sandwichpanelen kiezen?</h2>
<p>Sandwichpanelen zijn de aangewezen keuze voor praktisch elke industriële of agrarische toepassing. Ze zijn sneller te plaatsen dan traditionele metselwerk-en-spouwmuur combinaties, bieden hogere isolatiewaarden en zijn later eenvoudig te vervangen of aan te passen. Bij een gevelrenovatie zijn sandwichpanelen bovendien een kostenefficiënte manier om uw bestaand gebouw een volledig nieuwe uitstraling te geven.</p>
<h2>Sandwichpanelen bij Bradico — wat is inbegrepen?</h2>
<p>Bradico verzorgt het volledige traject: technische meting en ontwerp, levering van de panelen, montage door eigen ploegen, plaatsing van aansluitingen, hoekprofielen en waterdichting. Na oplevering ontvangt u alle relevante documentatie inclusief materiaalfiches en garantiebewijzen. De prijs is altijd vast na terreinbezoek — geen verrassingen.</p>`,
  steps: [
    { nr: "01", title: "Opmeting", desc: "Technische opmeting van gevel of dak op locatie." },
    { nr: "02", title: "Technisch plan", desc: "Paneel-lay-out + aansluitdetails uitgetekend." },
    { nr: "03", title: "Vaste offerte", desc: "Gedetailleerde vaste-prijs offerte binnen 48u." },
    { nr: "04", title: "Levering & montage", desc: "Eigen montageploegen, efficiënte plaatsing." },
    { nr: "05", title: "Oplevering", desc: "Controle waterdichtheid + volledige documentatie." },
  ],
  why: [
    { t: "Levering + montage", d: "Wij leveren en plaatsen — één verantwoordelijke voor het volledige werk." },
    { t: "Kwaliteitspanelen", d: "Bewezen leveranciers, hoge isolatiewaarden, brede kleur- en profielkeuze." },
    { t: "Nieuwbouw & renovatie", d: "Zowel voor nieuwe hallen als voor renovatie van bestaande gebouwen." },
    { t: "Vaste prijs", d: "Na opmeting weet u exact wat het kost — geen meerwerken." },
  ],
  faq: [
    { q: "Wat kost sandwichpanelen laten plaatsen?", a: "De prijs hangt af van het type paneel, de dikte, de oppervlakte en de toegankelijkheid. Na een terreinbezoek ontvangt u binnen 48 uur een vaste-prijs offerte." },
    { q: "Welke isolatiewaarde halen sandwichpanelen?", a: "Afhankelijk van de kerndikte en het isolatiemateriaal (PUR, PIR, minerale wol) worden U-waarden van 0,20 tot 0,50 W/m²K gehaald — ruim voldoende voor industrieel gebruik." },
    { q: "Kan Bradico ook bestaande panelen vervangen?", a: "Ja. Bij renovatieprojecten vervangen we beschadigde of verouderde panelen. We analyseren de bestaande situatie en adviseren de beste aanpak." },
    { q: "Hoe lang duurt de plaatsing?", a: "Voor een gemiddeld project van enkele honderd m² rekent u op enkele werkdagen. Grotere projecten plannen we in overleg." },
    { q: "Zijn er verschillende kleuren beschikbaar?", a: "Ja, sandwichpanelen zijn leverbaar in een uitgebreid kleurenpalet — van standaard RAL-kleuren tot speciale uitvoeringen. We adviseren u bij de keuze." },
  ],
};

export default function Sandwichpanelen() {
  return <ServicePageTemplate service={service} />;
}
