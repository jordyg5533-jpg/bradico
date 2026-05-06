import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface HeaderProps {
  onNavigateToSection?: (sectionId: string) => void;
}

function Header({ onNavigateToSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    if (onNavigateToSection) {
      onNavigateToSection(sectionId);
    }
    setMobileMenuOpen(false);
  };

  const handleNavigation = (sectionId: string) => {
    navigate('/');
    setTimeout(() => scrollToSection(sectionId), 100);
  };

  const trackCtaClick = (label: string) => {
    if (typeof window !== 'undefined' && typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('event', 'cta_klik', { event_category: 'engagement', event_label: label });
    }
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src="/logo.webp"
                alt="Bradico logo - industriële bouw"
                className="h-12 w-auto"
                width="120"
                height="48"
                loading="eager"
              />
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => handleNavigation('home')}
              className="text-[#0d2137] hover:text-[#1e5a8a] font-semibold transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation('diensten')}
              className="text-[#0d2137] hover:text-[#1e5a8a] font-semibold transition-colors"
            >
              Bedrijven
            </button>
            <button
              onClick={() => handleNavigation('particulieren')}
              className="text-[#0d2137] hover:text-[#1e5a8a] font-semibold transition-colors"
            >
              Particulieren
            </button>
            <button
              onClick={() => handleNavigation('projecten')}
              className="text-[#0d2137] hover:text-[#1e5a8a] font-semibold transition-colors"
            >
              Projecten
            </button>
            <button
              onClick={() => handleNavigation('over-ons')}
              className="text-[#0d2137] hover:text-[#1e5a8a] font-semibold transition-colors"
            >
              Zo werkt Bradico
            </button>
            <button
              onClick={() => handleNavigation('contact')}
              className="text-[#0d2137] hover:text-[#1e5a8a] font-semibold transition-colors"
            >
              Contact
            </button>
          </nav>

          <div className="hidden md:block">
            <button
              onClick={() => {
                trackCtaClick('offerte_aanvraag');
                handleNavigation('contact');
              }}
              className="bg-[#1e5a8a] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#164564] transition-colors shadow-md"
            >
              Offerte binnen 48 uur
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#0d2137]"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <button
              onClick={() => handleNavigation('home')}
              className="block w-full text-left px-3 py-2 text-[#0d2137] hover:bg-gray-100 rounded-md font-semibold"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation('diensten')}
              className="block w-full text-left px-3 py-2 text-[#0d2137] hover:bg-gray-100 rounded-md font-semibold"
            >
              Bedrijven
            </button>
            <button
              onClick={() => handleNavigation('particulieren')}
              className="block w-full text-left px-3 py-2 text-[#0d2137] hover:bg-gray-100 rounded-md font-semibold"
            >
              Particulieren
            </button>
            <button
              onClick={() => handleNavigation('projecten')}
              className="block w-full text-left px-3 py-2 text-[#0d2137] hover:bg-gray-100 rounded-md font-semibold"
            >
              Projecten
            </button>
            <button
              onClick={() => handleNavigation('over-ons')}
              className="block w-full text-left px-3 py-2 text-[#0d2137] hover:bg-gray-100 rounded-md font-semibold"
            >
              Zo werkt Bradico
            </button>
            <button
              onClick={() => handleNavigation('contact')}
              className="block w-full text-left px-3 py-2 text-[#0d2137] hover:bg-gray-100 rounded-md font-semibold"
            >
              Contact
            </button>
            <button
              onClick={() => {
                trackCtaClick('offerte_aanvraag');
                handleNavigation('contact');
              }}
              className="block w-full text-center bg-[#1e5a8a] text-white px-6 py-3 rounded-md font-semibold mt-4"
            >
              Offerte binnen 48 uur
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
