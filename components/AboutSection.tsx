'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-[#ebe2da] overflow-hidden">
      <div className="w-full max-w-[95vw] 2xl:max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Welcome Title Section */}
        <div 
          className={`text-left mb-16 sm:mb-20 md:mb-24 lg:mb-32 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-[#242424] max-w-6xl text-[2rem] lg:text-[3rem] font-sans font-medium leading-[0.9] tracking-[-0.05em] mt-0">
            Welcome to Gabe Creative Dept, where I specialize in helping small businesses establish a strong online presence through modern, intuitive web design.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Image */}
          <div 
            className={`order-1 lg:order-1 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="relative">
              <div className="w-full h-[300px] xs:h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[600px] bg-[#779179] rounded-lg border-2 sm:border-4 border-black overflow-hidden"
                style={{ boxShadow: '8px 8px 0px rgba(0, 0, 0, 1)' }}
              >
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
            className={`order-2 lg:order-2 transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
                         {/* Title */}
             <h2 className="text-[#242424] mb-6 sm:mb-8" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '500', fontSize: '2.2em', lineHeight: '.9', letterSpacing: '-0.05px' }}>
               Born and raised in Edinburgh
             </h2>
            
                         {/* Description Paragraphs */}
             <div className="space-y-4 sm:space-y-6 text-[#242424]" style={{ fontFamily: 'Space Mono, monospace', fontSize: '1rem', lineHeight: '1.25em' }}>
              <p>
                Howdy and welcome to my corner of the web! I'm Callan, a web developer and designer with a passion for crafting premium websites tailored specifically for small businesses. Being locally grown in Edinburgh, Scotland, and having roots in the community, I understand the unique pulse and needs of our vibrant local landscape.
              </p>
              
              <p>
                From the historic streets of Edinburgh to the charming neighborhoods of Scotland and beyond, I take pride in serving businesses in our surrounding areas.
              </p>
              
              <p>
                With a blend of creativity, technical expertise, and a deep understanding of the local landscape, I'm dedicated to helping businesses like yours establish a strong online presence.
              </p>
              
              <p>
                Whether you're a startup venturing into the digital realm or an established business looking to refresh your website, I'm here to turn your vision into reality.
              </p>
              
              <p>
                Let's collaborate and create something exceptional for your business. Get in touch today, and let's embark on this exciting journey together!
              </p>
                         </div>
          </div>

        </div>
      </div>
    </section>
  )
} 