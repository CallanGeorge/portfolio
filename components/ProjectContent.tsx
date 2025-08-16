import Image from "next/image";
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

interface ProjectContentProps {
  briefTitle: string;
  briefDescription: string;
  contentItems: ContentItem[];
}

export default function ProjectContent({
  briefTitle,
  briefDescription,
  contentItems,
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

          {/* Flexible Content Items */}
          {contentItems.map((item, index) => {
            if (item.type === "image") {
              return (
                <div key={index} className={styles.imageSection}>
                  {item.images.map((image, imgIndex) => (
                    <div key={imgIndex} className={styles.imageContainer}>
                      <Image
                        src={image}
                        alt={`${item.imageAlt} ${imgIndex + 1}`}
                        width={1200}
                        height={800}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                        style={{ width: "100%", height: "auto" }}
                        loading="lazy"
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
