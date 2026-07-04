import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChatBot } from "@/components/ChatBot";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import { OfferteModal } from "@/components/OfferteModal";
import { ContactCTA } from "@/components/ContactCTA";
import { ProjectGalleryCard, type GalleryPhoto } from "@/components/ProjectGalleryCard";
import { fadeUp, staggerContainer, staggerItem, viewport } from "@/lib/animations";

interface ProjectData {
  photos: GalleryPhoto[];
  title: string;
  desc: string;
  type: string;
  startIndex?: number;
}

const beforeAfterProjects: ProjectData[] = [
  {
    photos: [
      { src: "/projects/bedrijfshal-voor.jpg", label: "voor" },
      { src: "/projects/bedrijfshal_voor.jpeg", label: "voor" },
      { src: "/projects/bedrijfshal-na.jpg", label: "na" },
      { src: "/projects/bedrijfshal_na.jpeg", label: "na" },
      { src: "/projects/bedrijfshal-4.jpg", label: "na" },
    ],
    startIndex: 2,
    title: "Industriële bedrijfshal - nieuwbouw",
    desc: "Van staalstructuur op nulpunt tot een volledig afgewerkt magazijncomplex met laadkades en kantoorgedeelte. Opgeleverd binnen planning, vaste prijs.",
    type: "Bedrijfshal",
  },
  {
    photos: [
      { src: "/projects/loods-voor.jpg", label: "voor" },
      { src: "/projects/loods_voor.jpeg", label: "voor" },
      { src: "/projects/loods-na.jpg", label: "na" },
      { src: "/projects/loods_na_1.jpeg", label: "na" },
      { src: "/projects/loods-1.jpg", label: "na" },
    ],
    startIndex: 2,
    title: "Opslagloods - sleutelklaar",
    desc: "Staalstructuur opgetrokken, bekleed met groene sandwichpanelen en voorzien van een sectionale poort. Functioneel en energiezuinig afgewerkt.",
    type: "Loods",
  },
  {
    photos: [
      { src: "/projects/bhal3.jpeg", label: "bouw" },
      { src: "/projects/bedrijfsgebouw-voor.jpg", label: "voor" },
      { src: "/projects/bedrijfsgebouw-na.jpg", label: "na" },
      { src: "/projects/bedrijfsgebouw_na_2.jpeg", label: "na" },
    ],
    startIndex: 2,
    title: "Bedrijfsgebouw - totaalrenovatie",
    desc: "Van verouderd pand tot modern afgewerkt bedrijfsgebouw. Volledig nieuwe gevelstructuur, raampartijen en gevelbekleding. Onherkenbaar resultaat.",
    type: "Renovatie",
  },
  {
    photos: [
      { src: "/projects/gevel-project-voor-1.jpeg", label: "voor" },
      { src: "/projects/gevel-project-voor-2.jpeg", label: "voor" },
      { src: "/projects/gevel-project-na-1.jpeg", label: "na" },
      { src: "/projects/gevel-project-na-2.jpeg", label: "na" },
    ],
    startIndex: 2,
    title: "Gevelrenovatie bedrijfshal - geel naar antraciet",
    desc: "Gele hal met blauwe deuren volledig getransformeerd: nieuwe antraciet sandwichpanelen op de hal, houtlook gevelbekleding op het kantoorgedeelte. Onherkenbaar resultaat.",
    type: "Gevelrenovatie",
  },
  {
    photos: [
      { src: "/projects/gevelrenovatie-voor.jpg", label: "voor" },
      { src: "/projects/gevelrenovatie-na.jpg", label: "na" },
      { src: "/projects/gevelrenovatie-3.jpg", label: "na" },
      { src: "/projects/gevelrenovatie-4.jpg", label: "na" },
    ],
    startIndex: 1,
    title: "Gevelrenovatie - sanering & nieuwe bekleding",
    desc: "Verouderde gevel volledig gesaneerd en bekleed met antraciet sandwichpanelen. Betere isolatie, strakke uitstraling.",
    type: "Gevelrenovatie",
  },
];

