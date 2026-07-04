import { KennisPageTemplate, KennisData } from "@/components/KennisPageTemplate";

const kennis: KennisData = {
  metaTitle: "Wat kost een bedrijfshal bouwen in 2026? Prijsgids | Bradico",
  metaDesc: "Wat kost een bedrijfshal bouwen in Limburg? Ontdek de prijsfactoren, ruwe indicaties per m² en wat inbegrepen is bij Bradico. Offerte binnen 48 uur na terreinbezoek.",
  canonical: "https://www.bv-bradico.be/kennis/wat-kost-een-bedrijfshal-bouwen",
  h1: "Wat kost een bedrijfshal bouwen in 2026?",
  intro: "De prijs van een bedrijfshal hangt af van oppervlakte, type constructie, isolatiegraad en afwerking. In deze gids geeft Bradico een eerlijk beeld van de kosten - zodat u weet wat u kunt verwachten voor uw industriebouwproject in Limburg.",
  body: `<h2>Factoren die de prijs van een bedrijfshal bepalen</h2>
<p>De bouwkost van een bedrijfshal is niet eenvoudig vast te pinnen zonder te weten wat u precies wilt. De belangrijkste kostbepalende factoren zijn:</p>
<ul>
  <li><strong>Oppervlakte:</strong> Hoe groter de hal, hoe meer materiaal en arbeid - maar de kostprijs per m² daalt doorgaans bij grotere projecten.</li>
  <li><strong>Type constructie:</strong> Een eenvoudige opslagloods zonder isolatie kost minder dan een geïsoleerde productiefaciliteit met kantoorruimte.</li>
  <li><strong>Isolatiegraad:</strong> Sandwichpanelen met hoge isolatiewaarden zijn duurder maar leveren energiebesparing op de lange termijn.</li>
  <li><strong>Fundering:</strong> De bodemgesteldheid van uw terrein bepaalt mee het type en de kostprijs van de fundering.</li>
  <li><strong>Afwerking:</strong> Vloercoating, elektrische installaties, poorten en kantoorinrichting worden apart berekend.</li>
  <li><strong>Vergunning:</strong> De aanvraagkosten en eventuele architectenkosten variëren per gemeente en projecttype.</li>
</ul>
<h2>Kostbepalende factoren per type bedrijfshal</h2>
<p>De prijs verschilt sterk per type en situatie. Bradico geeft u na een gratis terreinbezoek een exacte vaste prijs op basis van uw concrete project. Hieronder een overzicht van de relevante types met de factoren die de prijs bepalen:</p>
<ul>
  <li><strong>Eenvoudige opslagloods (niet-geïsoleerd):</strong> Laagste kostprijs door eenvoudige constructie - geen isolatie, betonvloer, stalen dakbedekking. Prijs op aanvraag na terreinbezoek.</li>
  <li><strong>Geïsoleerde bedrijfshal met sandwichpanelen:</strong> Hogere kostprijs dan een kale loods, maar lagere energiekosten op lange termijn. Prijs hangt af van oppervlakte, vrije hoogte en afwerking. Prijs op aanvraag.</li>
  <li><strong>Productiefaciliteit met kantoorruimte:</strong> Combinatie van industrieruimte en kantoor vraagt extra brandcompartimentering en technieken. Prijs op aanvraag na terreinbezoek.</li>
  <li><strong>Gevelrenovatie bestaand pand:</strong> Afhankelijk van de staat van de bestaande constructie en het type nieuwe gevelbeplating. Prijs op aanvraag na inspectie ter plaatse.</li>
</ul>
<p>De prijs van uw project hangt af van afmetingen, bodemgesteldheid, isolatiegraad en afwerking. Na een gratis terreinbezoek door Bradico ontvangt u binnen 48 uur een bindende vaste-prijs offerte - zodat u exact weet waar u aan toe bent.</p>
<h2>Wat is inbegrepen bij Bradico?</h2>
<p>Bij een Bradico-project is de vaste prijs volledig sleutelklaar: staalconstructie, sandwichpanelen voor gevel en dak, dakdichting, sectionale poorten en lichtstraten. De vergunningsaanvraag en begeleiding zijn inbegrepen in onze dienstverlening.</p>
<p>Niet standaard inbegrepen: fundering (aparte berekening op basis van bodemanalyse), elektriciteitsinstallatie, vloercoating en specifieke technische installaties. Deze worden als apart item in de offerte opgenomen zodat u altijd een volledig transparant beeld heeft.</p>
<h2>Hoe een vaste prijs aanvragen?</h2>
<p>Vraag een gratis terreinbezoek aan via het contactformulier. Na het bezoek ontvangt u binnen 48 uur een gedetailleerde, vaste prijsofferte - geen meerwerken, geen factuurverrassingen. Bradico is actief in heel Limburg, Antwerpen en Vlaams-Brabant.</p>`,
  faq: [
    { q: "Wat kost een bedrijfshal van 500 m²?", a: "De prijs hangt af van het type constructie, de isolatiegraad en de bodemgesteldheid. Na een gratis terreinbezoek geeft Bradico u een exacte vaste prijs binnen 48 uur. Vraag een vrijblijvend terreinbezoek aan." },
    { q: "Is BTW aftrekbaar voor een bedrijfshal?", a: "Ja, voor professioneel vastgoed is BTW in de meeste gevallen volledig aftrekbaar als voorbelasting. Raadpleeg uw boekhouder voor uw specifieke situatie." },
    { q: "Zijn er premies voor industriebouw in Limburg?", a: "Afhankelijk van het type activiteit en de locatie zijn er soms investeringssteun of energiepremies beschikbaar via Vlaio of de provincie. Bradico informeert u hierover bij het eerste gesprek." },
    { q: "Kan ik de kostprijs spreiden via leasing?", a: "Ja, industrieel vastgoed kan gefinancierd worden via projectfinanciering, leasing of een bouwkrediet. Vraag advies bij uw bank of financieel adviseur." },
  ],
};

const WatKostEenBedrijfshalBouwen = () => <KennisPageTemplate kennis={kennis} />;
export default WatKostEenBedrijfshalBouwen;
