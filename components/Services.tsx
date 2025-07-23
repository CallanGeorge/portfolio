'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './Services.module.css'

export default function Services() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      title: "Website Design & Development",
      description: "Create you an award winning website that converts.",
      button: "GET STARTED",
      features: [
        "Dedicated Notion board",
        "Quick delivery (5-7 days)",
        "Regular updates via Slack or email",
        "Exclusive Features and Enhancements",
        "Flexibility and Scalability as website grows",
        "Training for platform"
      ]
    },
    {
      title: "Photography",
      description: "I'll take care of your website photography needs.",
      price: "$30",
      priceUnit: "/image",
      priceNote: "minimum 5 images",
      button: "GET STARTED",
      features: [
        "Simple retouching/color correcting",
        "Variety of shoots available",
        "Unlimited usage license",
        "Revisions and reshoots available",
        "Drone photos available"
      ]
    },
    {
      title: "Small Project",
      description: "Need something quick and simple?",
      price: "$1200",
      priceNote: "One time fee",
      button: "GET STARTED",
      features: [
        "Basic 1-3 page website",
        "Quick delivery (1-3 days)",
        "Training for platform",
        "Exclusive Features and Enhancements",
        "Flexibility and Scalability as website grows"
      ]
    }
  ]

  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        
        {/* Header */}
        <div className={`${styles.header} ${isVisible ? styles.visible : styles.hidden}`}>
          <h2 className={styles.title}>
            Explore My
            <br />
            Services
          </h2>
          <p className={styles.subtitle}>
            I offer a variety of plans to accommodate your small business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className={`${styles.servicesGrid} ${isVisible ? styles.visible : styles.hidden}`}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              {/* Title - Fixed height */}
              <h3 className={styles.cardTitle}>
                {service.title}
              </h3>
              
              {/* Description - Fixed height */}
              <p className={styles.cardDescription}>
                {service.description}
              </p>

              {/* Price Section - Fixed height for alignment */}
              <div className={styles.priceSection}>
                {service.price ? (
                  <>
                    <div className={styles.priceContainer}>
                      <span className={styles.price}>
                        {service.price}
                      </span>
                      {service.priceUnit && (
                        <span className={styles.priceUnit}>
                          {service.priceUnit}
                        </span>
                      )}
                    </div>
                    {service.priceNote && (
                      <p className={styles.priceNote}>
                        {service.priceNote}
                      </p>
                    )}
                  </>
                ) : (
                  <div></div>
                )}
              </div>

              {/* CTA Button - Fixed position */}
              <div className={styles.buttonContainer}>
                <Link href="/contact" className={styles.ctaButton}>
                  {service.button}
                </Link>
              </div>

              {/* Divider */}
              <div className={styles.divider}></div>
              
              {/* Features - Takes remaining space */}
              <div className={styles.featuresContainer}>
                <h4 className={styles.featuresTitle}>
                  What's included:
                </h4>
                <ul className={styles.featuresList}>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={styles.featureItem}>
                      <span className={styles.featureBullet}></span>
                      <span className={styles.featureText}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 