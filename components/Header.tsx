'use client'

import { useState, useEffect } from 'react'
import styles from './Header.module.css'

interface HeaderProps {
  title: string
  subtitle?: string
}

export default function Header({ title, subtitle }: HeaderProps) {
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
            {title}
          </h1>
          {subtitle && (
            <p className={styles.subtitle}>
              {subtitle}
            </p>
          )}
        </div>

      </div>
    </section>
  )
} 