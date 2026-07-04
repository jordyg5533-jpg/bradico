import { CityPageTemplate, CityData } from "@/components/CityPageTemplate";

const city: CityData = {
  stad: "Bree",
  metaTitle: "Bedrijfshal Bouwen Bree - vaste prijs, sleutelklaar | Bradico",
  metaDesc: "Bedrijfshal of staalconstructie laten bouwen in Bree? Bradico is gevestigd op 10 km van Bree en levert sleutelklaar op vaste prijs. Offerte binnen 48 uur.",
  canonical: "https://www.bv-bradico.be/bedrijfshal-bree",
  intro: "Bradico bouwt bedrijfshallen, loodsen en staalconstructies in Bree - sleutelklaar op vaste prijs. Als buurman uit Kinrooi kennen we de regio Bree door en door. Offerte binnen 48 uur na terreinbezoek.",
  body: `<p>Bree is een dynamische centrumstad in het Maasland, omgeven door een groeiende industrieomgeving. De industriezone langs de Breugelweg biedt ruimte aan uiteenlopende bedrijven - van productiehallen tot opslagfaciliteiten en ambachtelijke bedrijven. De ligging vlakbij de Nederlandse grens en de verbinding via de N73 maken Bree interessant voor bedrijven die zowel de Belgische als de Nederlandse markt bedienen.</p>
<p>Bradico is gevestigd in Kinrooi, op slechts 10 km van Bree. Dat vertaalt zich concreet in lagere mobiliteitskosten, snellere reactietijden bij terreinbezoeken en een team dat de lokale context - de grond, de gemeente, de weginfrastructuur - door en door kent. We bouwen stalen bedrijfshallen en loodsen op maat voor ondernemers in Bree en de omliggende gemeenten zoals Opoeteren en Reppel.</p>
<p>Of u nu een nieuwe opslaghal, een productieruimte of een gemengd bedrijfsgebouw wenst - Bradico levert sleutelklaar op vaste prijs. Na een bezoek ter plaatse ontwerpen we een voorstel dat perfect aansluit bij uw activiteit, uw perceel en uw budget. Binnen 48 uur ontvangt u een gedetailleerde offerte, volledig transparant en zonder verborgen kosten.</p>`,
  deelgemeenten: ["Bree", "Gerdingen", "Tongerlo", "Opoeteren", "Reppel"],
  buursteden: [
    { naam: "Kinrooi", href: "/bedrijfshal-kinrooi" },
    { naam: "Maaseik", href: "/bedrijfshal-maaseik" },
    { naam: "Lommel", href: "/bedrijfshal-lommel" },
    { naam: "Peer", href: "/bedrijfshal-peer" },
  ],
  faq: [
    {
      q: "Is Bradico actief in Bree?",
      a: "Ja, en Bree behoort zelfs tot onze thuisregio. Bradico is gevestigd in Kinrooi, op 10 km van Bree. We zijn een van de dichtstbijzijnde staalconstructiebedrijven voor bouwheren in de Breese regio.",
    },
    {
      q: "Wat kost een bedrijfshal bouwen in Bree?",
      a: "De prijs wordt bepaald door de afmetingen, het type afwerking en de locatie. Na een terreinbezoek in Bree ontvangt u binnen 48 uur een vaste-prijs offerte zonder verrassingen.",
    },
    {
      q: "Hoe snel kan Bradico starten met een project in Bree?",
      a: "Dankzij onze korte afstand tot Bree kunnen we snel ter plaatse komen voor een terreinbezoek. Na het verlenen van de vergunning starten we de bouw doorgaans binnen de afgesproken termijn.",
    },
    {
      q: "Kan Bradico ook kleinere bedrijfshallen bouwen in Bree?",
      a: "Ja, we bouwen bedrijfshallen en loodsen voor kleine kmo's tot grote industriele projecten. Elke opdracht krijgt dezelfde aanpak: maatwerkontwerp, vaste prijs en professionele oplevering.",
    },
  ],
};

export default function BedrijfshalBree() {
  return <CityPageTemplate city={city} />;
}
