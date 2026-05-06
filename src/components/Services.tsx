import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { staggerContainer, staggerItem, viewport } from "@/lib/animations";

const services = [
  { title: "Staalconstructies", desc: "Op maat gemaakte staalconstructies voor elke toepassing — van draagstructuren tot volledige industriële complexen.", href: "/staalconstructies-limburg", img: "/projects/bhal.jpeg" },
  { title: "Bedrijfshallen", desc: "Nieuwe bedrijfshal laten bouwen? Bradico levert sleutelklaar, vaste prijs en volledige ontzorging van A tot Z.", href: "/bedrijfshallen-bouwen", img: "/projects/bedrijfshal-na.jpg" },
  { title: "Loodsen & magazijnen", desc: "Opslagloods, distributiehal of magazijn op maat — wij bouwen het naar uw afmetingen en budget.", href: "/loodsen-magazijnen", img: "/projects/loods-na.jpg" },
  { title: "Sandwichpanelen", desc: "Isolerende sandwichpanelen voor gevel en dak. Energie-efficiënt, duurzaam en snel geplaatst.", href: "/sandwichpanelen", img: "/projects/gvl5.jpeg" },
  { title: "Gevelrenovatie", desc: "Versleten gevel of dak vernieuwen? Wij renoveren industriële gevels snel en met minimale hinder.", href: "/gevelrenovatie-industrieel", img: "/projects/gevelrenovatie-na.jpg" },
];

export const Services = () => (
  <section className="py-20 bg-soft" aria-label="Onze diensten">
    <div className="container-x">
      <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={{ duration: 0.5 }}>
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Wat we doen</span>
        <h2 className="mt-3 text-3xl font-black text-foreground md:text-4xl">Onze diensten</h2>
        <p className="mt-4 max-w-xl mx-auto text-muted-foreground">Van nieuwbouw tot renovatie — Bradico levert staalconstructies en industriebouw in heel Limburg en Antwerpen.</p>
      </motion.div>

      <motion.div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewport}>
        {services.map((s) => (
          <motion.a key={s.href} href={s.href} variants={staggerItem} className="group rounded-2xl overflow-hidden border bg-card shadow-soft hover:-translate-y-1 hover:shadow-card transition-all duration-300">
            <div className="aspect-[16/9] overflow-hidden">
              <img src={s.img} alt={`${s.title} Limburg — Bradico`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-accent">
                Meer info <ChevronRight className="h-4 w-4" />
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </div>
  </section>
);
