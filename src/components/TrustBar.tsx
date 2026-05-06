import { motion } from "framer-motion";
import { Star, Shield, Clock, Award, MapPin } from "lucide-react";
import { viewport } from "@/lib/animations";

const signals = [
  { icon: Star, label: "5.0 Google Reviews", sub: "Bekijk onze beoordelingen" },
  { icon: Award, label: "Erkend aannemer", sub: "Registered in Belgium" },
  { icon: Shield, label: "Vaste prijs garantie", sub: "Geen meerwerken, nooit" },
  { icon: Clock, label: "Offerte binnen 48u", sub: "Na terreinbezoek" },
  { icon: MapPin, label: "BE + NL Limburg", sub: "Actief grensoverschrijdend" },
];

export const TrustBar = () => (
  <section className="border-y border-border bg-card py-5" aria-label="Vertrouwenssignalen">
    <div className="container-x">
      <motion.div
        className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 lg:justify-between"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.5 }}
      >
        {signals.map((s) => (
          <div key={s.label} className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" style={{ background: "hsl(214 82% 56% / 0.1)" }}>
              <s.icon className="h-4 w-4 text-accent" strokeWidth={2} />
            </div>
            <div>
              <p className="text-xs font-bold text-foreground leading-none">{s.label}</p>
              <p className="mt-0.5 text-[11px] text-muted-foreground">{s.sub}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);
