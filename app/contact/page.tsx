import Navbar from '@/components/Navbar'
import ContactHeader from '@/components/ContactHeader'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import styles from '../page.module.css'

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <Navbar />
      <ContactHeader />
      <ContactForm />
      <Footer />
    </main>
  )
} 