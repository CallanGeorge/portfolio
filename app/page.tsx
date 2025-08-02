import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Performance from '@/components/Performance'
import Services from '@/components/Services'
import AboutSection from '@/components/AboutSection'
import Projects from '@/components/Projects'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import styles from './page.module.css'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <AboutSection />
      <Testimonials />
      <Projects />
      <Performance />
      <Services />
      <FinalCTA />
      <Footer />
    </main>
  )
} 