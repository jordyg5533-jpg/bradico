import { CityPageTemplate, CityData } from "@/components/CityPageTemplate";

const city: CityData = {
  stad: "Lommel",
  metaTitle: "Bedrijfshal Bouwen Lommel — vaste prijs, sleutelklaar | Bradico",
  metaDesc: "Bedrijfshal of staalconstructie laten bouwen in Lommel? Bradico levert sleutelklaar op vaste prijs in Lommel en Noord-Limburg. Offerte binnen 48 uur.",
  canonical: "https://www.bradico.be/bedrijfshal-lommel",
  intro: "Bradico bouwt bedrijfshallen, loodsen en staalconstructies in Lommel en Noord-Limburg — sleutelklaar op vaste prijs. Van ontwerp en vergunning tot oplevering. Offerte binnen 48 uur na terreinbezoek.",
  body: `<p>Lommel heeft een uitgebreid industrieel weefsel en ligt strategisch centraal in Noord-Limburg, nabij de Nederlandse grens en de E314. De regio is aantrekkelijk voor productie-, logistieke en technologische bedrijven die ruimte nodig hebben voor hun activiteiten.</p>
<p>Bradico bouwt bedrijfshallen en staalconstructies in Lommel en de Noord-Limburgse regio. We zijn actief aan beide kanten van de Belgisch-Nederlandse grens en begrijpen de specifieke noden van ondernemers in deze grensregio.</p>
<p>Elk project in Lommel wordt behandeld met dezelfde aanpak: grondig terreinbezoek, technisch ontwerp op maat, vaste-prijs offerte binnen 48 uur en een sleutelklare oplevering inclusief vergunningsbegeleiding. Eén aanspreekpunt, geen verrassingen.</p>`,
  deelgemeenten: ["Lommel", "Lommel-Werkplaatsen", "Lommel-Kolonie", "Kattenbos", "Stevensvennen"],
  buursteden: [
    { naam: "Hasselt", href: "/bedrijfshal-hasselt" },
    { naam: "Genk", href: "/bedrijfshal-genk" },
    { naam: "Bilzen", href: "/bedrijfshal-bilzen" },
    { naam: "Sint-Truiden", href: "/bedrijfshal-sint-truiden" },
    { naam: "Antwerpen", href: "/bedrijfshal-antwerpen" },
  ],
  faq: [
    { q: "Bouwt Bradico bedrijfshallen in Lommel?", a: "Ja, Bradico is actief in Lommel en Noord-Limburg. We bouwen bedrijfshallen, loodsen en staalconstructies op vaste prijs." },
    { q: "Is Bradico ook actief in Nederlands Limburg nabij Lommel?", a: "Ja, Bradico werkt aan beide kanten van de grens — zowel in Belgisch als Nederlands Limburg." },
    { q: "Hoe snel kan ik een offerte krijgen in Lommel?", a: "Na een terreinbezoek ontvangt u binnen 48 uur een gedetailleerde vaste-prijs offerte. Neem contact op om een afspraak te plannen." },
    { q: "Wat kost een bedrijfshal bouwen in Lommel?", a: "De prijs hangt af van de afmetingen en afwerking. Bradico werkt altijd met een transparante vaste prijs na terreinbezoek." },
  ],
};

export default function BedrijfshalLommel() {
  return <CityPageTemplate city={city} />;
}
