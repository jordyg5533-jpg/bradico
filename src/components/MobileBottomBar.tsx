import { useEffect, useState } from "react";
import { Phone, ArrowRight, Loader2, Check } from "lucide-react";
import { openOfferteModal } from "./OfferteModal";
import { isGeldigTelefoon, isGeldigEmail, TELEFOON_FOUT, EMAIL_FOUT } from "@/lib/contactvalidatie";

/**
 * Vaste balk onderaan elke pagina.
 * - Mobiel: altijd zichtbaar. Bellen, WhatsApp en "Gratis offerte" (opent het volledige formulier).
 * - Desktop: verschijnt na de hero. Kort formulier (naam, telefoon, e-mail) plus WhatsApp en bellen.
 * Telefoon en e-mail zijn altijd verplicht (vaste regel Bradico: geen aanvraag zonder contactgegevens).
 */

const FORMSPREE = "https://formspree.io/f/xjgzkpno";
const TEL = "+32472812952";
const TEL_LEESBAAR = "+32 472 81 29 52";
const WHATSAPP = `https://wa.me/32472812952?text=${encodeURIComponent("Hallo Bradico, ik heb een vraag over een project.")}`;

const WhatsAppIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.05 21.5h-.01a9.43 9.43 0 0 1-4.8-1.32l-.35-.2-3.57.93.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.24-9.43 9.45-9.43 2.52 0 4.89.98 6.67 2.77a9.37 9.37 0 0 1 2.76 6.67c0 5.2-4.24 9.44-9.44 9.44zm8.03-17.47A11.28 11.28 0 0 0 12.04.7C5.78.7.69 5.79.69 12.04c0 2 .52 3.95 1.52 5.67L.6 23.3l5.72-1.5a11.33 11.33 0 0 0 5.72 1.46h.01c6.25 0 11.35-5.09 11.35-11.35 0-3.03-1.18-5.88-3.33-8.02z" />
  </svg>
);

const VELD =
  "h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/15";
const VELD_FOUT =
  "h-11 w-full rounded-xl border border-red-500 bg-background px-3.5 text-sm outline-none transition-all focus:ring-2 focus:ring-red-500/15";

function SnelFormulier() {
  const [status, setStatus] = useState<"idle" | "bezig" | "ok" | "fout">("idle");
  const [fout, setFout] = useState<{ telefoon?: string; email?: string }>({});

  const verstuur = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = e.currentTarget;
    if ((f.elements.namedItem("_gotcha") as HTMLInputElement).value) return;
    const naam = (f.elements.namedItem("naam") as HTMLInputElement).value.trim();
    const telefoon = (f.elements.namedItem("telefoon") as HTMLInputElement).value.trim();
    const email = (f.elements.namedItem("email") as HTMLInputElement).value.trim();
    const nieuw: { telefoon?: string; email?: string } = {};
    if (!isGeldigTelefoon(telefoon)) nieuw.telefoon = TELEFOON_FOUT;
    if (!isGeldigEmail(email)) nieuw.email = EMAIL_FOUT;
    setFout(nieuw);
    if (nieuw.telefoon || nieuw.email) {
      (f.elements.namedItem(nieuw.telefoon ? "telefoon" : "email") as HTMLInputElement).focus();
      return;
    }
    setStatus("bezig");
    try {
      const res = await fetch(FORMSPREE, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: "Nieuwe aanvraag via de balk onderaan bv-bradico.be",
          naam,
          telefoon,
          email,
          pagina: typeof window !== "undefined" ? window.location.pathname : "",
          source: "sticky-footer",
        }),
      });
      setStatus(res.ok ? "ok" : "fout");
    } catch {
      setStatus("fout");
    }
  };

  if (status === "ok") {
    return (
      <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
        <Check className="h-4 w-4 text-accent" strokeWidth={3} />
        Bedankt! We nemen binnen 24 uur contact met u op.
      </p>
    );
  }

  return (
    <form onSubmit={verstuur} className="flex flex-1 items-start gap-2" noValidate>
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <label className="sr-only" htmlFor="sf-naam">Naam</label>
      <input id="sf-naam" required name="naam" autoComplete="name" placeholder="Naam" className={`${VELD} max-w-[180px]`} />
      <div className="w-full max-w-[200px]">
        <label className="sr-only" htmlFor="sf-tel">Telefoon</label>
        <input
          id="sf-tel" required type="tel" name="telefoon" inputMode="tel" autoComplete="tel" placeholder="Telefoon"
          aria-invalid={!!fout.telefoon} title={fout.telefoon}
          onInput={() => setFout((p) => ({ ...p, telefoon: undefined }))}
          className={fout.telefoon ? VELD_FOUT : VELD}
        />
      </div>
      <div className="w-full max-w-[230px]">
        <label className="sr-only" htmlFor="sf-mail">E-mail</label>
        <input
          id="sf-mail" required type="email" name="email" autoComplete="email" placeholder="E-mail"
          aria-invalid={!!fout.email} title={fout.email}
          onInput={() => setFout((p) => ({ ...p, email: undefined }))}
          className={fout.email ? VELD_FOUT : VELD}
        />
      </div>
      <button
        type="submit"
        disabled={status === "bezig"}
        className="inline-flex h-11 shrink-0 items-center gap-2 rounded-xl px-5 text-sm font-bold text-white transition-all hover:brightness-110 disabled:opacity-70"
        style={{ background: "linear-gradient(135deg, hsl(214 82% 54%) 0%, hsl(220 85% 46%) 100%)" }}
      >
        {status === "bezig" ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4" />}
        Bel mij terug
      </button>
      {(fout.telefoon || fout.email || status === "fout") && (
        <p className="max-w-[120px] self-center text-xs font-medium leading-tight text-red-600">
          {status === "fout" ? "Er ging iets mis. Bel ons gerust." : fout.telefoon ? "Controleer uw telefoonnummer." : "Controleer uw e-mailadres."}
        </p>
      )}
    </form>
  );
}

