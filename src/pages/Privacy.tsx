import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileBottomBar } from "@/components/MobileBottomBar";

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacybeleid & Cookiebeleid | Bradico</title>
        <meta name="description" content="Privacybeleid en cookiebeleid van Bradico BV. Hoe wij uw persoonsgegevens verwerken, welke cookies wij gebruiken en wat uw rechten zijn." />
        <link rel="canonical" href="https://www.bv-bradico.be/privacy" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="container-x max-w-3xl py-24">
          <h1 className="text-3xl font-black text-foreground mb-2">Privacybeleid & Cookiebeleid</h1>
          <p className="text-sm text-muted-foreground mb-10">Laatste update: 19 mei 2026</p>

          <div className="prose prose-gray max-w-none space-y-8 text-muted-foreground leading-relaxed [&_h2]:text-xl [&_h2]:font-black [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-3 [&_h3]:text-base [&_h3]:font-bold [&_h3]:text-foreground [&_strong]:text-foreground">

            <section>
              <h2>1. Verantwoordelijke voor de verwerking</h2>
              <p>
                <strong>Bradico BV</strong><br />
                Venlosesteenweg 418, 3640 Kinrooi, België<br />
                BTW: BE1005.526.348<br />
                E-mail: <a href="mailto:info@bradico.be" className="text-accent hover:underline">info@bradico.be</a><br />
                Telefoon: <a href="tel:+32472812952" className="text-accent hover:underline">+32 472 81 29 52</a>
              </p>
            </section>

            <section>
              <h2>2. Welke gegevens verzamelen wij?</h2>
              <p>Wij verzamelen persoonsgegevens die u vrijwillig aan ons meedeelt via het contactformulier op onze website:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Naam</li>
                <li>E-mailadres</li>
                <li>Telefoonnummer</li>
                <li>Bedrijfsnaam (optioneel)</li>
                <li>Inhoud van uw bericht of offerteaanvraag</li>
              </ul>
              <p className="mt-3">Via analytische cookies verzamelen wij tevens geanonimiseerde bezoekersgegevens (zie sectie 5).</p>
            </section>

            <section>
              <h2>3. Waarom verwerken wij uw gegevens?</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Offertes en klantcommunicatie:</strong> Om uw offerteaanvraag te behandelen en u te contacteren over uw project.</li>
                <li><strong>Wettelijke verplichting:</strong> Factuur- en contractgegevens bewaren wij conform de Belgische boekhoudwetgeving (7 jaar).</li>
                <li><strong>Websiteanalyse:</strong> Enkel na uw toestemming gebruiken wij Google Analytics om het websiteverkeer te meten.</li>
              </ul>
            </section>

            <section>
              <h2>4. Hoe lang bewaren wij uw gegevens?</h2>
              <p>Contactformuliergegevens bewaren wij maximaal 2 jaar na het laatste contact, tenzij er een lopende klantrelatie bestaat. Boekhoudkundige gegevens bewaren wij 7 jaar conform de wet.</p>
            </section>

            <section>
              <h2>5. Cookies</h2>
              <h3>Noodzakelijke cookies</h3>
              <p>Wij slaan uw cookiekeuze op in <code>localStorage</code> zodat de banner niet bij elk bezoek herhaalt. Er worden geen sessiecookies van derden geplaatst zonder uw toestemming.</p>
              <h3>Analytische cookies (enkel na toestemming)</h3>
              <p>Na uw toestemming gebruiken wij <strong>Google Analytics 4</strong> (Google LLC, VS) om bezoekersgedrag te meten. Google Analytics maakt gebruik van cookies. De gegevens worden geanonimiseerd verwerkt. IP-adressen worden niet volledig opgeslagen. Meer info: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Google Privacy Policy</a>.</p>
              <h3>Cookies weigeren of verwijderen</h3>
              <p>U kunt uw toestemming te allen tijde intrekken door de cookies in uw browser te wissen. De cookiebanner verschijnt dan opnieuw bij uw volgende bezoek.</p>
            </section>

            <section>
              <h2>6. Derde partijen</h2>
              <p>Wij delen uw gegevens niet met derden voor commerciële doeleinden. Wij maken gebruik van:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Formspree</strong> (formspree.io): verwerking van contactformulieren. Uw gegevens worden tijdelijk opgeslagen op hun servers. Privacybeleid: formspree.io/legal/privacy-policy</li>
                <li><strong>Google Analytics 4</strong> (enkel na toestemming): websiteanalyse. Google LLC, VS.</li>
                <li><strong>Vercel Inc.</strong>: hosting van de website. VS.</li>
              </ul>
            </section>

            <section>
              <h2>7. Uw rechten</h2>
              <p>Conform de AVG/GDPR heeft u het recht om:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Inzage te vragen in uw persoonsgegevens</li>
                <li>Correctie of verwijdering te vragen</li>
                <li>Bezwaar te maken tegen de verwerking</li>
                <li>Uw toestemming te allen tijde in te trekken</li>
              </ul>
              <p className="mt-3">Stuur uw verzoek naar <a href="mailto:info@bradico.be" className="text-accent hover:underline">info@bradico.be</a>. Wij reageren binnen 30 dagen.</p>
              <p className="mt-2">U heeft ook het recht een klacht in te dienen bij de Gegevensbeschermingsautoriteit (GBA): <a href="https://www.gegevensbeschermingsautoriteit.be" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">gegevensbeschermingsautoriteit.be</a></p>
            </section>

            <section>
              <h2>8. Beveiliging</h2>
              <p>Onze website maakt gebruik van HTTPS-encryptie. Contactformulieren worden via een versleutelde verbinding verzonden. Wij nemen redelijke technische en organisatorische maatregelen om uw gegevens te beschermen.</p>
            </section>

          </div>
        </main>

        <Footer />
        <MobileBottomBar />
      </div>
    </>
  );
}
