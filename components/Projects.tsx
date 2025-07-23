'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './Projects.module.css'

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
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        
        {/* Header */}
        <div className={`${styles.header} ${isVisible ? styles.visible : styles.hidden}`}>
          <h2 className={styles.title}>
            Recent Work
          </h2>
          <p className={styles.subtitle}>
            Real results from Edinburgh businesses who trusted me to grow their online presence.
          </p>
        </div>

        {/* Projects Grid */}
        <div className={`${styles.projectsGrid} ${isVisible ? styles.visible : styles.hidden}`}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              {/* Project Image */}
              <div className={styles.projectImage}>
                <div className={styles.imageContent}>
                  <div className={styles.imageTextContainer}>
                    <div className={styles.imageIcon}>
                      <span>🖥️</span>
                    </div>
                    <p className={styles.imageText}>
                      Project Image
                    </p>
                  </div>
                </div>
                {/* Category Badge */}
                <div className={styles.categoryBadge}>
                  {project.category}
                </div>
              </div>

              {/* Project Title */}
              <h3 className={styles.projectTitle}>
                {project.title}
              </h3>
              
              {/* Project Description */}
              <p className={styles.projectDescription}>
                {project.description}
              </p>

              {/* Results & Benefits */}
              <div className={styles.resultsSection}>
                <h4 className={styles.resultsTitle}>
                  Key Results:
                </h4>
                <div className={styles.resultsTags}>
                  {project.results.map((result, resultIndex) => (
                    <span key={resultIndex} className={styles.resultTag}>
                      {result}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Link */}
              <div className={styles.projectLinkContainer}>
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  VIEW PROJECT
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`${styles.ctaSection} ${isVisible ? styles.visible : styles.hidden}`}>
          <h3 className={styles.ctaTitle}>
            Ready to grow your business like these success stories?
          </h3>
          
          <Link href="/contact" className={styles.ctaButton}>
            GET STARTED TODAY
          </Link>
        </div>

      </div>
    </section>
  )
} 