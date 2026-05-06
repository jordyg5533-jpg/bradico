import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChatBot } from "@/components/ChatBot";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import { ContactCTA } from "@/components/ContactCTA";
import { BeforeAfterCard, SinglePhotoCard } from "@/components/BeforeAfterCard";
import { fadeUp, staggerContainer, staggerItem, viewport } from "@/lib/animations";

const beforeAfterProjects = [
  {
    voor: "/projects/bedrijfshal-voor.jpg",
    na: "/projects/bedrijfshal-na.jpg",
    title: "Industriële bedrijfshal — nieuwbouw",
    desc: "Van nulpunt staalstructuur tot een volledig afgewerkt magazijncomplex met laadkades en kantoorgedeelte. Opgeleverd binnen planning, vaste prijs.",
    type: "Bedrijfshal",
  },
  {
    voor: "/projects/loods-voor.jpg",
    na: "/projects/loods-na.jpg",
    title: "Opslagloods — sleutelklaar",
    desc: "Staalstructuur opgetrokken, bekleed met groene sandwichpanelen en voorzien van een sectionale poort. Functioneel en energiezuinig afgewerkt.",
    type: "Loods",
  },
  {
    voor: "/projects/gevel-project-voor-1.jpeg",
    na: "/projects/gevel-project-na-1.jpeg",
    title: "Gevelrenovatie bedrijfshal — totaalrenovatie",
    desc: "Gele hal met blauwe deuren volledig getransformeerd: nieuwe antraciet sandwichpanelen op de hal, houtlook gevelbekleding op het kantoorgedeelte. Onherkenbaar resultaat.",
    type: "Gevelrenovatie",
  },
  {
    voor: "/projects/gevelrenovatie-voor.jpg",
    na: "/projects/gevelrenovatie-na.jpg",
    title: "Gevelrenovatie — sanering & nieuwe bekleding",
    desc: "Verouderde bakstenen gevel volledig gesaneerd en bekleed met nieuwe antraciet sandwichpanelen. Betere isolatie, strakke uitstraling.",
    type: "Gevelrenovatie",
  },
];

const singleProjects = [
  {
    img: "/projects/bhal.jpeg",
    title: "Staalconstructie op maat",
    desc: "Grote industriële staalconstructie met brede overspan en geen tussenkolommen — maximale bruikbare vloeroppervlakte.",
    type: "Staalconstructie",
  },
  {
    img: "/projects/bhal3.jpeg",
    title: "Productiehal met kantoorunit",
    desc: "Productiehal gecombineerd met geïntegreerd kantoorgedeelte. Vaste prijs, sleutelklaar opgeleverd in Limburg.",
    type: "Bedrijfshal",
  },
  {
    img: "/projects/gvl5.jpeg",
    title: "Sandwichpanelen gevelbekleding",
    desc: "Levering en montage van hoogwaardige sandwichpanelen voor gevel en dak — energie-efficiënt en duurzaam.",
    type: "Sandwichpanelen",
  },
  {
    img: "/projects/luifel-1.jpg",
    title: "Stalen luifel laadzone",
    desc: "Maatwerk stalen luifel voor bescherming van een laadzone. Snel gemonteerd, jarenlang onderhoudsvij.",
    type: "Luifel",
  },
];

export default function Realisaties() {
  return (
    <>
      <Helmet>
        <title>Realisaties — Bedrijfshallen & Staalconstructies | Bradico</title>
        <meta name="description" content="Bekijk de voor- en naresultaten van Bradico: bedrijfshallen, loodsen, staalconstructies en gevelrenovaties in Limburg. Allemaal op vaste prijs en sleutelklaar." />
        <link rel="canonical" href="https://www.bradico.be/realisaties" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        {/* hero */}
        <section className="relative overflow-hidden pt-24 pb-16">
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #050c1a 0%, #0c1e38 55%, #112540 100%)" }} aria-hidden />
          <div className="container-x relative">
            <motion.div className="max-w-2xl text-white" variants={fadeUp} initial="hidden" animate="show">
              <h1 className="text-3xl font-black leading-tight text-white md:text-4xl lg:text-5xl">Onze realisaties</h1>
              <p className="mt-4 text-base text-white/70 leading-relaxed">
                Klik op een project om het voor- en naresultaat te vergelijken. Elk project werd opgeleverd op vaste prijs en sleutelklaar — in Limburg en omgeving.
              </p>
            </motion.div>
          </div>
        </section>

        {/* voor/na projecten */}
        <section className="py-20">
          <div className="container-x">
            <motion.div className="mb-10" variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Voor &amp; na</span>
              <h2 className="mt-2 text-2xl font-black text-foreground md:text-3xl">Zie het verschil zelf</h2>
              <p className="mt-2 text-sm text-muted-foreground">Tik op een foto om te schakelen tussen de situatie voor en na onze ingreep.</p>
            </motion.div>

            <motion.div
              className="grid gap-6 sm:grid-cols-2"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              {beforeAfterProjects.map((p) => (
                <motion.div key={p.title} variants={staggerItem}>
                  <BeforeAfterCard {...p} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* overige projecten */}
        <section className="py-16 bg-soft">
          <div className="container-x">
            <motion.div className="mb-10" variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Meer projecten</span>
              <h2 className="mt-2 text-2xl font-black text-foreground md:text-3xl">Overige realisaties</h2>
            </motion.div>

            <motion.div
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              {singleProjects.map((p) => (
                <motion.div key={p.title} variants={staggerItem}>
                  <SinglePhotoCard {...p} />
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
