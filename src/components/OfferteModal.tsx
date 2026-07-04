import { useState, useEffect } from "react";
import { X, Check, Phone, ArrowRight, Loader2, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FORMSPREE = "https://formspree.io/f/xjgzkpno";

let _setOpen: ((v: boolean) => void) | null = null;
export const openOfferteModal = () => { _setOpen?.(true); };

function ThankYou({ onClose }: { onClose: () => void }) {
  return (
    <div className="rounded-2xl bg-white shadow-2xl overflow-hidden">
      <div className="flex justify-end p-4">
        <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Sluiten">
          <X className="h-5 w-5" />
        </button>
      </div>
      <div className="px-8 pb-10 text-center">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full" style={{ background: "hsl(214 82% 56% / 0.12)" }}>
          <Check className="h-8 w-8 text-accent" strokeWidth={2.5} />
        </div>
        <h2 className="text-2xl font-black text-foreground">Aanvraag ontvangen!</h2>
        <p className="mt-3 max-w-sm mx-auto text-muted-foreground leading-relaxed">
          We nemen binnen 24 uur contact met u op voor een vrijblijvend gesprek. Heeft u een dringende vraag? Bel ons gerust.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href="tel:+32472812952"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-bold text-foreground hover:border-accent hover:text-accent transition-colors"
          >
            <Phone className="h-4 w-4" />
            +32 472 81 29 52
          </a>
          <button
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-bold text-white transition-all hover:brightness-110"
            style={{ background: "hsl(214 82% 56%)" }}
          >
            Sluiten
          </button>
        </div>
      </div>
    </div>
  );
}

function OfferteForm({ onSuccess, onClose }: { onSuccess: () => void; onClose: () => void }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const form = e.currentTarget;
    const honeypot = (form.elements.namedItem("_gotcha") as HTMLInputElement).value;
    if (honeypot) return;
    const data = {
      _subject: "Nieuwe offerte-aanvraag via bv-bradico.be",
      naam: (form.elements.namedItem("naam") as HTMLInputElement).value,
      telefoon: (form.elements.namedItem("telefoon") as HTMLInputElement).value,
      gemeente: (form.elements.namedItem("gemeente") as HTMLInputElement).value,
      type: (form.elements.namedItem("type") as HTMLSelectElement).value,
      bericht: (form.elements.namedItem("bericht") as HTMLTextAreaElement).value,
      source: "modal",
    };
    try {
      const res = await fetch(FORMSPREE, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) { onSuccess(); } else { setError("Er is iets misgegaan. Bel ons op +32 472 81 29 52."); }
    } catch {
      setError("Er is iets misgegaan. Bel ons op +32 472 81 29 52.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-2xl bg-white shadow-2xl overflow-hidden" style={{ maxHeight: "90dvh", overflowY: "auto" }}>
      <div className="flex items-center justify-between px-6 py-5 border-b" style={{ background: "linear-gradient(135deg, #070c18 0%, #0e1e35 100%)" }}>
        <div>
          <h2 className="text-lg font-black text-white">Gratis offerte aanvragen</h2>
          <p className="text-xs text-white/55 mt-0.5">Reactie binnen 48 uur - volledig vrijblijvend</p>
        </div>
        <button onClick={onClose} className="ml-4 text-white/50 hover:text-white transition-colors" aria-label="Sluiten">
          <X className="h-5 w-5" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-4">
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-foreground">Naam *</label>
            <input required type="text" name="naam" placeholder="Jan Janssen"
              className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 transition-all" />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-foreground">Telefoon *</label>
            <input required type="tel" name="telefoon" placeholder="+32 ..."
              className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 transition-all" />
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-semibold text-foreground">Gemeente *</label>
          <input required type="text" name="gemeente" placeholder="Bijv. Hasselt, Venlo, Antwerpen..."
            className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 transition-all" />
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-semibold text-foreground">Type project</label>
          <select name="type"
            className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 cursor-pointer transition-all">
            <option value="">Kies een type...</option>
            <option>Bedrijfshal nieuwbouw</option>
            <option>Staalconstructie</option>
            <option>Loods of magazijn</option>
            <option>Sandwichpanelen</option>
            <option>Gevelrenovatie</option>
            <option>Andere</option>
          </select>
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-semibold text-foreground">Bericht (optioneel)</label>
          <textarea name="bericht" rows={3} placeholder="Kort beschrijven wat u zoekt..."
            className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 resize-none transition-all" />
        </div>

        <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

        {error && <p className="text-sm text-red-600 text-center">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold text-white transition-all hover:brightness-110 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
          style={{ background: "linear-gradient(135deg, hsl(214 82% 54%) 0%, hsl(220 85% 46%) 100%)", boxShadow: "0 4px 20px -4px hsl(214 82% 56% / 0.45)" }}
        >
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4" />}
          {loading ? "Versturen..." : "Verstuur aanvraag"}
        </button>

        <div className="flex items-center justify-center gap-1.5">
          <Lock className="h-3 w-3 text-muted-foreground/60" />
          <p className="text-[11px] text-muted-foreground/60">Uw gegevens worden niet gedeeld met derden</p>
        </div>
      </form>
    </div>
  );
}

export const OfferteModal = () => {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  _setOpen = setOpen;

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const anchor = (e.target as Element).closest('a[href="#contact"], a[href="/#contact"]');
      if (anchor) {
        e.preventDefault();
        setSent(false);
        setOpen(true);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => setSent(false), 400);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />
          <div className="fixed inset-0 z-[70] flex items-end justify-center p-4 sm:items-center pointer-events-none">
            <motion.div
              className="w-full max-w-lg pointer-events-auto"
              initial={{ opacity: 0, y: 32, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 32, scale: 0.97 }}
              transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {sent
                ? <ThankYou onClose={handleClose} />
                : <OfferteForm onSuccess={() => setSent(true)} onClose={handleClose} />
              }
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
