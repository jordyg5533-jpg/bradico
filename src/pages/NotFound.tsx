import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Pagina niet gevonden — Bradico</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex flex-1 flex-col items-center justify-center text-center px-4 py-32">
          <p className="text-6xl font-black" style={{ color: "hsl(28 85% 52%)" }}>404</p>
          <h1 className="mt-4 text-2xl font-black text-foreground">Pagina niet gevonden</h1>
          <p className="mt-3 text-muted-foreground">Deze pagina bestaat niet of is verplaatst.</p>
          <a href="/" className="mt-8 inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition-all hover:brightness-110" style={{ background: "hsl(28 85% 52%)" }}>
            Terug naar home
          </a>
        </main>
        <Footer />
      </div>
    </>
  );
}
