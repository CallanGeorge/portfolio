"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Performance.module.css";

export default function Performance() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const benefits = [
    {
      title:
        "Google rewards fast-loading websites. My sites load in under 1 second, giving you a perfect 100/100 PageSpeed score and keeping visitors from clicking away.",
    },
    {
      title:
        'From the start, I optimise your site structure, headings, and content for the keywords your customers are searching for — whether that\'s "café in Kirkcaldy" or "Fife wedding photographer."',
    },
    {
      title:
        "Google measures how users interact with your site. I make sure visitors find what they need quickly, stay longer, and are more likely to contact you or buy from you.",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div
          className={`${styles.header} ${
            isVisible ? styles.visible : styles.hidden
          }`}
        >
          <h2 className={styles.title}>
            Better
            <br />
            Websites
          </h2>
          <p className={styles.subtitle}>
            Building a beautiful website is only half the battle — if customers
            can’t find you on Google, you’re missing out on sales. That’s why
            every site I build is designed to rank well, load fast, and turn
            visitors into paying customers.{" "}
          </p>
        </div>

        {/* Main Content */}
        <div
          className={`${styles.contentSection} ${
            isVisible ? styles.visible : styles.hidden
          }`}
        >
          {/* Benefits Section */}
          <div className={styles.benefitsSection}>
            <h3 className={styles.benefitsTitle}>
              The 3 Keys to Ranking Higher
            </h3>

            <div className={styles.benefitsList}>
              {benefits.map((benefit, index) => (
                <div key={index} className={styles.benefitItem}>
                  <p className={styles.benefitText}>{benefit.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* PageSpeed Showcase */}
          <div className={styles.showcaseSection}>
            <h3 className={styles.showcaseTitle}>Google PageSpeed Results</h3>

            <div className={styles.screenshotContainer}>
              <img
                src="/Light-house-score.png"
                alt="Google PageSpeed Insights showing 100/100 Performance Score"
                className={styles.lighthouseImage}
              />
            </div>

            <p className={styles.showcaseDescription}>
              Test your website load times using{" "}
              <a
                href="https://pagespeed.web.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Google PageSpeed Insights
              </a>{" "}
              and see how your current site performs. Most small business sites
              fail this test — but mine consistently score 100/100.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div
          className={`${styles.ctaSection} ${
            isVisible ? styles.visible : styles.hidden
          }`}
        >
          <h3 className={styles.ctaTitle}>
            Ready to boost your website performance and conversions?
          </h3>

          <Link href="/contact" className={styles.ctaButton}>
            GET STARTED TODAY
          </Link>
        </div>
      </div>
    </section>
  );
}
