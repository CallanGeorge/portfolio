import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import SEOContent from '@/components/SEOContent'
import FinalCTA from '../../components/FinalCTA'
import Footer from '../../components/Footer'

export default function SEOServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <Header title="SEO" />
        <SEOContent />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
} 