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
                Howdy and welcome to my corner of the web! I'm Callan, a web developer and designer with a passion for crafting premium websites tailored specifically for small businesses. Being locally grown in Edinburgh, Scotland, and having roots in the community, I understand the unique pulse and needs of our vibrant local landscape.
              </p>
              
              <p>
                From the historic streets of Edinburgh to the charming neighborhoods of Scotland and beyond, I take pride in serving businesses in our surrounding areas.
              </p>
              
              <p>
                With a blend of creativity, technical expertise, and a deep understanding of the local landscape, I'm dedicated to helping businesses like yours establish a strong online presence.
              </p>
              
              <p>
                Whether you're a startup venturing into the digital realm or an established business looking to refresh your website, I'm here to turn your vision into reality.
              </p>
              
              <p>
                Let's collaborate and create something exceptional for your business. Get in touch today, and let's embark on this exciting journey together!
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
} 