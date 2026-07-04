import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface GalleryPhoto {
  src: string;
  label?: "voor" | "na" | "bouw";
  alt?: string;
}

interface ProjectGalleryCardProps {
  photos: GalleryPhoto[];
  title: string;
  desc: string;
  type: string;
  startIndex?: number;
}

const LABEL_STYLE: Record<string, React.CSSProperties> = {
  voor: { background: "rgba(0,0,0,0.58)", backdropFilter: "blur(4px)" },
  na: { background: "hsl(214 82% 56% / 0.88)", backdropFilter: "blur(4px)" },
  bouw: { background: "rgba(0,0,0,0.58)", backdropFilter: "blur(4px)" },
};

const LABEL_TEXT: Record<string, string> = {
  voor: "Voor",
  na: "Na",
  bouw: "In aanbouw",
};

export const ProjectGalleryCard = ({
  photos,
  title,
  desc,
  type,
  startIndex = 0,
}: ProjectGalleryCardProps) => {
  const [current, setCurrent] = useState(startIndex);
  const [direction, setDirection] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const goTo = (idx: number, dir: number) => {
    setDirection(dir);
    setCurrent(idx);
  };

  const prev = () => goTo((current - 1 + photos.length) % photos.length, -1);
  const next = () => goTo((current + 1) % photos.length, 1);

  const handleTouchStart = (e: React.TouchEvent) =>
    setTouchStart(e.touches[0].clientX);

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const delta = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) delta > 0 ? next() : prev();
    setTouchStart(null);
  };

  const photo = photos[current];
  const hasMultiple = photos.length > 1;

  return (
    <div className="group rounded-2xl overflow-hidden border bg-card shadow-soft hover:shadow-card transition-shadow duration-300">
      <div
        className="relative aspect-[4/3] overflow-hidden bg-black cursor-pointer"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onClick={hasMultiple ? next : undefined}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={current}
            src={photo.src}
            alt={photo.alt ?? `${title}  -  ${photo.label ? LABEL_TEXT[photo.label] : "foto"} ${current + 1}`}
            className="absolute inset-0 h-full w-full object-cover"
            custom={direction}
            variants={{
              enter: (dir: number) => ({ opacity: 0, x: dir >= 0 ? 55 : -55 }),
              center: { opacity: 1, x: 0 },
              exit: (dir: number) => ({ opacity: 0, x: dir >= 0 ? -55 : 55 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
            loading="lazy"
          />
        </AnimatePresence>

        {/* Label badge */}
        {photo.label && (
          <span
            className="absolute left-3 top-3 z-10 rounded-lg px-2.5 py-1 text-[11px] font-black uppercase tracking-wider text-white"
            style={LABEL_STYLE[photo.label]}
          >
            {LABEL_TEXT[photo.label]}
          </span>
        )}

        {/* Type badge */}
        <span className="absolute right-3 top-3 z-10 rounded-lg border border-white/20 bg-black/50 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
          {type}
        </span>

        {/* Arrows (desktop  -  shown on hover) */}
        {hasMultiple && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-2.5 top-1/2 z-10 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all hover:bg-black/80 hover:scale-110 active:scale-95 focus:opacity-100"
              aria-label="Vorige foto"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-2.5 top-1/2 z-10 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all hover:bg-black/80 hover:scale-110 active:scale-95 focus:opacity-100"
              aria-label="Volgende foto"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        )}

        {/* Bottom bar: dots + swipe hint */}
        {hasMultiple && (
          <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center gap-2 bg-gradient-to-t from-black/65 via-black/15 to-transparent pb-3 pt-10 pointer-events-none">
            <p className="text-[10px] text-white/60 font-medium tracking-wide">
              {photo.label === "voor" || photo.label === "bouw" ? "Tik voor volgende foto" : `Foto ${current + 1} / ${photos.length}`}
            </p>
            <div className="flex items-center gap-1.5 pointer-events-auto">
              {photos.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); goTo(i, i > current ? 1 : -1); }}
                  className="rounded-full transition-all duration-300"
                  style={{
                    height: "5px",
                    width: i === current ? "20px" : "5px",
                    background: i === current ? "white" : "rgba(255,255,255,0.4)",
                  }}
                  aria-label={`Foto ${i + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-bold text-foreground">{title}</h3>
          {hasMultiple && (
            <span className="shrink-0 rounded-md bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
              {current + 1}/{photos.length}
            </span>
          )}
        </div>
        <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{desc}</p>
      </div>
    </div>
  );
};
