import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutSection showCTA={false} />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
