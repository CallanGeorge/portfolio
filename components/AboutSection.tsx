'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './AboutSection.module.css'

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/*Title Section */}
        <div className={`${styles.welcomeSection} ${isVisible ? styles.visible : styles.hidden}`}>
          <h2 className={styles.welcomeTitle}>
          I'm Callan — a freelance web designer and developer, born and raised in Fife and now based in Edinburgh. I specialise in building high-performing websites for small businesses that look great, rank well on Google, and deliver an outstanding user experience.
          </h2>
        </div>

        <div className={styles.contentGrid}>
          
          {/* Left Side - Image */}
          <div className={`${styles.imageContainer} ${isVisible ? styles.visible : styles.hidden}`}>
            <div className={styles.imageWrapper}>
              <img 
                src="/Callan.JPG"
                alt="Callan George - Web Developer"
                className={styles.aboutImage}
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className={`${styles.textContainer} ${isVisible ? styles.visible : styles.hidden}`}>
            {/* Title */}
            <h2 className={styles.sectionTitle}>
              About Me
            </h2>
            
            {/* Description Paragraphs */}
            <div className={styles.textContent}>
              <p>
              With a background in professional web development, I understand that a successful website isn't just about design — it's about getting found online, keeping visitors engaged, and converting them into customers. That's why every site I build is:
              </p>
              <ul>
                <li>
                Optimised for SEO – so your business can rank higher in local and national searches.
                </li>
                <li>
                Designed for user experience (UX) – so visitors can find what they need quickly and easily.
                </li>
                <li>
                Built for performance – with lightning-fast load times to improve conversions and search rankings.
                </li>
              </ul>
              <p>
              I take the time to learn about your business, your audience, and your goals, then create a site that's tailored to you — whether you're a local café in Kirkcaldy, a salon in Dunfermline, or an e-commerce store serving customers across Scotland.              </p>
              <p>
              When you work with me, you get more than just a website. You get a strategic online presence that helps your business grow.
              </p>
            </div>
          </div>

        </div>

        {/* CTA Section */}
        <div className={`${styles.ctaSection} ${isVisible ? styles.visible : styles.hidden}`}>
          <h3 className={styles.ctaHeading}>
            Ready to take your online presence to the next level?
          </h3>
          
          <Link href="/contact" className={styles.ctaButton}>
            GET STARTED
          </Link>
        </div>

      </div>
    </section>
  )
} 