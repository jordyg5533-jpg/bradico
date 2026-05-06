import { useEffect, useState } from "react";
import { Phone, Send } from "lucide-react";

export const MobileBottomBar = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const contact = document.getElementById("contact");
    if (!contact) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(contact);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t bg-background/95 backdrop-blur-xl transition-transform duration-300 lg:hidden ${visible ? "translate-y-0" : "translate-y-full"}`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex gap-2.5 px-4 py-3">
        <a href="tel:+32472812952" className="flex flex-1 items-center justify-center gap-2 rounded-xl border bg-card py-3.5 text-sm font-bold text-foreground shadow-sm active:scale-95">
          <Phone className="h-4 w-4 text-accent" />
          Bel ons
        </a>
        <a href="#contact" className="flex flex-1 items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold text-white shadow-lg active:scale-95" style={{ background: "hsl(28 85% 52%)" }}>
          <Send className="h-4 w-4" />
          Gratis offerte
        </a>
      </div>
    </div>
  );
};
