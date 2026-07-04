import { CityPageTemplate, CityData } from "@/components/CityPageTemplate";

const city: CityData = {
  stad: "Maaseik",
  metaTitle: "Bedrijfshal Bouwen Maaseik - erkend aannemer Oost-Limburg | Bradico",
  metaDesc: "Bedrijfshal of loods laten bouwen in Maaseik? Bradico levert staalconstructies en industriebouw op vaste prijs in de Maasregio. Offerte binnen 48 uur.",
  canonical: "https://www.bv-bradico.be/bedrijfshal-maaseik",
  intro: "Bradico bouwt bedrijfshallen, loodsen en staalconstructies in Maaseik en de bredere Maasregio. Als gevestigde aannemer in Kinrooi zijn we uw buurtaannemer - we kennen Oost-Limburg van binnenuit en leveren altijd op vaste prijs, sleutelklaar.",
  body: `<p>Maaseik is de hoofdgemeente van Oost-Limburg, gelegen aan de Maas op de grens met Nederland. De regio trekt steeds meer bedrijven aan die profiteren van de strategische ligging, de aantrekkelijke grondenmarkt en de bereikbaarheid via de E314 en N78.</p>
<p>Voor ondernemers die in Maaseik een bedrijfshal, loods of industrieel gebouw willen optrekken, is Bradico de lokale keuze. Wij zijn gevestigd in Kinrooi - op een steenworp van Maaseik - en voeren projecten uit in heel de Maasregio: Neeroeteren, Opoeteren, Aldeneik en de aangrenzende gemeenten.</p>
<p>Bradico biedt een volledig sleutelklare aanpak: van het eerste terreinbezoek en de vergunningsaanvraag tot de staalconstructie, sandwichpanelen, dakwerken en afwerking. Alles met één aannemer, één prijs, één aanspreekpunt - zonder meerwerken of verrassingen.</p>`,
  deelgemeenten: ["Maaseik", "Neeroeteren", "Opoeteren", "Aldeneik"],
  buursteden: [
    { naam: "Kinrooi", href: "/bedrijfshal-kinrooi" },
    { naam: "Bilzen", href: "/bedrijfshal-bilzen" },
    { naam: "Hasselt", href: "/bedrijfshal-hasselt" },
    { naam: "Lommel", href: "/bedrijfshal-lommel" },
  ],
  faq: [
    {
      q: "Hoe ver is Bradico van Maaseik?",
      a: "Bradico is gevestigd in Kinrooi, op circa 10 km van Maaseik. We zijn daarmee een echte buurtaannemer voor ondernemers in de Maasregio.",
    },
    {
      q: "Wat kost een bedrijfshal bouwen in Maaseik?",
      a: "De prijs hangt af van oppervlakte, type constructie, funderingen en gewenste afwerking. Na een gratis terreinbezoek ontvangt u binnen 48 uur een vaste offerte zonder verrassingen.",
    },
    {
      q: "Helpt Bradico met de vergunningsaanvraag in Maaseik?",
      a: "Ja, Bradico begeleidt de volledige vergunningsaanvraag bij de gemeente Maaseik. We kennen de lokale procedures en zorgen voor een vlot en correct dossier.",
    },
    {
      q: "Kan Bradico ook over de grens bouwen vanuit Maaseik?",
      a: "Ja, Bradico is actief in zowel Belgisch als Nederlands Limburg. We voeren projecten uit in Roermond, Venlo en de bredere grensregio vanuit onze thuisbasis in Kinrooi.",
    },
  ],
};

const BedrijfshalMaaseik = () => <CityPageTemplate city={city} />;
export default BedrijfshalMaaseik;
