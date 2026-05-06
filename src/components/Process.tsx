import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewport } from "@/lib/animations";

const steps = [
  { nr: "01", title: "Terreinbezoek", desc: "We komen ter plaatse, nemen de maten op en bespreken uw wensen en plannen." },
  { nr: "02", title: "Ontwerp & vergunning", desc: "Wij verzorgen het technisch ontwerp en helpen bij de vergunningsaanvraag." },
  { nr: "03", title: "Vaste-prijs offerte", desc: "Binnen 48 uur een gedetailleerde offerte met vaste prijs — geen extra verrassingen." },
  { nr: "04", title: "Realisatie", desc: "Ons team voert de bouw uit volgens planning. U heeft één vast aanspreekpunt." },
  { nr: "05", title: "Oplevering & nazorg", desc: "Sleutelklare oplevering met volledige documentatie en nazorggarantie." },
];

export const Process = () => (
  <section className="py-20 bg-soft" aria-label="Onze werkwijze">
    <div className="container-x">
      <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={{ duration: 0.5 }}>
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Werkwijze</span>
        <h2 className="mt-3 text-3xl font-black text-foreground md:text-4xl">Van offerte tot oplevering</h2>
        <p className="mt-4 max-w-xl mx-auto text-muted-foreground">Duidelijk, stap voor stap — zodat u altijd weet wat er wanneer gebeurt.</p>
      </motion.div>

      <motion.div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewport}>
        {steps.map((s) => (
          <motion.div key={s.nr} variants={staggerItem} className="relative rounded-2xl border bg-card p-6 shadow-soft">
            <div className="mb-4 text-3xl font-black" style={{ color: "hsl(28 85% 52% / 0.3)" }}>{s.nr}</div>
            <h3 className="text-sm font-bold text-foreground">{s.title}</h3>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);
