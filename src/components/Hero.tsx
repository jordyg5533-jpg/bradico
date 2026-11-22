import { useEffect, useRef, useState } from "react";
import { Phone, Check, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { HeroMedia } from "@/components/HeroMedia";

const badges = ["Vaste prijs", "Vrijblijvende offerte", "Erkend aannemer", "BE + NL Limburg"];

const stats = [
  { n: "15+", label: "jaar vakervaring" },
  { n: "200+", label: "projecten" },
  { n: "100%", label: "vaste prijs" },
];

function AnimatedStat({ n, label }: { n: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const match = n.match(/^([\d.]+)(.*)/);
    if (!match) { setDisplay(n); return; }
    const target = parseFloat(match[1]);
    const suffix = match[2];
    const duration = 1400;
    const startTime = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - startTime) / duration, 1);
      const eased = 1 - (1 - p) ** 2;
      setDisplay(Math.floor(target * eased).toString() + suffix);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, n]);

  return (
    <div ref={ref} className="rounded-xl border border-white/10 bg-white/5 p-3 text-center backdrop-blur-sm">
      <div className="text-xl font-black text-accent">{display}</div>
      <div className="text-xs text-white/60">{label}</div>
    </div>
  );
}

export const Hero = () => (
  <section id="top" className="relative overflow-hidden pb-0 pt-20 md:pt-24" aria-label="Hero sectie">
    <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #050c1a 0%, #0c1e38 50%, #122444 100%)" }} aria-hidden />
    {/* videoloop als achtergrond */}
    <HeroMedia variant="background" />
    {/* donkere sluier: links dicht voor de leesbaarheid van de tekst, rechts open voor het beeld */}
    <div className="absolute inset-0 lg:hidden" style={{ background: "linear-gradient(180deg, rgba(5,12,26,0.88) 0%, rgba(5,12,26,0.80) 55%, rgba(5,12,26,0.70) 100%)" }} aria-hidden />
    <div className="absolute inset-0 hidden lg:block" style={{ background: "linear-gradient(90deg, rgba(5,12,26,0.94) 0%, rgba(8,20,40,0.86) 38%, rgba(8,20,40,0.45) 68%, rgba(5,12,26,0.25) 100%)" }} aria-hidden />
    <div className="absolute inset-x-0 bottom-0 h-40" style={{ background: "linear-gradient(180deg, rgba(5,12,26,0) 0%, rgba(5,12,26,0.65) 100%)" }} aria-hidden />

    <div className="container-x relative">
      <div className="pb-12 pt-4 lg:pb-16 lg:pt-10">

        <motion.div
          className="max-w-2xl text-white"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white/80 backdrop-blur-sm">
            <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-accent" />
            Erkend aannemer · Limburg
          </div>

          <h1 className="max-w-[28ch] text-balance text-4xl font-black leading-[1.05] tracking-tight md:text-5xl lg:text-[3.2rem]">
            Bedrijfshal of staalconstructie bouwen in Limburg, Antwerpen of NL Limburg?{" "}
            <span style={{ background: "linear-gradient(130deg, hsl(214 82% 72%) 0%, hsl(200 88% 65%) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Bradico regelt het.
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-balance text-base text-white/80 md:text-lg">
            Van industriebouw en staalconstructies tot loodsen, sandwichpanelen en gevelrenovatie.
            Vaste prijs, geen verrassingen  -  actief in heel <strong className="font-semibold text-white/90">Limburg, Antwerpen en Vlaanderen</strong>.
          </p>

          <motion.div className="mt-6 flex flex-wrap gap-2" variants={staggerContainer} initial="hidden" animate="show" transition={{ delayChildren: 0.35 }}>
            {badges.map((b) => (
              <motion.div key={b} variants={staggerItem} className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm">
                <Check className="h-3.5 w-3.5 text-accent" strokeWidth={2.5} />
                {b}
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="mt-8 flex flex-wrap gap-3" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 rounded-xl px-6 py-3.5 text-sm font-bold text-white transition-all hover:brightness-110 hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg, hsl(214 82% 54%) 0%, hsl(220 85% 46%) 100%)", boxShadow: "0 4px 20px -4px hsl(214 82% 56% / 0.5)" }}
            >
              Gratis offerte aanvragen
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="tel:+32472812952" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/8 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/15">
              <Phone className="h-4 w-4" />
              +32 472 81 29 52
            </a>
          </motion.div>

          {/* micro trust */}
          <p className="mt-4 text-xs text-white/60">Geen verplichtingen · Reactie binnen 24u · 200+ tevreden klanten</p>

          <div className="mt-8 grid max-w-lg grid-cols-3 gap-3">
            {stats.map((s) => <AnimatedStat key={s.label} n={s.n} label={s.label} />)}
          </div>
        </motion.div>

      </div>
    </div>

    <div className="relative mt-12 h-14 overflow-hidden lg:mt-0">
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden>
        <path d="M0,56 L0,28 C360,56 1080,0 1440,28 L1440,56 Z" fill="hsl(216 14% 97%)" />
      </svg>
    </div>
  </section>
);
