import Navbar from '@/components/Navbar'
import WorkHeader from '@/components/WorkHeader'
import MyWorkSection from '@/components/MyWorkSection'
import FinalCTA from '@/components/FinalCTA'

export default function WorkPage() {
  return (
    <main className="relative">
      <Navbar />
      <WorkHeader />
      <MyWorkSection />
      <FinalCTA />
    </main>
  )
} 