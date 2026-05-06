import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { fadeUp, viewport } from "@/lib/animations";

const faqs = [
  { q: "Wat kost een bedrijfshal laten bouwen?", a: "De prijs van een bedrijfshal hangt af van de afmetingen, het type constructie en de afwerking. Bradico werkt altijd met een vaste prijs — na terreinbezoek ontvangt u binnen 48 uur een gedetailleerde offerte zonder verborgen kosten." },
  { q: "Hoe lang duurt het bouwen van een bedrijfshal?", a: "Een gemiddelde bedrijfshal wordt in 8 tot 16 weken opgeleverd, afhankelijk van de omvang en vergunningsprocedure. Wij bewaken de planning strikt zodat u op de afgesproken datum kan starten." },
  { q: "Regelt Bradico ook de bouwvergunning?", a: "Ja. Wij begeleiden u door het volledige vergunningsproces. Van aanvraag tot goedkeuring — dat is deel van onze totaalformule." },
  { q: "Wat zijn sandwichpanelen en waarvoor worden ze gebruikt?", a: "Sandwichpanelen zijn isolerende bouwelementen voor gevels en daken. Ze bieden uitstekende thermische isolatie, zijn snel te plaatsen en geschikt voor zowel nieuwbouw als renovatie van industriële gebouwen." },
  { q: "Werkt Bradico ook in Nederlands Limburg?", a: "Absoluut. Bradico is actief aan beide kanten van de grens — zowel in Belgisch als Nederlands Limburg, inclusief de regio Maastricht, Venlo en Weert." },
  { q: "Wat is het verschil tussen een loods en een bedrijfshal?", a: "Een loods is doorgaans eenvoudiger van opbouw en primair bedoeld voor opslag. Een bedrijfshal kan ook productie-, kantoor- of showroomruimte combineren. Bradico bouwt beide, volledig op maat van uw activiteit." },
  { q: "Kan Bradico ook een bestaande gevel renoveren?", a: "Ja. Gevelrenovatie is een van onze specialiteiten. We vervangen versleten panelen, vernieuwen de isolatie en zorgen voor een frisse, energiezuinige gevel — met minimale hinder voor uw bedrijfsactiviteit." },
  { q: "Geeft Bradico garantie op de uitvoering?", a: "Ja. Wij leveren sleutelklaar op en geven garantie op zowel materialen als uitvoering. Na oplevering bent u voor vragen en nazorg bij dezelfde contactpersoon terecht." },
];

export const FAQ = () => (
  <section className="py-20 bg-soft" aria-label="Veelgestelde vragen">
    <div className="container-x">
      <motion.div className="text-center mb-12" variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">FAQ</span>
        <h2 className="mt-3 text-3xl font-black text-foreground md:text-4xl">Veelgestelde vragen</h2>
      </motion.div>

      <motion.div className="mx-auto max-w-3xl" variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl border bg-card px-5 shadow-soft">
              <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:no-underline py-4">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);
