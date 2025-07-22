'use client'

import { useState, useEffect } from 'react'
import styles from './WorkHeader.module.css'

export default function WorkHeader() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={`${styles.headerContent} ${isVisible ? styles.visible : styles.hidden}`}>
          <h1 className={styles.title}>
            MY WORK
          </h1>
          <p className={styles.subtitle}>
            A LIST OF CLIENTS THAT I'VE RECENTLY WORKED WITH.
          </p>
        </div>
      </div>
    </section>
  )
} 