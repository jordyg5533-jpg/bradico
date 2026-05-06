import { Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => (
  <footer className="bg-dark text-dark-foreground">
    <div className="container-x py-16">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

        <div className="md:col-span-2 lg:col-span-1">
          <a href="/" className="inline-block">
            <img src="/logotrans.png" alt="Bradico" className="h-10 w-auto brightness-0 invert" />
          </a>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
            Erkend aannemer voor staalconstructies, bedrijfshallen, loodsen en gevelrenovatie in Limburg, Antwerpen en omstreken.
          </p>
          <ul className="mt-5 space-y-2.5 text-sm text-white/80">
            <li><a href="tel:+32472812952" className="flex items-center gap-2 hover:text-accent transition-smooth"><Phone className="h-4 w-4 text-accent shrink-0" />+32 472 81 29 52</a></li>
            <li><a href="mailto:info@bradico.be" className="flex items-center gap-2 hover:text-accent transition-smooth"><Mail className="h-4 w-4 text-accent shrink-0" />info@bradico.be</a></li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent shrink-0" />Venlosesteenweg 418, 3640 Kinrooi</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/50">Diensten</h4>
          <ul className="space-y-2.5 text-sm text-white/80">
            <li><a href="/staalconstructies-limburg" className="hover:text-accent transition-smooth">Staalconstructies</a></li>
            <li><a href="/bedrijfshallen-bouwen" className="hover:text-accent transition-smooth">Bedrijfshallen bouwen</a></li>
            <li><a href="/loodsen-magazijnen" className="hover:text-accent transition-smooth">Loodsen & magazijnen</a></li>
            <li><a href="/sandwichpanelen" className="hover:text-accent transition-smooth">Sandwichpanelen</a></li>
            <li><a href="/gevelrenovatie-industrieel" className="hover:text-accent transition-smooth">Gevelrenovatie</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/50">Steden</h4>
          <ul className="space-y-2.5 text-sm text-white/80">
            <li><a href="/bedrijfshal-hasselt" className="hover:text-accent transition-smooth">Bedrijfshal Hasselt</a></li>
            <li><a href="/bedrijfshal-genk" className="hover:text-accent transition-smooth">Bedrijfshal Genk</a></li>
            <li><a href="/bedrijfshal-antwerpen" className="hover:text-accent transition-smooth">Bedrijfshal Antwerpen</a></li>
            <li><a href="/bedrijfshal-sint-truiden" className="hover:text-accent transition-smooth">Bedrijfshal Sint-Truiden</a></li>
            <li><a href="/bedrijfshal-tongeren" className="hover:text-accent transition-smooth">Bedrijfshal Tongeren</a></li>
            <li><a href="/bedrijfshal-bilzen" className="hover:text-accent transition-smooth">Bedrijfshal Bilzen</a></li>
            <li><a href="/bedrijfshal-lommel" className="hover:text-accent transition-smooth">Bedrijfshal Lommel</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/50">Bereikbaar</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li className="font-semibold text-white/90">Ma–vr: 7u – 17u</li>
            <li className="text-white/50 text-xs">Zaterdag op afspraak</li>
          </ul>
          <a href="/#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-bold text-white shadow-lg transition-all hover:brightness-110" style={{ background: "hsl(214 82% 56%)" }}>
            Gratis offerte aanvragen
          </a>
          <a href="/realisaties" className="mt-2 inline-flex w-full items-center justify-center rounded-xl border border-white/15 px-4 py-3 text-sm font-semibold text-white/80 transition-smooth hover:border-white/30 hover:text-white">
            Bekijk onze realisaties
          </a>
        </div>

      </div>

      <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
          <span>© {new Date().getFullYear()} Bradico. Alle rechten voorbehouden.</span>
          <span className="text-white/30">BTW: BE1005.526.348</span>
        </div>
        <div className="flex gap-5">
          <a href="#" className="hover:text-accent transition-smooth">Privacy</a>
          <a href="#" className="hover:text-accent transition-smooth">Cookies</a>
        </div>
      </div>
    </div>
    <div className="h-[72px] lg:hidden" aria-hidden />
  </footer>
);
