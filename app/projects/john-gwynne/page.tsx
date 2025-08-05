import Navbar from "@/components/Navbar";
import Header from "../../../components/Header";
import ProjectContent from "@/components/ProjectContent";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "John Gwynne Fantasy Author Website | Web Design Case Study | Callan George",
  description:
    "Discover how I created an immersive fantasy author website for John Gwynne, complete with series showcases, character guides, and fan resources. A web design case study focusing on fantasy branding and reader engagement.",
  keywords: [
    "fantasy author website design",
    "John Gwynne website",
    "author web design",
    "fantasy book website",
    "immersive web design",
    "author branding",
    "book series website",
    "character guides",
    "fantasy web developer",
    "author website case study",
  ],
  openGraph: {
    title: "John Gwynne Fantasy Author Website Design | Callan George",
    description:
      "An immersive website design for fantasy author John Gwynne, featuring series showcases, character guides, and fan engagement tools.",
    url: "https://callangeorge.com/projects/john-gwynne",
    siteName: "Callan George - Web Designer & Developer",
    images: [
      {
        url: "https://callangeorge.com/jg-laptop.png",
        width: 1200,
        height: 630,
        alt: "John Gwynne fantasy author website design",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Gwynne Fantasy Author Website Design | Callan George",
    description:
      "An immersive website design for fantasy author John Gwynne, featuring series showcases, character guides, and fan engagement tools.",
    images: ["https://callangeorge.com/jg-laptop.png"],
  },
  alternates: {
    canonical: "https://callangeorge.com/projects/john-gwynne",
  },
};

export default function JohnGwynnePage() {
  const contentItems = [
    {
      type: "text" as const,
      heading: "A World Worth Exploring",
      paragraphs: [
        "John Gwynne approached me to create a website that would act as the central hub for his growing fantasy readership. His books are rich in lore, characters, and epic world-building — but his old site didn’t reflect that. My goal was to build a home for his series that would excite long-time fans and help new readers easily find their way into his worlds.",
      ],
    },
    {
      type: "image" as const,
      images: ["/jg-laptop.png"],
      imageAlt: "John Gwynne fantasy author website on a laptop",
    },
    {
      type: "text" as const,
      heading: "Epic Identity & Immersive Design",
      paragraphs: [
        "Fantasy readers love to explore — so I created a dark, immersive design with medieval-inspired fonts and striking imagery to match the tone of John's writing. It’s designed to pull visitors into the atmosphere of his books the moment they land on the page.",
      ],
      list: [
        "Rich, fantasy-inspired visual identity",
        "Mobile-friendly layout for fans on the go",
        "Fast-loading design that doesn’t compromise on quality",
        "Clear structure to help readers navigate between series",
      ],
    },
    {
      type: "image" as const,
      images: ["/jg-phone.png"],
      imageAlt: "John Gwynne website mobile preview",
    },
    {
      type: "text" as const,
      heading: "Series Showcases & Character Guides",
      paragraphs: [
        "Each series now has its own section, complete with reading order guides, book descriptions, and extra materials like family trees and world maps. This helps new fans start in the right place — and gives returning readers a place to dive deeper.",
      ],
      list: [
        "Dedicated pages for each book series",
        "Interactive guides to characters and world lore",
        "Reading order and timeline details",
        "Illustrated maps and bonus content to reward exploration",
      ],
    },
    {
      type: "text" as const,
      heading: "Fan Resources & Events",
      paragraphs: [
        "The site includes helpful tools for fans and book clubs, like discussion questions, event updates, and an email list signup for new releases. It’s built to foster deeper connection and help fans follow John's journey.",
      ],
      list: [
        "Book club guides and reader resources",
        "Author appearances and event calendar",
        "Newsletter signup for latest news",
        "Social media integration to stay connected",
      ],
    },
    {
      type: "text" as const,
      heading: "Performance & Search Visibility",
      paragraphs: [
        "I built John’s site with SEO and speed in mind. It loads fast, works great on mobile, and is structured to rank for book- and genre-related keywords. Fantasy fans are searching — and now, they’re finding him.",
      ],
      list: [
        "Core Web Vitals optimised",
        "Keyword-rich book and author pages",
        "Clean, indexable site structure",
        "Google Business Profile and social profile integration",
      ],
    },
    {
      type: "text" as const,
      heading: "The Result",
      paragraphs: [
        "The new website gives John Gwynne’s readers a home they can return to again and again. It supports everything from book launches to fan engagement — while showcasing his incredible fantasy worlds the way they deserve to be seen.",
        "If you're an author and want your website to do more than just list your books — I’d love to help.",
      ],
    },
  ];

  return (
    <div>
      <Navbar />

      <Header title="JOHN GWYNNE" />

      <ProjectContent
        briefTitle="The Brief"
        briefDescription="John Gwynne needed a central digital hub for his growing fantasy fanbase — a place to explore his book series, world-building, and characters in one immersive space. I designed a site that reflects the scope of his storytelling, engages readers with interactive content, and supports his ongoing literary success."
        contentItems={contentItems}
      />

      <FinalCTA />
      <Footer />
    </div>
  );
}
