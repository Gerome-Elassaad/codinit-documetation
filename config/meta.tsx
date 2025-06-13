export const meta = {
  metadataBase: new URL('https://docs.codinit.dev'),
  title: 'CodinIT - Documentation ',
  description: 'A customizable Open Source documentation  built with Next.js',
  authors: [{ name: 'Gerome Elassaad' }],
  keywords: ['CodinIT', 'documentation ', '', 'Next.js', 'React', 'JavaScript'],
  publisher: 'Gerome Elassaad',
  creator: 'Gerome Elassaad',
  openGraph: {
    type: 'website',
    title: 'CodinIT - Documentation ',
    description:
      'A customizable open-source documentation  built with Next.js.',
    images: [
      {
        url: '/og_image.png',
        width: 1200,
        height: 630,
        alt: 'CodinIT Documentation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CodinIT - Documentation',
    description:
      'A customizable open-source documentation  built with Next.js.',
    images: ['/og_image.png'],
    creator: '@gerome_elassaad',
  },
  alternates: {
    canonical: 'https://codinit.dev',
  },
  robots: 'index, follow',
  hreflang: {
    en: 'https://codinit.dev',
    // Add more hreflang if you have other languages (example: Spanish)
    // "es": "https://codinit.dev/es",
  },
};
