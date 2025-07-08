import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WhyChooseMe from '@/components/WhyChooseMe'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <WhyChooseMe />
      
      {/* Placeholder sections for future content */}
      <section id="about" className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-family-thunder)' }}
          >
            ABOUT SECTION
          </h2>
          <p className="text-gray-600 subheading">Coming soon...</p>
        </div>
      </section>
      
      <section id="projects" className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4 font-phudu">
            WORK SECTION
          </h2>
          <p className="text-gray-600 subheading">Coming soon...</p>
        </div>
      </section>
      
      <section id="shop" className="min-h-screen flex items-center justify-center bg-blue-50">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4 font-montserrat">
            SHOP SECTION
          </h2>
          <p className="text-gray-600 subheading">Coming soon...</p>
        </div>
      </section>
      
      <section id="services" className="min-h-screen bg-slate-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4 font-montserrat">
            SERVICES SECTION
          </h2>
          <p className="text-gray-600 subheading">Coming soon...</p>
        </div>
      </section>
      
      <section id="blog" className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4 font-space-mono">
            JOURNAL SECTION
          </h2>
          <p className="text-gray-600 subheading">Coming soon...</p>
        </div>
      </section>
      
      <section id="contact" className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-family-thunder)' }}
          >
            CONTACT SECTION
          </h2>
          <p className="text-gray-600 subheading">Coming soon...</p>
        </div>
      </section>
    </main>
  )
} 