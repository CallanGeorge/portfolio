import Navbar from "@/components/Navbar";
import Header from "../../../components/Header";
import ProjectContent from "@/components/ProjectContent";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Debrunner Design Studio Website | Design Agency Web Development Case Study | Callan George",
  description:
    "Discover how I built a premium website for Manchester-based Debrunner Design studio, featuring clean portfolio showcase, fast performance, and local SEO optimization.",
  keywords: [
    "design studio website",
    "Debrunner Design",
    "design agency website",
    "portfolio website design",
    "Manchester web design",
    "creative studio website",
    "design agency web developer",
    "portfolio web design",
    "Manchester design studio",
    "creative website case study",
  ],
  openGraph: {
    title:
      "Debrunner Design Studio Website | Design Agency Web Development | Callan George",
    description:
      "A premium website design for Manchester-based Debrunner Design studio, featuring clean portfolio presentation and optimized performance.",
    url: "https://callangeorge.com/projects/debrunner-design",
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
      "Debrunner Design Studio Website | Design Agency Web Development | Callan George",
    description:
      "A premium website design for Manchester-based Debrunner Design studio, featuring clean portfolio presentation and optimized performance.",
    images: ["/default-thumbnail.webp"],
  },
  alternates: {
    canonical: "https://callangeorge.com/projects/debrunner-design",
  },
};

export default function DebrunnerDesignPage() {
  const contentItems = [
    {
      type: "text" as const,
      heading: "Bringing Their Vision to Life",
      paragraphs: [
        "Debrunner Design had a beautiful vision for their new website, created by their in-house designer. My job was to build it from scratch and make sure it looked and worked exactly how they imagined. Every detail was carefully crafted to match their modern, minimal style — from the layout and fonts to smooth scrolling and subtle animations.",
        "Because I hand-coded the entire site without using WordPress or page builders, it’s fast, easy to use, and works perfectly on every device. This kind of setup not only looks great but also helps it show up higher in Google searches.",
      ],
    },
    {
      type: "image" as const,
      images: ["/dbd-laptop.webp"],
      imageAlt: "Debrunner Design website on a laptop",
    },
    {
      type: "text" as const,
      heading: "Easy-to-Use Portfolio",
      paragraphs: [
        "A big part of this project was making sure potential clients could easily browse their past work. I built a clean and simple portfolio system that clearly presents each project with high-quality visuals and descriptions, making it easy to understand the value behind the work.",
      ],
      list: [
        "Works beautifully on phones, tablets, and desktops",
        "Loads quickly thanks to optimised images",
        "Smooth animations for a premium feel",
        "Simple layout to keep visitors focused on the work",
      ],
    },
    {
      type: "image" as const,
      images: ["/dbd-phone.webp"],
      imageAlt: "Debrunner Design website on a mobile device",
    },
    {
      type: "text" as const,
      heading: "Fast, Reliable, and Built to Rank",
      paragraphs: [
        "A fast and well-structured website isn’t just nice to have — it’s key for showing up on Google and keeping visitors engaged. I made sure the Debrunner Design site runs smoothly and checks all the boxes for local SEO (Search Engine Optimisation), especially for people searching for design services in Manchester.",
        "This site was hand-coded for performance — meaning no clunky platforms, no bloated code, and nothing to slow it down. It’s simple, secure, and built to perform long-term without the need for constant maintenance or plugin updates.",
      ],
      list: [
        "Loads in under 2 seconds",
        "Designed to look great on all screen sizes",
        "Set up with clear page titles, alt text, and headers for SEO",
        "No plugins or third-party tools that can break",
        "Built to be fast, secure, and reliable for years to come",
      ],
    },
    {
      type: "text" as const,
      heading: "The Result",
      paragraphs: [
        "This project gave Debrunner Design the online home they needed — one that reflects their high-end design work and helps them turn visitors into real clients. Since launching the new site, they’ve had more engagement, more quality enquiries, and a much stronger presence when people search for their services online.",
        "If you're a designer, agency, or creative professional who wants a sleek, professional site that brings in results — I’d love to help you build something just as powerful.",
      ],
    },
  ];

  return (
    <div>
      <Navbar />

      <Header title="DEBRUNNER DESIGN" />

      <ProjectContent
        briefTitle="The Brief"
        briefDescription="Debrunner Design, a design studio based in Manchester, needed a professional website to show off their work and attract new clients. They came to me with a clear design already made — and wanted it built exactly as planned. The goal: a clean, modern website that feels premium, loads fast, and helps them stand out in search engines."
        contentItems={contentItems}
      />

      <FinalCTA />
      <Footer />
    </div>
  );
}
