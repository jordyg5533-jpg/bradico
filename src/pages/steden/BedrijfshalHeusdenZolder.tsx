import { CityPageTemplate, CityData } from "@/components/CityPageTemplate";

const city: CityData = {
  stad: "Heusden-Zolder",
  metaTitle: "Bedrijfshal Bouwen Heusden-Zolder - vaste prijs, sleutelklaar | Bradico",
  metaDesc: "Bedrijfshal of staalconstructie laten bouwen in Heusden-Zolder? Bradico levert sleutelklaar op vaste prijs. Offerte binnen 48 uur.",
  canonical: "https://www.bv-bradico.be/bedrijfshal-heusden-zolder",
  intro: "Bradico bouwt bedrijfshallen, loodsen en staalconstructies in Heusden-Zolder - sleutelklaar op vaste prijs. Van de vergunningsaanvraag tot de oplevering zorgen wij voor alles. Offerte binnen 48 uur na terreinbezoek.",
  body: `<p>Heusden-Zolder heeft een industriele identiteit die teruggaat tot de steenkoolmijnen van Zwartberg. Vandaag is de voormalige mijnsite getransformeerd tot de Corda Campus, een modern technologie- en innovatiepark dat start-ups, scale-ups en gevestigde technologiebedrijven aantrekt. Naast Corda Campus is er de Molenheide industriezone, een klassieke kmo-zone met diverse productie- en opslagactiviteiten, en de nabijheid van het Circuit Zolder dat ook logistieke en evenementgebonden economische activiteit genereert.</p>
<p>De ligging langs de E313, op korte afstand van Hasselt en Genk, maakt Heusden-Zolder tot een vlot bereikbare vestigingsplaats voor bedrijven die centraal in Limburg willen zitten. Bradico bouwt hier stalen bedrijfshallen en loodsen op maat: of het nu gaat om een productiehal voor een technologiebedrijf, een opslagloods voor een kmo in Molenheide, of een functioneel servicebedrijf in Beverlo of Helchteren - we ontwerpen voor uw specifieke noden.</p>
<p>Elk project in Heusden-Zolder start met een terreinbezoek. We bespreken uw activiteit, de stedenbouwkundige randvoorwaarden en de bouwtechnische mogelijkheden. Binnen 48 uur na dat bezoek bezorgen we u een vaste-prijs offerte, opgesteld in volle transparantie - ruwbouw, dakwerken, buitenschrijnwerk en eventuele afwerking inbegrepen. Geen verrassingen, geen meerwerken die u niet verwacht.</p>`,
  deelgemeenten: ["Heusden", "Zolder", "Helchteren", "Beverlo", "Zonhoven"],
  buursteden: [
    { naam: "Hasselt", href: "/bedrijfshal-hasselt" },
    { naam: "Genk", href: "/bedrijfshal-genk" },
    { naam: "Lommel", href: "/bedrijfshal-lommel" },
    { naam: "Beringen", href: "/bedrijfshal-beringen" },
  ],
  faq: [
    {
      q: "Is Bradico actief in Heusden-Zolder?",
      a: "Ja, Bradico bouwt bedrijfshallen en staalconstructies in Heusden-Zolder en alle deelgemeenten, waaronder Zolder, Helchteren en Beverlo.",
    },
    {
      q: "Wat kost een bedrijfshal bouwen in Heusden-Zolder?",
      a: "De prijs wordt bepaald door de afmetingen, het afwerkingsniveau en de locatie. Na een terreinbezoek ontvangt u binnen 48 uur een vaste-prijs offerte zonder verborgen kosten.",
    },
    {
      q: "Kan Bradico bouwen op de Corda Campus of Molenheide?",
      a: "Ja, we zijn vertrouwd met de industriele en gemengde zones in Heusden-Zolder. We begeleiden u ook in het vergunningstraject bij de gemeente.",
    },
    {
      q: "Hoe lang duurt een bedrijfshal bouwen in Heusden-Zolder?",
      a: "Een stalen bedrijfshal wordt typisch binnen 8 tot 16 weken gerealiseerd na het verlenen van de vergunning. De exacte doorlooptijd bespreken we bij het terreinbezoek.",
    },
  ],
};

export default function BedrijfshalHeusdenZolder() {
  return <CityPageTemplate city={city} />;
}
