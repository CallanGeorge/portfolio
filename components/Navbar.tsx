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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 px-4 sm:px-8 md:px-16">
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
              className="px-4 py-2 bg-[#1B76FF] text-white font-bold border-4 border-black rounded-none transition-transform duration-100 uppercase text-sm"
              style={{ 
                fontFamily: 'Space Mono, monospace',
                boxShadow: '4px 4px 0px rgba(0, 0, 0, 1)',
                transform: 'translate(0px, 0px)'
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLElement;
                target.style.transform = 'translate(2px, 2px)';
                target.style.boxShadow = '2px 2px 0px rgba(0, 0, 0, 1)';
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLElement;
                target.style.transform = 'translate(0px, 0px)';
                target.style.boxShadow = '4px 4px 0px rgba(0, 0, 0, 1)';
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
                className="block mx-3 mt-4 px-4 py-2 bg-[#1B76FF] text-white font-bold border-4 border-black rounded-none transition-transform duration-100 uppercase text-sm text-center"
                style={{ 
                  fontFamily: 'Space Mono, monospace',
                  boxShadow: '4px 4px 0px rgba(0, 0, 0, 1)',
                  transform: 'translate(0px, 0px)'
                }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.transform = 'translate(2px, 2px)';
                  target.style.boxShadow = '2px 2px 0px rgba(0, 0, 0, 1)';
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.transform = 'translate(0px, 0px)';
                  target.style.boxShadow = '4px 4px 0px rgba(0, 0, 0, 1)';
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