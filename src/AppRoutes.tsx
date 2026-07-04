import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import StaalconstructiesHasselt from "./pages/diensten-steden/StaalconstructiesHasselt";
import StaalconstructiesGenk from "./pages/diensten-steden/StaalconstructiesGenk";
import StaalconstructiesAntwerpen from "./pages/diensten-steden/StaalconstructiesAntwerpen";
import StaalconstructiesSintTruiden from "./pages/diensten-steden/StaalconstructiesSintTruiden";
import StaalconstructiesTongeren from "./pages/diensten-steden/StaalconstructiesTongeren";
import StaalconstructiesLommel from "./pages/diensten-steden/StaalconstructiesLommel";
import StaalconstructiesMaasmechelen from "./pages/diensten-steden/StaalconstructiesMaasmechelen";
import LoodsenHasselt from "./pages/diensten-steden/LoodsenHasselt";
import LoodsenGenk from "./pages/diensten-steden/LoodsenGenk";
import LoodsenAntwerpen from "./pages/diensten-steden/LoodsenAntwerpen";
import LoodsenSintTruiden from "./pages/diensten-steden/LoodsenSintTruiden";
import LoodsenLommel from "./pages/diensten-steden/LoodsenLommel";
import SandwichpanelenHasselt from "./pages/diensten-steden/SandwichpanelenHasselt";
import SandwichpanelenGenk from "./pages/diensten-steden/SandwichpanelenGenk";
import SandwichpanelenAntwerpen from "./pages/diensten-steden/SandwichpanelenAntwerpen";
import GevelrenovatieHasselt from "./pages/diensten-steden/GevelrenovatieHasselt";
import GevelrenovatieGenk from "./pages/diensten-steden/GevelrenovatieGenk";
import GevelrenovatieAntwerpen from "./pages/diensten-steden/GevelrenovatieAntwerpen";
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
import BedrijfshalKinrooi from "./pages/steden/BedrijfshalKinrooi";
import BedrijfshalMaaseik from "./pages/steden/BedrijfshalMaaseik";
import BedrijfshalMaasmechelen from "./pages/steden/BedrijfshalMaasmechelen";
import BedrijfshalBree from "./pages/steden/BedrijfshalBree";
import BedrijfshalHeusdenZolder from "./pages/steden/BedrijfshalHeusdenZolder";
import BedrijfshalRoermond from "./pages/steden/BedrijfshalRoermond";
import BedrijfshalVenlo from "./pages/steden/BedrijfshalVenlo";
import BedrijfshalWeert from "./pages/steden/BedrijfshalWeert";
import BedrijfshalSittard from "./pages/steden/BedrijfshalSittard";
import IndustriebouwLimburg from "./pages/diensten/IndustriebouwLimburg";
import IndustriebouwHasselt from "./pages/diensten/IndustriebouwHasselt";
import IndustriebouwGenk from "./pages/diensten/IndustriebouwGenk";
import IndustriebouwMaasmechelen from "./pages/diensten/IndustriebouwMaasmechelen";
import IndustriebouwTongeren from "./pages/diensten/IndustriebouwTongeren";
import IndustriebouwBilzen from "./pages/diensten/IndustriebouwBilzen";
import IndustriebouwSintTruiden from "./pages/diensten/IndustriebouwSintTruiden";
import IndustriebouwLommel from "./pages/diensten/IndustriebouwLommel";
import IndustriebouwBeringen from "./pages/diensten/IndustriebouwBeringen";
import IndustriebouwMaaseik from "./pages/diensten/IndustriebouwMaaseik";
import OverBradico from "./pages/OverBradico";
import WatKostEenBedrijfshalBouwen from "./pages/kennis/WatKostEenBedrijfshalBouwen";
import StaalbouwVsBetonbouw from "./pages/kennis/StaalbouwVsBetonbouw";
import IndustrieleLoodsBouwen from "./pages/kennis/IndustrieleLoodsBouwen";
import PrijsIndustriebouw from "./pages/kennis/PrijsIndustriebouw";
import StalenGevelbeplating from "./pages/kennis/StalenGevelbeplating";
import StaalSkeletbouw from "./pages/kennis/StaalSkeletbouw";
import OmgevingsvergunningBedrijfshal from "./pages/kennis/OmgevingsvergunningBedrijfshal";
import LoodsBouwenOfHuren from "./pages/kennis/LoodsBouwenOfHuren";
import KostenSandwichpanelen from "./pages/kennis/KostenSandwichpanelen";
import EnergieEfficienteBedrijfshal from "./pages/kennis/EnergieEfficienteBedrijfshal";
import StaalconstructieOnderhoud from "./pages/kennis/StaalconstructieOnderhoud";
import IndustriebouwNederland from "./pages/kennis/IndustriebouwNederland";
import BedrijfshalAfmetingen from "./pages/kennis/BedrijfshalAfmetingen";
import GevelrenovatieGids from "./pages/kennis/GevelrenovatieGids";
import KennisOverzicht from "./pages/KennisOverzicht";
import StaalbouwLimburg from "./pages/diensten/StaalbouwLimburg";
import StaalconstructieOpMaat from "./pages/diensten/StaalconstructieOpMaat";
import OfferteBedrijfshal from "./pages/diensten/OfferteBedrijfshal";
import Realisaties from "./pages/Realisaties";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";

