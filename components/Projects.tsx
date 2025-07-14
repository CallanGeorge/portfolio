'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const projects = [
    {
      title: "Scottish Retailer E-Commerce",
      description: "Transformed a traditional store into a thriving online business. Increased sales by 150% in the first 6 months with streamlined product browsing and secure checkout.",
      image: "/project-placeholder-1.jpg",
      results: ["150% sales increase", "Mobile-friendly design", "Secure payments", "Inventory management"],
      liveUrl: "https://example.com",
      category: "E-Commerce"
    },
    {
      title: "Edinburgh Restaurant",
      description: "Built a stunning website that increased table bookings by 80% and introduced online ordering, helping the restaurant reach new customers during tough times.",
      image: "/project-placeholder-2.jpg",
      results: ["80% more bookings", "Online ordering system", "Mobile reservations", "Google integration"],
      liveUrl: "https://example.com",
      category: "Restaurant"
    },
    {
      title: "FitCore Edinburgh Studio",
      description: "Created a complete booking platform that streamlined class management and increased member retention by 45% through better user experience.",
      image: "/project-placeholder-3.jpg",
      results: ["45% better retention", "Easy class booking", "Member portal", "Payment automation"],
      liveUrl: "https://example.com",
      category: "Fitness"
    },
    {
      title: "Edinburgh Business Hub",
      description: "Developed a community platform connecting 200+ local businesses with customers, generating thousands of leads and strengthening the local economy.",
      image: "/project-placeholder-4.jpg",
      results: ["200+ businesses listed", "Customer reviews", "Local search optimized", "Lead generation"],
      liveUrl: "https://example.com",
      category: "Directory"
    },
    {
      title: "Highland Crafts Co.",
      description: "Launched an online store that showcased beautiful Scottish crafts to a global market, doubling their customer base and expanding internationally.",
      image: "/project-placeholder-5.jpg",
      results: ["Double customer base", "International shipping", "Product showcasing", "Brand storytelling"],
      liveUrl: "https://example.com",
      category: "Crafts"
    },
    {
      title: "Professional Photography",
      description: "Built an elegant portfolio that attracted 60% more high-value clients and streamlined the booking process, saving hours of admin work weekly.",
      image: "/project-placeholder-6.jpg",
      results: ["60% more premium clients", "Automated booking", "Portfolio showcase", "Client galleries"],
      liveUrl: "https://example.com",
      category: "Photography"
    }
  ]

  return (
    <section id="projects" className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-[#ebe2da] overflow-hidden">
      <div className="w-full max-w-[95vw] 2xl:max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Header */}
        <div 
          className={`text-left mb-8 sm:mb-12 md:mb-16 lg:mb-20 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-black text-[#242424] leading-[0.9] mb-6 text-[3em] xs:text-[4em] sm:text-[4em] md:text-[7em] lg:text-[9em] xl:text-[11em] 2xl:text-[12.5em]" style={{ fontFamily: 'Inter, sans-serif' }}>
            Recent Work
          </h2>
          <p className="text-[#242424] font-medium text-sm sm:text-base" style={{ fontFamily: 'Space Mono, monospace' }}>
            Real results from Edinburgh businesses who trusted me to grow their online presence.
          </p>
        </div>

        {/* Projects Grid */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white border-4 border-black rounded-none p-6 sm:p-8 flex flex-col group hover:scale-[1.02] transition-all duration-300"
              style={{
                boxShadow: '8px 8px 0px rgba(0, 0, 0, 1)',
                minHeight: '600px'
              }}
            >
              {/* Project Image */}
              <div className="w-full h-48 bg-[#779179] rounded-lg border-2 border-black mb-6 overflow-hidden relative">
                <div className="w-full h-full bg-gradient-to-br from-[#779179] to-[#6B7F68] flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-12 h-12 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-lg">🖥️</span>
                    </div>
                    <p className="text-xs font-medium" style={{ fontFamily: 'Space Mono, monospace' }}>
                      Project Image
                    </p>
                  </div>
                </div>
                {/* Category Badge */}
                <div className="absolute top-3 right-3 bg-white border-2 border-black px-2 py-1 text-xs font-bold" style={{ fontFamily: 'Space Mono, monospace' }}>
                  {project.category}
                </div>
              </div>

              {/* Project Title */}
              <h3 className="font-black text-[#242424] mb-3 leading-tight text-xl sm:text-2xl" style={{ fontFamily: 'var(--font-family-thunder)' }}>
                {project.title}
              </h3>
              
              {/* Project Description */}
              <p className="text-[#242424] mb-6 text-sm sm:text-base leading-relaxed flex-grow" style={{ fontFamily: 'Space Mono, monospace' }}>
                {project.description}
              </p>

              {/* Results & Benefits */}
              <div className="mb-6">
                <h4 className="text-sm font-bold text-[#242424] mb-3" style={{ fontFamily: 'Space Mono, monospace' }}>
                  Key Results:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.results.map((result, resultIndex) => (
                    <span 
                      key={resultIndex}
                      className="bg-[#779179] text-white px-3 py-1 text-xs font-medium border-2 border-black"
                      style={{ fontFamily: 'Space Mono, monospace' }}
                    >
                      {result}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Link */}
              <div className="mt-auto">
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#779179] text-white font-normal rounded-[8px] transition-all duration-200 uppercase hover:bg-[#6B7F68] border-2 border-black relative z-[2] text-center cursor-pointer py-3 px-4 text-sm block"
                  style={{
                    fontFamily: 'Space Mono, sans-serif',
                    boxShadow: '4px 4px 0px rgba(0, 0, 0, 1)',
                    fontWeight: '400',
                    letterSpacing: '0'
                  }}
                >
                  VIEW PROJECT
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div 
          className={`text-center mt-12 sm:mt-16 md:mt-20 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl text-[#242424] font-normal mb-6 leading-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
            Ready to grow your business like these success stories?
          </h3>
          
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
            GET STARTED TODAY
          </Link>
        </div>

      </div>
    </section>
  )
} 