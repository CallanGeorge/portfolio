import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://callangeorge.com"),
  title: "Freelance Web Designer & SEO Consultant in Fife & Edinburgh",
  description:
    "Fast, conversion‑focused websites and local SEO for small businesses across Fife & Edinburgh. Rank higher, load faster, win more enquiries.",
  keywords: [
    "freelance web designer Fife",
    "web designer Edinburgh",
    "website design Fife",
    "SEO consultant Fife",
    "local SEO Edinburgh",
    "small business SEO Scotland",
    "fast websites",
    "Core Web Vitals",
    "Kirkcaldy",
    "Dunfermline",
  ],
  authors: [{ name: "Callan George" }],
  creator: "Callan George",
  publisher: "Callan George",
  category: "Web Development",
  classification: "Business Services",
  icons: {
    icon: "/cg.svg",
    shortcut: "/cg.svg",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://callangeorge.com",
    siteName: "Freelance Web Designer & SEO — Fife & Edinburgh",
    title: "Freelance Web Designer & SEO in Fife & Edinburgh",
    description:
      "Fast, conversion‑focused websites and local SEO for small businesses across Fife & Edinburgh.",
    images: [
      {
        url: "/default-thumbnail.webp",
        width: 1200,
        height: 630,
        alt: "Freelance Web Designer & SEO — Fife & Edinburgh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelance Web Designer & SEO in Fife & Edinburgh",
    description:
      "Fast, conversion‑focused websites and local SEO for small businesses across Fife & Edinburgh.",
    images: ["/default-thumbnail.webp"],
    creator: "@callangeorge",
  },
  alternates: {
    canonical: "https://callangeorge.com",
  },
  other: {
    "geo.region": "GB-SCT",
    "geo.placename": "Edinburgh",
    "geo.position": "55.9533;-3.1883",
    ICBM: "55.9533, -3.1883",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Callan George",
  jobTitle: "Freelance Web Developer",
  description:
    "Edinburgh-based freelance web developer specializing in custom websites for local businesses",
  url: "https://callangeorge.com",
  image: "https://callangeorge.com/profile-image.webp",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Edinburgh",
    addressRegion: "Scotland",
    addressCountry: "GB",
  },
  sameAs: [
    "https://linkedin.com/in/callangeorge",
    "https://github.com/callangeorge",
    "https://twitter.com/callangeorge",
  ],
  offers: {
    "@type": "Service",
    name: "Web Development Services",
    description: "Custom website development for local businesses",
    areaServed: {
      "@type": "City",
      name: "Edinburgh",
      addressCountry: "GB",
    },
    serviceType: [
      "Web Development",
      "Custom Website Design",
      "E-commerce Development",
      "Business Website Creation",
      "Responsive Web Design",
    ],
  },
  knowsAbout: [
    "Web Development",
    "JavaScript",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "HTML",
    "CSS",
    "Responsive Design",
    "SEO",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Thunder:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Favicon and icons */}
        <link rel="icon" href="/cg.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" sizes="180x180" href="/cg.svg" />
        <link rel="icon" sizes="32x32" href="/cg.svg" type="image/svg+xml" />
        <link rel="icon" sizes="16x16" href="/cg.svg" type="image/svg+xml" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Additional meta tags */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta name="theme-color" content="#1B76FF" />
        <meta name="color-scheme" content="light" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-black antialiased">{children}</body>
    </html>
  );
}
