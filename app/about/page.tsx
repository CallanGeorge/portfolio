import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import AboutSection from '@/components/AboutSection'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import styles from '../page.module.css'

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Header 
        title="ABOUT"
        subtitle="GET TO KNOW THE PERSON BEHIND THE WORK."
      />
      <AboutSection />
      <FinalCTA />
      <Footer />
    </main>
  )
} 