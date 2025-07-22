'use client'

import { useState, useEffect } from 'react'
import styles from './AboutHeader.module.css'

export default function AboutHeader() {
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
            ABOUT
          </h1>
          <p className={styles.subtitle}>
            GET TO KNOW THE PERSON BEHIND THE WORK.
          </p>
        </div>

      </div>
    </section>
  )
} 