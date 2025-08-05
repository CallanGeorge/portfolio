"use client";

import styles from "./ProjectContent.module.css";

interface TextBlock {
  type: "text";
  heading: string;
  paragraphs: string[];
  list?: string[];
}

interface ImageBlock {
  type: "image";
  images: string[];
  imageAlt: string;
}

type ContentItem = TextBlock | ImageBlock;

interface WebDesignContentProps {
  briefTitle: string;
  briefDescription: string;
  contentItems: ContentItem[];
}

export default function WebDesignContent({
  briefTitle,
  briefDescription,
  contentItems,
}: WebDesignContentProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Brief Section */}
          <div className={styles.briefSection}>
            <h2 className={styles.briefTitle}>{briefTitle}</h2>
            <p className={styles.briefDescription}>{briefDescription}</p>
          </div>

          {/* Flexible Content Items */}
          {contentItems.map((item, index) => {
            if (item.type === "image") {
              return (
                <div key={index} className={styles.imageSection}>
                  {item.images.map((image, imgIndex) => (
                    <div key={imgIndex} className={styles.imageContainer}>
                      <img
                        src={image}
                        alt={`${item.imageAlt} ${imgIndex + 1}`}
                        className={styles.projectImage}
                      />
                    </div>
                  ))}
                </div>
              );
            } else {
              return (
                <div key={index} className={styles.contentBlock}>
                  <h3 className={styles.subheading}>{item.heading}</h3>
                  {item.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className={styles.paragraph}>
                      {paragraph}
                    </p>
                  ))}
                  {item.list && (
                    <ul className={styles.list}>
                      {item.list.map((listItem, lIndex) => (
                        <li key={lIndex} className={styles.listItem}>
                          {listItem}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}
