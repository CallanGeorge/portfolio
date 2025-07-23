'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './FinalCTA.module.css'

export default function FinalCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.contentCenter}>
          {/*  Title */}
          <div className={`${styles.titleContainer} ${isVisible ? styles.visible : styles.hidden}`}>
            <h2 className={styles.mainTitle}>
              WORK WITH ME
            </h2>
          </div>

          {/* CTA  */}
          <div className={`${styles.ctaContainer} ${isVisible ? styles.visible : styles.hidden}`}>
            <Link href="/contact" className={styles.ctaButton}>
              LET'S WORK TOGETHER
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
} 