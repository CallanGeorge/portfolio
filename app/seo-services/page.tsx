import { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import SEOContent from "@/components/SEOContent";
import FinalCTA from "../../components/FinalCTA";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "SEO Services Fife & Edinburgh | Small Business SEO Expert Scotland",
  description:
    "Professional SEO services for small businesses in Fife & Edinburgh. Local SEO, technical optimization, content strategy & backlink building. Rank higher on Google & get more leads.",
  keywords: [
    "SEO services Fife",
    "SEO Edinburgh",
    "local SEO Scotland",
    "small business SEO",
    "SEO consultant Fife",
    "Google ranking Edinburgh",
    "local business SEO",
    "technical SEO",
    "content strategy",
    "backlink building",
    "Google Maps optimization",
    "near me searches",
    "SEO Kirkcaldy",
    "SEO Dunfermline",
    "SEO Leven",
  ],
  authors: [{ name: "Callan George" }],
  openGraph: {
    title: "SEO Services Fife & Edinburgh | Small Business SEO Expert Scotland",
    description:
      "Professional SEO services for small businesses in Fife & Edinburgh. Local SEO, technical optimization, content strategy & backlink building. Rank higher on Google & get more leads.",
    type: "website",
    locale: "en_GB",
    siteName: "Callan George - Web Design & SEO",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Services Fife & Edinburgh | Small Business SEO Expert Scotland",
    description:
      "Professional SEO services for small businesses in Fife & Edinburgh. Local SEO, technical optimization, content strategy & backlink building.",
  },
  alternates: {
    canonical: "/seo-services",
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
  category: "SEO Services",
};

export default function SEOServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <Header title="SEO" />
        <SEOContent />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
