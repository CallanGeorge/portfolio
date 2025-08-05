import Navbar from "@/components/Navbar";
import Header from "../../../components/Header";
import ProjectContent from "@/components/ProjectContent";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Chloe Penaranda Author Website Design | Contemporary Author Web Design Case Study | Callan George",
  description:
    "Learn how I created a professional author website for contemporary writer Chloe Penaranda, featuring book showcases, reader engagement, and SEO optimization for literary branding.",
  keywords: [
    "author website design",
    "Chloe Penaranda website",
    "contemporary author website",
    "book website design",
    "literary website design",
    "author branding",
    "book showcase website",
    "writer website",
    "author web developer",
    "literary web design case study",
  ],
  openGraph: {
    title:
      "Chloe Penaranda Author Website Design | Contemporary Author Web Design | Callan George",
    description:
      "A professional website design for contemporary author Chloe Penaranda, featuring elegant book showcases and reader engagement tools.",
    url: "https://callangeorge.com/projects/chloe-penaranda",
    siteName: "Callan George - Web Designer & Developer",
    images: [
      {
        url: "https://callangeorge.com/ccp-laptop.png",
        width: 1200,
        height: 630,
        alt: "Chloe Penaranda author website design on laptop",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Chloe Penaranda Author Website Design | Contemporary Author Web Design | Callan George",
    description:
      "A professional website design for contemporary author Chloe Penaranda, featuring elegant book showcases and reader engagement tools.",
    images: ["https://callangeorge.com/ccp-laptop.png"],
  },
  alternates: {
    canonical: "https://callangeorge.com/projects/chloe-penaranda",
  },
};

export default function ChloePenarandaPage() {
  const contentItems = [
    {
      type: "text" as const,
      heading: "Bringing Her Story to Life",
      paragraphs: [
        "Chloe Penaranda, an emerging contemporary author, approached me to create a professional website that would reflect her literary brand and support the launch of her latest book. Her existing site lacked user-friendliness, wasn’t optimised for speed or search engines, and didn’t reflect the quality of her work.",
        "I brought her vision to life using a clean, elegant layout that gives her writing the spotlight it deserves. The entire site was hand-coded for performance, accessibility, and long-term reliability — no page builders, no WordPress, no unnecessary bloat.",
      ],
    },
    {
      type: "image" as const,
      images: ["/ccp-laptop.png"],
      imageAlt: "Chloe Penaranda author website on a laptop",
    },
    {
      type: "text" as const,
      heading: "Designed for Readers",
      paragraphs: [
        "The site includes a dedicated book showcase where readers can browse Chloe’s novels, read excerpts, and find direct links to purchase. We kept the layout simple and focused to make the experience feel immersive without distractions.",
      ],
      list: [
        "Mobile-friendly design that works across all devices",
        "Fast load speeds with optimised images",
        "Clean navigation and clear book pages",
        "Newsletter signup to grow her audience",
        "Subtle animations and thoughtful design touches",
      ],
    },
    {
      type: "image" as const,
      images: ["/ccp-phone.png"],
      imageAlt: "Chloe Penaranda author website on a mobile device",
    },
    {
      type: "text" as const,
      heading: "Optimised for Discovery",
      paragraphs: [
        "With so many authors competing for attention, being visible in search results is key. I implemented a tailored SEO strategy focused on Chloe’s genre, readership, and author branding to help her show up where it matters.",
      ],
      list: [
        "Optimised titles and meta descriptions for each book",
        "Search-friendly author bio and speaking info",
        "Clear internal linking structure",
        "Core Web Vitals optimised for Google rankings",
      ],
    },
    {
      type: "text" as const,
      heading: "The Result",
      paragraphs: [
        "The new site not only looks beautiful — it also works harder. Visitors now have a smoother experience browsing Chloe’s books, and the site ranks better in Google for key searches. Most importantly, it’s a platform that grows with her literary career, supporting new book launches, events, and her connection with readers worldwide.",
        "If you're an author or creative looking for a sleek, SEO-optimised website that reflects your work — get in touch. I’d love to help you build something just as powerful.",
      ],
    },
  ];

  return (
    <div>
      <Navbar />

      <Header title="CHLOE PENARANDA" />

      <ProjectContent
        briefTitle="The Brief"
        briefDescription="Chloe Penaranda needed a new website to coincide with the release of her latest book. Her old website was outdated, slow, and difficult to use. The goal was to create a fast, professional platform that reflected her unique literary voice, made it easy for readers to discover her work, and supported her long-term growth as an author."
        contentItems={contentItems}
      />

      <FinalCTA />
      <Footer />
    </div>
  );
}
