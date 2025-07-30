import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import MyWorkSection from '@/components/MyWorkSection'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import styles from '../page.module.css'

export default function WorkPage() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Header 
        title="MY WORK"
        subtitle="A LIST OF CLIENTS THAT I'VE RECENTLY WORKED WITH."
      />
      <MyWorkSection />
      <FinalCTA />
      <Footer />
    </main>
  )
} 