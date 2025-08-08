import Navbar from "@/components/Navbar";
import Header from "../../../components/Header";
import ProjectContent from "@/components/ProjectContent";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "BodyCore Fitness Website Design | Personal Training Web Design Case Study | Callan George",
  description:
    "Explore how I redesigned BodyCore's personal training website with mobile-first design, fast loading speeds, and conversion-focused features. A fitness website design case study.",
  keywords: [
    "fitness website design",
    "personal training website",
    "gym website design",
    "bodycore fitness",
    "mobile-first web design",
    "fitness branding",
    "personal trainer website",
    "fitness web developer",
    "gym web design",
    "fitness website case study",
  ],
  openGraph: {
    title:
      "BodyCore Fitness Website Design | Personal Training Web Design | Callan George",
    description:
      "A high-performance fitness website design for BodyCore personal training, featuring mobile-first layout and conversion optimization.",
    url: "https://callangeorge.com/projects/bodycore",
    siteName: "Callan George - Web Designer & Developer",
    images: [
      {
        url: "/default-thumbnail.webp",
        width: 1200,
        height: 630,
        alt: "Default social thumbnail",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "BodyCore Fitness Website Design | Personal Training Web Design | Callan George",
    description:
      "A high-performance fitness website design for BodyCore personal training, featuring mobile-first layout and conversion optimization.",
    images: ["/default-thumbnail.webp"],
  },
  alternates: {
    canonical: "https://callangeorge.com/projects/bodycore",
  },
};

export default function BodyCorePage() {
  const contentItems = [
    {
      type: "text" as const,
      heading: "Fitness That Converts",
      paragraphs: [
        "BodyCore approached me to redesign their outdated personal training website. The old site wasn’t mobile-friendly, didn’t support bookings, and wasn’t ranking well in Google. They needed something that matched the energy of their brand — fast, professional, and built to convert.",
      ],
    },
    {
      type: "image" as const,
      images: ["/bc-laptop.webp"],
      imageAlt: "BodyCore fitness website on a laptop",
    },
    {
      type: "text" as const,
      heading: "Clear, Confident Branding",
      paragraphs: [
        "Fitness websites should feel like a boost of motivation — so I built BodyCore’s site with bold visuals, strong typography, and crisp messaging that reflects the drive of the personal trainers behind it.",
      ],
      list: [
        "Professional but energetic design",
        "Strong calls-to-action to encourage signups",
        "Mobile-first layout that performs across all devices",
        "Image optimisation for faster load speeds",
      ],
    },
    {
      type: "image" as const,
      images: ["/bc-phone.webp"],
      imageAlt: "BodyCore website mobile preview",
    },
    {
      type: "text" as const,
      heading: "Performance & SEO",
      paragraphs: [
        "To help BodyCore stand out in a competitive market, I built the site for speed and visibility from the ground up. No plugins. No bloated themes. Just lean, modern code that’s optimised to rank.",
      ],
      list: [
        "Loads in under 2 seconds",
        "Core Web Vitals optimised",
        "Keyword-targeted service pages",
        "Google Business Profile integration for local SEO",
      ],
    },
    {
      type: "text" as const,
      heading: "The Result",
      paragraphs: [
        "The new BodyCore site looks sharper, loads faster, and converts better. Visitors can quickly find the right trainer, book a session, and start their fitness journey. The business now ranks higher than many of its local competitors — and has a digital presence that matches the energy and professionalism of the team behind it.",
        "If you're in fitness and want a site that works as hard as you do — let's talk.",
      ],
    },
  ];

  return (
    <div>
      <Navbar />

      <Header title="BODYCORE FITNESS" />

      <ProjectContent
        briefTitle="The Brief"
        briefDescription="BodyCore needed a dynamic website to reflect the energy of their personal training brand and improve client bookings. Their old site wasn’t user-friendly or optimised for Google. My goal was to deliver a fast, mobile-friendly site that built trust, simplified bookings, and helped them stand out in a crowded local market."
        contentItems={contentItems}
      />

      <FinalCTA />
      <Footer />
    </div>
  );
}
