import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
}

const defaultTitle = 'Bedrijfshallen & Staalconstructies Limburg | Bradico';
const defaultDescription = 'Bradico bouwt bedrijfshallen, loodsen en staalconstructies in Limburg en Antwerpen. Vaste prijs, geen verrassingen. Offerte binnen 48 uur.';

export default function SEO({
  title = defaultTitle,
  description = defaultDescription,
  canonical = 'https://bradico.be'
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="nl_BE" />
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
}
