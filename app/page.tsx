import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import AboutSection from "@/components/AboutSection";
import Performance from "@/components/Performance";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <AboutSection showCTA={true} />
      <Projects />
      <Performance />
      <Services />
      <FinalCTA />
      <Footer />
    </main>
  );
}
