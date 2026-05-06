import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Services } from "@/components/Services";
import { WhyBradico } from "@/components/WhyBradico";
import { Process } from "@/components/Process";
import { ServiceArea } from "@/components/ServiceArea";
import { FAQ } from "@/components/FAQ";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";
import { ChatBot } from "@/components/ChatBot";
import { MobileBottomBar } from "@/components/MobileBottomBar";

const Index = () => (
  <>
    <Helmet>
      <title>Bedrijfshallen & Staalconstructies Limburg | Bradico</title>
      <meta name="description" content="Bradico bouwt bedrijfshallen, loodsen en staalconstructies in Limburg en Antwerpen. Vaste prijs, geen verrassingen. Offerte binnen 48 uur." />
      <link rel="canonical" href="https://www.bradico.be/" />
    </Helmet>
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <WhyBradico />
        <Process />
        <ServiceArea />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
      <ChatBot />
      <MobileBottomBar />
    </div>
  </>
);

export default Index;
