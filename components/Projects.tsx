"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Projects.module.css";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "Debrunner Design",
      year: "2025",
      description:
        "A sophisticated design agency website showcasing premium creative services and portfolio work with elegant typography and clean layouts.",
      image: "/debrunner-design.webp",
      url: "https://debrunnerdesign.com",
      category: "Design Agency",
      screenshots: ["/dbd-laptop.webp", "/dbd-phone.webp"],
    },
    {
      title: "Chloe Penaranda",
      year: "2025",
      description:
        "Professional author website featuring book showcases, speaking engagements, and a clean, literary-focused design that reflects the author's brand.",
      image: "/ChloePenaranda.webp",
      category: "Author",
      screenshots: ["/ccp-laptop.webp", "/ccp-phone.webp"],
    },
    {
      title: "BodyCore",
      year: "2024",
      description:
        "Dynamic fitness and personal training website with booking systems, trainer profiles, and motivational design elements to inspire fitness journeys.",
      image: "/bodycore.webp",
      category: "PT Training",
      screenshots: ["/bc-laptop.webp", "/bc-phone.webp"],
    },
    {
      title: "John Gwynne",
      year: "2025",
      description:
        "Award-winning fantasy author's website showcasing bestselling novels, character guides, and immersive world-building content for devoted readers.",
      image: "/JohnGwynne.webp",
      category: "Author",
      screenshots: ["/jg-laptop.webp", "/jg-phone.webp"],
    },
  ];

  const toggleProject = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div
          className={`${styles.header} ${
            isVisible ? styles.visible : styles.hidden
          }`}
        >
          <h2 className={styles.title}>Recent Work</h2>
          <p className={styles.subtitle}>
            Real results from clients who trusted me to grow their online
            presence.
          </p>
        </div>

        {/* Projects Accordion */}
        <div
          className={`${styles.projectsAccordion} ${
            isVisible ? styles.visible : styles.hidden
          }`}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${styles.accordionItem} ${
                expandedProject === index ? styles.expanded : ""
              }`}
            >
              {/* Project Row */}
              <div
                className={`${styles.projectRow} ${
                  expandedProject === index ? styles.expanded : ""
                }`}
                onClick={() => toggleProject(index)}
              >
                <div className={styles.projectInfo}>
                  <h3 className={styles.projectName}>
                    {project.title}
                    <span className={styles.expandIcon}>
                      {expandedProject === index ? "↑" : "↗"}
                    </span>
                  </h3>
                </div>

                <div className={styles.projectYear}>{project.year}</div>
              </div>

              {/* Expanded Content */}
              <div
                className={`${styles.expandedContent} ${
                  expandedProject === index ? styles.show : ""
                }`}
              >
                {/* Project Screenshots */}
                <div className={styles.projectScreenshots}>
                  {project.screenshots.map((screenshot, screenshotIndex) => (
                    <div key={screenshotIndex} className={styles.screenshot}>
                      <Image
                        src={screenshot}
                        alt={`${project.title} screenshot ${
                          screenshotIndex + 1
                        }`}
                        width={800}
                        height={500}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                        style={{ width: "100%", height: "auto" }}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>

                {/* Project Description */}
                <p className={styles.projectDescription}>
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
      </div>
    </section>
  );
}
