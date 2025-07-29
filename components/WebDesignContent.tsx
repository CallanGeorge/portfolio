'use client'

import styles from './WebDesignContent.module.css'

export default function WebDesignContent() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Custom Code Section */}
          <div className={styles.contentBlock}>
            <h2 className={styles.heading}>
              Custom Code - No Page Builders or WordPress
            </h2>
            <p className={styles.paragraph}>
              At Callan George, we do things a little differently. Instead of using page builders 
              or WordPress, we hand write all the code for our sites from top to bottom. This allows us to 
              make very custom designs, have absolutely ZERO bloat or wasted code to slow us down, 
              they load instantly, score perfect marks on Google Page Speed Insights, are more secure 
              and actually impossible to hack, and we don't need to constantly update plugins or 
              WordPress versions to prevent hacking.
            </p>
          </div>

          {/* Why It Matters Section */}
          <div className={styles.contentBlock}>
            <h3 className={styles.subheading}>
              Why It Matters
            </h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>Faster load times</li>
              <li className={styles.listItem}>Better conversions</li>
              <li className={styles.listItem}>Better performing ads</li>
              <li className={styles.listItem}>More secure</li>
              <li className={styles.listItem}>Better ranking on Google</li>
              <li className={styles.listItem}>Boosts your Google Business Profile in the Maps Listings</li>
            </ul>
          </div>

          {/* Better Load Times Section */}
          <div className={styles.contentBlock}>
            <h3 className={styles.subheading}>
              Better Load Times Leads to Higher Conversions
            </h3>
            <p className={styles.paragraph}>
              It's very competitive online, and you need every edge you can get to stand out and overtake 
              your competition. When everyone else is using a page builder and getting poor load times, 
              you'll be the one with the fast, professional website that converts visitors into customers. 
              Our custom-coded approach ensures your website loads in under 2 seconds, keeping visitors 
              engaged and dramatically improving your conversion rates.
            </p>
          </div>

          {/* Additional Benefits Section */}
          <div className={styles.contentBlock}>
            <h3 className={styles.subheading}>
              Professional Design That Drives Results
            </h3>
            <p className={styles.paragraph}>
              Every website we create is designed with your business goals in mind. We focus on user 
              experience, conversion optimization, and modern design principles to ensure your website 
              not only looks incredible but also performs exceptionally. From responsive design to 
              SEO optimization, we build websites that work as hard as you do.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 