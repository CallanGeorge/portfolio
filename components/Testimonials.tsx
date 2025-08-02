'use client'

import { useState, useEffect } from 'react'
import styles from './Testimonials.module.css'

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const testimonials = [
    {
      text: "Callan delivered exactly what we needed for our restaurant. The website is beautiful, easy to manage, and our online orders have increased significantly since launch.",
      author: "Sarah Mitchell",
      title: "Owner, The Local Bistro",
      initials: "SM"
    },
    {
      text: "Professional, responsive, and genuinely cares about the result. Callan took our fitness studio online and the booking system works perfectly. Highly recommend!",
      author: "James Thompson",
      title: "Director, FitCore Edinburgh",
      initials: "JT"
    },
    {
      text: "From concept to launch, Callan made the whole process smooth and stress-free. Our new e-commerce site looks amazing and sales have doubled in just 3 months.",
      author: "Emma Davidson",
      title: "Founder, Highland Crafts Co.",
      initials: "ED"
    }
  ]

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Title Section */}
        <div className={`${styles.header} ${isVisible ? styles.visible : styles.hidden}`}>
          <h2 className={styles.title}>
            What My Clients Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className={`${styles.testimonialsGrid} ${isVisible ? styles.visible : styles.hidden}`}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.testimonialContent}>
                <div className={styles.starsContainer}>
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i} className={styles.star}>{star}</span>
                  ))}
                </div>
                <p className={styles.testimonialText}>
                  "{testimonial.text}"
                </p>
              </div>
              
              <div className={styles.authorContainer}>
                <div className={styles.avatar}>
                  <div className={styles.avatarInner}>
                    <span className={styles.avatarInitials}>
                      {testimonial.initials}
                    </span>
                  </div>
                </div>
                <div className={styles.authorInfo}>
                  <h4 className={styles.authorName}>
                    {testimonial.author}
                  </h4>
                  <p className={styles.authorTitle}>
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
} 