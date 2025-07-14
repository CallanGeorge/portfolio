import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WhyChooseMe from '@/components/WhyChooseMe'
import Services from '@/components/Services'
import AboutSection from '@/components/AboutSection'
import Projects from '@/components/Projects'
import FinalCTA from '@/components/FinalCTA'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <WhyChooseMe />
      <AboutSection />
      <Services />
      <Projects />
  
      
      <FinalCTA />
      
  
    </main>
  )
} 