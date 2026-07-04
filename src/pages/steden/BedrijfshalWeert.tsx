import { CityPageTemplate, CityData } from "@/components/CityPageTemplate";

const city: CityData = {
  stad: "Weert",
  metaTitle: "Bedrijfshal Bouwen Weert - vaste prijs, sleutelklaar | Bradico",
  metaDesc: "Bedrijfshal of staalconstructie laten bouwen in Weert? Bradico is gevestigd vlak over de Belgische grens, op 30 km van Weert. Vaste prijs, offerte binnen 48 uur.",
  canonical: "https://www.bv-bradico.be/bedrijfshal-weert",
  intro: "Bradico bouwt bedrijfshallen, loodsen en staalconstructies in Weert - sleutelklaar op vaste prijs. Gevestigd in het Belgische Kinrooi, op 30 minuten van Weert, zijn we een vaste partner voor ondernemers in de Weerter regio. Offerte binnen 48 uur na terreinbezoek.",
  body: `<p>Weert is een groeigemeente in het westen van NL Limburg met een sterk aanbod aan industriele en logistieke bedrijventerreinen. Kampershoek, Keizerbosch en Leuken zijn de drie grote zones die bedrijven in productie, opslag en dienstverlening huisvesten. De ligging direct aan de A2 - de verbindingsas tussen Eindhoven en Maastricht - maakt Weert tot een logische vestigingsplaats voor bedrijven die de Randstad, Brussel en het Ruhrgebied snel willen bereiken.</p>
<p>Bradico is gevestigd in Kinrooi (Belgie), op circa 30 km van Weert, vlak over de Belgische grens nabij Bocholt. Die korte afstand vertaalt zich in praktische voordelen voor opdrachtgevers in Weert: geen hoge mobiliteitskosten, snelle terreinbezoeken en een aannemer die de grensregio goed kent. We bouwen stalen bedrijfshallen en loodsen op maat voor kmo's en grotere industriele spelers op Kampershoek, Keizerbosch, Leuken en de omliggende terreinen.</p>
<p>Na een persoonlijk terreinbezoek brengen we uw activiteit, perceel en bouwwensen in kaart. Op basis daarvan ontwerpen we een hal die perfect aansluit op uw noden, en bezorgen we u binnen 48 uur een vaste-prijs offerte - volledig gespecificeerd in euro's, ruwbouw tot buitenschrijnwerk. De omgevingsvergunningsprocedure begeleiden we samen met lokale architecten die de gemeente Weert kennen.</p>`,
  deelgemeenten: ["Weert", "Stramproy", "Altweerterheide", "Laar", "Tungelroy"],
  buursteden: [
    { naam: "Roermond", href: "/bedrijfshal-roermond" },
    { naam: "Venlo", href: "/bedrijfshal-venlo" },
    { naam: "Lommel", href: "/bedrijfshal-lommel" },
    { naam: "Bree", href: "/bedrijfshal-bree" },
  ],
  faq: [
    {
      q: "Is Bradico actief in Weert?",
      a: "Ja, Bradico werkt regelmatig in Weert en de omgeving. Ons bedrijf is gevestigd in Kinrooi (Belgie), op circa 30 km van Weert. We rekenen geen extra reiskosten aan voor projecten in de Weerter regio.",
    },
    {
      q: "Wat kost een bedrijfshal bouwen in Weert?",
      a: "De prijs wordt bepaald door de afmetingen, het afwerkingsniveau en de locatie op het terrein. Na een terreinbezoek ontvangt u binnen 48 uur een vaste-prijs offerte in euro's, zonder verborgen kosten.",
    },
    {
      q: "Op welke bedrijventerreinen in Weert bouwt Bradico?",
      a: "Bradico bouwt op alle grote bedrijventerreinen in Weert, waaronder Kampershoek, Keizerbosch en Leuken. We zijn vertrouwd met de stedenbouwkundige en planologische regels in de gemeente Weert.",
    },
    {
      q: "Werkt Bradico ook met de Nederlandse omgevingsvergunning?",
      a: "Ja, we begeleiden u in het Nederlandse vergunningstraject, in samenwerking met lokale architecten die de procedures bij de gemeente Weert goed kennen.",
    },
  ],
};

export default function BedrijfshalWeert() {
  return <CityPageTemplate city={city} />;
}
