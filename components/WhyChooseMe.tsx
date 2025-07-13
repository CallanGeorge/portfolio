'use client'

import { useState, useEffect } from 'react'

export default function WhyChooseMe() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative  flex items-center justify-center overflow-hidden bg-[#242424] pt-16 sm:pt-16 md:pt-24 pb-8 sm:pb-12 md:pb-16">

      <div className="w-full max-w-[95vw] 2xl:max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 text-center relative z-10">
        
        {/* Main Heading */}
        <div 
          className={`mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-black text-white text-5xl sm:text-6xl md:text-7xl lg:text-[7vw] leading-[0.9]" style={{ fontFamily: 'var(--font-family-thunder)' }}>
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
            <p className="text-[1.2rem] lg:text-[2.5rem] text-white leading-tight sm:leading-relaxed font-normal mb-6 sm:mb-8 md:mb-12 uppercase" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '400' }}>
            When you work with me, you’re not just another project in the queue – you get my full focus and a personalised approach tailored to your business goals. As a freelance professional, I prioritise clear communication, attention to detail, and results that help your business grow.            </p>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed font-normal max-w-4xl mx-auto uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
            I take the time to understand what makes your business unique and create a website that reflects that, ensuring it not only looks great but works effectively to attract and convert your ideal customers.            </p>
          </div>
        </div>

        {/* Testimonials Section */}
        <div 
          className={`mb-16 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              
              {/* Testimonial 1 */}
              <div className="bg-white border-4 border-black rounded-none p-8 relative group hover:scale-[1.02] transition-all duration-300" style={{ boxShadow: '8px 8px 0px rgba(0, 0, 0, 1)' }}>
                
                <div className="mb-6">
                  <div className="flex justify-center text-yellow-500 mb-6 gap-1">
                    {'★★★★★'.split('').map((star, i) => (
                      <span key={i} className="text-xl">{star}</span>
                    ))}
                  </div>
                  <p className="text-[#242424] text-base leading-relaxed font-normal mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                    "Callan delivered exactly what we needed for our restaurant. The website is beautiful, easy to manage, and our online orders have increased significantly since launch."
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <div className="w-full h-full bg-[#779179] flex items-center justify-center">
                      <span className="text-white font-semibold text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                        SM
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <h4 className="text-[#242424] font-semibold text-sm mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Sarah Mitchell
                    </h4>
                    <p className="text-gray-600 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Owner, The Local Bistro
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white border-4 border-black rounded-none p-8 relative group hover:scale-[1.02] transition-all duration-300" style={{ boxShadow: '8px 8px 0px rgba(0, 0, 0, 1)' }}>
                
                <div className="mb-6">
                  <div className="flex justify-center text-yellow-500 mb-6 gap-1">
                    {'★★★★★'.split('').map((star, i) => (
                      <span key={i} className="text-xl">{star}</span>
                    ))}
                  </div>
                  <p className="text-[#242424] text-base leading-relaxed font-normal mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                    "Professional, responsive, and genuinely cares about the result. Callan took our fitness studio online and the booking system works perfectly. Highly recommend!"
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <div className="w-full h-full bg-[#779179] flex items-center justify-center">
                      <span className="text-white font-semibold text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                        JT
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <h4 className="text-[#242424] font-semibold text-sm mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                      James Thompson
                    </h4>
                    <p className="text-gray-600 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Director, FitCore Edinburgh
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white border-4 border-black rounded-none p-8 relative group hover:scale-[1.02] transition-all duration-300 md:col-span-2 lg:col-span-1" style={{ boxShadow: '8px 8px 0px rgba(0, 0, 0, 1)' }}>
                
                <div className="mb-6">
                  <div className="flex justify-center text-yellow-500 mb-6 gap-1">
                    {'★★★★★'.split('').map((star, i) => (
                      <span key={i} className="text-xl">{star}</span>
                    ))}
                  </div>
                  <p className="text-[#242424] text-base leading-relaxed font-normal mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                    "From concept to launch, Callan made the whole process smooth and stress-free. Our new e-commerce site looks amazing and sales have doubled in just 3 months."
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <div className="w-full h-full bg-[#779179] flex items-center justify-center">
                      <span className="text-white font-semibold text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                        ED
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <h4 className="text-[#242424] font-semibold text-sm mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Emma Davidson
                    </h4>
                    <p className="text-gray-600 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Founder, Highland Crafts Co.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div 
          className={`border-t border-gray-600 pt-12 transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-normal mb-8 leading-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
              Ready to take your online presence to the next level? Contact me today to discuss your project and how I can help.
            </h3>
            
            <button
                             className="inline-block bg-[#779179] text-white font-normal rounded-[10px] transition-all duration-200 uppercase hover:bg-[#6B7F68] border-[3px] border-black relative z-[2] text-center cursor-pointer"
              style={{
                fontFamily: 'Space Mono, sans-serif',
                boxShadow: '9px 10px #000',
                padding: '.75em 1em',
                fontSize: '.8rem',
                fontWeight: '400',
                letterSpacing: '0',
                textTransform: 'uppercase'
              }}
            >
              GET STARTED
            </button>
          </div>
        </div>

      </div>
    </section>
  )
} 