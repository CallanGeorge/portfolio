import Navbar from "@/components/Navbar";
import Header from "../../../components/Header";
import ProjectContent from "@/components/ProjectContent";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function DebrunnerDesignPage() {
  const contentItems = [
    {
      type: "text" as const,
      heading: "Brand Identity & Visual Direction",
      paragraphs: [
        "Debrunner Design needed a sophisticated online presence that would reflect their position as industry leaders in contemporary design. The challenge was creating a website that showcased their premium creative services while maintaining the elegant, minimalist aesthetic that defines their brand.",
        "We developed a clean, modern design system that allows their portfolio work to take center stage. Every element was carefully considered to reinforce their brand identity and establish credibility with high-value clients and creative professionals.",
      ],
    },
    {
      type: "image" as const,
      images: ["/dbd-laptop.png"],
      imageAlt: "Debrunner Design website",
    },
    {
      type: "text" as const,
      heading: "User Experience & Portfolio Showcase",
      paragraphs: [
        "The website features an intuitive portfolio system that categorizes projects by industry and design type, making it easy for potential clients to explore relevant work and understand the agency's capabilities. We implemented advanced filtering and search functionality to help visitors quickly find case studies that match their needs.",
        "Interactive elements and smooth animations create an engaging experience that reflects the agency's creative expertise, while maintaining fast load times and optimal performance across all devices.",
      ],
    },
    {
      type: "image" as const,
      images: ["/dbd-phone.png"],
      imageAlt: "Debrunner Design website",
    },
    {
      type: "text" as const,
      heading: "Technical Excellence",
      paragraphs: [
        "Built with modern web technologies for maximum performance and reliability. The site features:",
      ],
      list: [
        "Custom content management system for easy portfolio updates",
        "Optimized image delivery for fast-loading portfolio galleries",
        "Responsive design ensuring perfect display on all screen sizes",
        "SEO optimization to improve search engine visibility",
        "Streamlined contact and project inquiry system",
      ],
    },
    {
      type: "text" as const,
      heading: "Results & Impact",
      paragraphs: [
        "The new website has significantly enhanced Debrunner Design's online presence, providing a professional platform that effectively converts visitors into potential clients. The streamlined user experience and compelling portfolio presentation have improved client engagement and inquiry quality.",
        "The site's modern technical foundation ensures long-term scalability and easy maintenance, allowing the team to focus on their creative work while their online presence continues to drive business growth.",
      ],
    },
  ];

  return (
    <div>
      <Navbar />

      <Header title="DEBRUNNER DESIGN" />

      <ProjectContent
        briefTitle="The brief"
        briefDescription="Debrunner Design approached us to create a sophisticated website that would showcase their premium design services and establish them as industry leaders. They needed a digital presence that reflected their commitment to creative excellence while providing an intuitive way for potential clients to explore their portfolio and understand their capabilities. The goal was to create a platform that would not only display their work beautifully but also convert visitors into high-value clients through compelling storytelling and clear calls-to-action."
        contentItems={contentItems}
      />

      <FinalCTA />
      <Footer />
    </div>
  );
}
