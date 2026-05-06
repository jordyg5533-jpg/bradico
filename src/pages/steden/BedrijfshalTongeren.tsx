import { CityPageTemplate, CityData } from "@/components/CityPageTemplate";

const city: CityData = {
  stad: "Tongeren",
  metaTitle: "Bedrijfshal Bouwen Tongeren — vaste prijs, sleutelklaar | Bradico",
  metaDesc: "Bedrijfshal of staalconstructie laten bouwen in Tongeren? Bradico levert sleutelklaar op vaste prijs. Actief in Tongeren en omgeving. Offerte binnen 48 uur.",
  canonical: "https://www.bradico.be/bedrijfshal-tongeren",
  intro: "Bradico bouwt bedrijfshallen, loodsen en staalconstructies in Tongeren en de regio — sleutelklaar op vaste prijs. Van ontwerp en vergunning tot oplevering. Offerte binnen 48 uur na terreinbezoek.",
  body: `<p>Tongeren, de oudste stad van België, is tegelijk een regio met een groeiend economisch weefsel. Nabij de E313 en E40 is de regio aantrekkelijk voor logistieke en industriële activiteiten. Bradico is vertrouwd met het bouwen in Tongeren en de ruime omgeving.</p>
<p>We bouwen bedrijfshallen, opslagloodsen en staalconstructies voor ondernemers in de Tongerse regio. Ons team is vertrouwd met de lokale vergunningsprocedures en werkt efficiënt om uw project zo snel mogelijk te realiseren.</p>
<p>Van de eerste bespreking tot de sleutelklare oplevering werkt u met één aanspreekpunt bij Bradico. Geen gecoördineer tussen aannemers, geen verrassingen qua prijs — gewoon degelijk werk op vaste prijs.</p>`,
  deelgemeenten: ["Tongeren", "Vreren", "Niel-bij-As", "Widooie", "Lauw", "Berg", "Mal"],
  buursteden: [
    { naam: "Hasselt", href: "/bedrijfshal-hasselt" },
    { naam: "Sint-Truiden", href: "/bedrijfshal-sint-truiden" },
    { naam: "Bilzen", href: "/bedrijfshal-bilzen" },
    { naam: "Genk", href: "/bedrijfshal-genk" },
    { naam: "Antwerpen", href: "/bedrijfshal-antwerpen" },
  ],
  faq: [
    { q: "Bouwt Bradico bedrijfshallen in Tongeren?", a: "Ja, Bradico is actief in Tongeren en omgeving. We bouwen bedrijfshallen, loodsen en staalconstructies op vaste prijs en sleutelklaar." },
    { q: "Hoe snel kan ik starten met mijn project in Tongeren?", a: "Na contact plannen we snel een terreinbezoek. Binnen 48 uur daarna ontvangt u een vaste-prijs offerte." },
    { q: "Wat kost een bedrijfshal in de regio Tongeren?", a: "De prijs hangt af van de afmetingen en afwerking. Na terreinbezoek bezorgen we u een transparante vaste-prijs offerte." },
    { q: "Regelt Bradico de bouwvergunning in Tongeren?", a: "Ja, vergunningsbegeleiding bij de stad Tongeren is inbegrepen in onze totaalformule." },
  ],
};

export default function BedrijfshalTongeren() {
  return <CityPageTemplate city={city} />;
}
