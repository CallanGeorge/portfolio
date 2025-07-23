'use client'

import { useState, useEffect } from 'react'
import styles from './ContactHeader.module.css'

export default function ContactHeader() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Header */}
        <div className={`${styles.headerContent} ${isVisible ? styles.visible : styles.hidden}`}>
          <h1 className={styles.title}>
            CONTACT
          </h1>
          <p className={styles.subtitle}>
            READY TO GROW YOUR BUSINESS? LET'S START THE CONVERSATION.
          </p>
        </div>

      </div>
    </section>
  )
} 