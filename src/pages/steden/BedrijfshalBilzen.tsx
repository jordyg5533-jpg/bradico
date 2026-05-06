import { CityPageTemplate, CityData } from "@/components/CityPageTemplate";

const city: CityData = {
  stad: "Bilzen",
  metaTitle: "Bedrijfshal Bouwen Bilzen — vaste prijs, sleutelklaar | Bradico",
  metaDesc: "Bedrijfshal of staalconstructie laten bouwen in Bilzen? Bradico levert sleutelklaar op vaste prijs in Bilzen en omgeving. Offerte binnen 48 uur.",
  canonical: "https://www.bradico.be/bedrijfshal-bilzen",
  intro: "Bradico bouwt bedrijfshallen, loodsen en staalconstructies in Bilzen en de regio — sleutelklaar op vaste prijs. Van vergunning tot oplevering, zonder zorgen. Offerte binnen 48 uur na terreinbezoek.",
  body: `<p>Bilzen is een centraal gelegen gemeente in Limburg met een gevarieerd economisch landschap. Nabij Hasselt, Tongeren en de Nederlandse grens biedt de regio uitstekende vestigingsmogelijkheden voor industrie, logistiek en ambacht.</p>
<p>Bradico bouwt bedrijfshallen en staalconstructies in Bilzen en de omliggende gemeenten. We zijn goed geplaatst in de regio — ons kantoor en productiesite in Kinrooi ligt op korte afstand, wat snelle interventie en efficiënte logistiek mogelijk maakt.</p>
<p>Of u nu een nieuwe loods, een productiehal of een uitbreiding van uw bestaande gebouw wilt — Bradico verzorgt het volledige traject op vaste prijs. Na terreinbezoek ontvangt u binnen 48 uur een transparante offerte, inclusief ontwerp, vergunningsbegeleiding en sleutelklare oplevering.</p>`,
  deelgemeenten: ["Bilzen", "Kleine-Spouwen", "Grote-Spouwen", "Waltwilder", "Martenslinde", "Eigenbilzen", "Munsterbilzen"],
  buursteden: [
    { naam: "Hasselt", href: "/bedrijfshal-hasselt" },
    { naam: "Genk", href: "/bedrijfshal-genk" },
    { naam: "Tongeren", href: "/bedrijfshal-tongeren" },
    { naam: "Sint-Truiden", href: "/bedrijfshal-sint-truiden" },
    { naam: "Lommel", href: "/bedrijfshal-lommel" },
  ],
  faq: [
    { q: "Is Bradico actief in Bilzen?", a: "Ja, Bradico bouwt bedrijfshallen en staalconstructies in Bilzen en omgeving. Onze basis in Kinrooi ligt op korte afstand." },
    { q: "Hoe snel kan Bradico starten in Bilzen?", a: "Na contact plannen we snel een terreinbezoek. Binnen 48 uur ontvangt u een vaste-prijs offerte. De startdatum bespreken we in overleg." },
    { q: "Wat kost een loods bouwen in Bilzen?", a: "De prijs hangt af van de grootte en afwerking. Na terreinbezoek bezorgt Bradico u een gedetailleerde vaste-prijs offerte binnen 48 uur." },
    { q: "Begeleidt Bradico de vergunningsaanvraag in Bilzen?", a: "Ja, vergunningsbegeleiding bij de gemeente Bilzen is standaard inbegrepen in onze totaalformule." },
  ],
};

export default function BedrijfshalBilzen() {
  return <CityPageTemplate city={city} />;
}
