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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#ebe2da]/95 backdrop-blur-md border-b border-gray-100 px-4 sm:px-8 md:px-16">
      <div style={{ maxWidth: '1920px', margin: '0 auto' }}>
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div 
              className="bg-[#242424] text-white px-4 py-2 rounded-xl font-bold text-sm"
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
                className="text-sm font-medium text-[#242424] transition-colors duration-200 hover:text-[var(--color-primary)]"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex">
            <Link
              href="#contact"
                             className="inline-block bg-[#779179] text-white font-normal rounded-[10px] transition-all duration-200 uppercase hover:bg-[#6B7F68] border-[3px] border-black relative z-[2] text-center cursor-pointer"
              style={{ 
                fontFamily: 'Space Mono, sans-serif',
                boxShadow: '9px 10px #000',
                padding: '.75em 1em',
                fontSize: '.8rem',
                fontWeight: '400',
                letterSpacing: '0',
                textTransform: 'uppercase'
              }}
            >
              CONTACT
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#242424] transition-colors duration-200 hover:text-[var(--color-primary)]"
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
          <div className="md:hidden bg-[#ebe2da] border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-[#242424] transition-colors duration-200 hover:text-[var(--color-primary)]"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="#contact"
                                 className="block mx-3 mt-4 bg-[#779179] text-white font-normal rounded-[10px] transition-all duration-200 uppercase text-center hover:bg-[#6B7F68] border-[3px] border-black relative z-[2] cursor-pointer"
                style={{ 
                  fontFamily: 'Space Mono, sans-serif',
                  boxShadow: '9px 10px #000',
                  padding: '.75em 1em',
                  fontSize: '.8rem',
                  fontWeight: '400',
                  letterSpacing: '0',
                  textTransform: 'uppercase'
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