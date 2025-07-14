'use client'

import { useState, useEffect } from 'react'

export default function Services() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      title: "Website Design & Development",
      description: "Create you an award winning website that converts.",
      button: "GET STARTED",
      features: [
        "Dedicated Notion board",
        "Quick delivery (5-7 days)",
        "Regular updates via Slack or email",
        "Exclusive Features and Enhancements",
        "Flexibility and Scalability as website grows",
        "Training for platform"
      ]
    },
    {
      title: "Photography",
      description: "I'll take care of your website photography needs.",
      price: "$30",
      priceUnit: "/image",
      priceNote: "minimum 5 images",
      button: "GET STARTED",
      features: [
        "Simple retouching/color correcting",
        "Variety of shoots available",
        "Unlimited usage license",
        "Revisions and reshoots available",
        "Drone photos available"
      ]
    },
    {
      title: "Small Project",
      description: "Need something quick and simple?",
      price: "$1200",
      priceNote: "One time fee",
      button: "GET STARTED",
      features: [
        "Basic 1-3 page website",
        "Quick delivery (1-3 days)",
        "Training for platform",
        "Exclusive Features and Enhancements",
        "Flexibility and Scalability as website grows"
      ]
    }
  ]

  return (
    <section id="services" className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-[#ebe2da] overflow-hidden">
      <div className="w-full max-w-[95vw] 2xl:max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 relative z-10">
        
        {/* Header */}
        <div 
          className={`text-left mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-black text-[#242424] leading-[0.9] mb-6 text-[4em] sm:text-6xl md:text-8xl lg:text-[12.5em]" style={{ fontFamily: 'Inter, sans-serif' }}>
            Explore My
            <br />
            Services
          </h2>
          <p className="text-[#242424] font-medium" style={{ fontFamily: 'Space Mono, monospace', fontSize: '1rem' }}>
            I offer a variety of plans to accommodate your small business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white border-4 border-black rounded-none p-6 sm:p-8 flex flex-col"
              style={{
                boxShadow: '8px 8px 0px rgba(0, 0, 0, 1)',
                minHeight: '700px'
              }}
            >
              {/* Title - Fixed height */}
              <h3 className="font-black text-[#242424] mb-4 leading-tight h-20 flex items-start" style={{ fontFamily: 'var(--font-family-thunder)', fontSize: '32px' }}>
                {service.title}
              </h3>
              
              {/* Description - Fixed height */}
              <p className="text-[#242424] mb-6 text-base sm:text-lg leading-relaxed h-16 flex items-start" style={{ fontFamily: 'Space Mono, monospace' }}>
                {service.description}
              </p>

              {/* Price Section - Fixed height for alignment */}
              <div className="mb-6 h-20 flex flex-col justify-start">
                {service.price ? (
                  <>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-black text-[#242424]" style={{ fontFamily: 'Space Mono, monospace' }}>
                        {service.price}
                      </span>
                      {service.priceUnit && (
                        <span className="text-xl text-[#242424]" style={{ fontFamily: 'Space Mono, monospace' }}>
                          {service.priceUnit}
                        </span>
                      )}
                    </div>
                    {service.priceNote && (
                      <p className="text-sm text-[#242424] mt-1" style={{ fontFamily: 'Space Mono, monospace' }}>
                        {service.priceNote}
                      </p>
                    )}
                  </>
                ) : (
                  <div></div>
                )}
              </div>

              {/* CTA Button - Fixed position */}
              <div className="mb-8">
                <button
                  className="w-full bg-[#779179] text-white font-normal rounded-[10px] transition-all duration-200 hover:bg-[#6B7F68] border-[3px] border-black relative z-[2] text-center cursor-pointer py-3 px-4 text-sm uppercase"
                  style={{
                    fontFamily: 'Space Mono, sans-serif',
                    boxShadow: '4px 4px #000',
                    fontWeight: '400',
                    letterSpacing: '0'
                  }}
                >
                  {service.button}
                </button>
              </div>

              {/* Divider */}
              <div className="border-t-2 border-black mb-6"></div>
              
              {/* Features - Takes remaining space */}
              <div className="flex-1">
                <h4 className="text-lg font-bold text-[#242424] mb-4" style={{ fontFamily: 'Space Mono, monospace' }}>
                  What's included:
                </h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-[#242424] rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-[#242424] text-base leading-relaxed" style={{ fontFamily: 'Space Mono, monospace' }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 