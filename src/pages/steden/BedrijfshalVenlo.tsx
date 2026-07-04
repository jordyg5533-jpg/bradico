import { CityPageTemplate, CityData } from "@/components/CityPageTemplate";

const city: CityData = {
  stad: "Venlo",
  metaTitle: "Bedrijfshal Bouwen Venlo - vaste prijs, sleutelklaar | Bradico",
  metaDesc: "Bedrijfshal of loods laten bouwen in Venlo? Bradico is een Belgisch staalconstructiebedrijf actief in NL Limburg. Vaste prijs, offerte binnen 48 uur.",
  canonical: "https://www.bv-bradico.be/bedrijfshal-venlo",
  intro: "Bradico bouwt bedrijfshallen, loodsen en staalconstructies in Venlo - sleutelklaar op vaste prijs. Als Belgisch staalconstructiebedrijf uit Kinrooi zijn we actief in heel NL Limburg, met Venlo als een van onze kernmarkten. Offerte binnen 48 uur na terreinbezoek.",
  body: `<p>Venlo is een van de grootste logistieke knooppunten van Nederland en staat internationaal bekend als distributiepoort naar Duitsland en verder Europa. Trade Port Noord, Greenpark Venlo en de omgeving van de A67-A73 kruising herbergen tientallen grote distributiecentra van spelers als Amazon, DHL en grote retailketens. Daarnaast is de vershandel - met de Venlose veiling als anker - al decennialang een motor voor bedrijvigheid in de regio. Die schaalgrootte vraagt om robuuste en efficiënt gebouwde bedrijfshuisvesting.</p>
<p>Bradico is een Belgisch staalconstructiebedrijf gevestigd in Kinrooi, op circa 50 km van Venlo via de A73. We zijn actief in heel NL Limburg en werken met dezelfde werkwijze op beide zijden van de grens: sleutelklare oplevering op vaste prijs, eigen prefab staalproductie, en een team dat u begeleidt van vergunning tot ingebruikname. Of het nu gaat om een grote opslagloods voor de logistieke sector, een productiehal in Trade Port Noord of een kleinere kmo-hal op een van de Venlose bedrijventerreinen - wij ontwerpen op maat van uw activiteit.</p>
<p>Elk project in Venlo start met een terreinbezoek. We bespreken uw locatie, uw bouwtechnische wensen en de planologische randvoorwaarden. Binnen 48 uur ontvangt u een vaste-prijs offerte in euro's, volledig gespecificeerd en zonder verborgen kosten. Voor de omgevingsvergunning werken we samen met lokale architecten die de procedures bij de gemeente Venlo van A tot Z beheersen.</p>`,
  deelgemeenten: ["Venlo", "Blerick", "Tegelen", "Belfeld", "Steyl", "Arcen"],
  buursteden: [
    { naam: "Roermond", href: "/bedrijfshal-roermond" },
    { naam: "Weert", href: "/bedrijfshal-weert" },
    { naam: "Sittard", href: "/bedrijfshal-sittard" },
    { naam: "Maaseik", href: "/bedrijfshal-maaseik" },
  ],
  faq: [
    {
      q: "Is Bradico actief in Venlo?",
      a: "Ja, Bradico is actief in Venlo en de ruime omgeving. We zijn gevestigd in Kinrooi (Belgie), op circa 50 km van Venlo, en werken regelmatig in NL Limburg voor logistieke en industriele projecten.",
    },
    {
      q: "Wat kost een bedrijfshal of loods bouwen in Venlo?",
      a: "De prijs hangt af van de afmetingen, het afwerkingsniveau en de terreinomstandigheden. Na een bezoek ter plaatse ontvangt u binnen 48 uur een vaste-prijs offerte in euro's.",
    },
    {
      q: "Kan Bradico grote loodsen bouwen voor de logistieke sector in Venlo?",
      a: "Ja, Bradico heeft ervaring met grotere staalconstructies voor logistieke en distributiedoeleinden. We passen de constructie aan op de specifieke eisen qua overspanning, dakhoogte en vloerbelasting.",
    },
    {
      q: "Regelt Bradico de omgevingsvergunning in Venlo?",
      a: "Ja, we begeleiden u in het volledige vergunningstraject. We werken samen met lokale architecten die de Venlose procedures en het bestemmingsplan kennen.",
    },
  ],
};

export default function BedrijfshalVenlo() {
  return <CityPageTemplate city={city} />;
}
