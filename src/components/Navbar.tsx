import { useEffect, useRef, useState } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

const diensten = [
  { label: "Staalconstructies", href: "/staalconstructies-limburg" },
  { label: "Bedrijfshallen", href: "/bedrijfshallen-bouwen" },
  { label: "Loodsen & magazijnen", href: "/loodsen-magazijnen" },
  { label: "Sandwichpanelen", href: "/sandwichpanelen" },
  { label: "Gevelrenovatie", href: "/gevelrenovatie-industrieel" },
];

const steden = [
  { label: "Hasselt", href: "/bedrijfshal-hasselt" },
  { label: "Genk", href: "/bedrijfshal-genk" },
  { label: "Antwerpen", href: "/bedrijfshal-antwerpen" },
  { label: "Sint-Truiden", href: "/bedrijfshal-sint-truiden" },
  { label: "Tongeren", href: "/bedrijfshal-tongeren" },
  { label: "Bilzen", href: "/bedrijfshal-bilzen" },
  { label: "Lommel", href: "/bedrijfshal-lommel" },
];

interface DropdownProps {
  label: string;
  items: { label: string; href: string }[];
  scrolled: boolean;
}

const Dropdown = ({ label, items, scrolled }: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpen(true);
  };
  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => () => { if (closeTimeout.current) clearTimeout(closeTimeout.current); }, []);

  const triggerClass = scrolled
    ? "flex items-center gap-1 text-sm font-medium text-foreground/80 transition-smooth hover:text-accent"
    : "flex items-center gap-1 text-sm font-medium text-white/85 transition-smooth hover:text-white";

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button className={triggerClass} aria-expanded={open} aria-haspopup="true">
        {label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute left-0 top-full z-50 mt-1.5 w-52 overflow-hidden rounded-xl border bg-background/95 py-1.5 shadow-card backdrop-blur-xl">
          {items.map((item) => (
            <a key={item.href} href={item.href} className="block px-4 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-accent">
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<"diensten" | "steden" | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-smooth ${scrolled ? "bg-background/90 backdrop-blur-xl border-b shadow-soft" : "bg-transparent"}`}>
      <div className="container-x flex h-16 items-center justify-between">
        <a href="/" className="flex items-center shrink-0">
          <img src="/logotrans.png" alt="Bradico, staalconstructies en bedrijfshallen Limburg" className={`h-10 w-auto transition-all duration-300 ${scrolled ? "" : "brightness-0 invert"}`} />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          <Dropdown label="Diensten" items={diensten} scrolled={scrolled} />
          <Dropdown label="Steden" items={steden} scrolled={scrolled} />
          <a href="/realisaties" className={scrolled ? "text-sm font-medium text-foreground/80 transition-smooth hover:text-accent" : "text-sm font-medium text-white/85 transition-smooth hover:text-white"}>Realisaties</a>
          <a href="/#contact" className={scrolled ? "text-sm font-medium text-foreground/80 transition-smooth hover:text-accent" : "text-sm font-medium text-white/85 transition-smooth hover:text-white"}>Contact</a>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="tel:+32472812952" className={scrolled ? "flex items-center gap-2 text-sm font-semibold text-foreground transition-smooth hover:text-accent" : "flex items-center gap-2 text-sm font-semibold text-white/90 transition-smooth hover:text-white"}>
            <Phone className="h-4 w-4" />
            +32 472 81 29 52
          </a>
          <a href="/#contact" className="inline-flex items-center rounded-xl bg-accent px-5 py-2.5 text-sm font-bold text-white shadow-lg transition-all hover:brightness-110">
            Gratis offerte
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a href="tel:+32472812952" className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground" aria-label="Bel ons">
            <Phone className="h-4 w-4" />
          </a>
          <button
            onClick={() => { setMobileOpen((v) => !v); setMobileSection(null); }}
            className={`flex h-10 w-10 items-center justify-center rounded-lg border ${scrolled ? "bg-card border-border" : "bg-white/10 border-white/20"}`}
            aria-label="Menu"
          >
            {mobileOpen
              ? <X className={`h-5 w-5 ${scrolled ? "text-foreground" : "text-white"}`} />
              : <Menu className={`h-5 w-5 ${scrolled ? "text-foreground" : "text-white"}`} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t bg-background/97 backdrop-blur-xl lg:hidden">
          <div className="container-x flex flex-col gap-0.5 py-4">
            <button onClick={() => setMobileSection(mobileSection === "diensten" ? null : "diensten")} className="flex items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-secondary">
              Diensten <ChevronDown className={`h-4 w-4 transition-transform ${mobileSection === "diensten" ? "rotate-180" : ""}`} />
            </button>
            {mobileSection === "diensten" && (
              <div className="mb-1 ml-3 flex flex-col gap-0.5 border-l-2 border-accent/30 pl-3">
                {diensten.map((item) => (
                  <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary hover:text-accent">{item.label}</a>
                ))}
              </div>
            )}
            <button onClick={() => setMobileSection(mobileSection === "steden" ? null : "steden")} className="flex items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-secondary">
              Steden <ChevronDown className={`h-4 w-4 transition-transform ${mobileSection === "steden" ? "rotate-180" : ""}`} />
            </button>
            {mobileSection === "steden" && (
              <div className="mb-1 ml-3 grid grid-cols-2 gap-0.5 border-l-2 border-accent/30 pl-3">
                {steden.map((item) => (
                  <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary hover:text-accent">{item.label}</a>
                ))}
              </div>
            )}
            <a href="/realisaties" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-secondary">Realisaties</a>
            <a href="/#contact" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-secondary">Contact</a>
            <a href="/#contact" onClick={() => setMobileOpen(false)} className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-accent px-4 py-3 text-sm font-bold text-white">
              Gratis offerte aanvragen
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
