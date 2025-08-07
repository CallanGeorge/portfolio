"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const navItems = [
    { name: "ABOUT", href: "/about" },
    { name: "WORK", href: "/work" },
    { name: "BLOG", href: "/blog" },
  ];

  const serviceItems = [
    { name: "WEB DESIGN", href: "/web-design-services/" },
    { name: "SEO", href: "/seo-services/" },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.navContent}>
          {/* Logo */}
          <Link href="/" className={styles.logoLink}>
            <div className={styles.logo}>Callan George</div>
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

            {/* Services Dropdown */}
            <div
              className={styles.servicesDropdown}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className={styles.servicesButton}>
                SERVICES
                <svg
                  className={`${styles.dropdownIcon} ${
                    isServicesOpen ? styles.dropdownIconOpen : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <div
                className={`${styles.dropdownMenu} ${
                  isServicesOpen ? styles.dropdownMenuOpen : ""
                }`}
              >
                {serviceItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={styles.dropdownLink}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Button */}
          <div className={styles.desktopContact}>
            <Link href="/contact" className={styles.contactButton}>
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

              {/* Mobile Services Dropdown */}
              <div className={styles.mobileServicesContainer}>
                <button
                  className={styles.mobileServicesButton}
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                >
                  SERVICES
                  <svg
                    className={`${styles.mobileDropdownIcon} ${
                      isMobileServicesOpen ? styles.mobileDropdownIconOpen : ""
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <div
                  className={`${styles.mobileDropdownMenu} ${
                    isMobileServicesOpen ? styles.mobileDropdownMenuOpen : ""
                  }`}
                >
                  {serviceItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={styles.mobileDropdownLink}
                      onClick={() => {
                        setIsOpen(false);
                        setIsMobileServicesOpen(false);
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

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
  );
}
