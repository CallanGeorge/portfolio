import Navbar from "@/components/Navbar";
import Header from "../../../components/Header";
import ProjectContent from "@/components/ProjectContent";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function ChloePenarandaPage() {
  const contentBlocks = [
    {
      heading: "Author Brand & Literary Identity",
      paragraphs: [
        "Chloe Penaranda needed a professional author website that would showcase her literary work and establish her credibility in the competitive publishing industry. The challenge was creating a digital presence that captured her unique voice while providing readers with easy access to her books, speaking engagements, and personal story.",
        "We developed a clean, literary-focused design that reflects her brand as a contemporary author. The aesthetic balances professionalism with personality, creating an inviting space where readers can connect with both her work and her journey as a writer.",
      ],
    },
    {
      heading: "Book Showcase & Reader Engagement",
      paragraphs: [
        "The website features a dedicated book showcase that highlights Chloe's published works with detailed descriptions, reading excerpts, and purchase links. We created an intuitive navigation system that allows visitors to easily explore her bibliography and discover new releases.",
        "Interactive elements encourage reader engagement through book reviews, author events, and a newsletter signup that keeps fans updated on new publications and speaking opportunities.",
      ],
    },
    {
      heading: "Content Strategy & SEO",
      paragraphs: [
        "To help readers discover Chloe's work online, we implemented a comprehensive SEO strategy targeting key literary and genre-specific keywords. The site includes:",
      ],
      list: [
        "Optimized book pages for search engine visibility",
        "Author bio and background content for credibility",
        "Speaking engagement and event information",
        "Blog section for ongoing content and reader connection",
        "Social media integration for broader reach",
      ],
    },
    {
      heading: "Results & Literary Impact",
      paragraphs: [
        "The new website has significantly enhanced Chloe's online presence, providing a professional platform that showcases her work and connects her with readers worldwide. The clean design and user-friendly navigation have improved visitor engagement and book discovery.",
        "The site serves as a central hub for her literary career, supporting both current promotional efforts and future book launches with a scalable foundation that grows with her publishing success.",
      ],
    },
  ];

  return (
    <div>
      <Navbar />

      <Header title="CHLOE PENARANDA" />

      <ProjectContent
        briefTitle="The brief"
        briefDescription="Chloe Penaranda, an emerging contemporary author, approached us to create a professional website that would serve as the central hub for her literary career. She needed a platform that would showcase her published works, establish credibility with readers and industry professionals, and provide an engaging space for fans to discover her books and connect with her story. The goal was to create a clean, literary-focused design that would support both her current promotional efforts and future book launches."
        images={["/ChloePenaranda.png"]}
        imageAlt="Chloe Penaranda author website"
        contentBlocks={contentBlocks}
      />

      <FinalCTA />
      <Footer />
    </div>
  );
}
