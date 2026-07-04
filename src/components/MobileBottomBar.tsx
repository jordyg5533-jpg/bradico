import { useEffect, useState } from "react";
import { Phone, ArrowRight } from "lucide-react";
import { openOfferteModal } from "./OfferteModal";

export const MobileBottomBar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 350);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t bg-background/97 backdrop-blur-xl transition-transform duration-300 ${visible ? "translate-y-0" : "translate-y-full"}`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      {/* Mobile layout */}
      <div className="flex gap-2.5 px-4 py-3 sm:hidden">
        <a
          href="tel:+32472812952"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border bg-card py-3.5 text-sm font-bold text-foreground shadow-sm active:scale-95"
        >
          <Phone className="h-4 w-4 text-accent" />
          Bel ons
        </a>
        <button
          onClick={openOfferteModal}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold text-white shadow-lg active:scale-95"
          style={{ background: "hsl(214 82% 56%)" }}
        >
          <ArrowRight className="h-4 w-4" />
          Gratis offerte
        </button>
      </div>

      {/* Desktop layout */}
      <div className="hidden sm:flex items-center justify-between px-8 py-3 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
          <p className="text-sm font-semibold text-foreground">
            Bedrijfshal, loods of staalconstructie nodig? <span className="text-muted-foreground font-normal">Vraag vandaag uw gratis offerte aan.</span>
          </p>
        </div>
        <div className="flex items-center gap-3 ml-8 shrink-0">
          <a
            href="tel:+32472812952"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-bold text-foreground hover:border-accent hover:text-accent transition-colors"
          >
            <Phone className="h-4 w-4" />
            +32 472 81 29 52
          </a>
          <button
            onClick={openOfferteModal}
            className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold text-white transition-all hover:brightness-110 hover:scale-[1.02]"
            style={{ background: "linear-gradient(135deg, hsl(214 82% 54%) 0%, hsl(220 85% 46%) 100%)", boxShadow: "0 4px 16px -4px hsl(214 82% 56% / 0.5)" }}
          >
            Gratis offerte aanvragen
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
