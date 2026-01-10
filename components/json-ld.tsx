
export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Arbor AI Studio",
    "url": "https://arboraistudio.com",
    "logo": "https://arboraistudio.com/logo.png",
    "sameAs": [
      "https://github.com/arbor-ai-studio",
      "https://www.linkedin.com/company/arbor-ai-studio",
      "https://x.com/arbor_ai" 
    ],
    "description": "Arbor AI Studio specializes in Agentic AI solutions, building autonomous digital employees and high-performance SaaS applications to automate complex business processes.",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "contact@arboraistudio.com",
      "contactType": "customer service"
    },
    "knowsAbout": [
      "Agentic AI",
      "Artificial Intelligence",
      "SaaS Development",
      "Business Automation",
      "Large Language Models",
      "Generative AI"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI & Software Services",
      "itemListElement": [
        {
          "@type": "Service",
          "name": "Agentic AI Development",
          "description": "Custom autonomous AI agents that automate complex business workflows and task execution."
        },
        {
          "@type": "Service",
          "name": "SaaS Product Engineering",
          "description": "End-to-end full-stack development for scalable web applications using Next.js and Python."
        },
        {
          "@type": "Service",
          "name": "Business Process Automation",
          "description": "Intelligent document processing and system integration to eliminate manual data entry."
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
