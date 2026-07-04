import { KennisPageTemplate, KennisData } from "@/components/KennisPageTemplate";

const kennis: KennisData = {
  metaTitle: "Industriële loods bouwen - alles wat u moet weten | Bradico Limburg",
  metaDesc: "Industriële loods laten bouwen in Limburg? Alles over types loodsen, vergunningen, kosten en het bouwproces van Bradico. Offerte binnen 48 uur na terreinbezoek.",
  canonical: "https://www.bv-bradico.be/kennis/industriele-loods-bouwen",
  h1: "Industriële loods bouwen - alles wat u moet weten",
  intro: "Een industriële loods bouwen is een grote investering. Bradico legt uit welke types loodsen er zijn, wat de kostprijs bepaalt, welke vergunningen u nodig heeft en hoe het bouwproces stap voor stap verloopt.",
  body: `<h2>Types industriële loodsen</h2>
<p>Niet elke loods is hetzelfde. De keuze van het type loods hangt af van uw activiteit, de vereiste oppervlakte en uw budget:</p>
<ul>
  <li><strong>Opslagloods:</strong> Eenvoudige, niet-geïsoleerde of licht-geïsoleerde loods voor algemene opslag. De goedkoopste optie.</li>
  <li><strong>Landbouwloods:</strong> Specifiek ontworpen voor landbouwmachines, oogst of veestalling. Meestal zonder vloerverwarming en met grote schuifdeuren.</li>
  <li><strong>Industriële productiehal:</strong> Geïsoleerde loods met sandwichpanelen, specifieke ventilatie en technische aansluitingen voor productie-activiteiten.</li>
  <li><strong>Distributieloods:</strong> Hoge vrije hoogte (10-14 m), grote laadkades en brede overspanning voor efficiënte logistiek en opslag.</li>
</ul>
<h2>Welke vergunningen zijn nodig voor een loods in Limburg?</h2>
<p>Voor het bouwen van een industriële loods in België is een omgevingsvergunning vereist. De aanvraag verloopt via het Omgevingsloket van de Vlaamse overheid.</p>
<p>Belangrijke factoren die de vergunning beïnvloeden: de bestemming van de grond (industriegebied, landbouwzone, woongebied met bedrijf), de grootte van het gebouw, de milieu-impact van de activiteit en de bebouwingsgraad van het perceel.</p>
<p>Bradico begeleidt de volledige vergunningsaanvraag als onderdeel van de totaalformule - u hoeft zich hier niet zelf mee bezig te houden.</p>
<h2>Het bouwproces van een industriële loods bij Bradico</h2>
<p>Na het gratis terreinbezoek en de vaste-prijs offerte verloopt een typisch loodsbouwproject in 5 stappen:</p>
<ul>
  <li><strong>Vergunningsaanvraag:</strong> 4-8 weken (afhankelijk van gemeente en projecttype)</li>
  <li><strong>Voorbereiding en grondwerken:</strong> 1-2 weken</li>
  <li><strong>Fundering:</strong> 1-2 weken</li>
  <li><strong>Montage staalconstructie en sandwichpanelen:</strong> 2-6 weken</li>
  <li><strong>Afwerking en oplevering:</strong> 1-2 weken</li>
</ul>
<p>De totale doorlooptijd van een loods van 500-1.000 m² bedraagt gemiddeld 4 tot 6 maanden vanaf de start van de vergunningsaanvraag. Bradico bewaakt de planning strikt en houdt u elke stap op de hoogte.</p>
<h2>Loods bouwen in Limburg - actief werkgebied Bradico</h2>
<p>Bradico bouwt industriële loodsen in heel Limburg: Hasselt, Genk, Bilzen, Tongeren, Sint-Truiden, Lommel, Kinrooi, Maaseik en de volledige regio. Als gevestigd aannemer in Kinrooi kennen we de lokale terreinomstandigheden, de vergunningsprocedures en de noden van Limburgse ondernemers.</p>`,
  faq: [
    { q: "Kan ik een loods bouwen op landbouwgrond?", a: "In sommige gevallen wel, als de loods uitsluitend voor landbouwdoeleinden wordt gebruikt. Bradico adviseert u over de mogelijkheden op uw specifieke perceel na een gratis terreinbezoek." },
    { q: "Hoe hoog mag een industriële loods zijn?", a: "De maximale hoogte hangt af van de stedenbouwkundige voorschriften van de gemeente en de bestemming van het perceel. In industriegebied is doorgaans een vrije hoogte van 8-14 m mogelijk." },
    { q: "Heb ik een architect nodig voor een loods?", a: "Voor loodsen groter dan 500 m² is in België een architect verplicht betrokken bij de vergunningsaanvraag. Bradico werkt samen met erkende architecten die dit verzorgen als onderdeel van de totaalformule." },
    { q: "Kan Bradico ook de betonvloer van de loods aanleggen?", a: "Ja, vloerplaten in gewapend beton met de juiste druksterkte voor heftruck-gebruik kunnen als optie worden toegevoegd aan de offerte." },
  ],
};

const IndustrieleLoodsBouwen = () => <KennisPageTemplate kennis={kennis} />;
export default IndustrieleLoodsBouwen;
