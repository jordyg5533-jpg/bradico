import { useNavigate } from 'react-router-dom';

interface FooterProps {
  onNavigateToSection?: (sectionId: string) => void;
}

function Footer({ onNavigateToSection }: FooterProps) {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    if (onNavigateToSection) {
      onNavigateToSection(sectionId);
    }
  };

  const handleNavigation = (sectionId: string) => {
    navigate('/');
    setTimeout(() => scrollToSection(sectionId), 100);
  };

  const trackPhoneClick = () => {
    if (typeof window !== 'undefined' && typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('event', 'telefoon_klik', { event_category: 'contact' });
    }
  };

  return (
    <footer className="bg-[#091520] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <img
              src="/logo.webp"
              alt="Bradico logo - industriële bouw"
              className="h-12 w-auto mb-4"
              width="120"
              height="48"
              loading="lazy"
            />
            <p className="text-gray-400">Industriële bouw waar u op kunt rekenen</p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Navigatie</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavigation('home')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('diensten')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Bedrijven
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('particulieren')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Particulieren
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('projecten')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Projecten
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('contact')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="tel:+32472812952" onClick={trackPhoneClick} className="hover:text-white transition-colors">
                  +32 472 81 29 52
                </a>
              </li>
              <li>
                <a href="mailto:info@bradico.be" className="hover:text-white transition-colors">
                  info@bradico.be
                </a>
              </li>
              <li>BTW: BE1005.526.348</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Regio's</h4>
            <p className="text-gray-400">Actief in Limburg (BE), Limburg (NL), Antwerpen en Vlaams-Brabant</p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Bradico. Alle rechten voorbehouden.</p>
          <p className="text-xs opacity-60 mt-4 hover:opacity-75 transition-opacity">
            Website door{' '}
            <a
              href="https://jgscale.be"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-100 transition-opacity"
            >
              JG Scale
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
