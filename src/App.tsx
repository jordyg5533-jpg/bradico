import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import StaalconstructiesLimburg from "./pages/diensten/StaalconstructiesLimburg";
import BedrijfshallenBouwen from "./pages/diensten/BedrijfshallenBouwen";
import LoodsenMagazijnen from "./pages/diensten/LoodsenMagazijnen";
import Sandwichpanelen from "./pages/diensten/Sandwichpanelen";
import GevelrenovatieIndustrieel from "./pages/diensten/GevelrenovatieIndustrieel";
import BedrijfshalHasselt from "./pages/steden/BedrijfshalHasselt";
import BedrijfshalGenk from "./pages/steden/BedrijfshalGenk";
import BedrijfshalAntwerpen from "./pages/steden/BedrijfshalAntwerpen";
import BedrijfshalSintTruiden from "./pages/steden/BedrijfshalSintTruiden";
import BedrijfshalTongeren from "./pages/steden/BedrijfshalTongeren";
import BedrijfshalBilzen from "./pages/steden/BedrijfshalBilzen";
import BedrijfshalLommel from "./pages/steden/BedrijfshalLommel";
import Realisaties from "./pages/Realisaties";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Diensten */}
          <Route path="/staalconstructies-limburg" element={<StaalconstructiesLimburg />} />
          <Route path="/bedrijfshallen-bouwen" element={<BedrijfshallenBouwen />} />
          <Route path="/loodsen-magazijnen" element={<LoodsenMagazijnen />} />
          <Route path="/sandwichpanelen" element={<Sandwichpanelen />} />
          <Route path="/gevelrenovatie-industrieel" element={<GevelrenovatieIndustrieel />} />
          {/* Steden */}
          <Route path="/bedrijfshal-hasselt" element={<BedrijfshalHasselt />} />
          <Route path="/bedrijfshal-genk" element={<BedrijfshalGenk />} />
          <Route path="/bedrijfshal-antwerpen" element={<BedrijfshalAntwerpen />} />
          <Route path="/bedrijfshal-sint-truiden" element={<BedrijfshalSintTruiden />} />
          <Route path="/bedrijfshal-tongeren" element={<BedrijfshalTongeren />} />
          <Route path="/bedrijfshal-bilzen" element={<BedrijfshalBilzen />} />
          <Route path="/bedrijfshal-lommel" element={<BedrijfshalLommel />} />
          {/* Overig */}
          <Route path="/realisaties" element={<Realisaties />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
