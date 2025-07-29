import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  const footerLinks = [
    { name: 'ABOUT', href: '/about' },
    { name: 'WORK', href: '/work' },
    { name: 'BLOG', href: '#blog' },
    { name: 'SERVICES', href: '#services' },
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Mobile Layout - Stacked and Centered */}
        <div className={styles.mobileLayout}>
          
          {/* Navigation Links */}
          <div className={styles.mobileSection}>
            <div className={styles.mobileNavigation}>
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={styles.mobileNavLink}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Copyright with bullet */}
          <div className={styles.mobileSection}>
            <div className={styles.mobileCopyright}>
              <div className={styles.mobileBullet}></div>
              <p className={styles.mobileCopyrightText}>
                2025 CALLAN GEORGE. ALL RIGHTS RESERVED
              </p>
            </div>
          </div>

          {/* Logo */}
          <div className={styles.mobileSection}>
            <div className={styles.mobileLogoContainer}>
              <Link href="/" className={styles.mobileLogoLink}>
                <div className={styles.mobileLogoText}>
                  <div className={styles.mobileLogoBrand}>Callan</div>
                  <div className={styles.mobileLogoTagline}>CREATIVE DEPT</div>
                </div>
              </Link>
            </div>
          </div>

          {/* Location */}
          <div className={styles.mobileSection}>
            <p className={styles.mobileLocationText}>
              MADE WITH LOVE ❤️ IN EDINBURGH
            </p>
          </div>

        </div>

        {/* Desktop Layout - Two Rows */}
        <div className={styles.desktopLayout}>
          
          {/* Top Row - Navigation and Logo */}
          <div className={styles.desktopTopRow}>
            
            {/* Left - Navigation Links */}
            <div className={styles.desktopNavigation}>
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={styles.desktopNavLink}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right - Logo */}
            <div className={styles.desktopLogoContainer}>
              <Link href="/" className={styles.desktopLogoLink}>
                <div className={styles.desktopLogoText}>
                  <div className={styles.desktopLogoBrand}>Callan</div>
                  <div className={styles.desktopLogoTagline}>CREATIVE DEPT</div>
                </div>
              </Link>
            </div>

          </div>

          {/* Bottom Row - Copyright and Location */}
          <div className={styles.desktopBottomRow}>
            
            {/* Left - Copyright */}
            <div className={styles.desktopCopyright}>
              <div className={styles.desktopBullet}></div>
              <p className={styles.desktopCopyrightText}>
                2025 CALLAN GEORGE. ALL RIGHTS RESERVED
              </p>
            </div>

            {/* Center - Location */}
            <div className={styles.desktopLocationContainer}>
              <p className={styles.desktopLocationText}>
                MADE WITH LOVE ❤️ IN EDINBURGH
              </p>
            </div>

            {/* Right - Empty for balance */}
            <div className={styles.desktopSpacer}></div>

          </div>

        </div>
        
      </div>
    </footer>
  )
} 