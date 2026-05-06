import { ServicePageTemplate, ServiceData } from "@/components/ServicePageTemplate";

const service: ServiceData = {
  metaTitle: "Industriële Gevelrenovatie Limburg — vaste prijs | Bradico",
  metaDesc: "Gevelrenovatie voor bedrijfshallen en industriële gebouwen in Limburg. Bradico vernieuwt gevels met sandwichpanelen op vaste prijs. Offerte binnen 48 uur.",
  canonical: "https://www.bradico.be/gevelrenovatie-industrieel",
  h1: "Industriële gevelrenovatie in Limburg",
  tagline: "Verouderde of beschadigde gevel van uw bedrijfshal renoveren? Bradico vernieuwt industriële gevels met sandwichpanelen — snel, duurzaam en op vaste prijs.",
  img: "/projects/gevelrenovatie-na.jpg",
  imgAlt: "Industriële gevelrenovatie Limburg — Bradico",
  badges: ["Gevel nieuw leven", "Vaste prijs", "Snel uitgevoerd", "Offerte 48u"],
  intro: `<p>Een verouderde, beschadigde of slecht isolerende gevel kost u geld — hogere verwarmingskosten, vochtproblemen en een minder professionele uitstraling. Bradico renoveert industriële gevels met moderne sandwichpanelen: snel geplaatst, sterk geïsoleerd en jarenlang onderhoudsvrij.</p>
<p>We werken over de bestaande constructie heen wanneer mogelijk, of vervangen de volledige gevel als dat nodig is. In beide gevallen krijgt u een scherpe vaste prijs na terreinbezoek en een oplevering die u verbaast.</p>`,
  body: `<h2>Waarom uw industriële gevel renoveren?</h2>
<p>Veel bedrijfshallen en loodsen uit de jaren '80 en '90 hebben gevels die niet meer voldoen aan de huidige isolatienormen. Dunne golfplaten, asbesthoudende gevelbekleding of verouderde sandwichpanelen zorgen voor warmteverlies, vochtproblemen en een verouderd uiterlijk. Een gevelrenovatie lost dit alles in één ingreep op.</p>
<p>Naast de technische verbetering is er ook de commerciële impact: een gerenoveerde gevel straalt professionaliteit uit naar klanten, leveranciers en medewerkers. En met moderne sandwichpanelen in uw gewenste kleur of uitvoering ziet uw gebouw er jaren lang verzorgd uit.</p>
<h2>Hoe verloopt een industriële gevelrenovatie?</h2>
<p>Bradico start altijd met een grondige inspectie van de bestaande situatie. We beoordelen de staat van de huidige gevel, de draagstructuur en de aansluitingen. Op basis hiervan stellen we de meest efficiënte aanpak voor: nieuwe sandwichpanelen over de bestaande constructie, vervanging van de gevelbekleding, of een combinatie. U ontvangt een gedetailleerde vaste-prijs offerte — binnen 48 uur na het terreinbezoek.</p>
<h2>Sandwichpanelen als gevelbekleding</h2>
<p>Moderne sandwichpanelen zijn de meest efficiënte geveloplossing voor industriële gebouwen. Ze combineren isolatiewaarden tot 0,20 W/m²K met een snelle montage en een uitgebreid kleurenpalet. Ze vereisen minimaal onderhoud en gaan decennia mee. Bradico werkt met bewezen panelenleveranciers en eigen gespecialiseerde montageploegen.</p>`,
  steps: [
    { nr: "01", title: "Inspectie", desc: "Grondige inspectie van bestaande gevel en structuur." },
    { nr: "02", title: "Renovatieplan", desc: "Aanpak, materiaalkeuze en technische uitwerking." },
    { nr: "03", title: "Vaste offerte", desc: "Transparante vaste-prijs offerte binnen 48u." },
    { nr: "04", title: "Renovatie", desc: "Eigen ploegen, snelle en nette uitvoering." },
    { nr: "05", title: "Oplevering", desc: "Controle, documentatie en garantie." },
  ],
  why: [
    { t: "Betere isolatie", d: "Moderne panelen verminderen warmteverlies aanzienlijk — lagere energiekosten." },
    { t: "Professionele uitstraling", d: "Nieuwe gevel in uw kleur — direct zichtbaar verschil voor klanten en bezoekers." },
    { t: "Snel uitgevoerd", d: "Gevelrenovatie verstoort uw bedrijfsactiviteiten minimaal — we werken efficiënt." },
    { t: "Vaste prijs", d: "Na inspectie weet u exact wat het kost — geen verrassingen achteraf." },
  ],
  faq: [
    { q: "Wat kost een industriële gevelrenovatie?", a: "De prijs hangt af van de oppervlakte, het type panelen en de staat van de bestaande gevel. Na een terreinbezoek ontvangt u binnen 48 uur een vaste-prijs offerte." },
    { q: "Kan Bradico over bestaande gevelbekleding heen werken?", a: "In veel gevallen wel — dit bespaart tijd en kosten doordat de bestaande structuur behouden blijft. We beoordelen dit altijd ter plaatse." },
    { q: "Kunnen asbestplaten worden verwijderd?", a: "Verwijdering van asbesthoudende gevelbekleding vereist gecertificeerde asbestsanering. We begeleiden u bij het vinden van de juiste partner en zorgen daarna voor de nieuwe gevelbekleding." },
    { q: "Hoe lang duurt een gevelrenovatie?", a: "Afhankelijk van de oppervlakte en de complexiteit, variëren uitvoeringstijden van enkele dagen tot meerdere weken. We plannen zo dat uw bedrijfsactiviteiten minimaal worden verstoord." },
    { q: "Welke kleuren zijn beschikbaar?", a: "Sandwichpanelen zijn leverbaar in een uitgebreid kleurenpalet — standaard RAL-kleuren en speciale uitvoeringen. We adviseren u graag bij de keuze die past bij uw bedrijfsidentiteit." },
  ],
};

export default function GevelrenovatieIndustrieel() {
  return <ServicePageTemplate service={service} />;
}
