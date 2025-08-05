"use client";

import styles from "./ProjectContent.module.css";

export default function WebDesignContent() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.briefTitle}>
            Custom Web Design Services for Small Businesses in Fife & Edinburgh
          </h2>

          {/* Intro */}
          <div className={styles.contentBlock}>
            <h3 className={styles.subheading}>
              Clean, Fast, and Purpose-Built — No Page Builders, No WordPress
            </h3>
            <p className={styles.paragraph}>
              I design and build websites from the ground up using modern web
              technologies — not templates, plugins, or drag-and-drop page
              builders. This approach gives me complete control over
              performance, user experience, and search engine optimisation, so
              your site isn’t just something that looks nice — it works hard to
              grow your business.
            </p>
            <p className={styles.paragraph}>
              By writing clean, custom code for every project, I eliminate
              unnecessary bloat, reduce page load times, and create secure
              websites that don’t rely on constant plugin updates to stay
              online. It’s a professional-grade foundation designed for speed,
              stability, and scalability.
            </p>
          </div>

          {/* Why it matters */}
          <div className={styles.contentBlock}>
            <h3 className={styles.subheading}>Why Custom Code Matters</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                Faster load times without the clutter of unnecessary scripts or
                plugin dependencies.
              </li>
              <li className={styles.listItem}>
                Higher conversion rates by reducing friction and delivering
                content instantly.
              </li>
              <li className={styles.listItem}>
                Better search rankings through improved Core Web Vitals and
                mobile performance.
              </li>
              <li className={styles.listItem}>
                Stronger security with no third-party plugins, databases, or
                admin portals to exploit.
              </li>
              <li className={styles.listItem}>
                Long-term stability — no need to worry about updates breaking
                your site.
              </li>
              <li className={styles.listItem}>
                Better ad performance — faster pages lead to lower
                cost-per-click and higher return on investment.
              </li>
            </ul>
          </div>

          {/* Load time + conversions */}
          <div className={styles.contentBlock}>
            <h3 className={styles.subheading}>
              Why Speed and Simplicity Win Online
            </h3>
            <p className={styles.paragraph}>
              In a world where users expect instant access, page speed is no
              longer optional — it’s essential. Studies show that if your
              website takes more than three seconds to load, over 40% of
              visitors will leave before it even finishes. And once they leave,
              they rarely come back.
            </p>
            <p className={styles.paragraph}>
              My sites load in under two seconds, which gives you a competitive
              edge right from the first click. That speed doesn’t just improve
              the experience — it increases conversions, improves ad
              performance, and helps you rank higher in Google.
            </p>
          </div>

          {/* Ad performance */}
          <div className={styles.contentBlock}>
            <h3 className={styles.subheading}>
              Built to Support Marketing and SEO
            </h3>
            <p className={styles.paragraph}>
              A fast, well-structured website does more than convert — it
              improves the performance of every marketing channel you use.
              Google prioritises faster sites in both search results and paid
              ads. In fact, improving your page speed can reduce ad costs and
              boost quality scores, which means you pay less for more clicks.
            </p>
            <p className={styles.paragraph}>
              On top of that, I optimise every site for basic on-page SEO,
              giving you a strong foundation that can grow with more content,
              service pages, or SEO campaigns in the future.
            </p>
          </div>

          {/* Security */}
          <div className={styles.contentBlock}>
            <h3 className={styles.subheading}>Secure by Design</h3>
            <p className={styles.paragraph}>
              WordPress and other platforms rely on third-party plugins and
              open-source frameworks that are frequently targeted by bots and
              hackers. If you forget to update them — even once — you open the
              door to vulnerabilities.
            </p>
            <p className={styles.paragraph}>
              My approach is different. With no admin dashboard, no plugin
              architecture, and no databases to exploit, there’s simply nothing
              to break. It’s static code — stable, secure, and built to last.
              Many of my clients’ sites run for years without needing anything
              more than content updates.
            </p>
          </div>

          {/* Search ranking */}
          <div className={styles.contentBlock}>
            <h3 className={styles.subheading}>
              How It Helps You Rank on Google
            </h3>
            <p className={styles.paragraph}>
              Google rewards fast, user-friendly websites. If two businesses
              offer the same service in the same area, the one with better
              performance metrics and engagement is more likely to rank higher.
              Speed, structure, and content quality are key factors — and a
              custom-coded website gives you an advantage in all three.
            </p>
            <p className={styles.paragraph}>
              When your site loads quickly and offers a clear experience, more
              users stay on it, click through, and convert — all signals Google
              uses to rank websites more effectively. Over time, this compounds
              into stronger visibility and more inbound leads.
            </p>
          </div>

          {/* Final CTA */}
          <div className={styles.contentBlock}>
            <h3 className={styles.subheading}>Let’s Build Something Better</h3>
            <p className={styles.paragraph}>
              If you’re ready to move away from bloated page builders or
              out-of-date templates, I’d love to help. I work with small
              businesses across Fife and Edinburgh to build fast, reliable
              websites that not only look great — they deliver real business
              results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
