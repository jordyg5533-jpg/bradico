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
import { GoogleReviews } from "@/components/GoogleReviews";
import { SEOContent } from "@/components/SEOContent";
import { Footer } from "@/components/Footer";
import { ChatBot } from "@/components/ChatBot";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import { OfferteModal } from "@/components/OfferteModal";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Wat kost een bedrijfshal laten bouwen?", "acceptedAnswer": { "@type": "Answer", "text": "De prijs van een bedrijfshal hangt af van de afmetingen, het type constructie en de afwerking. Bradico werkt altijd met een vaste prijs - na terreinbezoek ontvangt u binnen 48 uur een gedetailleerde offerte zonder verborgen kosten." } },
    { "@type": "Question", "name": "Hoe lang duurt het bouwen van een bedrijfshal?", "acceptedAnswer": { "@type": "Answer", "text": "Een gemiddelde bedrijfshal wordt in 8 tot 16 weken opgeleverd, afhankelijk van de omvang en vergunningsprocedure." } },
    { "@type": "Question", "name": "Regelt Bradico ook de bouwvergunning?", "acceptedAnswer": { "@type": "Answer", "text": "Ja. Wij begeleiden u door het volledige vergunningsproces. Van aanvraag tot goedkeuring - dat is deel van onze totaalformule." } },
    { "@type": "Question", "name": "Wat zijn sandwichpanelen en waarvoor worden ze gebruikt?", "acceptedAnswer": { "@type": "Answer", "text": "Sandwichpanelen zijn isolerende bouwelementen voor gevels en daken. Ze bieden uitstekende thermische isolatie, zijn snel te plaatsen en geschikt voor zowel nieuwbouw als renovatie van industriële gebouwen." } },
    { "@type": "Question", "name": "Werkt Bradico ook in Nederlands Limburg?", "acceptedAnswer": { "@type": "Answer", "text": "Absoluut. Bradico is actief aan beide kanten van de grens - zowel in Belgisch als Nederlands Limburg, inclusief de regio Maastricht, Venlo en Weert." } },
    { "@type": "Question", "name": "Geeft Bradico garantie op de uitvoering?", "acceptedAnswer": { "@type": "Answer", "text": "Ja. Wij leveren sleutelklaar op en geven garantie op zowel materialen als uitvoering. Na oplevering bent u voor vragen en nazorg bij dezelfde contactpersoon terecht." } },
  ],
};

const Index = () => (
  <>
    <Helmet>
      <title>Industriebouw & Staalconstructies Limburg | Bedrijfshallen | Bradico</title>
      <meta name="description" content="Bradico - erkend aannemer voor industriebouw, bedrijfshallen en staalconstructies in Limburg. Vaste prijs, sleutelklaar. Offerte binnen 48 uur." />
      <link rel="canonical" href="https://www.bv-bradico.be/" />
      <meta property="og:title" content="Industriebouw & Staalconstructies Limburg | Bedrijfshallen | Bradico" />
      <meta property="og:description" content="Erkend aannemer voor industriebouw, bedrijfshallen en staalconstructies in Limburg en Vlaanderen. Vaste prijs, sleutelklaar." />
      <meta property="og:url" content="https://www.bv-bradico.be/" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.bv-bradico.be/projects/bedrijfshal-na.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Bradico - industriebouw en staalconstructies Limburg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Industriebouw & Staalconstructies Limburg | Bedrijfshallen | Bradico" />
      <meta name="twitter:description" content="Erkend aannemer voor industriebouw, bedrijfshallen en staalconstructies in Limburg en Vlaanderen. Vaste prijs, sleutelklaar." />
      <meta name="twitter:image" content="https://www.bv-bradico.be/projects/bedrijfshal-na.jpg" />
      <meta name="twitter:image:alt" content="Bradico - industriebouw en staalconstructies Limburg" />
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <WhyBradico />
        <GoogleReviews />
        <Process />
        <ServiceArea />
        <FAQ />
        <SEOContent />
        <ContactCTA />
      </main>
      <Footer />
      <ChatBot />
      <MobileBottomBar />
      <OfferteModal />
    </div>
  </>
);

export default Index;
