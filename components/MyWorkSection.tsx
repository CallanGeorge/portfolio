'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import styles from './MyWorkSection.module.css'

export default function MyWorkSection() {
  const [isVisible, setIsVisible] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const projects = [
    {
      title: "Debrunner Design",
      image: "/debrunner-design.png",
      slug: "debrunner-design",
      category: "Design Agency",
      year: "2025"
    },
    {
      title: "Chloe Penaranda",
      image: "/ChloePenaranda.png",
      slug: "chloe-penaranda",
      category: "Author",
      year: "2025"
    },
    {
      title: "BodyCore",
      image: "/BodyCore.png",
      slug: "bodycore",
      category: "PT Training",
      year: "2024"
    },
    {
      title: "John Gwynne",
      image: "/JohnGwynne.png",
      slug: "john-gwynne",
      category: "Author",
      year: "2025"
    }
  ]

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, projectTitle: string) => {
    // Fallback to gradient background if image fails to load
    e.currentTarget.style.display = 'none';
    const parent = e.currentTarget.parentElement;
    if (parent) {
      const fallbackElement = document.createElement('div');
      fallbackElement.className = styles.fallbackContainer;
      fallbackElement.innerHTML = `
        <div class="${styles.fallbackContent}">
          <div class="${styles.fallbackIcon}">
            <span>🖥️</span>
          </div>
          <p class="${styles.fallbackText}">${projectTitle}</p>
        </div>
      `;
      parent.appendChild(fallbackElement);
    }
  }

  const handleProjectClick = (slug: string) => {
    router.push(`/projects/${slug}`)
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Projects Grid */}
        <div className={`${styles.projectsGrid} ${isVisible ? styles.visible : styles.hidden}`}>
          {projects.map((project, index) => (
            <div 
              key={index}
              className={styles.projectCard}
              onClick={() => handleProjectClick(project.slug)}
            >
              {/* Large Website Screenshot */}
              <div className={styles.imageContainer}>
                <img 
                  src={project.image}
                  alt={`${project.title} website screenshot`}
                  className={styles.projectImage}
                  onError={(e) => handleImageError(e, project.title)}
                />
                
                {/* Project Title Overlay */}
                <div className={styles.titleOverlay}>
                  <h3 className={styles.projectTitle}>
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
} 