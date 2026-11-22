// Validatie van contactgegevens, gedeeld door QuoteForm, OfferteModal en de vaste balk onderaan.
// Doel: geen enkele aanvraag meer zonder bruikbaar telefoonnummer en e-mailadres.

/** Enkel de cijfers uit een ingevoerd nummer. */
export const telefoonCijfers = (raw: string): string => raw.replace(/\D/g, "");

/**
 * Aanvaardt Belgische en Nederlandse nummers, mobiel en vast, in nationale
 * (0472 81 29 52) of internationale (+32 472 81 29 52 / 0032...) notatie.
 * Weigert lege waarden, tekst ("geen", "-") en onzin zoals 000000000.
 */
export function isGeldigTelefoon(raw: string): boolean {
  const v = raw.trim();
  if (!v) return false;
  if (!/^(\+|00)?[0-9][0-9\s./()-]*$/.test(v)) return false;
  const cijfers = telefoonCijfers(v);
  if (cijfers.length < 9 || cijfers.length > 15) return false;
  if (/^(\d)\1+$/.test(cijfers)) return false;
  return true;
}

/** Basiscontrole op een echt e-mailadres: iets@iets.tld, geen spaties of komma's. */
export function isGeldigEmail(raw: string): boolean {
  const v = raw.trim();
  if (!v || v.length > 254) return false;
  return /^[^\s@,;]+@[^\s@,;.]+(\.[^\s@,;.]+)+$/.test(v);
}

export const TELEFOON_FOUT =
  "Vul een geldig telefoonnummer in, bijv. 0472 81 29 52 of +32 472 81 29 52.";
export const EMAIL_FOUT = "Vul een geldig e-mailadres in, bijv. jan@bedrijf.be.";
