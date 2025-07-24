'use client'

import { useState, useEffect } from 'react'
import styles from './MyWorkSection.module.css'

export default function MyWorkSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const projects = [
    {
      title: "Debrunner Design",
      image: "/debrunner-design.png",
      url: "https://debrunnerdesign.com",
      category: "Design Agency",
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

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Projects Grid - Image Focused */}
        <div className={`${styles.projectsGrid} ${isVisible ? styles.visible : styles.hidden}`}>
          {projects.map((project, index) => (
            <div 
              key={index}
              className={styles.projectCard}
              onClick={() => window.open(project.url, '_blank')}
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