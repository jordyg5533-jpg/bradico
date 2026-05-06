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
  <section className="relative overflow-hidden py-24" aria-label="Waarom Bradico">
    {/* dark background */}
    <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #070e1e 0%, #0c1c32 60%, #112239 100%)" }} aria-hidden />
    <div className="pointer-events-none absolute -right-40 -top-20 h-[400px] w-[400px] rounded-full opacity-10 blur-3xl" style={{ background: "hsl(214 82% 56%)" }} aria-hidden />

    <div className="container-x relative">
      <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={{ duration: 0.5 }}>
        <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "hsl(214 82% 70%)" }}>Waarom Bradico</span>
        <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">Wat ons onderscheidt</h2>
        <p className="mt-4 max-w-xl mx-auto text-white/60 text-sm">Geen verborgen kosten, geen gecoördineer. Gewoon degelijk werk, duidelijke afspraken en één aanspreekpunt.</p>
      </motion.div>

      <motion.div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewport}>
        {items.map((item) => (
          <motion.div
            key={item.title}
            variants={staggerItem}
            className="rounded-2xl border p-6 transition-all hover:border-accent/40"
            style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}
          >
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: "hsl(214 82% 56% / 0.15)" }}>
              <item.icon className="h-5 w-5 text-accent" />
            </div>
            <h3 className="text-base font-bold text-white">{item.title}</h3>
            <p className="mt-2 text-sm text-white/55 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* bottom CTA strip */}
      <motion.div
        className="mt-14 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold text-white transition-all hover:brightness-110"
          style={{ background: "linear-gradient(135deg, hsl(214 82% 54%) 0%, hsl(220 85% 46%) 100%)", boxShadow: "0 4px 20px -4px hsl(214 82% 56% / 0.5)" }}
        >
          Gratis offerte aanvragen
        </a>
        <a href="tel:+32472812952" className="text-sm font-semibold text-white/70 hover:text-white transition-colors">
          of bel +32 472 81 29 52
        </a>
      </motion.div>
    </div>
  </section>
);
