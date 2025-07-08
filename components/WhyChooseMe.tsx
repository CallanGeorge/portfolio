'use client'

import { useState, useEffect } from 'react'

export default function WhyChooseMe() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative  flex items-center justify-center overflow-hidden bg-gray-900 pt-16 sm:pt-16 md:pt-24 pb-8 sm:pb-12 md:pb-16">

      <div className="w-full max-w-[95vw] 2xl:max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 text-center relative z-10">
        
        {/* Main Heading */}
        <div 
          className={`mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-black text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[8rem] 2xl:text-[10rem] leading-[0.9]" style={{ fontFamily: 'var(--font-family-thunder)' }}>
            Why Choose Me?
          </h2>
        </div>

        {/* Body Content */}
        <div 
          className={`mb-16 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-5xl mx-auto">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white leading-tight sm:leading-relaxed font-medium mb-6 sm:mb-8 md:mb-12 uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
            When you work with me, you’re not just another project in the queue – you get my full focus and a personalised approach tailored to your business goals. As a freelance professional, I prioritise clear communication, attention to detail, and results that help your business grow.            </p>
            
            <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed font-normal max-w-4xl mx-auto uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
            I take the time to understand what makes your business unique and create a website that reflects that, ensuring it not only looks great but works effectively to attract and convert your ideal customers.            </p>
          </div>
        </div>

      </div>
    </section>
  )
} 