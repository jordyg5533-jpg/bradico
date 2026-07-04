import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem, viewport } from "@/lib/animations";

const sections = [
  {
    h2: "Specialist in industriebouw in Limburg",
    text: "Bradico is dé specialist voor industriebouw in Limburg. Of u nu een nieuwe productiehal, een distributiecentrum of een industrieel complex wilt optrekken  -  wij leveren van plan tot sleutelklare oplevering. Met een team dat meer dan 15 jaar ervaring in de Limburgse industriebouwmarkt meebrengt, kennen we de lokale noden, de vergunningsprocedures en de beste constructiemethodes voor elke site. Actief in heel Belgisch en Nederlands Limburg.",
  },
  {
    h2: "Bedrijfshal bouwen op maat  -  van 200 m² tot 5.000 m²",
    text: "Een bedrijfshal bouwen in Limburg vraagt maatwerk. Bradico ontwerpt en bouwt elke hal volledig op uw noden: de juiste overspanning voor uw machines, dakgeometrie aangepast aan uw installaties, geïsoleerde wanden via sandwichpanelen voor energie-efficiëntie. Wij werken uitsluitend op vaste prijs na terreinbezoek  -  geen meerwerken, geen verrassingen, enkel een degelijk gebouw dat decennia meegaat.",
  },
  {
    h2: "Staalconstructies voor industriegebouwen in Limburg",
    text: "Staalconstructies vormen de ruggengraat van elk modern industriegebouw. Bradico ontwerpt, produceert en monteert staalconstructies voor bedrijfshallen, loodsen, magazijnen en multifunctionele industriepanden in Limburg, Antwerpen en Vlaams-Brabant. Staal biedt maximale vrijheid in overspanning  -  tot 40 meter breed zonder tussenpilaren  -  en is snel te plaatsen, wat de bouwtijd aanzienlijk verkort.",
  },
  {
    h2: "Loods bouwen in Belgisch en Nederlands Limburg",
    text: "Bradico bouwt loodsen en opslaghallen voor landbouwbedrijven, handelaars, distributeurs en kmo's in heel Limburg. Onze loodsen zijn robuust, goed geïsoleerd en energiezuinig. We werken in Belgisch Limburg  -  Hasselt, Genk, Bilzen, Tongeren, Lommel, Kinrooi, Maaseik  -  én over de grens in Nederlands Limburg. Vraag een gratis offerte aan  -  reactie binnen 48 uur na terreinbezoek.",
  },
];

export const SEOContent = () => (
  <section className="py-16 bg-soft" aria-label="Informatie over industriebouw in Limburg">
    <div className="container-x max-w-5xl">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
        <h2 className="text-2xl font-black text-foreground md:text-3xl mb-2">Industriebouw in Limburg  -  wat doet Bradico?</h2>
        <p className="text-muted-foreground mb-10 max-w-2xl">Erkend aannemer voor bedrijfshallen, staalconstructies, loodsen en gevelrenovatie in Limburg en omstreken.</p>
      </motion.div>
      <motion.div
        className="grid gap-6 sm:grid-cols-2"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        {sections.map((s) => (
          <motion.div key={s.h2} variants={staggerItem} className="rounded-2xl border bg-card p-6 shadow-soft">
            <div className="mb-2 h-1 w-8 rounded-full bg-accent" />
            <h3 className="text-base font-bold text-foreground mb-3">{s.h2}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);
