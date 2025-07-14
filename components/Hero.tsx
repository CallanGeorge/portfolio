'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 sm:pt-36 md:pt-40 bg-[#ebe2da]">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-0 right-0 w-96 h-96 opacity-50">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path
              d="M40,40 Q120,20 160,80 Q180,140 120,180 Q60,160 40,100 Q20,60 40,40 Z"
              fill="#DBEAFE"
            />
          </svg>
        </div>
      </div>

      <div className="w-full max-w-[95vw] 2xl:max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 text-center relative z-10">


        {/* Main Headline */}
        <div 
          className={`mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="font-black  text-[#242424]" style={{ fontFamily: 'var(--font-family-thunder)' }}>
            <div className="text-8xl sm:text-9xl md:text-[9rem] lg:text-[11rem] xl:text-[13rem] 2xl:text-[17rem] leading-[0.8] mb-2">
              CUSTOM WEBSITES
            </div>
            <div className="text-8xl sm:text-9xl md:text-[9rem] lg:text-[11rem] xl:text-[13rem] 2xl:text-[17rem] leading-[0.8] mb-2">
              FOR LOCAL BUSINESS
            </div>
            <div className="text-8xl sm:text-9xl md:text-[9rem] lg:text-[11rem] xl:text-[13rem] 2xl:text-[17rem] leading-[0.8]">
              <span 
                style={{
                  WebkitTextStroke: '6px #242424',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent'
                }}
              >
                GROWTH!
              </span>
            </div>
          </h1>
        </div>

        {/* Subtitle and CTA Side by Side */}
        <div 
          className={`mb-20 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="w-full max-w-[95vw] mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16">
            {/* Subtitle */}
            <div className="lg:text-left text-center lg:flex-1 lg:max-w-4xl">
              <p className="subheading text-xl sm:text-2xl md:text-2xl lg:text-xl xl:text-2xl text-[#242424] leading-relaxed font-medium">
                EDINBURGH-BASED FREELANCE WEB DEVELOPER HELPING LOCAL 
                BUSINESSES BUILD THEIR DIGITAL PRESENCE - MODERN WEBSITES, 
                PROVEN RESULTS, PERSONAL SERVICE.
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="lg:flex-shrink-0 text-center lg:text-right">
              <Link
                href="#contact"
                className="inline-block bg-[#779179] text-white font-normal rounded-[10px] transition-all duration-200 uppercase hover:bg-[#6B7F68] border-[3px] border-black relative z-[2] text-center cursor-pointer py-4 px-8 text-sm"
                style={{ 
                  fontFamily: 'Space Mono, sans-serif',
                  boxShadow: '9px 10px #000',
                  fontWeight: '400',
                  letterSpacing: '0'
                }}
              >
                GET STARTED
              </Link>
            </div>
          </div>
        </div>

      </div>


    </section>
  )
} 