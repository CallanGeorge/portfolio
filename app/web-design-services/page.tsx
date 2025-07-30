import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import WebDesignContent from '@/components/WebDesignContent'
import FinalCTA from '../../components/FinalCTA'
import Footer from '../../components/Footer'

export default function WebDesignServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <Header 
          title="WEB DESIGN SERVICES"
          subtitle="CREATING BEAUTIFUL, FUNCTIONAL WEBSITES THAT DRIVE RESULTS."
        />
        <WebDesignContent />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
} 