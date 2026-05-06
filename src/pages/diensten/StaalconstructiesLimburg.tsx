import { ServicePageTemplate, ServiceData } from "@/components/ServicePageTemplate";

const service: ServiceData = {
  metaTitle: "Staalconstructies Limburg — op maat & vaste prijs | Bradico",
  metaDesc: "Bradico levert staalconstructies op maat in Limburg. Van draagstructuren tot complete industriële complexen. Vaste prijs, offerte binnen 48 uur.",
  canonical: "https://www.bradico.be/staalconstructies-limburg",
  h1: "Staalconstructies in Limburg — op maat gebouwd",
  tagline: "Van kleine draagstructuren tot grote industriële complexen. Bradico ontwerpt en bouwt staalconstructies op maat, volledig vaste prijs en met offerte binnen 48 uur.",
  img: "/projects/bhal3.jpeg",
  imgAlt: "Staalconstructie op maat Limburg — Bradico",
  badges: ["Vaste prijs", "Offerte 48u", "BE + NL Limburg", "Sleutelklaar"],
  intro: `<p>Een staalconstructie is de ruggengraat van elk industrieel gebouw. Of het nu gaat om een draagstructuur voor een bedrijfshal, een magazijn, een productiehal of een speciale toepassing — staal biedt de combinatie van sterkte, flexibiliteit en snelheid die andere materialen niet kunnen evenaren.</p>
<p>Bij Bradico werken we met bewezen staalconstructie-technieken en moderne ontwerpsoftware. Elk project start met een gedetailleerde technische studie en eindigt met een sleutelklare oplevering. Onze vaste prijs-aanpak betekent dat u van bij de start weet wat het totale project kost — geen verrassingen, geen bijbestellingen.</p>`,
  body: `<h2>Wat zijn de voordelen van een staalconstructie?</h2>
<p>Staal is het meest gebruikte materiaal voor industriële bouw, en niet zonder reden. Een staalconstructie biedt grote overspanningen zonder tussenliggende kolommen, waardoor u maximale bruikbare vloeroppervlakte krijgt. De bouwtijd is aanzienlijk korter dan bij traditionele bouw: prefabricage in de werkplaats en snelle montage op werf zijn de norm bij Bradico.</p>
<p>Staalconstructies zijn ook bijzonder flexibel: ze kunnen later worden uitgebreid, verhoogd of aangepast zonder de bestaande structuur volledig te moeten slopen. Dat is een aanzienlijk voordeel voor bedrijven die willen groeien.</p>
<h2>Onze aanpak bij staalconstructies</h2>
<p>Elk staalconstructieproject begint met een terreinbezoek. Onze technici komen ter plaatse, nemen alle relevante maten op en bespreken uw specifieke noden. Op basis hiervan maken wij een gedetailleerd technisch ontwerp en een vaste-prijs offerte — klaar binnen 48 uur na het terreinbezoek.</p>
<p>Wij verzorgen het volledige traject: van vergunningsaanvraag en technisch ontwerp tot prefabricage, transport en montage. Na oplevering ontvangt u alle technische documentatie en heeft u een vast aanspreekpunt voor eventuele vragen.</p>
<h2>Staalconstructies voor elke sector</h2>
<p>Bradico bouwt staalconstructies voor diverse sectoren: productie-industrie, logistiek, landbouw, retail en overheidssector. Of het gaat om een kleine werkplaats van 200m² of een grote productiehal van 5.000m², onze aanpak blijft dezelfde: degelijk, transparant en op vaste prijs.</p>`,
  steps: [
    { nr: "01", title: "Terreinbezoek", desc: "We komen ter plaatse en nemen maten op." },
    { nr: "02", title: "Technisch ontwerp", desc: "Gedetailleerde staalconstructie-plannen." },
    { nr: "03", title: "Vaste offerte", desc: "Binnen 48u een complete vaste-prijs offerte." },
    { nr: "04", title: "Prefabricage & montage", desc: "Productie in werkplaats, snelle montage op werf." },
    { nr: "05", title: "Oplevering", desc: "Sleutelklaar met volledige documentatie." },
  ],
  why: [
    { t: "Vaste prijs", d: "Geen meerwerken of bijbestellingen — wat wij offreren, betaalt u." },
    { t: "48u offerte", d: "Na terreinbezoek heeft u binnen 48 uur een gedetailleerde offerte." },
    { t: "Eén aanspreekpunt", d: "Van eerste contact tot oplevering werkt u met dezelfde persoon." },
    { t: "BE + NL actief", d: "Actief in Belgisch en Nederlands Limburg, Antwerpen en Vlaams-Brabant." },
  ],
  faq: [
    { q: "Wat kost een staalconstructie in Limburg?", a: "De prijs hangt af van de afmetingen, het type constructie en de afwerking. Bradico werkt altijd met vaste prijzen — na terreinbezoek ontvangt u binnen 48 uur een gedetailleerde offerte." },
    { q: "Hoe snel kan een staalconstructie worden gebouwd?", a: "Gemiddeld 8 tot 14 weken van ontwerp tot oplevering, afhankelijk van de complexiteit en de vergunningsprocedure." },
    { q: "Regelt Bradico ook de bouwvergunning?", a: "Ja, wij begeleiden u door het volledige vergunningsproces als onderdeel van onze totaalformule." },
    { q: "Kan een staalconstructie later worden uitgebreid?", a: "Absoluut. Staal is bij uitstek geschikt voor uitbreidingen — bestaande structuren kunnen in de meeste gevallen eenvoudig worden verlengd of verhoogd." },
    { q: "Werkt Bradico ook in Nederlands Limburg?", a: "Ja, wij zijn actief aan beide kanten van de grens — zowel in Belgisch als Nederlands Limburg." },
  ],
};

export default function StaalconstructiesLimburg() {
  return <ServicePageTemplate service={service} />;
}
