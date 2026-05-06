import { CityPageTemplate, CityData } from "@/components/CityPageTemplate";

const city: CityData = {
  stad: "Hasselt",
  metaTitle: "Bedrijfshal Bouwen Hasselt — vaste prijs, sleutelklaar | Bradico",
  metaDesc: "Bedrijfshal of staalconstructie laten bouwen in Hasselt? Bradico levert sleutelklaar op vaste prijs. Offerte binnen 48 uur. Actief in heel Limburg.",
  canonical: "https://www.bradico.be/bedrijfshal-hasselt",
  intro: "Bradico is uw aannemer voor bedrijfshallen, loodsen en staalconstructies in Hasselt en omgeving. We leveren volledig sleutelklaar op vaste prijs — van vergunning tot oplevering. Offerte binnen 48 uur na terreinbezoek.",
  body: `<p>Hasselt is de economische hoofdstad van Limburg en een dynamische regio voor industrie, logistiek en handel. De vraag naar kwalitatieve bedrijfshuisvesting groeit gestaag — of het nu gaat om nieuwe productie-infrastructuur, uitbreiding van opslagcapaciteit of een volledig nieuw bedrijfscomplex.</p>
<p>Bradico bouwt bedrijfshallen en staalconstructies in Hasselt en de wijde omgeving. Wij kennen de lokale vergunningsprocedures, de terreinomstandigheden en de noden van Hasseltse ondernemers. Van het eerste gesprek tot de sleutelklare oplevering is er één aanspreekpunt — dat maakt het verschil.</p>
<p>Of u nu een opslagloods van 500m² of een productiehal van 3.000m² wilt bouwen: Bradico werkt altijd op vaste prijs na terreinbezoek. Geen meerwerken, geen verrassingen — wel een degelijk en snel gebouwd pand dat decennia meegaat.</p>`,
  deelgemeenten: ["Hasselt", "Kermt", "Kuringen", "Wimmertingen", "Spalbeek", "Stokrooie", "Rapertingen"],
  buursteden: [
    { naam: "Genk", href: "/bedrijfshal-genk" },
    { naam: "Bilzen", href: "/bedrijfshal-bilzen" },
    { naam: "Sint-Truiden", href: "/bedrijfshal-sint-truiden" },
    { naam: "Tongeren", href: "/bedrijfshal-tongeren" },
    { naam: "Lommel", href: "/bedrijfshal-lommel" },
  ],
  faq: [
    { q: "Bouwt Bradico bedrijfshallen in Hasselt?", a: "Ja, Bradico is actief in Hasselt en heel Limburg. We bouwen bedrijfshallen, loodsen en staalconstructies op vaste prijs en sleutelklaar." },
    { q: "Hoe snel kan ik een offerte krijgen voor mijn project in Hasselt?", a: "Na een terreinbezoek ontvangt u binnen 48 uur een gedetailleerde vaste-prijs offerte zonder verplichtingen." },
    { q: "Regelt Bradico de vergunning in Hasselt?", a: "Ja, begeleiding van de vergunningsaanvraag bij de stad Hasselt is inbegrepen in onze totaalformule." },
    { q: "Wat kost een bedrijfshal in Hasselt?", a: "De prijs hangt af van de afmetingen, hoogte en afwerking. Na terreinbezoek werken we een exacte vaste-prijs offerte uit. Neem contact op voor een vrijblijvend gesprek." },
  ],
};

export default function BedrijfshalHasselt() {
  return <CityPageTemplate city={city} />;
}
