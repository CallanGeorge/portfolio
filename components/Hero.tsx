'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 sm:pt-36 md:pt-40 bg-gray-50">
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
          <h1 className="font-black  text-black" style={{ fontFamily: 'var(--font-family-thunder)' }}>
            <div className="text-8xl sm:text-9xl md:text-[9rem] lg:text-[11rem] xl:text-[13rem] 2xl:text-[17rem] leading-[0.8] mb-2">
              CUSTOM WEBSITES
            </div>
            <div className="text-8xl sm:text-9xl md:text-[9rem] lg:text-[11rem] xl:text-[13rem] 2xl:text-[17rem] leading-[0.8] mb-2">
              FOR LOCAL BUSINESS
            </div>
            <div className="text-8xl sm:text-9xl md:text-[9rem] lg:text-[11rem] xl:text-[13rem] 2xl:text-[17rem] leading-[0.8]">
              <span 
                style={{
                  WebkitTextStroke: '4px #2563EB',
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
              <p className="subheading text-xl sm:text-2xl md:text-2xl lg:text-xl xl:text-2xl text-gray-600 leading-relaxed font-medium">
                EDINBURGH-BASED FREELANCE WEB DEVELOPER HELPING LOCAL 
                BUSINESSES BUILD THEIR DIGITAL PRESENCE - MODERN WEBSITES, 
                PROVEN RESULTS, PERSONAL SERVICE.
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="lg:flex-shrink-0 text-center lg:text-right">
              <Link
                href="#contact"
                className="stampedButtonBlue inline-block px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-4 text-sm sm:text-base md:text-xl min-w-[160px] sm:min-w-[180px] md:min-w-[200px] mx-2 sm:mx-4"
                style={{ 
                  fontFamily: 'Space Mono, monospace',
                  background: '#1B76FF',
                  color: 'white',
                  borderRadius: '16px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  boxShadow: '6px 6px 0px rgba(0, 0, 0, 0.9)',
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
                GET STARTED
              </Link>
            </div>
          </div>
        </div>

      </div>


    </section>
  )
} 