export default function AppRoutes() {
  return (
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
          <Route path="/bedrijfshal-kinrooi" element={<BedrijfshalKinrooi />} />
          <Route path="/bedrijfshal-maaseik" element={<BedrijfshalMaaseik />} />
          <Route path="/bedrijfshal-maasmechelen" element={<BedrijfshalMaasmechelen />} />
          <Route path="/bedrijfshal-bree" element={<BedrijfshalBree />} />
          <Route path="/bedrijfshal-heusden-zolder" element={<BedrijfshalHeusdenZolder />} />
          <Route path="/bedrijfshal-roermond" element={<BedrijfshalRoermond />} />
          <Route path="/bedrijfshal-venlo" element={<BedrijfshalVenlo />} />
          <Route path="/bedrijfshal-weert" element={<BedrijfshalWeert />} />
          <Route path="/bedrijfshal-sittard" element={<BedrijfshalSittard />} />
          {/* Industriebouw */}
          <Route path="/industriebouw-limburg" element={<IndustriebouwLimburg />} />
          <Route path="/industriebouw-hasselt" element={<IndustriebouwHasselt />} />
          <Route path="/industriebouw-genk" element={<IndustriebouwGenk />} />
          <Route path="/industriebouw-maasmechelen" element={<IndustriebouwMaasmechelen />} />
          <Route path="/industriebouw-tongeren" element={<IndustriebouwTongeren />} />
          <Route path="/industriebouw-bilzen" element={<IndustriebouwBilzen />} />
          <Route path="/industriebouw-sint-truiden" element={<IndustriebouwSintTruiden />} />
          <Route path="/industriebouw-lommel" element={<IndustriebouwLommel />} />
          <Route path="/industriebouw-beringen" element={<IndustriebouwBeringen />} />
          <Route path="/industriebouw-maaseik" element={<IndustriebouwMaaseik />} />
          {/* Kennis */}
          <Route path="/kennis" element={<KennisOverzicht />} />
          <Route path="/kennis/wat-kost-een-bedrijfshal-bouwen" element={<WatKostEenBedrijfshalBouwen />} />
          <Route path="/kennis/staalbouw-vs-betonbouw" element={<StaalbouwVsBetonbouw />} />
          <Route path="/kennis/industriele-loods-bouwen" element={<IndustrieleLoodsBouwen />} />
          <Route path="/kennis/prijs-industriebouw" element={<PrijsIndustriebouw />} />
          <Route path="/kennis/stalen-gevelbeplating" element={<StalenGevelbeplating />} />
          <Route path="/kennis/staal-skeletbouw" element={<StaalSkeletbouw />} />
          <Route path="/kennis/omgevingsvergunning-bedrijfshal" element={<OmgevingsvergunningBedrijfshal />} />
          <Route path="/kennis/loods-bouwen-of-huren" element={<LoodsBouwenOfHuren />} />
          <Route path="/kennis/kosten-sandwichpanelen" element={<KostenSandwichpanelen />} />
          <Route path="/kennis/energie-efficiente-bedrijfshal" element={<EnergieEfficienteBedrijfshal />} />
          <Route path="/kennis/staalconstructie-onderhoud" element={<StaalconstructieOnderhoud />} />
          <Route path="/kennis/industriebouw-nederland" element={<IndustriebouwNederland />} />
          <Route path="/kennis/bedrijfshal-afmetingen" element={<BedrijfshalAfmetingen />} />
          <Route path="/kennis/gevelrenovatie-industrieel-gids" element={<GevelrenovatieGids />} />
          {/* Extra diensten */}
          <Route path="/staalbouw-limburg" element={<StaalbouwLimburg />} />
          <Route path="/staalconstructie-op-maat" element={<StaalconstructieOpMaat />} />
          <Route path="/offerte-industriebouw" element={<OfferteBedrijfshal />} />
          {/* Staalconstructies per stad */}
          <Route path="/staalconstructies-hasselt" element={<StaalconstructiesHasselt />} />
          <Route path="/staalconstructies-genk" element={<StaalconstructiesGenk />} />
          <Route path="/staalconstructies-antwerpen" element={<StaalconstructiesAntwerpen />} />
          <Route path="/staalconstructies-sint-truiden" element={<StaalconstructiesSintTruiden />} />
          <Route path="/staalconstructies-tongeren" element={<StaalconstructiesTongeren />} />
          <Route path="/staalconstructies-lommel" element={<StaalconstructiesLommel />} />
          <Route path="/staalconstructies-maasmechelen" element={<StaalconstructiesMaasmechelen />} />
          {/* Loodsen per stad */}
          <Route path="/loodsen-hasselt" element={<LoodsenHasselt />} />
          <Route path="/loodsen-genk" element={<LoodsenGenk />} />
          <Route path="/loodsen-antwerpen" element={<LoodsenAntwerpen />} />
          <Route path="/loodsen-sint-truiden" element={<LoodsenSintTruiden />} />
          <Route path="/loodsen-lommel" element={<LoodsenLommel />} />
          {/* Sandwichpanelen per stad */}
          <Route path="/sandwichpanelen-hasselt" element={<SandwichpanelenHasselt />} />
          <Route path="/sandwichpanelen-genk" element={<SandwichpanelenGenk />} />
          <Route path="/sandwichpanelen-antwerpen" element={<SandwichpanelenAntwerpen />} />
          {/* Gevelrenovatie per stad */}
          <Route path="/gevelrenovatie-hasselt" element={<GevelrenovatieHasselt />} />
          <Route path="/gevelrenovatie-genk" element={<GevelrenovatieGenk />} />
          <Route path="/gevelrenovatie-antwerpen" element={<GevelrenovatieAntwerpen />} />
          {/* Overig */}
          <Route path="/over-bradico" element={<OverBradico />} />
          <Route path="/realisaties" element={<Realisaties />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
  );
}
