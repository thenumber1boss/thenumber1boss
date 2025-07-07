export default function StructuredData() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Adebayo Bamijoko',
    jobTitle: 'Technical Entrepreneur & Full-Stack Developer',
    url: 'https://adebayo.gritinformedia.tech',
    sameAs: [
      'https://linkedin.com/in/thenumber1boss',
      'https://github.com/thenumber1boss',
      'https://twitter.com/thenumber1boss',
    ],
    description: 'Full-Stack Developer & Product Strategist who crafts digital products that deliver results.',
    knowsAbout: ['Web Development', 'Product Strategy', 'Full-Stack Development', 'AI Integration']
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Adebayo Bamijoko Portfolio',
    url: 'https://adebayo.gritinformedia.tech',
    description: 'Portfolio of Adebayo Bamijoko, Technical Entrepreneur & Full-Stack Developer',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
