import Navbar from "@/components/Navbar";
import Header from "../../../components/Header";
import ProjectContent from "@/components/ProjectContent";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function JohnGwynnePage() {
  const contentItems = [
    {
      type: "text" as const,
      heading: "Epic Fantasy Brand & Literary World-Building",
      paragraphs: [
        "John Gwynne, an award-winning fantasy author, needed a website that would capture the epic scope and immersive world-building of his bestselling novels. The challenge was creating a digital presence that felt as rich and engaging as his fantasy realms while providing readers with comprehensive access to his books, characters, and lore.",
        "We developed a dark, atmospheric design that reflects the epic fantasy genre and John's distinctive writing style. The visual identity uses medieval-inspired typography and rich imagery to create an immersive experience that transports visitors into his literary worlds.",
      ],
    },
    {
      type: "image" as const,
      images: ["/JohnGwynne.png"],
      imageAlt: "John Gwynne fantasy author website",
    },
    {
      type: "text" as const,
      heading: "Series Showcase & Character Guides",
      paragraphs: [
        "The website features detailed showcases for John's book series, including comprehensive character guides, world maps, and timeline information that help readers navigate his complex fantasy universes. Each series has its own dedicated section with book descriptions, reading order guides, and character relationship charts.",
        "Interactive elements allow fans to explore the intricate world-building details, from family trees and political alliances to magical systems and historical events, creating a resource that enhances the reading experience and builds deeper fan engagement.",
      ],
    },
    {
      type: "text" as const,
      heading: "Fan Community & Reader Resources",
      paragraphs: [
        "To support John's dedicated fanbase, we created comprehensive resources including:",
      ],
      list: [
        "Detailed character databases with illustrations and backstories",
        "Interactive world maps showing locations from the books",
        "Reading guides for new readers entering the series",
        "Book club discussion questions and reading group resources",
        "Author event calendar and signing information",
      ],
    },
    {
      type: "text" as const,
      heading: "Results & Literary Success",
      paragraphs: [
        "The new website has become a central hub for John's fantasy community, providing fans with an immersive digital experience that extends the enjoyment of his books. The comprehensive world-building resources have increased reader engagement and helped new fans navigate his complex series.",
        "The professional presentation has enhanced John's credibility in the literary world, supporting his promotional efforts and helping establish him as a leading voice in epic fantasy literature. The site continues to grow with each new release, building a stronger connection between author and readers.",
      ],
    },
  ];

  return (
    <div>
      <Navbar />

      <Header title="JOHN GWYNNE" />

      <ProjectContent
        briefTitle="The brief"
        briefDescription="John Gwynne, an award-winning fantasy author known for his epic series including 'The Faithful and the Fallen' and 'Of Blood and Bone,' approached us to create a comprehensive website that would serve his growing fanbase. He needed a digital platform that could showcase his complex fantasy worlds, provide detailed character and world-building information, and create a central hub for readers to explore his literary universe. The goal was to create an immersive experience that would enhance reader engagement and support his position as a leading voice in epic fantasy literature."
        contentItems={contentItems}
      />

      <FinalCTA />
      <Footer />
    </div>
  );
}
