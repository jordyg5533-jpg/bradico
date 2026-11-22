import { useEffect, useRef, useState } from "react";

const MOBILE_QUERY = "(max-width: 639px)";
const ALT = "Bradico op de werf: verreiker, bedrijfswagen en gevelpanelen van een nieuw bedrijfsgebouw";

/**
 * Hero-beeld met videoloop.
 * - Het startbeeld is een gewone <img> in de voorgerenderde HTML (LCP-element).
 * - De video wordt pas na het laden van de pagina toegevoegd, zodat hij de laadtijd niet raakt.
 * - Geen video bij "minder beweging" of databesparing: dan blijft het startbeeld staan.
 */
export const HeroMedia = ({ variant = "frame" }: { variant?: "frame" | "background" }) => {
  const [src, setSrc] = useState<string | null>(null);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    if (reduceMotion || saveData) return;

    let timer: number | undefined;
    const start = () => {
      timer = window.setTimeout(() => {
        const mobile = window.matchMedia(MOBILE_QUERY).matches;
        setSrc(mobile ? "/video/hero-loop-mobiel.mp4" : "/video/hero-loop-desktop.mp4");
      }, 600);
    };
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });

    return () => {
      window.removeEventListener("load", start);
      if (timer) window.clearTimeout(timer);
    };
  }, []);

  // Pauzeer de loop als de hero uit beeld is.
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) video.play().catch(() => {});
      else video.pause();
    }, { threshold: 0.1 });
    io.observe(video);
    return () => io.disconnect();
  }, [src]);

  return (
    <div className={variant === "background" ? "absolute inset-0" : "relative aspect-[4/5] w-full sm:aspect-[16/10]"}>
      <picture>
        <source media={MOBILE_QUERY} srcSet="/video/hero-loop-mobiel-poster.webp" width={1080} height={1920} />
        <img
          src="/video/hero-loop-desktop-poster.webp"
          alt={ALT}
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
          decoding="async"
        />
      </picture>
      {src && (
        <video
          ref={videoRef}
          src={src}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${playing ? "opacity-100" : "opacity-0"}`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          aria-hidden="true"
          tabIndex={-1}
          onPlaying={() => setPlaying(true)}
        />
      )}
    </div>
  );
};
