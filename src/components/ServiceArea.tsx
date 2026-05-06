import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { staggerContainer, staggerItem, viewport } from "@/lib/animations";

const steden = [
  { naam: "Hasselt", href: "/bedrijfshal-hasselt" },
  { naam: "Genk", href: "/bedrijfshal-genk" },
  { naam: "Antwerpen", href: "/bedrijfshal-antwerpen" },
  { naam: "Sint-Truiden", href: "/bedrijfshal-sint-truiden" },
  { naam: "Tongeren", href: "/bedrijfshal-tongeren" },
  { naam: "Bilzen", href: "/bedrijfshal-bilzen" },
  { naam: "Lommel", href: "/bedrijfshal-lommel" },
];

const andere = ["Diepenbeek", "Beringen", "Halen", "Bocholt", "Peer", "Maasmechelen", "Maastricht", "Eindhoven", "Mechelen", "Leuven"];

export const ServiceArea = () => (
  <section className="py-20" aria-label="Werkgebied">
    <div className="container-x">
      <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={{ duration: 0.5 }}>
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Werkgebied</span>
        <h2 className="mt-3 text-3xl font-black text-foreground md:text-4xl">Actief in heel Limburg en omstreken</h2>
        <p className="mt-4 max-w-xl mx-auto text-muted-foreground">Bradico werkt in Belgisch en Nederlands Limburg, Antwerpen, Vlaams-Brabant en grensregio.</p>
      </motion.div>

      <motion.div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewport}>
        {steden.map((s) => (
          <motion.a key={s.href} href={s.href} variants={staggerItem} className="group flex flex-col items-center gap-2 rounded-2xl border bg-card p-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-card">
            <MapPin className="h-5 w-5 text-accent" />
            <span className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">{s.naam}</span>
          </motion.a>
        ))}
      </motion.div>

      <div className="mt-6 text-center text-sm text-muted-foreground">
        Ook actief in: {andere.join(", ")} en vele andere gemeenten.
      </div>
    </div>
  </section>
);
