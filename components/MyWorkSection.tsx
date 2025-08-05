"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./MyWorkSection.module.css";

export default function MyWorkSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [loadingImages, setLoadingImages] = useState<{
    [key: string]: boolean;
  }>({});
  const router = useRouter();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "Debrunner Design",
      image: "/debrunner-design.png",
      slug: "debrunner-design",
      category: "Design Agency",
      year: "2025",
    },
    {
      title: "Chloe Penaranda",
      image: "/ChloePenaranda.png",
      slug: "chloe-penaranda",
      category: "Author",
      year: "2025",
    },
    {
      title: "BodyCore",
      image: "/bodycore.png",
      slug: "bodycore",
      category: "PT Training",
      year: "2024",
    },
    {
      title: "John Gwynne",
      image: "/JohnGwynne.png",
      slug: "john-gwynne",
      category: "Author",
      year: "2025",
    },
  ];

  const handleImageLoad = (slug: string) => {
    setLoadingImages((prev) => ({ ...prev, [slug]: false }));
  };

  const handleImageLoadStart = (slug: string) => {
    setLoadingImages((prev) => ({ ...prev, [slug]: true }));
  };

  const handleProjectClick = (slug: string) => {
    router.push(`/projects/${slug}`);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Projects Grid */}
        <div
          className={`${styles.projectsGrid} ${
            isVisible ? styles.visible : styles.hidden
          }`}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className={styles.projectCard}
              onClick={() => handleProjectClick(project.slug)}
            >
              {/* Large Website Screenshot */}
              <div className={styles.imageContainer}>
                {/* Loading indicator */}
                {loadingImages[project.slug] && (
                  <div className={styles.loadingOverlay}>
                    <div className={styles.loadingSpinner}></div>
                  </div>
                )}

                <Image
                  src={project.image}
                  alt={`${project.title} website screenshot`}
                  className={styles.projectImage}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 2} // Prioritize first 2 images
                  quality={85}
                  onLoadStart={() => handleImageLoadStart(project.slug)}
                  onLoad={() => handleImageLoad(project.slug)}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />

                {/* Project Title Overlay */}
                <div className={styles.titleOverlay}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
