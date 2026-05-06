import { useState } from "react";
import { ArrowRight, Lock, Check } from "lucide-react";

const TRUST = ["Geen verplichtingen", "Reactie binnen 24u", "Vaste prijs garantie"];

export const QuoteForm = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="rounded-2xl border bg-card p-8 text-center shadow-card">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full" style={{ background: "hsl(214 82% 56% / 0.12)" }}>
          <Check className="h-7 w-7 text-accent" strokeWidth={2.5} />
        </div>
        <h3 className="text-lg font-bold text-foreground">Aanvraag ontvangen!</h3>
        <p className="mt-2 text-sm text-muted-foreground">We nemen binnen 24 uur contact met u op voor een vrijblijvend terreinbezoek.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border bg-card shadow-card overflow-hidden">
      {/* header */}
      <div className="px-6 pt-6 pb-5 border-b border-border">
        <h3 className="text-lg font-black text-foreground">Gratis offerte aanvragen</h3>
        <p className="mt-1 text-xs text-muted-foreground">Reactie binnen 48 uur — volledig vrijblijvend.</p>
      </div>

      <div className="p-6 space-y-4">
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-foreground">Naam *</label>
            <input
              required
              type="text"
              name="naam"
              placeholder="Jan Janssen"
              className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/15"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-foreground">Telefoon *</label>
            <input
              required
              type="tel"
              name="telefoon"
              placeholder="+32 ..."
              className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/15"
            />
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-semibold text-foreground">Gemeente *</label>
          <input
            required
            type="text"
            name="gemeente"
            placeholder="Bijv. Hasselt, Genk, Antwerpen..."
            className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/15"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-semibold text-foreground">Type project</label>
          <select
            name="type"
            className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/15 cursor-pointer"
          >
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
          <textarea
            name="bericht"
            rows={3}
            placeholder="Kort beschrijven wat u zoekt..."
            className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/15 resize-none"
          />
        </div>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold text-white transition-all hover:brightness-110 hover:scale-[1.01] active:scale-95"
          style={{ background: "linear-gradient(135deg, hsl(214 82% 54%) 0%, hsl(220 85% 46%) 100%)", boxShadow: "0 4px 20px -4px hsl(214 82% 56% / 0.45)" }}
        >
          Offerte aanvragen
          <ArrowRight className="h-4 w-4" />
        </button>

        {/* micro trust */}
        <div className="flex items-center justify-center gap-1.5 pt-1">
          <Lock className="h-3 w-3 text-muted-foreground/60" />
          <p className="text-[11px] text-muted-foreground/60">Uw gegevens worden niet gedeeld met derden</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 border-t border-border pt-4">
          {TRUST.map((t) => (
            <span key={t} className="flex items-center gap-1 text-[11px] text-muted-foreground">
              <Check className="h-3 w-3 text-accent" strokeWidth={2.5} />
              {t}
            </span>
          ))}
        </div>
      </div>
    </form>
  );
};
