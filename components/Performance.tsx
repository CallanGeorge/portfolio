'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './Performance.module.css'

export default function Performance() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const benefits = [
    {
      icon: "⏱️",
      title: "Better load times means more traffic and more site conversions over time."
    },
    {
      icon: "🏆", 
      title: "Faster websites can help improve SEO and your Google ads performance."
    },
    {
      icon: "💻",
      title: "Our sites load instantly in under 1 second or less, which leads to a better user experience and conversions."
    }
  ]

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Header */}
        <div className={`${styles.header} ${isVisible ? styles.visible : styles.hidden}`}>
          <div className={styles.performanceTag}>
            PERFORMANCE
          </div>
          <h2 className={styles.title}>
            Better
            <br />
            Websites
          </h2>
          <p className={styles.subtitle}>
            When it comes to website load times, not very many can get the Google PageSpeed scores that we get with each and every site.
          </p>
        </div>

        {/* Main Content */}
        <div className={`${styles.contentSection} ${isVisible ? styles.visible : styles.hidden}`}>
          
          {/* Benefits Section */}
          <div className={styles.benefitsSection}>
            <h3 className={styles.benefitsTitle}>
              Why Performance Matters
            </h3>
            
            <div className={styles.benefitsList}>
              {benefits.map((benefit, index) => (
                <div key={index} className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>
                    {benefit.icon}
                  </div>
                  <p className={styles.benefitText}>
                    {benefit.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* PageSpeed Showcase */}
          <div className={styles.showcaseSection}>
            <h3 className={styles.showcaseTitle}>
              Google PageSpeed Results
            </h3>
            
            <div className={styles.screenshotContainer}>
              <div className={styles.screenshotPlaceholder}>
                <div className={styles.placeholderIcon}>📊</div>
                <div className={styles.placeholderText}>
                  Google PageSpeed Insights<br />
                  <strong>100/100 Performance Score</strong>
                </div>
              </div>
            </div>
            
            <p className={styles.showcaseDescription}>
              Test your website load times with Google PageSpeed Insights and see what your current site is scoring right now.
            </p>
          </div>

        </div>

        {/* CTA Section */}
        <div className={`${styles.ctaSection} ${isVisible ? styles.visible : styles.hidden}`}>
          <h3 className={styles.ctaTitle}>
            Ready to boost your website performance and conversions?
          </h3>
          
          <Link href="/contact" className={styles.ctaButton}>
            GET STARTED TODAY
          </Link>
        </div>

      </div>
    </section>
  )
} 