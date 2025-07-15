'use client'

import { useState, useEffect } from 'react'

export default function MyWorkSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const projects = [
    {
      title: "Shipwreck Island Waterpark",
      image: "/shipwreck-island-screenshot.jpg",
      url: "https://shipwreckislandwaterpark.com",
      category: "Recreation & Tourism",
      year: "2024"
    },
    {
      title: "Your Comfort Specialists",
      image: "/comfort-specialists-screenshot.jpg",
      url: "https://yourcomfortspecialists.com", 
      category: "Home Services",
      year: "2024"
    },
    {
      title: "Go Viral with Lauren Compton",
      image: "/lauren-compton-screenshot.jpg",
      url: "https://goviralwithlaurencompton.com",
      category: "Personal Brand",
      year: "2024"
    }
  ]

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 bg-[#f5edf0] overflow-hidden">
      <div className="w-full max-w-[95vw] 2xl:max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Projects Grid - Large Screenshots */}
        <div 
          className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white border-4 border-black rounded-none overflow-hidden group hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              style={{
                boxShadow: '8px 8px 0px rgba(0, 0, 0, 1)'
              }}
              onClick={() => window.open(project.url, '_blank')}
            >
              {/* Large Website Screenshot */}
              <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] relative overflow-hidden bg-gray-100">
                <img 
                  src={project.image}
                  alt={`${project.title} website screenshot`}
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to gradient background if image fails to load
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.style.background = 'linear-gradient(135deg, #779179 0%, #6B7F68 100%)';
                      parent.innerHTML += '<div class="w-full h-full flex items-center justify-center"><div class="text-white text-center"><div class="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center"><span class="text-2xl">🖥️</span></div><p class="text-sm font-medium" style="font-family: Space Mono, monospace">' + project.title + '</p></div></div>';
                    }
                  }}
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-white border-2 border-black px-3 py-1 text-xs font-bold" style={{ fontFamily: 'Space Mono, monospace' }}>
                  {project.category}
                </div>
                
                {/* Year Badge */}
                <div className="absolute top-4 left-4 bg-[#779179] border-2 border-black px-3 py-1 text-xs font-bold text-white" style={{ fontFamily: 'Space Mono, monospace' }}>
                  {project.year}
                </div>
              </div>

              {/* Project Info - Simplified */}
              <div className="p-4 sm:p-6">
                <h3 className="font-black text-[#242424] mb-2 leading-tight text-lg sm:text-xl lg:text-2xl" style={{ fontFamily: 'var(--font-family-thunder)' }}>
                  {project.title}
                </h3>
                
                <button
                  className="w-full bg-[#779179] text-white font-normal rounded-[8px] transition-all duration-200 uppercase hover:bg-[#6B7F68] border-2 border-black relative z-[2] text-center cursor-pointer py-3 px-4 text-sm mt-4"
                  style={{
                    fontFamily: 'Space Mono, sans-serif',
                    boxShadow: '4px 4px 0px rgba(0, 0, 0, 1)',
                    fontWeight: '400',
                    letterSpacing: '0'
                  }}
                >
                  VIEW PROJECT
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
} 