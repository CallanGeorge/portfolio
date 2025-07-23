'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className={styles.hero}>
      {/* Subtle Background Pattern */}
      <div className={styles.backgroundPattern}>
        <div className={styles.backgroundSvg}>
          <svg viewBox="0 0 200 200">
            <path
              d="M40,40 Q120,20 160,80 Q180,140 120,180 Q60,160 40,100 Q20,60 40,40 Z"
              fill="#DBEAFE"
            />
          </svg>
        </div>
      </div>

      <div className={styles.container}>
        {/* Main Headline */}
        <div className={`${styles.headlineContainer} ${isVisible ? styles.visible : styles.hidden}`}>
          <h1 className={styles.headline}>
            <div className={styles.headlineText}>
              CUSTOM WEBSITES
            </div>
            <div className={styles.headlineText}>
              FOR LOCAL BUSINESS
            </div>
            <div className={styles.headlineText}>
              <span className={styles.outlineText}>
                GROWTH!
              </span>
            </div>
          </h1>
        </div>

        {/* Subtitle and CTA Side by Side */}
        <div className={`${styles.contentContainer} ${isVisible ? styles.visible : styles.hidden}`}>
          <div className={styles.contentWrapper}>
            {/* Subtitle */}
            <div className={styles.subtitleContainer}>
              <p className={styles.subtitle}>
                EDINBURGH-BASED FREELANCE WEB DEVELOPER HELPING LOCAL 
                BUSINESSES BUILD THEIR DIGITAL PRESENCE - MODERN WEBSITES, 
                PROVEN RESULTS, PERSONAL SERVICE.
              </p>
            </div>
            
            {/* CTA Button */}
            <div className={styles.ctaContainer}>
              <Link href="/contact" className={styles.ctaButton}>
                GET STARTED
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 