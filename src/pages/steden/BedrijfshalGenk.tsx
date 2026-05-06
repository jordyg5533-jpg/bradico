import { CityPageTemplate, CityData } from "@/components/CityPageTemplate";

const city: CityData = {
  stad: "Genk",
  metaTitle: "Bedrijfshal Bouwen Genk — vaste prijs, sleutelklaar | Bradico",
  metaDesc: "Bedrijfshal of staalconstructie laten bouwen in Genk? Bradico levert sleutelklaar op vaste prijs in Genk en omgeving. Offerte binnen 48 uur.",
  canonical: "https://www.bradico.be/bedrijfshal-genk",
  intro: "Bradico bouwt bedrijfshallen, loodsen en staalconstructies in Genk — sleutelklaar op vaste prijs. Van de vergunningsaanvraag tot de oplevering zorgen wij voor alles. Offerte binnen 48 uur na terreinbezoek.",
  body: `<p>Genk is één van de belangrijkste industriële centra van Limburg. Met grootschalige logistieke zones, de Ford-site en talloze productiebedrijven is de vraag naar kwalitatieve bedrijfshuisvesting er groot en divers. Bradico is vertrouwd met het bouwen in Genk en omgeving.</p>
<p>We bouwen bedrijfshallen en staalconstructies voor productiebedrijven, logistieke spelers en opslagactiviteiten in de Genkse regio. Onze kennis van de lokale omstandigheden en vergunningsprocedures zorgt voor een vlot traject van ontwerp tot oplevering.</p>
<p>Elk project in Genk start met een terreinbezoek waarbij we uw locatie, noden en activiteit grondig bespreken. Op basis hiervan ontwerpen we een hal op maat en bezorgen we u binnen 48 uur een vaste-prijs offerte — volledig transparant, zonder verborgen kosten.</p>`,
  deelgemeenten: ["Genk", "Winterslag", "Waterschei", "Boxbergheide", "As", "Zutendaal"],
  buursteden: [
    { naam: "Hasselt", href: "/bedrijfshal-hasselt" },
    { naam: "Bilzen", href: "/bedrijfshal-bilzen" },
    { naam: "Lommel", href: "/bedrijfshal-lommel" },
    { naam: "Sint-Truiden", href: "/bedrijfshal-sint-truiden" },
    { naam: "Tongeren", href: "/bedrijfshal-tongeren" },
  ],
  faq: [
    { q: "Is Bradico actief in Genk?", a: "Ja, Bradico bouwt bedrijfshallen en staalconstructies in Genk en de ruime omgeving. We kennen de lokale situatie en vergunningsprocedures." },
    { q: "Kan Bradico bouwen op industrieterreinen in Genk?", a: "Ja, we zijn vertrouwd met de industriezones in Genk. Na een terreinbezoek beoordelen we de specifieke vereisten van uw locatie." },
    { q: "Wat kost een bedrijfshal bouwen in Genk?", a: "De prijs varieert naargelang de afmetingen en afwerking. Na terreinbezoek ontvangt u een gedetailleerde vaste-prijs offerte binnen 48 uur." },
    { q: "Hoe lang duurt een vergunningsprocedure in Genk?", a: "Vergunningsprocedures variëren, maar Bradico begeleidt u door het volledige proces — van aanvraag tot goedkeuring." },
  ],
};

export default function BedrijfshalGenk() {
  return <CityPageTemplate city={city} />;
}