const moreProjects: ProjectData[] = [
  {
    photos: [
      { src: "/projects/bhal.jpeg" },
      { src: "/projects/bedrijfshal-5.jpg" },
      { src: "/projects/bedrijfshal-3.jpg" },
    ],
    title: "Staalconstructie op maat",
    desc: "Grote industriële staalconstructie met brede overspan en geen tussenkolommen - maximale bruikbare vloeroppervlakte.",
    type: "Staalconstructie",
  },
  {
    photos: [
      { src: "/projects/gvl5.jpeg" },
      { src: "/projects/gvl7.jpeg" },
      { src: "/projects/gvl8.jpeg" },
      { src: "/projects/gvl2.jpeg" },
    ],
    title: "Sandwichpanelen gevelbekleding",
    desc: "Levering en montage van hoogwaardige sandwichpanelen voor gevel en dak - energie-efficiënt en duurzaam.",
    type: "Sandwichpanelen",
  },
  {
    photos: [
      { src: "/projects/luifel-1.jpg" },
      { src: "/projects/luifel-2.jpg" },
      { src: "/projects/luifel-3.jpg" },
      { src: "/projects/luifel_1.jpeg" },
    ],
    title: "Stalen luifel laadzone",
    desc: "Maatwerk stalen luifel voor bescherming van een laadzone. Snel gemonteerd, jarenlang onderhoudsvrij.",
    type: "Luifel",
  },
  {
    photos: [
      { src: "/projects/loods-2.jpg" },
      { src: "/projects/loods-3.jpg" },
      { src: "/projects/loods-4.jpg" },
      { src: "/projects/loods-5.jpg" },
    ],
    title: "Landbouwloods - ruime overspan",
    desc: "Brede vrije overspan zonder tussenkolommen. Optimaal voor opslag van machines en materiaal.",
    type: "Loods",
  },
];

export default function Realisaties() {
  return (
    <>
      <Helmet>
        <title>Realisaties - Bedrijfshallen & Staalconstructies | Bradico</title>
        <meta
          name="description"
          content="Bekijk de voor- en naresultaten van Bradico: bedrijfshallen, loodsen, staalconstructies en gevelrenovaties in Limburg. Allemaal op vaste prijs en sleutelklaar."
        />
        <link rel="canonical" href="https://www.bv-bradico.be/realisaties" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        {/* hero */}
        <section className="relative overflow-hidden pt-24 pb-16">
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(135deg, #050c1a 0%, #0c1e38 55%, #112540 100%)" }}
            aria-hidden
          />
          <div className="container-x relative">
            <motion.div
              className="max-w-2xl text-white"
              variants={fadeUp}
              initial="hidden"
              animate="show"
            >
              <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent/80">
                Portfolio
              </span>
              <h1 className="text-3xl font-black leading-tight text-white md:text-4xl lg:text-5xl">
                Onze realisaties
              </h1>
              <p className="mt-4 text-base text-white/70 leading-relaxed max-w-xl">
                Blader door de fotos van elk project - tik of klik om door de resultaten te scrollen.
                Elk project werd opgeleverd op vaste prijs en sleutelklaar.
              </p>
            </motion.div>
          </div>
        </section>

        {/* voor/na projecten */}
        <section className="py-20">
          <div className="container-x">
            <motion.div
              className="mb-10"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Voor &amp; na
              </span>
              <h2 className="mt-2 text-2xl font-black text-foreground md:text-3xl">
                Zie het verschil zelf
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Gebruik de pijltjes of swipe om door alle foto's van elk project te bladeren.
              </p>
            </motion.div>

            <motion.div
              className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              {beforeAfterProjects.map((p) => (
                <motion.div key={p.title} variants={staggerItem}>
                  <ProjectGalleryCard {...p} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* overige projecten */}
        <section className="py-16 bg-soft">
          <div className="container-x">
            <motion.div
              className="mb-10"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Meer projecten
              </span>
              <h2 className="mt-2 text-2xl font-black text-foreground md:text-3xl">
                Overige realisaties
              </h2>
            </motion.div>

            <motion.div
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              {moreProjects.map((p) => (
                <motion.div key={p.title} variants={staggerItem}>
                  <ProjectGalleryCard {...p} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <ContactCTA />
        <Footer />
        <ChatBot />
        <MobileBottomBar />
        <OfferteModal />
      </div>
    </>
  );
}
