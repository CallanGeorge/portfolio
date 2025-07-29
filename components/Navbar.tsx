'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'ABOUT', href: '/about' },
    { name: 'WORK', href: '/work' },
    { name: 'BLOG', href: '#blog' },
    { name: 'SERVICES', href: '#services' },
  ]

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.navContent}>
          {/* Logo */}
          <Link href="/" className={styles.logoLink}>
            <div className={styles.logo}>
              Callan George
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={styles.desktopNavLink}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <div className={styles.desktopContact}>
            <Link
              href="/contact"
              className={styles.contactButton}
            >
              CONTACT
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={styles.mobileMenuButton}
          >
            <svg
              className={styles.menuIcon}
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className={styles.mobileNavPanel}>
            <div className={styles.mobileNavContent}>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={styles.mobileNavLink}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className={styles.mobileContactButton}
                onClick={() => setIsOpen(false)}
              >
                CONTACT
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 