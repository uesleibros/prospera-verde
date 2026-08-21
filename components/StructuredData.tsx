import { SITE_URL, SITE_NAME, SITE_DESCRICAO_PADRAO } from "@/lib/site";

export function StructuredData() {
  const dados = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${SITE_URL}/#organizacao`,
      name: SITE_NAME,
      alternateName: "Cooperativa Próspera Verde",
      url: SITE_URL,
      logo: `${SITE_URL}/icon.svg`,
      description: SITE_DESCRICAO_PADRAO,
      areaServed: {
        "@type": "City",
        name: "Itaberaba",
        containedInPlace: {
          "@type": "State",
          name: "Bahia",
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_URL}/#site`,
      name: SITE_NAME,
      url: SITE_URL,
      inLanguage: "pt-BR",
      description: SITE_DESCRICAO_PADRAO,
      publisher: { "@id": `${SITE_URL}/#organizacao` },
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(dados) }}
    />
  );
}
