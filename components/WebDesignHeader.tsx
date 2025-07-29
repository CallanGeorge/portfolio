'use client'

import { useState, useEffect } from 'react'
import styles from './WebDesignHeader.module.css'

export default function WebDesignHeader() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={`${styles.headerContent} ${isVisible ? styles.visible : styles.hidden}`}>
          <h1 className={styles.title}>
            Web Design 
          </h1>
        </div>
      </div>
    </section>
  )
} 