'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20  bg-gray-50">
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
          <div className="w-full max-w-[95vw] mx-auto flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-0">
            {/* Subtitle */}
            <div className="lg:text-left text-center">
              <p className="subheading text-lg sm:text-xl md:text-xl text-gray-600 leading-relaxed">
                EDINBURGH-BASED FREELANCE WEB DEVELOPER HELPING LOCAL 
                BUSINESSES BUILD THEIR DIGITAL PRESENCE - MODERN WEBSITES, 
                PROVEN RESULTS, PERSONAL SERVICE.
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="lg:flex-shrink-0 text-center lg:text-right">
              <Link
                href="#contact"
                className="stampedButtonBlue inline-block"
                style={{ 
                  fontFamily: 'var(--font-family-thunder)',
                  background: '#1B76FF',
                  color: 'white',
                  padding: '1rem 2rem',
                  borderRadius: '16px',
                  fontWeight: '600',
                  fontSize: '1.2rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  boxShadow: '8px 8px 0px rgba(0, 0, 0, 0.9)',
                  border: '3px solid black',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'transform 0.1s ease-in-out',
                  zIndex: '2',
                  transform: 'translate(0px, 0px)'
                }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.transform = 'translate(4px, 4px)';
                  target.style.boxShadow = '4px 4px 0px rgba(0, 0, 0, 0.9)';
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.transform = 'translate(0px, 0px)';
                  target.style.boxShadow = '8px 8px 0px rgba(0, 0, 0, 0.9)';
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