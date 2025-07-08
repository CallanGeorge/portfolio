'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'ABOUT', href: '#about' },
    { name: 'WORK', href: '#projects' },
    { name: 'SHOP', href: '#shop' },
    { name: 'JOURNAL', href: '#blog' },
    { name: 'SERVICES', href: '#services' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100" style={{ paddingLeft: '4rem', paddingRight: '4rem' }}>
      <div style={{ maxWidth: '1920px', margin: '0 auto' }}>
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div 
              className="bg-black text-white px-4 py-2 rounded-xl font-bold text-sm"
              style={{ fontFamily: 'var(--font-family-space-mono)' }}
            >
              Callan George
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-black transition-colors duration-200 hover:text-[var(--color-primary)]"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex">
            <Link
              href="#contact"
              className="stampedButtonBlue"
              style={{ 
                fontFamily: 'var(--font-family-thunder)',
                background: '#1B76FF',
                color: 'white',
                padding: '0.5rem 2rem',
                borderRadius: '16px',
                fontWeight: '700',
                fontSize: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                boxShadow: '8px 8px 0px rgba(0, 0, 0, 0.9)',
                border: '3px solid black',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'transform 0.1s ease-in-out',
                zIndex: '2',
                transform: 'translate(0px, 0px)',
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLElement;
                target.style.transform = 'translate(3px, 3px)';
                target.style.boxShadow = '3px 3px 0px rgba(0, 0, 0, 0.9)';
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLElement;
                target.style.transform = 'translate(0px, 0px)';
                target.style.boxShadow = '6px 6px 0px rgba(0, 0, 0, 0.9)';
              }}
            >
              CONTACT
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black transition-colors duration-200 hover:text-[var(--color-primary)]"
            >
              <svg
                className="h-6 w-6"
                fill="none"
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
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-black transition-colors duration-200 hover:text-[var(--color-primary)]"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="#contact"
                className="stampedButtonBlue block mx-3 mt-4"
                style={{ 
                  fontFamily: 'var(--font-family-thunder)',
                  background: '#1B76FF',
                  color: 'white',
                  padding: '0.9rem 1.8rem',
                  borderRadius: '14px',
                  fontWeight: '700',
                  fontSize: '0.9rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1.2px',
                  boxShadow: '6px 6px 0px rgba(0, 0, 0, 0.9)',
                  border: '3px solid black',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'transform 0.1s ease-in-out',
                  zIndex: '2',
                  transform: 'translate(0px, 0px)',
                  minWidth: '140px'
                }}
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