import { motion } from "framer-motion";
import { Shield, Clock, User, MapPin } from "lucide-react";
import { staggerContainer, staggerItem, viewport } from "@/lib/animations";

const items = [
  { icon: Shield, title: "Vaste prijs — altijd", desc: "Geen verrassingen achteraf. Wat wij offreren, betaalt u. Punt. Wij werken met gedetailleerde offertes zodat u exact weet waar u aan toe bent." },
  { icon: Clock, title: "Offerte binnen 48 uur", desc: "Geen weken wachten. Na terreinbezoek ontvangt u binnen 48 uur een volledige vaste-prijs offerte. Snel en transparant." },
  { icon: User, title: "Één vast aanspreekpunt", desc: "Van eerste contact tot oplevering werkt u met dezelfde persoon. Geen doorverwijzingen, geen verwarring over wie wat doet." },
  { icon: MapPin, title: "BE + NL Limburg", desc: "Actief aan beide kanten van de grens. Zowel in Belgisch als Nederlands Limburg, Antwerpen en Vlaams-Brabant." },
];

export const WhyBradico = () => (
  <section className="py-20" aria-label="Waarom Bradico">
    <div className="container-x">
      <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={{ duration: 0.5 }}>
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Waarom Bradico</span>
        <h2 className="mt-3 text-3xl font-black text-foreground md:text-4xl">Wat ons onderscheidt</h2>
      </motion.div>

      <motion.div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewport}>
        {items.map((item) => (
          <motion.div key={item.title} variants={staggerItem} className="rounded-2xl border bg-card p-6 shadow-soft">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: "hsl(28 85% 52% / 0.12)" }}>
              <item.icon className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-base font-bold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);
