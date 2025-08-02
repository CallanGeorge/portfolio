'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './AboutSection.module.css'

export default function AboutSection() {
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
        
        {/*Title Section */}
        <div className={`${styles.welcomeSection} ${isVisible ? styles.visible : styles.hidden}`}>
          <h2 className={styles.welcomeTitle}>
            Welcome to Gabe Creative Dept, where I specialize in helping small businesses establish a strong online presence through modern, intuitive web design.
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
              Born and raised in Edinburgh
            </h2>
            
            {/* Description Paragraphs */}
            <div className={styles.textContent}>
              <p>
                Howdy and welcome to my corner of the web! I'm Callan, a web developer and designer with a passion for crafting premium websites tailored specifically for small businesses.
              </p>
              
              <p>
                Being locally grown in Edinburgh, Scotland, I understand the unique pulse and needs of our vibrant local business landscape.
              </p>
              
              <p>
                When you work with me, you get my full focus and a personalised approach tailored to your business goals. I prioritise clear communication, attention to detail, and results that help your business grow.
              </p>
              
              <p>
                I take the time to understand what makes your business unique and create a website that not only looks great but works effectively to attract and convert your ideal customers.
              </p>
            </div>
          </div>

        </div>

        {/* Testimonials Section */}
        <div className={`${styles.testimonialsSection} ${isVisible ? styles.visible : styles.hidden}`}>
          <h3 className={styles.testimonialsTitle}>
            What My Clients Say
          </h3>
          
          <div className={styles.testimonialsGrid}>
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