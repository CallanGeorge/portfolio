import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <Header title="ABOUT" />
        <AboutSection showCTA={false} />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
