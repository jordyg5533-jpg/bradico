import { CityPageTemplate, CityData } from "@/components/CityPageTemplate";

const city: CityData = {
  stad: "Antwerpen",
  metaTitle: "Bedrijfshal Bouwen Antwerpen — vaste prijs, sleutelklaar | Bradico",
  metaDesc: "Bedrijfshal of staalconstructie laten bouwen in de regio Antwerpen? Bradico levert sleutelklaar op vaste prijs. Offerte binnen 48 uur.",
  canonical: "https://www.bradico.be/bedrijfshal-antwerpen",
  intro: "Bradico is actief in de regio Antwerpen voor het bouwen van bedrijfshallen, loodsen en staalconstructies. Sleutelklaar op vaste prijs — van vergunning tot oplevering. Offerte binnen 48 uur.",
  body: `<p>De regio Antwerpen is economisch een van de meest actieve van België. Naast de haven zijn er talloze industrieterreinen, logistieke hubs en productiezones waar vraag is naar kwalitatieve, snelle bedrijfshuisvesting. Bradico is actief in Antwerpen en de Antwerpse rand.</p>
<p>We bouwen bedrijfshallen, loodsen en staalconstructies op maat voor bedrijven die snel en betrouwbaar nieuwe infrastructuur nodig hebben. Onze vaste-prijs aanpak garandeert volledige transparantie — wat wij offreren, betaalt u. Geen verrassingen, geen meerwerken.</p>
<p>Na een terreinbezoek waarbij we uw locatie en noden bespreken, ontvangt u binnen 48 uur een gedetailleerde offerte. Bradico verzorgt het volledige traject van ontwerp en vergunning tot sleutelklare oplevering — met één aanspreekpunt van begin tot einde.</p>`,
  deelgemeenten: ["Antwerpen", "Deurne", "Merksem", "Borgerhout", "Berchem", "Wilrijk", "Hoboken"],
  buursteden: [
    { naam: "Hasselt", href: "/bedrijfshal-hasselt" },
    { naam: "Genk", href: "/bedrijfshal-genk" },
    { naam: "Sint-Truiden", href: "/bedrijfshal-sint-truiden" },
    { naam: "Bilzen", href: "/bedrijfshal-bilzen" },
    { naam: "Lommel", href: "/bedrijfshal-lommel" },
  ],
  faq: [
    { q: "Is Bradico actief in de regio Antwerpen?", a: "Ja, Bradico bouwt bedrijfshallen en staalconstructies in Antwerpen en omgeving. Neem contact op voor een vrijblijvend terreinbezoek." },
    { q: "Hoe ver rijdt Bradico voor een project?", a: "Bradico is actief in Belgisch en Nederlands Limburg, Antwerpen en Vlaams-Brabant. Voor grotere projecten ook verder." },
    { q: "Wat kost een bedrijfshal in Antwerpen?", a: "Na terreinbezoek ontvangt u binnen 48 uur een gedetailleerde vaste-prijs offerte. De prijs hangt af van de afmetingen, hoogte en gewenste afwerking." },
    { q: "Regelt Bradico de bouwvergunning in Antwerpen?", a: "Ja, begeleiding van de vergunningsaanvraag is inbegrepen in onze totaalformule — ook in de Antwerpse regio." },
  ],
};

export default function BedrijfshalAntwerpen() {
  return <CityPageTemplate city={city} />;
}
