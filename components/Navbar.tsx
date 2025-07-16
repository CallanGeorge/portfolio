'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'ABOUT', href: '/about' },
    { name: 'WORK', href: '/work' },
    { name: 'SHOP', href: '#shop' },
    { name: 'JOURNAL', href: '#blog' },
    { name: 'SERVICES', href: '#services' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-xl border-b border-white/20 px-4 sm:px-8 md:px-16 shadow-lg shadow-black/5">
      <div style={{ maxWidth: '1920px', margin: '0 auto' }}>
        <div className="flex justify-between items-center h-20">
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
          <div className="hidden md:flex items-center space-x-6 px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-[#242424] transition-colors duration-200 hover:text-black"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex">
            <Link
              href="#contact"
              className="inline-block bg-[#779179] text-white font-normal rounded-[10px] transition-all duration-200 uppercase hover:bg-[#6B7F68] border-[3px] border-black relative z-[2] text-center cursor-pointer py-3 px-4 text-sm"
              style={{ 
                fontFamily: 'Space Mono, sans-serif',
                boxShadow: '4px 4px #000',
                fontWeight: '400',
                letterSpacing: '0'
              }}
            >
              CONTACT
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#242424] transition-colors duration-200 hover:text-black"
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
          <div className="md:hidden bg-white/10 backdrop-blur-xl border-t border-white/20">
            <div className="px-4 pt-4 pb-4 mx-2 my-2 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30">
              {navItems.map((item) => (
                                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-[#242424] transition-colors duration-200 hover:text-black"
                    onClick={() => setIsOpen(false)}
                  >
                  {item.name}
                </Link>
              ))}
              <Link
                href="#contact"
                className="block mx-3 mt-4 bg-[#779179] text-white font-normal rounded-[10px] transition-all duration-200 uppercase text-center hover:bg-[#6B7F68] border-[3px] border-black relative z-[2] cursor-pointer py-3 px-4 text-sm"
                style={{ 
                  fontFamily: 'Space Mono, sans-serif',
                  boxShadow: '4px 4px #000',
                  fontWeight: '400',
                  letterSpacing: '0'
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