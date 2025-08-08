"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
        <div
          className={`${styles.headlineContainer} ${
            isVisible ? styles.visible : styles.hidden
          }`}
        >
          <h1 className={styles.headline}>
            <div className={styles.headlineText}>SMALL BUSINESS</div>
            <div className={styles.headlineText}>WEB DESIGNER</div>
            <div className={styles.headlineText}>
              <span className={styles.outlineText}>FIFE</span>&
              <span className={styles.outlineText}>EDINBURGH</span>
            </div>
          </h1>
        </div>

        {/* Subtitle and CTA */}
        <div
          className={`${styles.contentContainer} ${
            isVisible ? styles.visible : styles.hidden
          }`}
        >
          <div className={styles.contentWrapper}>
            <div className={styles.subtitleContainer}>
              <p className={styles.subtitle}>
                Locally based web designer helping small businesses in Fife and
                Edinburgh grow online with fast, modern, and SEO-friendly
                websites that bring in more customers.
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
  );
}
