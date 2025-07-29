'use client'

import styles from './SEOContent.module.css'

export default function SEOContent() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* SEO Strategy Section */}
          <div className={styles.contentBlock}>
            <h2 className={styles.heading}>
              Data-Driven SEO That Delivers Results
            </h2>
            <p className={styles.paragraph}>
              At Callan George, we don't just optimize for search engines - we optimize for your business goals. 
              Our comprehensive SEO approach combines technical excellence with strategic content planning to boost 
              your visibility, drive qualified traffic, and increase conversions. We focus on sustainable, 
              white-hat techniques that build long-term authority and rankings.
            </p>
          </div>

          {/* SEO Benefits Section */}
          <div className={styles.contentBlock}>
            <h3 className={styles.subheading}>
              Why SEO Matters For Your Business
            </h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>Increased organic website traffic</li>
              <li className={styles.listItem}>Higher quality leads and conversions</li>
              <li className={styles.listItem}>Improved brand visibility and credibility</li>
              <li className={styles.listItem}>Cost-effective long-term marketing</li>
              <li className={styles.listItem}>Competitive advantage in your market</li>
              <li className={styles.listItem}>Better user experience and site performance</li>
            </ul>
          </div>

          {/* Technical SEO Section */}
          <div className={styles.contentBlock}>
            <h3 className={styles.subheading}>
              Technical SEO Excellence
            </h3>
            <p className={styles.paragraph}>
              Our technical SEO foundation ensures your website is perfectly optimized for search engine crawling 
              and indexing. We implement schema markup, optimize site speed, improve mobile responsiveness, 
              and fix technical issues that could be holding your rankings back. This technical foundation 
              is crucial for achieving and maintaining top search positions.
            </p>
          </div>

          {/* Content Strategy Section */}
          <div className={styles.contentBlock}>
            <h3 className={styles.subheading}>
              Strategic Content Optimization
            </h3>
            <p className={styles.paragraph}>
              Content is the backbone of successful SEO. We develop comprehensive keyword strategies, create 
              high-quality content that serves your audience, and optimize existing pages for maximum impact. 
              Our approach focuses on user intent and search behavior to attract visitors who are ready to 
              engage with your business and convert into customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 