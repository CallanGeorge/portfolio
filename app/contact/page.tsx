import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import styles from '../page.module.css'

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Header 
        title="CONTACT"
        subtitle="READY TO GROW YOUR BUSINESS? LET'S START THE CONVERSATION."
      />
      <ContactForm />
      <Footer />
    </main>
  )
} 