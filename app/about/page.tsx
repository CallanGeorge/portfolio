import Navbar from '@/components/Navbar'
import AboutHeader from '@/components/AboutHeader'
import AboutSection from '@/components/AboutSection'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <main className="relative">
      <Navbar />
      <AboutHeader />
      <AboutSection />
      <FinalCTA />
      <Footer />
    </main>
  )
} 