"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Services.module.css";

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: "Website Design & Development",
      description:
        "Professional 1–5 page website to get your business online fast.",
      price: "£300",
      button: "GET STARTED",
      features: [
        "Custom-designed 1–5 page website matched to your brand",
        "Mobile & tablet responsive",
        "Basic on-page SEO",
        "Delivered in 7 days or less",
      ],
    },
    {
      title: "Website + SEO Growth Plan",
      description:
        "Your website, SEO, and updates handled for you — no upfront cost.",
      price: "£75",
      priceUnit: "/month",
      priceNote: "No upfront cost",
      button: "GET STARTED",
      features: [
        "Fully custom-built website included",
        "Ongoing SEO optimisation to help you rank locally",
        "Unlimited content & design updates",
        "Monthly performance reports",
      ],
    },
    {
      title: "Premium Plan",
      description:
        "Everything in Growth, plus e-commerce or booking and advanced SEO.",
      price: "£125",
      priceUnit: "/month",
      priceNote: "No upfront cost",
      button: "GET STARTED",
      features: [
        "Everything in the Growth Plan",
        "E-commerce",
        "Booking System Integration",
        "Advanced SEO with keyword tracking & backlink outreach",
      ],
    },
  ];

  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div
          className={`${styles.header} ${
            isVisible ? styles.visible : styles.hidden
          }`}
        >
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
        <div
          className={`${styles.servicesGrid} ${
            isVisible ? styles.visible : styles.hidden
          }`}
        >
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              {/* Title - Fixed height */}
              <h3 className={styles.cardTitle}>{service.title}</h3>

              {/* Description - Fixed height */}
              <p className={styles.cardDescription}>{service.description}</p>

              {/* Price Section - Fixed height for alignment */}
              <div className={styles.priceSection}>
                {service.price ? (
                  <>
                    <div className={styles.priceContainer}>
                      <span className={styles.price}>{service.price}</span>
                      {service.priceUnit && (
                        <span className={styles.priceUnit}>
                          {service.priceUnit}
                        </span>
                      )}
                    </div>
                    {service.priceNote && (
                      <p className={styles.priceNote}>{service.priceNote}</p>
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
                <h4 className={styles.featuresTitle}>What's included:</h4>
                <ul className={styles.featuresList}>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={styles.featureItem}>
                      <span className={styles.featureBullet}></span>
                      <span className={styles.featureText}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
