import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChatBot } from "@/components/ChatBot";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import { ContactCTA } from "@/components/ContactCTA";
import { fadeUp, staggerContainer, staggerItem, viewport } from "@/lib/animations";

const projects = [
  { img: "/projects/bedrijfshal-na.jpg", title: "Bedrijfshal Limburg", desc: "Stalen bedrijfshal 30×50m, sandwichpanelen dak en gevel, kantoordeel, sleutelklaar opgeleverd." },
  { img: "/projects/bhal.jpeg", title: "Industriële hal", desc: "Staalconstructie met grote overspan, geïsoleerde dak- en gevelpanelen, laadperron." },
  { img: "/projects/bhal3.jpeg", title: "Productiehal op maat", desc: "Productiehal met technisch ontwerp op maat, vergunning begeleid, sleutelklare oplevering." },
  { img: "/projects/loods-na.jpg", title: "Opslagloods", desc: "Functionele opslagloods, snel gebouwd, sectionale poorten, energiezuinige isolatie." },
  { img: "/projects/loods-1.jpg", title: "Landbouwloods", desc: "Agrarische loods met hoge deuren, robuuste staalstructuur, volledig op maat." },
  { img: "/projects/loods-2.jpg", title: "Magazijn met laadkades", desc: "Industrieel magazijn met laadkades en kantoorruimte, vaste prijs gerealiseerd." },
  { img: "/projects/gevelrenovatie-na.jpg", title: "Gevelrenovatie bedrijfshal", desc: "Volledige gevelrenovatie met nieuwe sandwichpanelen — nieuw uitzicht, betere isolatie." },
  { img: "/projects/gvl5.jpeg", title: "Sandwichpanelen project", desc: "Levering en montage sandwichpanelen gevel en dak, strakke industriële afwerking." },
  { img: "/projects/luifel-1.jpg", title: "Luifel & overkapping", desc: "Stalen luifel voor bescherming laadzone, ontwerp en montage inbegrepen." },
];

export default function Realisaties() {
  return (
    <>
      <Helmet>
        <title>Realisaties — Bedrijfshallen & Staalconstructies | Bradico</title>
        <meta name="description" content="Bekijk de realisaties van Bradico: bedrijfshallen, loodsen, staalconstructies en gevelrenovaties in Limburg en omgeving. Allemaal op vaste prijs en sleutelklaar." />
        <link rel="canonical" href="https://www.bradico.be/realisaties" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <section className="relative overflow-hidden pt-24 pb-16">
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #070c18 0%, #0e1e35 60%, #152844 100%)" }} aria-hidden />
          <div className="container-x relative">
            <motion.div className="max-w-2xl text-white" variants={fadeUp} initial="hidden" animate="show">
              <h1 className="text-3xl font-black leading-tight text-white md:text-4xl lg:text-5xl">Onze realisaties</h1>
              <p className="mt-4 text-base text-white/70 leading-relaxed">
                Een greep uit de projecten die Bradico realiseerde — bedrijfshallen, loodsen, staalconstructies en gevelrenovaties in Limburg en omgeving. Elk project op vaste prijs en sleutelklaar opgeleverd.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container-x">
            <motion.div
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              {projects.map((p) => (
                <motion.div key={p.img} variants={staggerItem} className="group rounded-2xl overflow-hidden border bg-card shadow-soft hover:shadow-card transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={p.img}
                      alt={`${p.title} — Bradico`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <h2 className="text-base font-bold text-foreground">{p.title}</h2>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <ContactCTA />
        <Footer />
        <ChatBot />
        <MobileBottomBar />
      </div>
    </>
  );
}
