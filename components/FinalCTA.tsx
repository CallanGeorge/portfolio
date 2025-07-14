'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function FinalCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 bg-[#242424] overflow-hidden">
      <div className="w-full max-w-[95vw] 2xl:max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
        
        <div className="text-center">
          {/* Main Title */}
          <div 
            className={`mb-16 sm:mb-20 md:mb-24 lg:mb-28 xl:mb-32 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
                        <h2 className="text-[#ebe2da] tracking-[-0.01em] uppercase cursor-none mt-0 mb-0 text-[18vw] leading-[0.9] relative whitespace-nowrap" style={{ fontFamily: 'var(--font-family-thunder)' }}>
              WORK WITH ME
            </h2>
          </div>

          {/* CTA Button */}
          <div 
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Link
              href="#contact"
              className="block bg-[#779179] text-white font-normal transition-all duration-200 uppercase hover:bg-[#6B7F68] border-[8px] border-black relative z-[2] text-center cursor-pointer w-full max-w-5xl mx-auto py-6 px-8 sm:py-8 sm:px-12 md:py-10 md:px-16 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl whitespace-nowrap"
              style={{
                fontFamily: 'Space Mono, sans-serif',
                boxShadow: '16px 16px 0px rgba(0, 0, 0, 1)',
                fontWeight: '400',
                letterSpacing: 'clamp(0.05em, 1.5vw, 0.15em)',
                borderRadius: '120px'
              }}
            >
              LET'S WORK TOGETHER
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
} 