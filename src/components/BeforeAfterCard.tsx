import { useState } from "react";
import { ArrowLeftRight } from "lucide-react";

interface BeforeAfterCardProps {
  voor: string;
  na: string;
  title: string;
  desc: string;
  type: string;
}

export const BeforeAfterCard = ({ voor, na, title, desc, type }: BeforeAfterCardProps) => {
  const [showNa, setShowNa] = useState(false);

  return (
    <div className="group rounded-2xl overflow-hidden border bg-card shadow-soft hover:shadow-card transition-shadow duration-300">
      {/* image container */}
      <div
        className="relative aspect-[4/3] cursor-pointer overflow-hidden"
        onClick={() => setShowNa((v) => !v)}
        role="button"
        aria-label={showNa ? "Toon VOOR" : "Toon NA"}
      >
        {/* VOOR */}
        <img
          src={voor}
          alt={`${title} — voor`}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
          style={{ opacity: showNa ? 0 : 1 }}
          loading="lazy"
        />
        {/* NA */}
        <img
          src={na}
          alt={`${title} — na`}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
          style={{ opacity: showNa ? 1 : 0 }}
          loading="lazy"
        />

        {/* VOOR badge */}
        <span
          className="absolute left-3 top-3 rounded-lg px-2.5 py-1 text-[11px] font-black uppercase tracking-wider text-white transition-opacity duration-400"
          style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)", opacity: showNa ? 0 : 1 }}
        >
          Voor
        </span>

        {/* NA badge */}
        <span
          className="absolute left-3 top-3 rounded-lg px-2.5 py-1 text-[11px] font-black uppercase tracking-wider text-white transition-opacity duration-400"
          style={{ background: "hsl(214 82% 56% / 0.85)", backdropFilter: "blur(4px)", opacity: showNa ? 1 : 0 }}
        >
          Na
        </span>

        {/* type badge top-right */}
        <span className="absolute right-3 top-3 rounded-lg border border-white/20 bg-black/50 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
          {type}
        </span>

        {/* bottom toggle hint */}
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-2 bg-gradient-to-t from-black/70 via-black/30 to-transparent pb-3 pt-8">
          <ArrowLeftRight className="h-3.5 w-3.5 text-white/80" />
          <span className="text-xs font-semibold text-white/80">
            {showNa ? "Tik om VOOR te zien" : "Tik om NA te zien"}
          </span>
        </div>
      </div>

      {/* content */}
      <div className="p-5">
        <h3 className="text-base font-bold text-foreground">{title}</h3>
        <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{desc}</p>
      </div>
    </div>
  );
};

interface SinglePhotoCardProps {
  img: string;
  title: string;
  desc: string;
  type: string;
}

export const SinglePhotoCard = ({ img, title, desc, type }: SinglePhotoCardProps) => (
  <div className="rounded-2xl overflow-hidden border bg-card shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all duration-300">
    <div className="relative aspect-[4/3] overflow-hidden">
      <img
        src={img}
        alt={`${title} — Bradico`}
        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        loading="lazy"
      />
      <span className="absolute right-3 top-3 rounded-lg border border-white/20 bg-black/50 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
        {type}
      </span>
    </div>
    <div className="p-5">
      <h3 className="text-base font-bold text-foreground">{title}</h3>
      <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  </div>
);
