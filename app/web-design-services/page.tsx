import { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import WebDesignContent from "@/components/WebDesignContent";
import FinalCTA from "../../components/FinalCTA";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title:
    "Web Design Fife & Edinburgh — Fast, SEO‑Optimised Websites for Small Businesses",
  description:
    "Freelance web designer building fast, secure, custom websites that rank and convert. Serving Fife & Edinburgh. No WordPress or page builders.",
  keywords: [
    "web design Fife",
    "web design Edinburgh",
    "custom websites Scotland",
    "small business websites Fife",
    "fast website design",
    "web designer Fife",
    "web designer Edinburgh",
    "SEO web design",
    "conversion optimised websites",
    "web design Kirkcaldy",
    "web design Dunfermline",
    "web design Leven",
  ],
  authors: [{ name: "Callan George" }],
  openGraph: {
    title:
      "Web Design Fife & Edinburgh — Fast, SEO‑Optimised Websites for Small Businesses",
    description:
      "Freelance web designer building fast, secure, custom websites that rank and convert. Serving Fife & Edinburgh.",
    type: "website",
    locale: "en_GB",
    siteName: "Freelance Web Designer & SEO — Fife & Edinburgh",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design Fife & Edinburgh — Fast, SEO‑Optimised Websites",
    description:
      "Fast, secure, custom websites for small businesses in Fife & Edinburgh.",
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
  const contentItems = [
    {
      type: "text" as const,
      heading:
        "Clean, Fast, and Purpose-Built — No Page Builders, No WordPress",
      paragraphs: [
        "I design and build websites from the ground up using modern web technologies — not templates, plugins, or drag-and-drop page builders. This approach gives me complete control over performance, user experience, and search engine optimisation, so your site isn't just something that looks nice — it works hard to grow your business.",
        "By writing clean, custom code for every project, I eliminate unnecessary bloat, reduce page load times, and create secure websites that don't rely on constant plugin updates to stay online. It's a professional-grade foundation designed for speed, stability, and scalability.",
      ],
    },
    {
      type: "text" as const,
      heading: "Why Custom Code Matters",
      paragraphs: [
        "Custom-coded websites offer significant advantages over template-based solutions:",
      ],
      list: [
        "Faster load times without the clutter of unnecessary scripts or plugin dependencies.",
        "Higher conversion rates by reducing friction and delivering content instantly.",
        "Better search rankings through improved Core Web Vitals and mobile performance.",
        "Stronger security with no third-party plugins, databases, or admin portals to exploit.",
        "Long-term stability — no need to worry about updates breaking your site.",
        "Better ad performance — faster pages lead to lower cost-per-click and higher return on investment.",
      ],
    },
    {
      type: "text" as const,
      heading: "Why Speed and Simplicity Win Online",
      paragraphs: [
        "In a world where users expect instant access, page speed is no longer optional — it's essential. Studies show that if your website takes more than three seconds to load, over 40% of visitors will leave before it even finishes. And once they leave, they rarely come back.",
        "My sites load in under two seconds, which gives you a competitive edge right from the first click. That speed doesn't just improve the experience — it increases conversions, improves ad performance, and helps you rank higher in Google.",
      ],
    },
    {
      type: "text" as const,
      heading: "Built to Support Marketing and SEO",
      paragraphs: [
        "A fast, well-structured website does more than convert — it improves the performance of every marketing channel you use. Google prioritises faster sites in both search results and paid ads. In fact, improving your page speed can reduce ad costs and boost quality scores, which means you pay less for more clicks.",
        "On top of that, I optimise every site for basic on-page SEO, giving you a strong foundation that can grow with more content, service pages, or SEO campaigns in the future.",
      ],
    },
    {
      type: "text" as const,
      heading: "Secure by Design",
      paragraphs: [
        "WordPress and other platforms rely on third-party plugins and open-source frameworks that are frequently targeted by bots and hackers. If you forget to update them — even once — you open the door to vulnerabilities.",
        "My approach is different. With no admin dashboard, no plugin architecture, and no databases to exploit, there's simply nothing to break. It's static code — stable, secure, and built to last. Many of my clients' sites run for years without needing anything more than content updates.",
      ],
    },
    {
      type: "text" as const,
      heading: "How It Helps You Rank on Google",
      paragraphs: [
        "Google rewards fast, user-friendly websites. If two businesses offer the same service in the same area, the one with better performance metrics and engagement is more likely to rank higher. Speed, structure, and content quality are key factors — and a custom-coded website gives you an advantage in all three.",
        "When your site loads quickly and offers a clear experience, more users stay on it, click through, and convert — all signals Google uses to rank websites more effectively. Over time, this compounds into stronger visibility and more inbound leads.",
      ],
    },
    {
      type: "text" as const,
      heading: "Let's Build Something Better",
      paragraphs: [
        "If you're ready to move away from bloated page builders or out-of-date templates, I'd love to help. I work with small businesses across Fife and Edinburgh to build fast, reliable websites that not only look great — they deliver real business results.",
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        <Header title="WEB DESIGN" />
        <WebDesignContent
          briefTitle="Custom Web Design Services for Small Businesses in Fife & Edinburgh"
          briefDescription="Professional custom web design that delivers results. I create fast, secure, and conversion-focused websites using modern web technologies — no WordPress, no page builders, no compromises. Every site is hand-coded for maximum performance, security, and search engine visibility."
          contentItems={contentItems}
        />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
