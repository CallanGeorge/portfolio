"use client";

import styles from "./ProjectContent.module.css";

interface ContentBlock {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

interface ProjectContentProps {
  // Brief section
  briefTitle: string;
  briefDescription: string;

  // Image section
  images: string[];
  imageAlt: string;

  // Content blocks
  contentBlocks: ContentBlock[];
}

export default function ProjectContent({
  briefTitle,
  briefDescription,
  images,
  imageAlt,
  contentBlocks,
}: ProjectContentProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Brief Section */}
          <div className={styles.briefSection}>
            <h2 className={styles.briefTitle}>The brief</h2>
            <p className={styles.briefDescription}>{briefDescription}</p>
          </div>

          {/* Rectangle Image Section */}
          <div className={styles.imageSection}>
            {images.map((image, index) => (
              <div key={index} className={styles.imageContainer}>
                <img
                  src={image}
                  alt={`${imageAlt} ${index + 1}`}
                  className={styles.projectImage}
                />
              </div>
            ))}
          </div>

          {/* Content Blocks */}
          {contentBlocks.map((block, index) => (
            <div key={index} className={styles.contentBlock}>
              <h3 className={styles.subheading}>{block.heading}</h3>
              {block.paragraphs.map((paragraph, pIndex) => (
                <p key={pIndex} className={styles.paragraph}>
                  {paragraph}
                </p>
              ))}
              {block.list && (
                <ul className={styles.list}>
                  {block.list.map((item, lIndex) => (
                    <li key={lIndex} className={styles.listItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
