import { useEffect, useRef, useState } from "react";
import { Phone, Check } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

const badges = ["Vaste prijs", "Offerte binnen 48u", "Erkend aannemer", "BE + NL Limburg"];

const stats = [
  { n: "15+", label: "jaar ervaring" },
  { n: "200+", label: "projecten" },
  { n: "48u", label: "offerte garantie" },
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
    <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #070c18 0%, #0e1e35 50%, #152844 100%)" }} aria-hidden />
    <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl" style={{ background: "hsl(28 85% 52%)" }} aria-hidden />

    <div className="container-x relative">
      <div className="grid items-center gap-10 pb-12 lg:grid-cols-2 lg:gap-20 lg:pb-0">

        <motion.div
          className="text-white"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
            Erkend aannemer · Limburg & Antwerpen
          </div>

          <h1 className="max-w-[22ch] text-balance text-4xl font-black leading-[1.05] tracking-tight md:text-5xl lg:text-[3.2rem]">
            Bedrijfshal of loods laten bouwen?{" "}
            <span style={{ background: "linear-gradient(135deg, hsl(28 85% 52%) 0%, hsl(22 88% 58%) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Bradico regelt het.
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-balance text-base text-white/70 md:text-lg">
            Van staalconstructie en bedrijfshallen tot loodsen, sandwichpanelen en gevelrenovatie.
            Vaste prijs, geen verrassingen — actief in heel <strong className="font-semibold text-white/90">Belgisch en Nederlands Limburg</strong> en Antwerpen.
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
            <a href="tel:+32472812952" className="inline-flex items-center gap-2.5 rounded-xl px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:scale-[1.02] hover:brightness-110" style={{ background: "hsl(28 85% 52%)" }}>
              <Phone className="h-4 w-4" />
              +32 472 81 29 52
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/8 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/15">
              Gratis offerte aanvragen
            </a>
          </motion.div>
        </motion.div>

        <motion.div className="lg:pb-10" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65, delay: 0.1 }}>
          <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
            <img src="/hero-bradico.webp" alt="Bradico bedrijfshal staalconstructie Limburg" width={960} height={640} className="aspect-[4/3] w-full object-cover" fetchPriority="high" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-5">
              <span className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                Van ontwerp tot oplevering
              </span>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {stats.map((s) => <AnimatedStat key={s.label} n={s.n} label={s.label} />)}
          </div>
        </motion.div>

      </div>
    </div>

    <div className="relative mt-12 h-14 overflow-hidden lg:mt-0">
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden>
        <path d="M0,56 L0,28 C360,56 1080,0 1440,28 L1440,56 Z" fill="hsl(30 10% 97%)" />
      </svg>
    </div>
  </section>
);
