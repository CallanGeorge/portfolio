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
        
        {/* Projects Grid - Large Screenshots */}
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
                
                {/* Category Badge */}
                <div className={styles.categoryBadge}>
                  {project.category}
                </div>
                
                {/* Year Badge */}
                <div className={styles.yearBadge}>
                  {project.year}
                </div>
              </div>

              {/* Project Info - Simplified */}
              <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>
                  {project.title}
                </h3>
                
                <button className={styles.viewButton}>
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