export const MobileBottomBar = () => {
  const [voorbijHero, setVoorbijHero] = useState(false);

  useEffect(() => {
    const onScroll = () => setVoorbijHero(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ruimte onderaan zodat de balk geen inhoud van de pagina bedekt */}
      <div className="h-[76px] lg:h-[72px]" aria-hidden="true" />

      {/* Mobiel en tablet: altijd zichtbaar */}
      <div
        className="fixed inset-x-0 bottom-0 z-40 border-t bg-background/97 backdrop-blur-xl lg:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="mx-auto flex max-w-xl gap-2 px-3 py-2.5">
          <a
            href={`tel:${TEL}`}
            aria-label={`Bel Bradico op ${TEL_LEESBAAR}`}
            className="flex w-12 shrink-0 items-center justify-center rounded-xl border bg-card text-foreground shadow-sm active:scale-95"
          >
            <Phone className="h-5 w-5 text-accent" />
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold text-white shadow-sm active:scale-95"
            style={{ background: "#25D366" }}
          >
            <WhatsAppIcon />
            WhatsApp
          </a>
          <button
            onClick={openOfferteModal}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold text-white shadow-lg active:scale-95"
            style={{ background: "hsl(214 82% 56%)" }}
          >
            Gratis offerte
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Desktop: verschijnt na de hero, met kort formulier */}
      <div
        className={`fixed inset-x-0 bottom-0 z-40 hidden border-t bg-background/97 shadow-[0_-8px_30px_-12px_rgba(7,12,24,0.25)] backdrop-blur-xl transition-transform duration-300 lg:block ${voorbijHero ? "translate-y-0" : "translate-y-full"}`}
      >
        <div className="mx-auto flex max-w-7xl items-center gap-5 px-8 py-3.5">
          <p className="shrink-0 text-sm font-bold leading-tight text-foreground">
            Gratis offerte?
            <span className="block text-xs font-normal text-muted-foreground">We bellen u binnen 24u terug.</span>
          </p>
          <SnelFormulier />
          <div className="ml-auto flex shrink-0 items-center gap-2">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-xl px-4 text-sm font-bold text-white transition-all hover:brightness-105"
              style={{ background: "#25D366" }}
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href={`tel:${TEL}`}
              className="inline-flex h-11 items-center gap-2 rounded-xl border border-border bg-card px-4 text-sm font-bold text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <Phone className="h-4 w-4" />
              {TEL_LEESBAAR}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
