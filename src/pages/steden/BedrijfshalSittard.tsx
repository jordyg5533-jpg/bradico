import { CityPageTemplate, CityData } from "@/components/CityPageTemplate";

const city: CityData = {
  stad: "Sittard",
  metaTitle: "Bedrijfshal Bouwen Sittard-Geleen - vaste prijs, sleutelklaar | Bradico",
  metaDesc: "Bedrijfshal of staalconstructie laten bouwen in Sittard-Geleen? Bradico levert sleutelklaar op vaste prijs in de regio Sittard. Offerte binnen 48 uur.",
  canonical: "https://www.bv-bradico.be/bedrijfshal-sittard",
  intro: "Bradico bouwt bedrijfshallen, loodsen en staalconstructies in Sittard-Geleen - sleutelklaar op vaste prijs. Als Belgisch staalconstructiebedrijf uit Kinrooi zijn we actief in heel NL Limburg, inclusief de industriele regio Sittard-Geleen. Offerte binnen 48 uur na terreinbezoek.",
  body: `<p>Sittard-Geleen is een van de zwaarst geïndustrialiseerde regio's in Nederland. Het Chemelot Industrial Park - een van de grootste chemische productiecomplexen van Europa - domineert het economische landschap en trok er tientallen internationale chemie- en procesindustriebedrijven naartoe. Naast Chemelot zijn er de industriezones Holtum Noord en Emmaplein die ruimte bieden aan kmo's en middelgrote productiebedrijven. De ligging langs de A2, halverwege Maastricht en Roermond, maakt Sittard-Geleen bereikbaar vanuit heel Limburg en de aangrenzende regio's.</p>
<p>Bradico is een Belgisch staalconstructiebedrijf gevestigd in Kinrooi, op circa 60 km van Sittard via de A2. We zijn actief in heel NL Limburg en brengen dezelfde aanpak mee die we ook in Belgie hanteren: sleutelklare oplevering op vaste prijs, eigen prefab staalproductie en volledige begeleiding van het eerste gesprek tot de oplevering. Voor industriele omgevingen zoals Sittard-Geleen bouwen we hallen met grotere overspanningen, hogere dakprofielen en afwerkingen die aansluiten op de technische eisen van productiebedrijven.</p>
<p>Elk project in Sittard-Geleen start met een grondige bespreking op uw locatie. We kijken naar de terreinomstandigheden, de nabijheid van bestaande infrastructuur op Holtum Noord of de Chemelot-zone, en de specifieke functionele eisen van uw activiteit. Binnen 48 uur na het terreinbezoek ontvangt u een vaste-prijs offerte in euro's - volledig gespecificeerd, transparant en zonder verborgen kosten. De omgevingsvergunningsprocedure begeleiden we in samenwerking met lokale architecten die de gemeente Sittard-Geleen kennen.</p>`,
  deelgemeenten: ["Sittard", "Geleen", "Born", "Limbricht", "Munstergeleen", "Guttecoven"],
  buursteden: [
    { naam: "Roermond", href: "/bedrijfshal-roermond" },
    { naam: "Weert", href: "/bedrijfshal-weert" },
    { naam: "Venlo", href: "/bedrijfshal-venlo" },
    { naam: "Maaseik", href: "/bedrijfshal-maaseik" },
  ],
  faq: [
    {
      q: "Is Bradico actief in Sittard-Geleen?",
      a: "Ja, Bradico werkt in Sittard-Geleen en de ruime omgeving. We zijn gevestigd in Kinrooi (Belgie), op circa 60 km van Sittard, en zijn actief in heel NL Limburg voor staalconstructie- en bedrijfshalprojecten.",
    },
    {
      q: "Wat kost een bedrijfshal bouwen in Sittard-Geleen?",
      a: "De prijs hangt af van de afmetingen, het afwerkingsniveau en de technische eisen. Na een terreinbezoek ontvangt u binnen 48 uur een vaste-prijs offerte in euro's, volledig gespecificeerd.",
    },
    {
      q: "Kan Bradico bouwen in de buurt van Chemelot of Holtum Noord?",
      a: "Ja, we zijn vertrouwd met de industriele bouwcontext in Sittard-Geleen, inclusief de specifieke eisen die industriezones zoals Holtum Noord stellen aan nieuwe bebouwing en vergunningstrajecten.",
    },
    {
      q: "Regelt Bradico de omgevingsvergunning voor projecten in Sittard?",
      a: "Ja, we begeleiden u in het volledige Nederlandse vergunningstraject. We werken samen met lokale architecten die de procedures bij de gemeente Sittard-Geleen kennen.",
    },
  ],
};

export default function BedrijfshalSittard() {
  return <CityPageTemplate city={city} />;
}
