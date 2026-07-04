import { CityPageTemplate, CityData } from "@/components/CityPageTemplate";

const city: CityData = {
  stad: "Kinrooi",
  metaTitle: "Bedrijfshal Bouwen Kinrooi - lokale aannemer, vaste prijs | Bradico",
  metaDesc: "Bedrijfshal of staalconstructie laten bouwen in Kinrooi? Bradico is gevestigd in Kinrooi en levert sleutelklaar op vaste prijs. Offerte binnen 48 uur.",
  canonical: "https://www.bv-bradico.be/bedrijfshal-kinrooi",
  intro: "Bradico is uw lokale aannemer voor bedrijfshallen, loodsen en staalconstructies in Kinrooi. Als erkend aannemer gevestigd op de Venlosesteenweg in Kinrooi kennen we de regio als geen ander - van vergunningsaanvragen bij de gemeente tot de specifieke terreinomstandigheden aan de Maas.",
  body: `<p>Kinrooi is een groeiende gemeente in Oost-Limburg, centraal gelegen aan de Nederlandse grens. Steeds meer ondernemers kiezen voor Kinrooi als vestigingsplaats - lage grondprijzen, goede verbindingen met Eindhoven, Roermond en Antwerpen, en volop ruimte voor nieuwe bedrijventerreinen.</p>
<p>Bradico is hier niet zomaar actief: wij zijn gevestigd in Kinrooi zelf. Dat betekent dat uw project wordt uitgevoerd door een team dat de gemeente door en door kent - een lokale aannemer die weet welke percelen bebouwbaar zijn, welke vergunningsroutes sneller lopen en welke omstandigheden op het terrein u kunt verwachten.</p>
<p>We bouwen bedrijfshallen, industriële loodsen en staalconstructies op maat voor ondernemers in Kinrooi, Bocholt, Bree en de bredere Maaslandregio. Van een kleine opslagruimte van 200 m² tot een volledig geïntegreerd bedrijfscomplex van 3.000 m² - altijd op vaste prijs, altijd met één aanspreekpunt.</p>`,
  deelgemeenten: ["Kinrooi", "Kessenich", "Ophoven", "Molenbeersel", "Geistingen"],
  buursteden: [
    { naam: "Maaseik", href: "/bedrijfshal-maaseik" },
    { naam: "Lommel", href: "/bedrijfshal-lommel" },
    { naam: "Bilzen", href: "/bedrijfshal-bilzen" },
    { naam: "Hasselt", href: "/bedrijfshal-hasselt" },
  ],
  faq: [
    {
      q: "Is Bradico zelf gevestigd in Kinrooi?",
      a: "Ja, Bradico is gevestigd op de Venlosesteenweg 418 in Kinrooi. Wij zijn een echte lokale aannemer die de gemeente en de Maaslandregio van binnenuit kent.",
    },
    {
      q: "Welke vergunningen zijn nodig voor een bedrijfshal in Kinrooi?",
      a: "Voor een bedrijfshal in Kinrooi is een omgevingsvergunning vereist. Bradico begeleidt de volledige aanvraagprocedure bij de gemeente Kinrooi en zorgt voor een vlot traject.",
    },
    {
      q: "Hoe lang duurt de bouw van een bedrijfshal in Kinrooi?",
      a: "Afhankelijk van de grootte en complexiteit bouwen we een standaard bedrijfshal in 8 tot 16 weken na goedkeuring van de vergunning. Wij houden u stap voor stap op de hoogte.",
    },
    {
      q: "Werkt Bradico ook over de grens in Nederlands Limburg?",
      a: "Ja, naast Kinrooi en de Belgische Maaslandregio zijn we actief in Nederlands Limburg - onder andere in Roermond, Venlo, Weert en Bree. Grensoverschrijdend werken is voor ons vertrouwd.",
    },
  ],
};

const BedrijfshalKinrooi = () => <CityPageTemplate city={city} />;
export default BedrijfshalKinrooi;
