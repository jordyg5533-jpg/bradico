import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { fadeUp, viewport } from "@/lib/animations";
import { QuoteForm } from "./QuoteForm";

export const ContactCTA = () => (
  <section id="contact" className="py-20" aria-label="Contact en offerte">
    <div className="container-x">
      <motion.div className="text-center mb-14" variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Contact</span>
        <h2 className="mt-3 text-3xl font-black text-foreground md:text-4xl">Klaar voor uw project?</h2>
        <p className="mt-4 max-w-xl mx-auto text-muted-foreground">Vraag gratis een offerte aan. Wij bellen u terug voor een terreinbezoek en hebben binnen 48 uur een vaste prijs klaar.</p>
      </motion.div>

      <div className="grid gap-10 lg:grid-cols-2">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
          <QuoteForm />
        </motion.div>

        <motion.div className="flex flex-col gap-6" variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport} transition={{ delay: 0.1 }}>
          <div className="rounded-2xl border bg-card p-6 shadow-soft space-y-4">
            <h3 className="text-lg font-bold text-foreground">Contactgegevens</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl" style={{ background: "hsl(28 85% 52% / 0.12)" }}>
                  <Phone className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Telefoon</p>
                  <a href="tel:+32472812952" className="text-sm font-semibold text-foreground hover:text-accent transition-smooth">+32 472 81 29 52</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl" style={{ background: "hsl(28 85% 52% / 0.12)" }}>
                  <Mail className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">E-mail</p>
                  <a href="mailto:info@bradico.be" className="text-sm font-semibold text-foreground hover:text-accent transition-smooth">info@bradico.be</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl" style={{ background: "hsl(28 85% 52% / 0.12)" }}>
                  <MapPin className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Adres</p>
                  <p className="text-sm font-semibold text-foreground">Venlosesteenweg 418<br />3640 Kinrooi</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl" style={{ background: "hsl(28 85% 52% / 0.12)" }}>
                  <Clock className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Openingsuren</p>
                  <p className="text-sm font-semibold text-foreground">Ma–vr: 7u – 17u</p>
                  <p className="text-xs text-muted-foreground">Zaterdag op afspraak</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl p-6 text-white" style={{ background: "linear-gradient(135deg, hsl(215 40% 14%), hsl(215 35% 22%))" }}>
            <h3 className="text-lg font-bold">Offerte binnen 48 uur</h3>
            <p className="mt-2 text-sm text-white/75">Na uw aanvraag plannen we een terreinbezoek in. Binnen 48 uur heeft u een volledige, vaste-prijs offerte in uw mailbox.</p>
            <ul className="mt-4 space-y-2">
              {["Geen verborgen kosten", "Gratis terreinbezoek", "Vaste prijs — altijd"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-white/85">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
