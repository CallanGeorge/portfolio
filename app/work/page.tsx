import Navbar from '@/components/Navbar'
import WorkHeader from '@/components/WorkHeader'
import MyWorkSection from '@/components/MyWorkSection'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function WorkPage() {
  return (
    <main className="relative">
      <Navbar />
      <WorkHeader />
      <MyWorkSection />
      <FinalCTA />
      <Footer />
    </main>
  )
} 