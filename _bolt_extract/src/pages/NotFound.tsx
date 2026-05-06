import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function NotFound() {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    setTimeout(() => {
      const sectionId = path === '/' ? 'home' : path.replace('/#', '');
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow flex items-center justify-center bg-gradient-to-b from-white to-[#f5f7fa] px-4 py-20">
        <div className="max-w-2xl w-full text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-[#1e5a8a] mb-4">404</h1>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0d2137] mb-4">
              Pagina niet gevonden
            </h2>
            <p className="text-lg text-[#64748b] mb-8">
              De pagina die je zoekt bestaat niet of is verplaatst.
            </p>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => navigate('/')}
              className="w-full sm:w-auto bg-[#1e5a8a] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#164564] transition-colors shadow-md inline-block"
            >
              Terug naar homepage
            </button>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
              <button
                onClick={() => handleNavigation('/#diensten')}
                className="text-[#1e5a8a] hover:text-[#164564] font-semibold underline"
              >
                Bedrijven
              </button>
              <button
                onClick={() => handleNavigation('/#particulieren')}
                className="text-[#1e5a8a] hover:text-[#164564] font-semibold underline"
              >
                Particulieren
              </button>
              <button
                onClick={() => handleNavigation('/#contact')}
                className="text-[#1e5a8a] hover:text-[#164564] font-semibold underline"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default NotFound;
