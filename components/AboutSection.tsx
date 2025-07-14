'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-[#242424] overflow-hidden">
      <div className="w-full max-w-[95vw] 2xl:max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Header */}
        <div 
          className={`text-left mb-8 sm:mb-12 md:mb-16 lg:mb-20 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="capitalize text-[#ebe2da] text-left tracking-[-0.05em] mt-[10px] mb-0 font-bold leading-[0.8] text-[3em] xs:text-[4em] sm:text-[4em] md:text-[7em] lg:text-[9em] xl:text-[11em] 2xl:text-[12.5em]" style={{ fontFamily: 'Inter, sans-serif', cursor: 'none', boxSizing: 'border-box' }}>
            Build Your
            <br />
            Business With
            <br />
            Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Image */}
          <div 
            className={`order-2 lg:order-1 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="relative">
              <div className="w-full h-[300px] xs:h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[600px] bg-[#779179] rounded-lg border-2 sm:border-4 border-white overflow-hidden">
                {/* Placeholder for image - you can replace this with an actual image */}
                <div className="w-full h-full bg-gradient-to-br from-[#779179] to-[#6B7F68] flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-4 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-lg sm:text-2xl">📸</span>
                    </div>
                    <p className="text-xs sm:text-sm font-medium" style={{ fontFamily: 'Space Mono, monospace' }}>
                      Your Image Here
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div 
            className={`order-1 lg:order-2 transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            {/* Subtitle */}
            <p className="text-[#779179] font-medium mb-4 sm:mb-6 tracking-wider text-sm sm:text-base" style={{ fontFamily: 'Space Mono, monospace' }}>
              CREATIVE AGENCY
            </p>
            
            {/* Description */}
            <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-normal" style={{ fontFamily: 'Inter, sans-serif' }}>
              IN MY CREATIVE AGENCY, I'M DEEPLY COMMITTED TO EMPOWERING SMALL BUSINESSES IN EDINBURGH, SCOTLAND, AND THE SURROUNDING AREAS. I THRIVE ON FUELING LOCAL SUCCESS STORIES. GET IN TOUCH TODAY TO EXPLORE MY SERVICES AND DISCOVER HOW I CAN CONTRIBUTE TO THE GROWTH OF YOUR BUSINESS!
            </p>

            {/* CTA Button */}
            <div>
              <Link
                href="#projects"
                className="inline-block bg-[#779179] text-white font-normal rounded-[10px] transition-all duration-200 uppercase hover:bg-[#6B7F68] border-[3px] border-black relative z-[2] text-center cursor-pointer py-3 px-4 text-sm"
                style={{
                  fontFamily: 'Space Mono, sans-serif',
                  boxShadow: '4px 4px #000',
                  fontWeight: '400',
                  letterSpacing: '0'
                }}
              >
                VIEW WORK
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
} 