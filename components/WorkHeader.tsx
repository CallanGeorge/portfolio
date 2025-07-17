'use client'

import { useState, useEffect } from 'react'

export default function WorkHeader() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative pt-24 pb-16 min-h-[28rem] flex items-center sm:py-20 md:py-24 lg:min-h-[40rem] lg:flex lg:items-center xl:py-40 bg-[#ebe2da] overflow-hidden">
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10 mx-auto">
        

        <div 
          className={`text-center transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-[#242424] tracking-[-0.01em] uppercase cursor-none mt-0 mb-6 text-[24vw] sm:text-[22vw] md:text-[20vw] lg:text-[24vw] xl:text-[18vw] leading-[0.8] relative font-bold" style={{ fontFamily: 'var(--font-family-thunder)' }}>
            MY WORK
          </h1>
          <p className="text-[#242424] font-medium text-base sm:text-lg md:text-xl lg:text-[1.25vw] text-center sm:text-left" style={{ fontFamily: 'Space Mono, monospace' }}>
            A LIST OF CLIENTS THAT I'VE RECENTLY WORKED WITH.
          </p>
        </div>

      </div>
    </section>
  )
} 