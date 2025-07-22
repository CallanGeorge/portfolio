import Navbar from '@/components/Navbar'
import AboutHeader from '@/components/AboutHeader'
import AboutSection from '@/components/AboutSection'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import styles from '../page.module.css'

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <Navbar />
      <AboutHeader />
      <AboutSection />
      <FinalCTA />
      <Footer />
    </main>
  )
} 