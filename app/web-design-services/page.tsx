import { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import WebDesignContent from "@/components/WebDesignContent";
import FinalCTA from "../../components/FinalCTA";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title:
    "Custom Web Design Services Fife & Edinburgh | Fast, Secure Websites Scotland",
  description:
    "Professional custom web design for small businesses in Fife & Edinburgh. Hand-coded websites that load fast, rank higher on Google & convert more visitors. No WordPress, no page builders.",
  keywords: [
    "web design Fife",
    "web design Edinburgh",
    "custom web design Scotland",
    "small business websites Fife",
    "fast website design",
    "custom coded websites",
    "web designer Fife",
    "web designer Edinburgh",
    "responsive web design",
    "SEO web design",
    "secure websites",
    "professional web design Scotland",
    "website development Fife",
    "modern web design",
    "conversion optimised websites",
    "web design Kirkcaldy",
    "web design Dunfermline",
    "web design Leven",
  ],
  authors: [{ name: "Callan George" }],
  openGraph: {
    title:
      "Custom Web Design Services Fife & Edinburgh | Fast, Secure Websites Scotland",
    description:
      "Professional custom web design for small businesses in Fife & Edinburgh. Hand-coded websites that load fast, rank higher on Google & convert more visitors. No WordPress, no page builders.",
    type: "website",
    locale: "en_GB",
    siteName: "Callan George - Web Design & SEO",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Custom Web Design Services Fife & Edinburgh | Fast, Secure Websites Scotland",
    description:
      "Professional custom web design for small businesses in Fife & Edinburgh. Hand-coded websites that load fast, rank higher on Google & convert more visitors.",
  },
  alternates: {
    canonical: "/web-design-services",
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
  category: "Web Design Services",
};

export default function WebDesignServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <Header title="WEB DESIGN" />
        <WebDesignContent />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
