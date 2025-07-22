'use client'

import { useState, useEffect } from 'react'
import styles from './WhyChooseMe.module.css'

export default function WhyChooseMe() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Main Heading */}
        <div className={`${styles.headingContainer} ${isVisible ? styles.visible : styles.hidden}`}>
          <h2 className={styles.mainHeading}>
            Why Choose Me?
          </h2>
        </div>

        {/* Body Content */}
        <div className={`${styles.bodyContainer} ${isVisible ? styles.visible : styles.hidden}`}>
          <div className={styles.bodyWrapper}>
            <p className={styles.primaryText}>
              When you work with me, you're not just another project in the queue – you get my full focus and a personalised approach tailored to your business goals. As a freelance professional, I prioritise clear communication, attention to detail, and results that help your business grow.
            </p>
            
            <p className={styles.secondaryText}>
              I take the time to understand what makes your business unique and create a website that reflects that, ensuring it not only looks great but works effectively to attract and convert your ideal customers.
            </p>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className={`${styles.testimonialsContainer} ${isVisible ? styles.visible : styles.hidden}`}>
          <div className={styles.testimonialsWrapper}>
            <div className={styles.testimonialsGrid}>
              
              {/* Testimonial 1 */}
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialContent}>
                  <div className={styles.starsContainer}>
                    {'★★★★★'.split('').map((star, i) => (
                      <span key={i} className={styles.star}>{star}</span>
                    ))}
                  </div>
                  <p className={styles.testimonialText}>
                    "Callan delivered exactly what we needed for our restaurant. The website is beautiful, easy to manage, and our online orders have increased significantly since launch."
                  </p>
                </div>
                
                <div className={styles.authorContainer}>
                  <div className={styles.avatar}>
                    <div className={styles.avatarInner}>
                      <span className={styles.avatarInitials}>
                        SM
                      </span>
                    </div>
                  </div>
                  <div className={styles.authorInfo}>
                    <h4 className={styles.authorName}>
                      Sarah Mitchell
                    </h4>
                    <p className={styles.authorTitle}>
                      Owner, The Local Bistro
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialContent}>
                  <div className={styles.starsContainer}>
                    {'★★★★★'.split('').map((star, i) => (
                      <span key={i} className={styles.star}>{star}</span>
                    ))}
                  </div>
                  <p className={styles.testimonialText}>
                    "Professional, responsive, and genuinely cares about the result. Callan took our fitness studio online and the booking system works perfectly. Highly recommend!"
                  </p>
                </div>
                
                <div className={styles.authorContainer}>
                  <div className={styles.avatar}>
                    <div className={styles.avatarInner}>
                      <span className={styles.avatarInitials}>
                        JT
                      </span>
                    </div>
                  </div>
                  <div className={styles.authorInfo}>
                    <h4 className={styles.authorName}>
                      James Thompson
                    </h4>
                    <p className={styles.authorTitle}>
                      Director, FitCore Edinburgh
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className={`${styles.testimonialCard} ${styles.spanTwo}`}>
                <div className={styles.testimonialContent}>
                  <div className={styles.starsContainer}>
                    {'★★★★★'.split('').map((star, i) => (
                      <span key={i} className={styles.star}>{star}</span>
                    ))}
                  </div>
                  <p className={styles.testimonialText}>
                    "From concept to launch, Callan made the whole process smooth and stress-free. Our new e-commerce site looks amazing and sales have doubled in just 3 months."
                  </p>
                </div>
                
                <div className={styles.authorContainer}>
                  <div className={styles.avatar}>
                    <div className={styles.avatarInner}>
                      <span className={styles.avatarInitials}>
                        ED
                      </span>
                    </div>
                  </div>
                  <div className={styles.authorInfo}>
                    <h4 className={styles.authorName}>
                      Emma Davidson
                    </h4>
                    <p className={styles.authorTitle}>
                      Founder, Highland Crafts Co.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`${styles.ctaContainer} ${isVisible ? styles.visible : styles.hidden}`}>
          <div className={styles.ctaWrapper}>
            <h3 className={styles.ctaHeading}>
              Ready to take your online presence to the next level? Contact me today to discuss your project and how I can help.
            </h3>
            
            <button className={styles.ctaButton}>
              GET STARTED
            </button>
          </div>
        </div>

      </div>
    </section>
  )
} 