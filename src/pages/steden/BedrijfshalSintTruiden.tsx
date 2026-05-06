import { CityPageTemplate, CityData } from "@/components/CityPageTemplate";

const city: CityData = {
  stad: "Sint-Truiden",
  metaTitle: "Bedrijfshal Bouwen Sint-Truiden — vaste prijs | Bradico",
  metaDesc: "Bedrijfshal of staalconstructie laten bouwen in Sint-Truiden? Bradico levert sleutelklaar op vaste prijs in de Haspengouwse regio. Offerte binnen 48 uur.",
  canonical: "https://www.bradico.be/bedrijfshal-sint-truiden",
  intro: "Bradico bouwt bedrijfshallen, loodsen en staalconstructies in Sint-Truiden en de Haspengouwse regio — sleutelklaar op vaste prijs. Van vergunning tot oplevering, één aanspreekpunt. Offerte binnen 48 uur.",
  body: `<p>Sint-Truiden en de Haspengouwse regio kenmerken zich door een mix van agrarische activiteit, kleinschalige industrie en handelsondernemingen. De vraag naar efficiënte bedrijfshuisvesting — van landbouwloodsen tot productie- en opslaghallen — is er continu aanwezig.</p>
<p>Bradico bouwt bedrijfshallen en staalconstructies in Sint-Truiden en omgeving. We zijn vertrouwd met de specifieke noden van Haspengouwse ondernemers en werken nauw samen met lokale overheden voor een vlotte vergunningsprocedure.</p>
<p>Of u nu een nieuwe opslagloods, een agrarische hal of een complete bedrijfsunit wilt bouwen — Bradico werkt altijd op vaste prijs na terreinbezoek. Transparant, degelijk en snel. Offerte binnen 48 uur.</p>`,
  deelgemeenten: ["Sint-Truiden", "Aalst", "Brustem", "Duras", "Gelinden", "Groot-Gelmen", "Nieuwerkerken"],
  buursteden: [
    { naam: "Hasselt", href: "/bedrijfshal-hasselt" },
    { naam: "Tongeren", href: "/bedrijfshal-tongeren" },
    { naam: "Bilzen", href: "/bedrijfshal-bilzen" },
    { naam: "Genk", href: "/bedrijfshal-genk" },
    { naam: "Lommel", href: "/bedrijfshal-lommel" },
  ],
  faq: [
    { q: "Bouwt Bradico in Sint-Truiden en omgeving?", a: "Ja, Bradico is actief in Sint-Truiden en de Haspengouwse regio voor het bouwen van bedrijfshallen, loodsen en staalconstructies." },
    { q: "Kan Bradico ook landbouwloodsen bouwen in Sint-Truiden?", a: "Absoluut. We bouwen loodsen voor agrarisch gebruik, opslag, productie en combinaties — altijd op maat en op vaste prijs." },
    { q: "Hoe vraag ik een offerte aan voor een project in Sint-Truiden?", a: "Neem contact op via het formulier of bel ons. Na een terreinbezoek ontvangt u binnen 48 uur een vaste-prijs offerte." },
    { q: "Regelt Bradico ook vergunningen in Sint-Truiden?", a: "Ja, vergunningsbegeleiding bij de stad Sint-Truiden is inbegrepen in onze totaalformule." },
  ],
};

export default function BedrijfshalSintTruiden() {
  return <CityPageTemplate city={city} />;
}
