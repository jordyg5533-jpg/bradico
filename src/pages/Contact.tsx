import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChatBot } from "@/components/ChatBot";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import { QuoteForm } from "@/components/QuoteForm";
import { fadeUp, viewport } from "@/lib/animations";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact — Bradico Bedrijfshallen & Staalconstructies Limburg</title>
        <meta name="description" content="Neem contact op met Bradico voor een vrijblijvende offerte. Bedrijfshallen, loodsen en staalconstructies in Limburg op vaste prijs. Reactie binnen 48 uur." />
        <link rel="canonical" href="https://www.bradico.be/contact" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <section className="relative overflow-hidden pt-24 pb-16">
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #070c18 0%, #0e1e35 60%, #152844 100%)" }} aria-hidden />
          <div className="container-x relative">
            <motion.div className="max-w-2xl text-white" variants={fadeUp} initial="hidden" animate="show">
              <h1 className="text-3xl font-black leading-tight text-white md:text-4xl lg:text-5xl">Neem contact op</h1>
              <p className="mt-4 text-base text-white/70 leading-relaxed">
                Vraag een vrijblijvende offerte aan of stel uw vraag. We plannen snel een terreinbezoek en bezorgen u binnen 48 uur een gedetailleerde vaste-prijs offerte.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container-x">
            <div className="grid gap-12 lg:grid-cols-2">
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
                <h2 className="text-2xl font-black text-foreground mb-8">Offerte aanvragen</h2>
                <QuoteForm />
              </motion.div>

              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport} transition={{ delay: 0.1 }}>
                <h2 className="text-2xl font-black text-foreground mb-8">Contactgegevens</h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4 rounded-2xl border bg-card p-5 shadow-soft">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl" style={{ background: "hsl(28 85% 52% / 0.12)" }}>
                      <Phone className="h-5 w-5" style={{ color: "hsl(28 85% 52%)" }} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Telefoon</p>
                      <a href="tel:+32472812952" className="mt-1 block text-base font-bold text-foreground hover:text-accent transition-colors">+32 472 81 29 52</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-2xl border bg-card p-5 shadow-soft">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl" style={{ background: "hsl(28 85% 52% / 0.12)" }}>
                      <Mail className="h-5 w-5" style={{ color: "hsl(28 85% 52%)" }} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">E-mail</p>
                      <a href="mailto:info@bradico.be" className="mt-1 block text-base font-bold text-foreground hover:text-accent transition-colors">info@bradico.be</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-2xl border bg-card p-5 shadow-soft">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl" style={{ background: "hsl(28 85% 52% / 0.12)" }}>
                      <MapPin className="h-5 w-5" style={{ color: "hsl(28 85% 52%)" }} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Adres</p>
                      <p className="mt-1 text-base font-bold text-foreground">Venlosesteenweg 418</p>
                      <p className="text-sm text-muted-foreground">3640 Kinrooi, België</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-2xl border bg-card p-5 shadow-soft">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl" style={{ background: "hsl(28 85% 52% / 0.12)" }}>
                      <Clock className="h-5 w-5" style={{ color: "hsl(28 85% 52%)" }} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Bereikbaarheid</p>
                      <p className="mt-1 text-sm font-semibold text-foreground">Ma–Vr: 07:00–18:00</p>
                      <p className="text-sm text-muted-foreground">Za: 08:00–12:00 · Offerte altijd binnen 48u</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
        <ChatBot />
        <MobileBottomBar />
      </div>
    </>
  );
}
