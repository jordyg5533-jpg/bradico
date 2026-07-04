import { CityPageTemplate, CityData } from "@/components/CityPageTemplate";

const city: CityData = {
  stad: "Maasmechelen",
  metaTitle: "Bedrijfshal Bouwen Maasmechelen - vaste prijs, sleutelklaar | Bradico",
  metaDesc: "Bedrijfshal of staalconstructie laten bouwen in Maasmechelen? Bradico levert sleutelklaar op vaste prijs in Maasmechelen en omgeving. Offerte binnen 48 uur.",
  canonical: "https://www.bv-bradico.be/bedrijfshal-maasmechelen",
  intro: "Bradico bouwt bedrijfshallen, loodsen en staalconstructies in Maasmechelen - sleutelklaar op vaste prijs. Van de vergunningsaanvraag tot de oplevering zorgen wij voor alles. Offerte binnen 48 uur na terreinbezoek.",
  body: `<p>Maasmechelen is een sterk groeiende industriestad in het hart van Limburg, strategisch gelegen langs de E314 en vlak bij de Nederlandse grens. Het Maasmechelen Industrial Park en de IBC-zone trekken logistieke bedrijven, productie-ondernemingen en distributiecentra aan die nood hebben aan functionele en duurzame bedrijfshuisvesting.</p>
<p>Bradico heeft uitgebreide ervaring met staalconstructies en bedrijfshallen in de regio Maasmechelen. Of het nu gaat om een nieuwe productiehal, een opslagloods of een gemengd bedrijfsgebouw - wij ontwerpen op maat van uw activiteit en uw perceel. Dankzij onze eigen prefab staalproductie leveren we snel en tegen een vaste prijs, zonder verrassingen achteraf.</p>
<p>Elk project start met een grondig terreinbezoek in Maasmechelen of deelgemeenten zoals Eisden, Lanklaar, Dilsen-Stokkem, Opgrimbie of Leut. We analyseren de ligging, de bereikbaarheid en de stedenbouwkundige mogelijkheden. Binnen 48 uur na dat bezoek ontvangt u een gedetailleerde offerte op vaste prijs, inclusief ruwbouw, dakwerken en buitenschrijnwerk.</p>`,
  deelgemeenten: ["Maasmechelen", "Eisden", "Lanklaar", "Dilsen-Stokkem", "Opgrimbie", "Leut"],
  buursteden: [
    { naam: "Genk", href: "/bedrijfshal-genk" },
    { naam: "Bilzen", href: "/bedrijfshal-bilzen" },
    { naam: "Tongeren", href: "/bedrijfshal-tongeren" },
    { naam: "Maaseik", href: "/bedrijfshal-maaseik" },
  ],
  faq: [
    {
      q: "Is Bradico actief in Maasmechelen?",
      a: "Ja, Bradico bouwt bedrijfshallen en staalconstructies in Maasmechelen en alle deelgemeenten. We zijn vertrouwd met de lokale industriezones en de stedenbouwkundige context.",
    },
    {
      q: "Wat kost een bedrijfshal bouwen in Maasmechelen?",
      a: "De prijs hangt af van de afmetingen, afwerking en de specifieke locatie. Na een terreinbezoek ontvangt u binnen 48 uur een vaste-prijs offerte zonder verborgen kosten.",
    },
    {
      q: "Hoe lang duurt de bouw van een bedrijfshal in Maasmechelen?",
      a: "Een standaard bedrijfshal in staalconstructie wordt typisch binnen 8 tot 16 weken gerealiseerd na het verlenen van de vergunning, afhankelijk van de omvang en afwerking.",
    },
    {
      q: "Regelt Bradico ook de omgevingsvergunning in Maasmechelen?",
      a: "Ja, Bradico begeleidt u in het vergunningstraject. We werken samen met lokale architecten en kennen de procedures bij de gemeente Maasmechelen.",
    },
  ],
};

export default function BedrijfshalMaasmechelen() {
  return <CityPageTemplate city={city} />;
}
