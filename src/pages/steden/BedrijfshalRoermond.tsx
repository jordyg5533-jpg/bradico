import { CityPageTemplate, CityData } from "@/components/CityPageTemplate";

const city: CityData = {
  stad: "Roermond",
  metaTitle: "Bedrijfshal Bouwen Roermond - vaste prijs, sleutelklaar | Bradico",
  metaDesc: "Bedrijfshal of staalconstructie laten bouwen in Roermond? Bradico is gevestigd in Kinrooi, op 20 minuten van Roermond. Vaste prijs, offerte binnen 48 uur.",
  canonical: "https://www.bv-bradico.be/bedrijfshal-roermond",
  intro: "Bradico bouwt bedrijfshallen, loodsen en staalconstructies in Roermond - sleutelklaar op vaste prijs. Wij zijn gevestigd in het Belgische Kinrooi, op 20 minuten rijden van Roermond. Offerte binnen 48 uur na terreinbezoek.",
  body: `<p>Roermond is het economische hart van Midden-Limburg en een belangrijke logistieke schakel in het zuiden van Nederland. De industrieterreinen Roermond-Maasniel, Kapellerpoort en Witte Leeuw - strategisch gelegen aan de oevers van de Maas - huisvesten uiteenlopende bedrijven in productie, logistiek en groothandel. De kruising van de A73 en de A2 maakt Roermond tot een van de best ontsloten regio's in Limburg NL, met directe verbindingen naar Venlo, Eindhoven en Maastricht.</p>
<p>Bradico is een Belgisch staalconstructiebedrijf gevestigd in Kinrooi, op slechts 20 minuten rijden van Roermond. Wij werken regelmatig aan weerszijden van de Maas en kennen zowel de Belgische als de Nederlandse context van vergunningen, grondslagen en bouwregelgeving. Voor opdrachtgevers in Roermond betekent dit geen extra reiskosten, snelle terreinbezoeken en een aannemer die vlot bereikbaar is. We bouwen bedrijfshallen en loodsen voor bedrijven in Roermond, Maasniel, Herten, Swalmen en Sint Odilienberg.</p>
<p>Elk project start met een persoonlijk terreinbezoek waarbij we uw locatie, uw activiteit en uw wensen grondig in kaart brengen. Op basis daarvan ontwerpen we een stalen hal op maat en bezorgen we u binnen 48 uur een vaste-prijs offerte - volledig transparant, inclusief ruwbouw, dakwerken en buitenschrijnwerk. De omgevingsvergunning begeleiden we in samenwerking met lokale architecten die de Roermondse procedures kennen.</p>`,
  deelgemeenten: ["Roermond", "Maasniel", "Herten", "Swalmen", "Sint Odilienberg"],
  buursteden: [
    { naam: "Weert", href: "/bedrijfshal-weert" },
    { naam: "Venlo", href: "/bedrijfshal-venlo" },
    { naam: "Kinrooi", href: "/bedrijfshal-kinrooi" },
    { naam: "Maaseik", href: "/bedrijfshal-maaseik" },
  ],
  faq: [
    {
      q: "Is Bradico actief in Roermond?",
      a: "Ja, Bradico werkt regelmatig in Roermond en de ruime omgeving. Ons bedrijf is gevestigd in Kinrooi (Belgie), op slechts 20 minuten rijden van Roermond. We rekenen geen extra reiskosten aan voor projecten in de regio.",
    },
    {
      q: "Wat kost een bedrijfshal bouwen in Roermond?",
      a: "De prijs wordt bepaald door de afmetingen, het afwerkingsniveau en de locatie op het terrein. Na een terreinbezoek ontvangt u binnen 48 uur een vaste-prijs offerte in euro's, zonder verborgen kosten.",
    },
    {
      q: "Werkt Bradico ook met de Nederlandse omgevingsvergunning?",
      a: "Ja, Bradico begeleidt u in het vergunningstraject ook voor Nederlandse projecten. We werken samen met lokale architecten die de procedures bij de gemeente Roermond kennen.",
    },
    {
      q: "Hoe lang duurt de bouw van een bedrijfshal in Roermond?",
      a: "Na het verlenen van de omgevingsvergunning wordt een stalen bedrijfshal typisch binnen 8 tot 16 weken opgeleverd, afhankelijk van de omvang en afwerking.",
    },
  ],
};

export default function BedrijfshalRoermond() {
  return <CityPageTemplate city={city} />;
}
