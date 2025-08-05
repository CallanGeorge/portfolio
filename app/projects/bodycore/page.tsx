import Navbar from "@/components/Navbar";
import Header from "../../../components/Header";
import ProjectContent from "@/components/ProjectContent";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function BodyCorePage() {
  const contentItems = [
    {
      type: "text" as const,
      heading: "Fitness Brand & Community Building",
      paragraphs: [
        "BodyCore needed a dynamic website that would capture the energy and motivation of their personal training services while providing an easy way for potential clients to book sessions and connect with trainers. The challenge was creating a platform that felt both professional and inspiring, encouraging visitors to take action on their fitness goals.",
        "We developed a bold, energetic design that reflects the intensity and dedication of the fitness community. The visual identity uses strong typography and vibrant imagery to create an atmosphere of motivation and achievement.",
      ],
    },
    {
      type: "text" as const,
      heading: "Trainer Profiles & Service Showcase",
      paragraphs: [
        "The website features detailed trainer profiles that highlight each instructor's specializations, certifications, and training philosophy. This helps potential clients find the right match for their fitness goals and builds trust through professional credentials and personal stories.",
        "We created an intuitive service showcase that clearly explains different training programs, from one-on-one personal training to group fitness classes, making it easy for visitors to understand their options and pricing.",
      ],
    },
    {
      type: "image" as const,
      images: ["/bodycore.png"],
      imageAlt: "BodyCore fitness website",
    },
    {
      type: "text" as const,
      heading: "Booking System & User Experience",
      paragraphs: [
        "To streamline the client experience, we implemented a comprehensive booking system that includes:",
      ],
      list: [
        "Online session scheduling with real-time availability",
        "Trainer selection based on specialization and schedule",
        "Client progress tracking and goal setting tools",
        "Mobile-optimized design for on-the-go booking",
        "Integrated payment processing for seamless transactions",
      ],
    },
    {
      type: "text" as const,
      heading: "Results & Community Impact",
      paragraphs: [
        "The new website has significantly improved BodyCore's ability to attract and retain clients, with streamlined booking processes and clear service information leading to increased session bookings. The professional presentation has enhanced credibility and trust with potential clients.",
        "The platform serves as a central hub for the fitness community, supporting both individual training goals and group motivation through success stories, progress tracking, and easy communication between trainers and clients.",
      ],
    },
  ];

  return (
    <div>
      <Navbar />

      <Header title="BODYCORE" />

      <ProjectContent
        briefTitle="The brief"
        briefDescription="BodyCore approached us to create a dynamic fitness website that would showcase their personal training services and make it easy for potential clients to book sessions. They needed a platform that captured the energy and motivation of their fitness community while providing professional credibility and streamlined booking functionality. The goal was to create an inspiring digital presence that would convert visitors into committed fitness clients and support long-term relationships between trainers and members."
        contentItems={contentItems}
      />

      <FinalCTA />
      <Footer />
    </div>
  );
}
