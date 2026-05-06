import { useState } from "react";
import { Send } from "lucide-react";

export const QuoteForm = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="rounded-2xl border bg-card p-6 text-center shadow-card">
        <div className="mb-3 text-3xl">✅</div>
        <h3 className="text-lg font-bold text-foreground">Aanvraag ontvangen!</h3>
        <p className="mt-2 text-sm text-muted-foreground">We nemen binnen 24 uur contact met u op.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border bg-card p-6 shadow-card space-y-4">
      <h3 className="text-lg font-bold text-foreground">Gratis offerte aanvragen</h3>
      <p className="text-xs text-muted-foreground">Reactie binnen 48 uur — geen verplichtingen.</p>

      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-semibold text-foreground/70">Naam *</label>
          <input required type="text" name="naam" placeholder="Jan Janssen" className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-accent transition-colors" />
        </div>
        <div>
          <label className="mb-1 block text-xs font-semibold text-foreground/70">Telefoon *</label>
          <input required type="tel" name="telefoon" placeholder="+32 ..." className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-accent transition-colors" />
        </div>
      </div>

      <div>
        <label className="mb-1 block text-xs font-semibold text-foreground/70">Gemeente *</label>
        <input required type="text" name="gemeente" placeholder="Bijv. Hasselt, Genk, Antwerpen..." className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-accent transition-colors" />
      </div>

      <div>
        <label className="mb-1 block text-xs font-semibold text-foreground/70">Type project</label>
        <select name="type" className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-accent transition-colors">
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
        <label className="mb-1 block text-xs font-semibold text-foreground/70">Bericht (optioneel)</label>
        <textarea name="bericht" rows={3} placeholder="Kort beschrijven wat u zoekt..." className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-accent transition-colors resize-none" />
      </div>

      <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:brightness-110 active:scale-95" style={{ background: "hsl(28 85% 52%)" }}>
        <Send className="h-4 w-4" />
        Offerte aanvragen
      </button>
    </form>
  );
};
