import { ServicePageTemplate, ServiceData } from "@/components/ServicePageTemplate";

const service: ServiceData = {
  metaTitle: "Offerte industriebouw aanvragen | Bradico Limburg",
  metaDesc: "Vrijblijvend offerte aanvragen voor uw industriebouw, bedrijfshal of loods. Bradico bezorgt u binnen 48 uur een heldere, vaste prijsofferte.",
  canonical: "https://www.bv-bradico.be/offerte-industriebouw",
  h1: "Offerte industriebouw aanvragen  -  vaste prijs binnen 48 uur",
  tagline: "Bradico bezorgt u binnen 48 uur na terreinbezoek een volledige, vaste-prijs offerte voor uw industriebouw. Geen vrijblijvende richtprijzen  -  een echte prijs waar u op kunt rekenen.",
  img: "/projects/bhal3.jpeg",
  imgAlt: "Offerte industriebouw aanvragen bij Bradico Limburg",
  badges: ["Vaste prijs", "Offerte 48u", "Gratis terreinbezoek", "Geen verplichtingen"],
  intro: `<p>Een offerte aanvragen voor industriebouw hoeft niet ingewikkeld te zijn. Bij Bradico verloopt het proces transparant en snel: u beschrijft uw project, wij komen ter plaatse, en binnen 48 uur heeft u een gedetailleerde, vaste prijs. Geen richtprijzen, geen "onder voorbehoud"  -  een vaste prijs voor het volledige project.</p>
<p>Het terreinbezoek en de offerte zijn volledig gratis en vrijblijvend. U bent tot niets verplicht.</p>`,
  body: `<h2>Wat heeft u nodig voor een offerte?</h2>
<p>Om een nauwkeurige offerte op te stellen heeft Bradico een aantal basisgegevens nodig. U hoeft niet alles precies te weten  -  een globaal beeld is voldoende om te starten:</p>
<ul>
  <li><strong>Bouwgrond beschikbaar of niet:</strong> Heeft u al een perceel, of bent u nog op zoek naar een locatie? In beide gevallen kunnen we adviseren.</li>
  <li><strong>Gewenste oppervlakte:</strong> Geef een indicatie van de vloeroppervlakte die u nodig heeft  -  in m². Een ruwe schatting volstaat.</li>
  <li><strong>Type gebouw:</strong> Opslagloods, productiefaciliteit, werkplaats, magazijn, kantoorhal of combinatie? Hoe meer detail, hoe accurater de offerte.</li>
  <li><strong>Tijdlijn:</strong> Wanneer wil u starten? Wanneer wil u de hal in gebruik nemen? Dat helpt ons de planning afstemmen op uw noden.</li>
</ul>
<p>Andere informatie die nuttig kan zijn: gewenste vrije hoogte, poortposities, specifieke technische vereisten (kraan, koeling, sprinkler), en of er kantoor- of sanitaire ruimte nodig is.</p>

<h2>Het offerte-proces in 4 stappen</h2>

<h3>Stap 1: Aanvraag indienen</h3>
<p>Vul het contactformulier in onderaan deze pagina. Geef een korte omschrijving van uw project: type gebouw, gewenste oppervlakte, locatie en tijdlijn. U ontvangt binnen 1 werkdag een bevestiging en een voorstel voor een terreinbezoek.</p>

<h3>Stap 2: Gratis terreinbezoek</h3>
<p>Een Bradico-technieker komt ter plaatse. We bekijken het terrein, nemen maten op, beoordelen de toegankelijkheid en bespreken uw project in detail. Dit bezoek duurt doorgaans 30 tot 60 minuten en is volledig kosteloos.</p>

<h3>Stap 3: Vaste offerte binnen 48 uur</h3>
<p>Na het terreinbezoek ontvangt u binnen 48 uur een gedetailleerde offerte. Die offerte bevat: een volledige omschrijving van het project, de staalconstructie, gevelbeplating, dak, poorten en lichtstraten. De prijs is vast  -  geen richtprijzen, geen indexering, geen meerwerken bij normale uitvoering.</p>

<h3>Stap 4: Bespreking en beslissing</h3>
<p>Heeft u vragen bij de offerte? We bespreken ze graag  -  telefonisch of in een tweede gesprek. U neemt de tijd die u nodig heeft. Er is geen druk en geen tijdslimiet op de offerte.</p>

<h2>Waarom kiezen voor Bradico?</h2>
<ul>
  <li><strong>Vaste prijs:</strong> De offerte is de prijs. Geen bijbestellingen of meerwerken bij normale projectuitvoering.</li>
  <li><strong>48 uur reactietijd:</strong> Na terreinbezoek heeft u binnen 48 uur een complete offerte  -  geen weken wachten.</li>
  <li><strong>Lokaal in Limburg:</strong> Bradico is gevestigd in Limburg en werkt in heel de regio. Korte communicatielijnen en lokale kennis van bodem, gemeenten en leveranciers.</li>
  <li><strong>Eén aanspreekpunt:</strong> Van eerste gesprek tot oplevering werkt u met dezelfde persoon. Geen doorschuiven naar onderaannemers of projectmanagers.</li>
  <li><strong>Volledig ontzorgd:</strong> Bradico regelt de vergunningsaanvraag, de prefabricage en de montage. U hoeft niets zelf te coördineren.</li>
</ul>

<h2>Prijs op aanvraag: vaste prijs na terreinbezoek</h2>
<p>De prijs van uw industriebouwproject hangt af van de afmetingen, het type gebouw, de bodemgesteldheid, de isolatiegraad en de specifieke vereisten van uw activiteit. Elke situatie is anders - Bradico geeft geen richtprijzen die achteraf worden bijgesteld.</p>
<p>Na het gratis terreinbezoek ontvangt u binnen 48 uur een bindende vaste-prijs offerte voor uw specifiek project. Geen meerwerken, geen factuurverrassingen - u weet exact wat uw industriebouw kost voor u tekent.</p>`,
  steps: [
    { nr: "01", title: "Aanvraag indienen", desc: "Vul het contactformulier in met een korte projectomschrijving." },
    { nr: "02", title: "Terreinbezoek", desc: "Gratis bezoek ter plaatse  -  maten, terrein, bespreking noden." },
    { nr: "03", title: "Offerte 48u", desc: "Gedetailleerde vaste-prijs offerte binnen 48 uur na bezoek." },
    { nr: "04", title: "Beslissing", desc: "U beslist in uw eigen tempo  -  geen druk, geen tijdslimiet." },
  ],
  why: [
    { t: "Vaste prijs", d: "De offerte is de prijs  -  geen meerwerken, geen bijbestellingen." },
    { t: "48u reactietijd", d: "Na terreinbezoek heeft u binnen 48 uur een complete offerte." },
    { t: "Gratis terreinbezoek", d: "Het terreinbezoek en de offerte zijn volledig kosteloos en vrijblijvend." },
    { t: "Lokaal in Limburg", d: "Bradico werkt vanuit Limburg  -  korte lijnen, lokale kennis, snelle reactie." },
  ],
  faq: [
    { q: "Is het terreinbezoek gratis?", a: "Ja, volledig. Het terreinbezoek en de offerte zijn kosteloos en vrijblijvend. U bent tot niets verplicht." },
    { q: "Hoe snel ontvangt u een offerte?", a: "Binnen 48 uur na het terreinbezoek ontvangt u een gedetailleerde, vaste-prijs offerte per e-mail." },
    { q: "Is de offerte ook geldig als vaste prijs?", a: "Ja. Bradico werkt uitsluitend met vaste prijzen. De offerte-prijs is de definitieve prijs  -  geen meerwerken of indexering bij normale projectuitvoering." },
    { q: "Wat als u nog geen bouwgrond heeft?", a: "Dan kunt u toch al een offerte aanvragen op basis van een gewenste oppervlakte en type. Bradico adviseert u ook over zoekzones en mogelijkheden in Limburg." },
    { q: "Voor welke projecten kan ik een offerte aanvragen?", a: "Alle industriebouwprojecten: bedrijfshallen, loodsen, magazijnen, productiefaciliteiten, carports, uitbreidingen en gevelrenovaties. Ook kleine projecten zijn welkom." },
  ],
};

export default function OfferteBedrijfshal() {
  return <ServicePageTemplate service={service} />;
}
