import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const footerLinks = [
    { name: "ABOUT", href: "/about" },
    { name: "WORK", href: "/work" },
    { name: "SERVICES", href: "#services" },
  ];

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
        </div>

        {/* Desktop Layout - Single Row */}
        <div className={styles.desktopLayout}>
          {/* Navigation and Copyright */}
          <div className={styles.desktopRow}>
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

            {/* Right - Copyright */}
            <div className={styles.desktopCopyright}>
              <div className={styles.desktopBullet}></div>
              <p className={styles.desktopCopyrightText}>
                2025 CALLAN GEORGE. ALL RIGHTS RESERVED
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
