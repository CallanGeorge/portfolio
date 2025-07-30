'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './Performance.module.css'

export default function Performance() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const metrics = [
    {
      value: "100%",
      label: "Satisfaction Guaranteed"
    },
    {
      value: "100",
      label: "Page Speed Scores"
    },
    {
      value: "5/5",
      label: "Google Reviews"
    }
  ]

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
        {/* Top Section with Tag, Heading and Metrics */}
        <div className={`${styles.topSection} ${isVisible ? styles.visible : styles.hidden}`}>
          <div className={styles.leftColumn}>
            <div className={styles.performanceTag}>
              PERFORMANCE
            </div>
            
            <h2 className={styles.mainHeading}>
              WE BUILD <span className={styles.highlight}>BETTER</span> WEBSITES<br />
              THAT PERFORM
            </h2>
          </div>

          {/* Metrics positioned at top right */}
          <div className={styles.metricsContainer}>
            {metrics.map((metric, index) => (
              <div key={index} className={styles.metric}>
                <div className={styles.metricValue}>{metric.value}</div>
                <div className={styles.metricLabel}>{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section with Content and Screenshot */}
        <div className={`${styles.bottomSection} ${isVisible ? styles.visible : styles.hidden}`}>
          <div className={styles.contentColumn}>
            <p className={styles.description}>
              When it comes to website load times, not very many can get the Google 
              PageSpeed scores that we get with each and every site. Test your website load 
              times with Google PageSpeed Insights and see what your current site is scoring 
              right now.
            </p>

            {/* Benefits */}
            <div className={styles.benefitsContainer}>
              {benefits.map((benefit, index) => (
                <div key={index} className={styles.benefit}>
                  <div className={styles.benefitIcon}>
                    {benefit.icon}
                  </div>
                  <div className={styles.benefitText}>
                    {benefit.title}
                  </div>
                </div>
              ))}
            </div>

            <Link href="/contact" className={styles.ctaButton}>
              GET STARTED TODAY
            </Link>
          </div>

          {/* Screenshot positioned on the right */}
          <div className={styles.screenshotColumn}>
            <div className={styles.screenshotPlaceholder}>
              {/* This is where your screenshot will go */}
              <div className={styles.placeholderText}>
                PageSpeed Insights Screenshot
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 