import { KennisPageTemplate, KennisData } from "@/components/KennisPageTemplate";

const kennis: KennisData = {
  metaTitle: "Staalbouw vs. betonbouw - wat is beter voor uw bedrijfshal? | Bradico",
  metaDesc: "Staalbouw of betonbouw voor uw bedrijfshal in Limburg? Ontdek de voor- en nadelen, snelheid, kosten en toepassingen. Eerlijk advies van Bradico.",
  canonical: "https://www.bv-bradico.be/kennis/staalbouw-vs-betonbouw",
  h1: "Staalbouw vs. betonbouw - wat is beter voor uw bedrijfshal?",
  intro: "Bij industriebouw staat u voor een fundamentele keuze: staalconstructie of betonbouw? Beide materialen hebben hun voordelen. Bradico legt de verschillen eerlijk uit zodat u de juiste keuze maakt voor uw project in Limburg of Vlaanderen.",
  body: `<h2>Staalbouw - de voordelen</h2>
<p>Staal is het meest gebruikte materiaal voor industriële hallen en bedrijfshallen in Limburg, en dat is niet zonder reden:</p>
<ul>
  <li><strong>Grote overspanning:</strong> Staalconstructies halen overspanningen tot 40 m breed zonder tussenkolommen - ideaal voor open vloerplannen in productie- en distributiehallen.</li>
  <li><strong>Snelle uitvoering:</strong> Stalen elementen worden prefab geproduceerd en ter plaatse gemonteerd. Een gemiddelde bedrijfshal staat er in 8-16 weken.</li>
  <li><strong>Licht gewicht:</strong> Staal is relatief licht, waardoor de funderingsvereisten beperkter zijn en de bouwkosten lager uitvallen.</li>
  <li><strong>Aanpasbaarheid:</strong> Een stalen hal is eenvoudiger uit te breiden of aan te passen dan een betonstructuur - ideaal als uw bedrijf groeit.</li>
  <li><strong>Prijs-kwaliteitsverhouding:</strong> Voor standaard industriële toepassingen biedt staal de beste prijs-kwaliteitsverhouding.</li>
</ul>
<h2>Betonbouw - wanneer het beter is</h2>
<p>Beton heeft zijn plaats in specifieke industriële toepassingen:</p>
<ul>
  <li><strong>Zware lasten:</strong> Voor magazijnen met intensieve heftruck-activiteit of productiehallen met zware machines is een betonnen vloerplaat of structuur soms beter bestand.</li>
  <li><strong>Extreme omstandigheden:</strong> Chemische of corrosieve omgevingen vragen soms om beton in plaats van staal.</li>
  <li><strong>Geluidsisolatie:</strong> Betonnen wanden dempen geluid beter - relevant voor bepaalde productie-omgevingen nabij woongebieden.</li>
</ul>
<h2>Vergelijking: staalbouw vs. betonbouw voor industriële hallen</h2>
<ul>
  <li><strong>Bouwtijd:</strong> Staal 8-16 weken vs. Beton 20-40 weken</li>
  <li><strong>Overspanning:</strong> Staal tot 40 m vs. Beton tot 20 m zonder extra steunpunten</li>
  <li><strong>Uitbreidbaarheid:</strong> Staal eenvoudig vs. Beton complex en duur</li>
  <li><strong>Kostprijs:</strong> Staal doorgaans lager voor industriële hallen</li>
  <li><strong>Gewicht:</strong> Staal lichter, minder zware fundering nodig</li>
</ul>
<h2>Conclusie: voor de meeste industriebouwprojecten wint staal</h2>
<p>Voor de grote meerderheid van industriële bouwprojecten in Limburg - bedrijfshallen, loodsen, magazijnen, KMO-units - is een staalconstructie de beste keuze. Sneller, flexibeler, lichter en doorgaans goedkoper dan betonbouw.</p>
<p>Bradico specialiseert zich in staalconstructies en biedt alle voordelen van staalbouw: prefab productie, snelle montage, grote overspanning en een lange levensduur. Vraag een gratis adviesgesprek aan voor uw project.</p>`,
  faq: [
    { q: "Is staalbouw duurzamer dan betonbouw?", a: "Staal is volledig recycleerbaar - aan het einde van de levensduur van een gebouw kan de staalconstructie volledig worden hergebruikt. Vanuit duurzaamheidsperspectief scoort staal daarmee goed." },
    { q: "Kan een stalen hal uitgebreid worden?", a: "Ja, dat is een groot voordeel van staalconstructies. Uitbreiding is relatief eenvoudig - de bestaande structuur wordt verlengd of er wordt een nieuwe aanbouw gecreëerd." },
    { q: "Hoe lang gaat een staalconstructie mee?", a: "Een correct ontworpen en behandeld staalconstructie gaat minstens 50-70 jaar mee. Met regelmatig onderhoud van de oppervlaktebehandeling is de levensduur nog langer." },
    { q: "Is een staalconstructie brandveilig?", a: "Staal verliest sterkte bij brand maar smelt pas bij zeer hoge temperaturen. Brandveiligheid wordt gegarandeerd via bekleding, coating of sprinklerinstallaties, conform de Belgische brandnormen." },
  ],
};

const StaalbouwVsBetonbouw = () => <KennisPageTemplate kennis={kennis} />;
export default StaalbouwVsBetonbouw;
