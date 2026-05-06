import { useState } from 'react';
import {
  Building2,
  Layers,
  PaintBucket,
  Hammer,
  Target,
  Clock,
  MapPin,
  Shield,
  Phone,
  Mail,
  CheckCircle,
  Image as ImageIcon,
} from 'lucide-react';
import Lightbox from '../Lightbox';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

interface ProjectGallery {
  title: string;
  images: string[];
}

function HomePage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<ProjectGallery | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const projectGalleries: Record<string, ProjectGallery> = {
    bedrijfshal: {
      title: 'Bedrijfshal',
      images: [
        '/projects/bedrijfshal-voor.jpg',
        '/projects/bedrijfshal-3.jpg',
        '/projects/bedrijfshal-4.jpg',
        '/projects/bedrijfshal-5.jpg',
        '/projects/bedrijfshal-na.jpg',
      ],
    },
    bedrijfsgebouw: {
      title: 'Bedrijfsgebouw',
      images: [
        '/projects/bedrijfsgebouw-voor.jpg',
        '/projects/bedrijfsgebouw-3.jpg',
        '/projects/bedrijfsgebouw-na.jpg',
      ],
    },
    gevelrenovatie: {
      title: 'Gevelrenovatie',
      images: [
        '/projects/gevelrenovatie-voor.jpg',
        '/projects/gevelrenovatie-3.jpg',
        '/projects/gevelrenovatie-4.jpg',
        '/projects/gevelrenovatie-5.jpg',
        '/projects/gevelrenovatie-6.jpg',
        '/projects/gevelrenovatie-7.jpg',
        '/projects/gevelrenovatie-na.jpg',
      ],
    },
    loods: {
      title: 'Loods',
      images: [
        '/projects/loods-1.jpg',
        '/projects/loods-2.jpg',
        '/projects/loods-3.jpg',
        '/projects/loods-4.jpg',
        '/projects/loods-5.jpg',
      ],
    },
  };

  const openLightbox = (projectKey: string, startIndex: number = 0) => {
    const project = projectGalleries[projectKey];
    if (project) {
      setCurrentProject(project);
      setCurrentPhotoIndex(startIndex);
      setLightboxOpen(true);
    }
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentProject(null);
    setCurrentPhotoIndex(0);
  };

  const navigateToPhoto = (index: number) => {
    setCurrentPhotoIndex(index);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const trackPhoneClick = () => {
    if (typeof window !== 'undefined' && typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('event', 'telefoon_klik', { event_category: 'contact' });
    }
  };

  const trackCtaClick = (label: string) => {
    if (typeof window !== 'undefined' && typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('event', 'cta_klik', { event_category: 'engagement', event_label: label });
    }
  };

  const handleFormSubmit = () => {
    if (typeof window !== 'undefined' && typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('event', 'formulier_verzonden', { event_category: 'contact' });
    }
  };

  const services = [
    {
      icon: Building2,
      title: 'Staalconstructies',
      description:
        'Staalconstructies voor bedrijfsgebouwen en loodsen, ontworpen voor snelheid, stabiliteit en toekomstige uitbreiding. Efficiënte montage met minimale stilstand voor uw bedrijf.',
    },
    {
      icon: Layers,
      title: 'Sandwichwanden & Daken',
      description:
        'Hoogwaardige sandwichpanelen voor optimale isolatie en een strakke afwerking. Snel geplaatst, jarenlang rendement op uw energiefactuur.',
    },
    {
      icon: PaintBucket,
      title: 'Gevelrenovaties',
      description:
        'Renovatie en uitbreiding van bestaande bedrijfsgebouwen. Wij werken waar mogelijk in fases, zodat uw activiteiten gewoon kunnen doorgaan.',
    },
    {
      icon: Hammer,
      title: 'Complete Projecten',
      description:
        'Van ontwerp tot oplevering in eigen beheer. U heeft één aanspreekpunt, wij regelen de rest.',
    },
  ];

  const howBradicoWorks = [
    {
      icon: Target,
      title: 'Eén aanspreekpunt',
      subtitle: 'Altijd rechtstreeks contact met dezelfde persoon',
    },
    {
      icon: Clock,
      title: 'Planning vooraf',
      subtitle: 'Duidelijke mijlpalen, geen verrassingen onderweg',
    },
    {
      icon: Shield,
      title: 'Vaste prijs',
      subtitle: 'Transparant en volledig, zonder meerkosten achteraf',
    },
    {
      icon: MapPin,
      title: 'Lokaal in Limburg',
      subtitle: 'Snel ter plaatse en korte communicatielijnen',
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO />
      <Header onNavigateToSection={scrollToSection} />

      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center"
      >
        <div className="absolute inset-0">
          <img
            src="/hero-bradico.webp"
            alt="Staalconstructie bedrijfshal in aanbouw met kraan - industriële bouw door Bradico Limburg"
            className="absolute inset-0 w-full h-full object-cover"
            width="1400"
            height="933"
            fetchPriority="high"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 sm:px-6 md:px-8 max-w-4xl mx-auto">
          <h1 className="font-bold mb-4 sm:mb-6 leading-tight">
            Uw betrouwbare partner in bedrijfshallen en staalconstructies
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-3 sm:mb-4 text-gray-200 leading-relaxed">
            Staalconstructies en bedrijfsgebouwen in Limburg, Antwerpen en Vlaams-Brabant.
            Vaste prijs, duidelijke planning en één vast aanspreekpunt van start tot oplevering.
          </p>
          <p className="text-base sm:text-lg font-semibold mb-6 sm:mb-8 text-blue-300">
            Binnen 48 uur een duidelijke en vrijblijvende offerte.
          </p>
          <button
            onClick={() => {
              trackCtaClick('offerte_aanvraag');
              scrollToSection('contact');
            }}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg"
          >
            Vraag Offerte Aan
          </button>
        </div>
      </section>

      <section id="diensten" className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-left text-[#0d2137] mb-6">
            Uw bouwpartner van offerte tot oplevering
          </h2>
          <p className="text-lg text-[#0d2137] max-w-[800px] mb-8">
            Een industrieel bouwproject vraagt duidelijkheid. Geen losse eindjes, geen verrassingen tijdens de uitvoering. Bij Bradico weet u vooraf wat er gebouwd wordt, wanneer het klaar is en wat het kost — en wie u belt als er vragen zijn.
          </p>

          <div className="max-w-[800px] mb-12">
            <ul className="space-y-3 text-[#0d2137]">
              <li className="flex items-start">
                <span className="text-[#e63946] mr-2">•</span>
                <span>Eén vast aanspreekpunt van offerte tot oplevering</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#e63946] mr-2">•</span>
                <span>Heldere planning met vaste contactmomenten</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#e63946] mr-2">•</span>
                <span>Vaste prijs, geen onverwachte meerkosten</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#f8fafc] rounded-lg py-12 px-8 mb-12 -mx-4 sm:mx-0">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-2 order-2 md:order-1">
                <h3 className="text-2xl font-bold text-[#0d2137] mb-4">
                  Actief in uw regio
                </h3>
                <p className="text-base text-[#0d2137]">
                  Ons team werkt dagelijks in Belgisch en Nederlands Limburg, Antwerpen en Vlaams-Brabant. Geen lange wachttijden, geen omwegen — gewoon directe communicatie en snelle service.
                </p>
              </div>
              <div className="md:col-span-3 order-1 md:order-2">
                <img
                  src="/camionet.webp"
                  alt="Bradico bedrijfswagen staalconstructies Limburg"
                  className="w-full h-auto rounded-lg shadow-md object-cover"
                  width="800"
                  height="600"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 transform transition-transform flex flex-col"
                >
                  <Icon className="w-12 h-12 text-[#1E3A5F] mb-6" />
                  <h3 className="text-xl font-bold text-[#0d2137] mb-4">{service.title}</h3>
                  <p className="text-[#0d2137]">{service.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12 mb-8">
            <p className="text-xl text-gray-700 mb-6">
              Benieuwd wat wij voor u kunnen betekenen?
            </p>
            <button
              onClick={() => {
                trackCtaClick('offerte_aanvraag');
                scrollToSection('contact');
              }}
              className="bg-[#1e5a8a] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#164a6f] transition-colors"
            >
              Vraag een vrijblijvende offerte
            </button>
          </div>
        </div>
      </section>

      <section id="projecten" className="py-20 bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#0d2137] mb-4">
            Van staalconstructie tot oplevering
          </h2>
          <p className="text-lg text-[#0d2137] text-center max-w-3xl mx-auto mb-12">
            Bekijk onze gerealiseerde projecten in Limburg, Antwerpen en Vlaams-Brabant.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 overflow-hidden flex flex-col cursor-pointer group"
              onClick={() => openLightbox('bedrijfshal')}
            >
              <div className="grid grid-cols-2 gap-0 relative">
                <div className="relative bg-white overflow-hidden">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-[#4b5563] text-white px-4 py-2 rounded text-sm font-bold uppercase shadow-md">
                      VOOR
                    </span>
                  </div>
                  <img
                    src="/projects/bedrijfshal-voor.jpg"
                    alt="Staalconstructie bedrijfshal voor renovatie Limburg"
                    className="w-full h-56 object-cover block"
                    width="400"
                    height="224"
                    loading="lazy"
                  />
                </div>

                <div className="relative bg-white overflow-hidden">
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-[#1e5a8a] text-white px-4 py-2 rounded text-sm font-bold uppercase shadow-md">
                      NA
                    </span>
                  </div>
                  <img
                    src="/projects/bedrijfshal-na.jpg"
                    alt="Bedrijfshal met sandwichpanelen na oplevering door Bradico Limburg"
                    className="w-full h-56 object-cover block"
                    width="400"
                    height="224"
                    loading="lazy"
                  />
                </div>

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/95 px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
                    <ImageIcon className="w-5 h-5 text-[#1e5a8a]" />
                    <span className="text-[#0d2137] font-semibold">Bekijk alle foto's (5)</span>
                  </div>
                </div>
              </div>

              <div className="p-5 flex-grow">
                <h3 className="text-xl font-bold text-[#0d2137] mb-2">Bedrijfshal</h3>
                <p className="text-[#64748b]">
                  Complete staalconstructie met sandwichpanelen
                </p>
              </div>
            </div>

            <div
              className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 overflow-hidden flex flex-col cursor-pointer group"
              onClick={() => openLightbox('bedrijfsgebouw')}
            >
              <div className="grid grid-cols-2 gap-0 relative">
                <div className="relative bg-white overflow-hidden">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-[#4b5563] text-white px-4 py-2 rounded text-sm font-bold uppercase shadow-md">
                      VOOR
                    </span>
                  </div>
                  <img
                    src="/projects/bedrijfsgebouw-voor.jpg"
                    alt="Industrieel bedrijfsgebouw voor renovatie Antwerpen"
                    className="w-full h-56 object-cover block"
                    width="400"
                    height="224"
                    loading="lazy"
                  />
                </div>

                <div className="relative bg-white overflow-hidden">
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-[#1e5a8a] text-white px-4 py-2 rounded text-sm font-bold uppercase shadow-md">
                      NA
                    </span>
                  </div>
                  <img
                    src="/projects/bedrijfsgebouw-na.jpg"
                    alt="Bedrijfsgebouw met staalconstructie en gevelbekleding door Bradico"
                    className="w-full h-56 object-cover block"
                    width="400"
                    height="224"
                    loading="lazy"
                  />
                </div>

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/95 px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
                    <ImageIcon className="w-5 h-5 text-[#1e5a8a]" />
                    <span className="text-[#0d2137] font-semibold">Bekijk alle foto's (3)</span>
                  </div>
                </div>
              </div>

              <div className="p-5 flex-grow">
                <h3 className="text-xl font-bold text-[#0d2137] mb-2">Bedrijfsgebouw</h3>
                <p className="text-[#64748b]">
                  Staalconstructie met gevelbekleding
                </p>
              </div>
            </div>

            <div
              className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 overflow-hidden flex flex-col cursor-pointer group"
              onClick={() => openLightbox('gevelrenovatie')}
            >
              <div className="grid grid-cols-2 gap-0 relative">
                <div className="relative bg-white overflow-hidden">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-[#4b5563] text-white px-4 py-2 rounded text-sm font-bold uppercase shadow-md">
                      VOOR
                    </span>
                  </div>
                  <img
                    src="/projects/gevelrenovatie-voor.jpg"
                    alt="Gevelrenovatie bedrijfsgebouw voor start Vlaams-Brabant"
                    className="w-full h-56 object-cover block"
                    width="400"
                    height="224"
                    loading="lazy"
                  />
                </div>

                <div className="relative bg-white overflow-hidden">
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-[#1e5a8a] text-white px-4 py-2 rounded text-sm font-bold uppercase shadow-md">
                      NA
                    </span>
                  </div>
                  <img
                    src="/projects/gevelrenovatie-na.jpg"
                    alt="Gevelrenovatie met sandwichpanelen na afwerking door Bradico"
                    className="w-full h-56 object-cover block"
                    width="400"
                    height="224"
                    loading="lazy"
                  />
                </div>

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/95 px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
                    <ImageIcon className="w-5 h-5 text-[#1e5a8a]" />
                    <span className="text-[#0d2137] font-semibold">Bekijk alle foto's (7)</span>
                  </div>
                </div>
              </div>

              <div className="p-5 flex-grow">
                <h3 className="text-xl font-bold text-[#0d2137] mb-2">Gevelrenovatie</h3>
                <p className="text-[#64748b]">
                  Renovatie met sandwichpanelen
                </p>
              </div>
            </div>

            <div
              className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 overflow-hidden flex flex-col cursor-pointer group"
              onClick={() => openLightbox('loods')}
            >
              <div className="grid grid-cols-2 gap-0 relative">
                <div className="relative bg-white overflow-hidden">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-[#4b5563] text-white px-4 py-2 rounded text-sm font-bold uppercase shadow-md">
                      VOOR
                    </span>
                  </div>
                  <img
                    src="/projects/loods-1.jpg"
                    alt="Industriële loods staalconstructie in aanbouw Limburg"
                    className="w-full h-56 object-cover block"
                    width="400"
                    height="224"
                    loading="lazy"
                  />
                </div>

                <div className="relative bg-white overflow-hidden">
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-[#1e5a8a] text-white px-4 py-2 rounded text-sm font-bold uppercase shadow-md">
                      NA
                    </span>
                  </div>
                  <img
                    src="/projects/loods-na.jpg"
                    alt="Complete loods met sandwichdak na oplevering door Bradico"
                    className="w-full h-56 object-cover block"
                    width="400"
                    height="224"
                    loading="lazy"
                  />
                </div>

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/95 px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
                    <ImageIcon className="w-5 h-5 text-[#1e5a8a]" />
                    <span className="text-[#0d2137] font-semibold">Bekijk alle foto's (5)</span>
                  </div>
                </div>
              </div>

              <div className="p-5 flex-grow">
                <h3 className="text-xl font-bold text-[#0d2137] mb-2">Loods</h3>
                <p className="text-[#64748b]">
                  Opbouw van een complete loods
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
                <img
                  src="/projects/luifel-1.jpg"
                  alt="Stalen luifelconstructie bedrijfsgebouw Limburg - zijgevel"
                  className="w-full h-64 object-cover"
                  width="400"
                  height="256"
                  loading="lazy"
                />
                <img
                  src="/projects/luifel-2.jpg"
                  alt="Stalen luifelconstructie op maat door Bradico - vooraanzicht"
                  className="w-full h-64 object-cover"
                  width="400"
                  height="256"
                  loading="lazy"
                />
                <img
                  src="/projects/luifel-3.jpg"
                  alt="Industriële stalen luifel detailafwerking Antwerpen"
                  className="w-full h-64 object-cover"
                  width="400"
                  height="256"
                  loading="lazy"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-[#0d2137] mb-2">Stalen luifelconstructie</h3>
                <p className="text-[#64748b]">
                  Op maat gemaakte luifel bij bedrijfsgebouw
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                trackCtaClick('bespreek_project');
                scrollToSection('contact');
              }}
              className="inline-block bg-[#1e5a8a] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#164771] transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Bespreek uw project
            </a>
          </div>
        </div>
      </section>

      <section id="over-ons" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#0d2137] mb-6">
            Zo werkt Bradico
          </h2>
          <p className="text-lg text-[#0d2137] text-center max-w-3xl mx-auto mb-12">
            Bouwen zonder onzekerheid begint met duidelijke afspraken. Bij Bradico weet u exact waar u aan toe bent — van eerste gesprek tot oplevering.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {howBradicoWorks.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center flex flex-col h-full">
                  <div className="flex justify-center mb-4">
                    <Icon className="w-16 h-16 text-[#1e5a8a]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0d2137] mb-2">{item.title}</h3>
                  {item.subtitle && <p className="text-sm text-[#0d2137]">{item.subtitle}</p>}
                </div>
              );
            })}
          </div>

          <div className="text-center pt-6 border-t border-[#e2e8f0] max-w-3xl mx-auto">
            <p className="text-[#1e5a8a] font-semibold flex items-center justify-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>10+ jaar ervaring in industriële bouw in Limburg</span>
            </p>

            <div className="mt-6 mb-12">
              <p className="text-[#4b5563] text-lg mb-4">
                Benieuwd wat wij voor uw project kunnen betekenen?
              </p>
              <button
                onClick={() => {
                  trackCtaClick('vrijblijvend_gesprek');
                  scrollToSection('contact');
                }}
                className="bg-[#1e5a8a] text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-[#164a6f] transition-colors shadow-md"
              >
                Plan een vrijblijvend gesprek
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="particulieren" className="py-20 bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#0d2137] mb-6">
            Ook voor Particulieren
          </h2>
          <p className="text-lg text-[#0d2137] text-center max-w-4xl mx-auto mb-8">
            Wilt u een loods, carport, stal of ander bijgebouw laten bouwen op privéterrein? Bradico helpt ook particulieren met efficiënte staalbouw. Persoonlijke aanpak, vaste prijs, en een vlotte uitvoering.
          </p>

          <div className="max-w-3xl mx-auto mb-8">
            <ul className="space-y-3 text-[#0d2137]">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#e63946] mr-3 flex-shrink-0 mt-0.5" />
                <span>Vergunningsadvies inbegrepen</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#e63946] mr-3 flex-shrink-0 mt-0.5" />
                <span>Snel gebouwd, minimale overlast</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#e63946] mr-3 flex-shrink-0 mt-0.5" />
                <span>Duidelijke offerte, geen verrassingen achteraf</span>
              </li>
            </ul>
          </div>

          <div className="py-12">
            <h3 className="text-3xl font-bold text-[#0d2137] mb-8 text-center">
              Realisaties voor particulieren
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              <div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img
                    src="/gallery/bijgebouw_2.jpeg"
                    alt="Stalen bijgebouw met luifel voor particulier Limburg"
                    className="w-full h-80 object-cover"
                    width="500"
                    height="320"
                    loading="lazy"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-3 text-center">Bijgebouw met luifel</p>
              </div>

              <div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img
                    src="/gallery/tuinhuis_1.jpeg"
                    alt="Tuinhuis op maat staalconstructie particulier door Bradico"
                    className="w-full h-80 object-cover"
                    width="500"
                    height="320"
                    loading="lazy"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-3 text-center">Tuinhuis op maat</p>
              </div>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="mb-6">
                <h4 className="text-2xl font-bold text-[#0d2137] mb-2">Gevelrenovatie woning</h4>
                <p className="text-base text-[#64748b]">Van klassieke baksteen naar moderne houtlook</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="mb-3">
                    <span className="bg-[#e63946] text-white px-3 py-1 rounded text-xs font-bold uppercase">VOOR</span>
                  </div>
                  <div className="space-y-4">
                    <div className="overflow-hidden rounded-lg shadow-md group">
                      <img
                        src="/gallery/gevel1.jpeg"
                        alt="Gevelrenovatie woning voor - klassieke bakstenen gevel Limburg"
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                        width="600"
                        height="256"
                        loading="lazy"
                      />
                    </div>
                    <div className="overflow-hidden rounded-lg shadow-md group">
                      <img
                        src="/gallery/gevel3.jpeg"
                        alt="Gevelrenovatie particulier voor - betonnen muurtje te renoveren"
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                        width="600"
                        height="256"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <div className="mb-3">
                    <span className="bg-[#22c55e] text-white px-3 py-1 rounded text-xs font-bold uppercase">NA</span>
                  </div>
                  <div className="space-y-4">
                    <div className="overflow-hidden rounded-lg shadow-md group">
                      <img
                        src="/gallery/gevel_na.jpeg"
                        alt="Gevelrenovatie woning na - moderne houtlook gevelpanelen door Bradico"
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                        width="600"
                        height="256"
                        loading="lazy"
                      />
                    </div>
                    <div className="overflow-hidden rounded-lg shadow-md group">
                      <img
                        src="/gallery/gevel_na_2.jpeg"
                        alt="Gevelrenovatie particulier na - houtlook achterkant afgewerkt Limburg"
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                        width="600"
                        height="256"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => {
                trackCtaClick('vrijblijvend_advies');
                scrollToSection('contact');
              }}
              className="bg-[#1e5a8a] text-white px-8 py-4 rounded-md font-semibold hover:bg-[#164564] transition-colors shadow-md mb-3"
            >
              Vraag Vrijblijvend Advies
            </button>
            <p className="text-sm text-gray-500">Ook voor kleinere projecten</p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-[#0d2137] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Uw Project Start Hier</h2>
          <p className="text-lg text-center max-w-3xl mx-auto mb-12">
            Vertel ons over uw plannen. Wij reageren binnen 48 uur met een vrijblijvend voorstel.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:divide-x lg:divide-white/20">
            <div className="lg:pr-12">
              <h3 className="text-2xl font-bold mb-6">Contactgegevens</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 mr-3 flex-shrink-0 text-[#e63946]" />
                  <div>
                    <p className="font-semibold">Telefoon</p>
                    <a href="tel:+32472812952" onClick={trackPhoneClick} className="hover:text-[#1e5a8a] transition-colors">
                      +32 472 81 29 52
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 mr-3 flex-shrink-0 text-[#e63946]" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:info@bradico.be" className="hover:text-[#1e5a8a] transition-colors">
                      info@bradico.be
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 mr-3 flex-shrink-0 text-[#e63946]" />
                  <div>
                    <p className="font-semibold">Adres</p>
                    <p>Venlosesteenweg 418</p>
                    <p>3640 Kinrooi, België</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white/10 p-8 flex items-center justify-center">
                <a
                  href="https://www.google.com/maps?q=Venlosesteenweg+418,+3640+Kinrooi,+België"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white text-[#0d2137] px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors shadow-md"
                >
                  📍 Bekijk op Google Maps
                </a>
              </div>
            </div>

            <div className="lg:pl-12">
              <h3 className="text-2xl font-bold mb-6">Vraag een Offerte Aan</h3>
              <form action="https://formspree.io/f/xqarolea" method="POST" onSubmit={handleFormSubmit} className="space-y-4">
                <input type="hidden" name="_subject" value="Nieuwe aanvraag via Bradico website" />
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Naam *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-[#0a1628] border border-gray-600 rounded-md text-white focus:outline-none focus:border-[#1e5a8a] focus:ring-2 focus:ring-[#1e5a8a] transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-[#0a1628] border border-gray-600 rounded-md text-white focus:outline-none focus:border-[#1e5a8a] focus:ring-2 focus:ring-[#1e5a8a] transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                    Telefoon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-[#0a1628] border border-gray-600 rounded-md text-white focus:outline-none focus:border-[#1e5a8a] focus:ring-2 focus:ring-[#1e5a8a] transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Uw Bericht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[#0a1628] border border-gray-600 rounded-md text-white focus:outline-none focus:border-[#1e5a8a] focus:ring-2 focus:ring-[#1e5a8a] transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#1e5a8a] text-white px-8 py-4 rounded-md font-semibold hover:bg-[#164a6f] transition-colors shadow-lg"
                >
                  Vraag Offerte Aan
                </button>
                <div className="text-sm text-gray-400 text-center space-y-1">
                  <p>Vrijblijvend en zonder verplichtingen</p>
                  <p>Uw gegevens worden niet gedeeld.</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer onNavigateToSection={scrollToSection} />

      {lightboxOpen && currentProject && (
        <Lightbox
          isOpen={lightboxOpen}
          images={currentProject.images}
          currentIndex={currentPhotoIndex}
          projectTitle={currentProject.title}
          onClose={closeLightbox}
          onNavigate={navigateToPhoto}
        />
      )}
    </div>
  );
}

export default HomePage;
