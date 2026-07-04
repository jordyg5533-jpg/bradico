import { useState, useEffect } from "react";
import { X } from "lucide-react";

declare function gtag(...args: unknown[]): void;

const STORAGE_KEY = "bradico_cookie_consent";

export const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    if (typeof gtag !== "undefined") {
      gtag("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
    }
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6" role="dialog" aria-label="Cookiemelding">
      <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-[#0e1e35] shadow-2xl">
        <div className="flex flex-col gap-4 p-5 md:flex-row md:items-center md:gap-6">
          <div className="flex-1 text-sm text-white/75 leading-relaxed">
            <span className="font-semibold text-white">Cookies op bv-bradico.be</span>{" "}
            Wij gebruiken analytische cookies om het websiteverkeer te meten en de gebruikservaring te verbeteren. Uw gegevens worden niet gedeeld met derden.{" "}
            <a href="/over-bradico" className="text-accent hover:underline">Meer info</a>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <button
              onClick={decline}
              className="rounded-xl border border-white/20 px-4 py-2 text-sm font-medium text-white/70 transition hover:border-white/40 hover:text-white"
            >
              Weigeren
            </button>
            <button
              onClick={accept}
              className="rounded-xl px-5 py-2 text-sm font-bold text-white shadow-lg transition hover:brightness-110"
              style={{ background: "hsl(214 82% 56%)" }}
            >
              Accepteren
            </button>
            <button onClick={decline} className="text-white/40 hover:text-white transition" aria-label="Sluiten">
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
