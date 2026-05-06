import { ServicePageTemplate, ServiceData } from "@/components/ServicePageTemplate";

const service: ServiceData = {
  metaTitle: "Loods of Magazijn Bouwen Limburg — vaste prijs | Bradico",
  metaDesc: "Loods of magazijn laten bouwen in Limburg? Bradico levert sleutelklaar op vaste prijs. Snel, degelijk en op maat. Offerte binnen 48 uur.",
  canonical: "https://www.bradico.be/loodsen-magazijnen",
  h1: "Loods of magazijn bouwen in Limburg",
  tagline: "Een opslagloods, landbouwloods of industrieel magazijn laten bouwen? Bradico levert snel en sleutelklaar — altijd op vaste prijs, offerte binnen 48 uur.",
  img: "/projects/loods-na.jpg",
  imgAlt: "Loods bouwen Limburg — Bradico",
  badges: ["Sleutelklaar", "Vaste prijs", "Snel gebouwd", "Offerte 48u"],
  intro: `<p>Een loods of magazijn is functioneel gebouw dat snel beschikbaar moet zijn en decennialang mee moet gaan. Of het nu gaat om een opslagloods voor materialen, een landbouwloods voor machines of een industrieel magazijn voor goederen — Bradico bouwt het op maat en op vaste prijs.</p>
<p>We werken met stalen draagstructuren en geïsoleerde sandwichpanelen voor een snelle bouwtijd en optimale kostenefficiëntie. Van de eerste schets tot de sleutelklare oplevering coördineren wij elk detail — u hoeft niets zelf te regelen.</p>`,
  body: `<h2>Welk type loods past bij mij?</h2>
<p>Bradico bouwt verschillende types loodsen afhankelijk van uw gebruik. Een opslagloods heeft typisch minder isolatie nodig dan een productieruimte, terwijl een landbouwloods vaak hogere deuren vereist voor machines. Een industrieel magazijn kan worden uitgebreid met kantoorruimte, sanitair en laadperrons. We bespreken dit grondig tijdens het terreinbezoek zodat de loods perfect aansluit op uw activiteit.</p>
<h2>Hoe snel kan een loods worden gebouwd?</h2>
<p>Stalen loodsen zijn aanzienlijk sneller te bouwen dan traditionele constructies. Dankzij prefabricage van de staalstructuur in onze werkplaats en snelle montage op locatie, is een eenvoudige opslagloods vaak al in enkele weken gebouwd. Voor grotere of complexere projecten met vergunningsprocedures rekent u best op 10 tot 14 weken van start tot oplevering.</p>
<h2>Wat is inbegrepen bij een loods van Bradico?</h2>
<p>Onze totaalformule omvat het technisch ontwerp en de statische berekeningen, begeleiding van de vergunningsaanvraag waar nodig, prefabricage van de staalstructuur, montage van dak- en gevelpanelen, plaatsing van poorten, deuren en ramen, en de sleutelklare oplevering. U werkt met één aanspreekpunt van begin tot einde — geen gecoördineer tussen aannemers.</p>
<h2>Prijs van een loods laten bouwen</h2>
<p>De prijs hangt af van de afmetingen, het type gebruik (onverwarmd vs. geïsoleerd), de hoogte, het type poorten en deuren, en eventuele extras zoals kantoorruimte of sanitair. Bradico werkt altijd met een vaste prijs na terreinbezoek — geen meerwerken, geen verrassingen achteraf.</p>`,
  steps: [
    { nr: "01", title: "Terreinbezoek", desc: "We komen kijken, opnemen en bespreken uw noden." },
    { nr: "02", title: "Ontwerp & plan", desc: "Technische plannen op maat van uw gebruik." },
    { nr: "03", title: "Vaste offerte", desc: "Gedetailleerde vaste-prijs offerte binnen 48u." },
    { nr: "04", title: "Prefabricage & montage", desc: "Structuur, panelen, deuren en poorten inbegrepen." },
    { nr: "05", title: "Sleutelklaar", desc: "Oplevering met documentatie en garantie." },
  ],
  why: [
    { t: "Snelle bouwtijd", d: "Staal laat toe sneller te bouwen dan traditionele bouw — minder wachttijd." },
    { t: "Vaste prijs", d: "Na terreinbezoek weet u exact wat het kost — geen bijbestellingen of meerwerken." },
    { t: "Op maat", d: "Opslagloods, landbouwloods of magazijn — elke configuratie is mogelijk." },
    { t: "Totaalformule", d: "Van vergunning tot sleutelklare oplevering — één aanspreekpunt." },
  ],
  faq: [
    { q: "Hoeveel kost een loods laten bouwen?", a: "De prijs verschilt sterk naargelang de grootte, isolatiegraad en afwerking. Na een terreinbezoek ontvangt u binnen 48 uur een vaste-prijs offerte." },
    { q: "Heb ik een bouwvergunning nodig voor een loods?", a: "In de meeste gevallen wel, zeker voor permanente constructies. Bradico begeleidt u door de vergunningsprocedure als onderdeel van onze dienstverlening." },
    { q: "Kan ik een loods achteraf nog uitbreiden?", a: "Ja. Stalen loodsen zijn uitstekend geschikt voor latere uitbreidingen. Bij het ontwerp houden we daar al rekening mee indien gewenst." },
    { q: "Bouwt Bradico ook landbouwloodsen?", a: "Absoluut. We bouwen loodsen voor landbouw, opslag, industrie en combinaties — altijd op maat en op vaste prijs." },
    { q: "Hoe lang duurt het bouwen van een loods?", a: "Een eenvoudige opslagloods kan in enkele weken gebouwd worden. Voor grotere projecten met vergunning rekent u op 10 tot 14 weken van ontwerp tot oplevering." },
  ],
};

export default function LoodsenMagazijnen() {
  return <ServicePageTemplate service={service} />;
}
