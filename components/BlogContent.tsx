"use client";

import Image from "next/image";
import styles from "./BlogContent.module.css";

interface TextBlock {
  type: "text";
  heading?: string;
  paragraphs: string[];
  list?: string[];
}

interface ImageBlock {
  type: "image";
  images: string[];
  imageAlt: string;
  caption?: string;
}

interface QuoteBlock {
  type: "quote";
  quote: string;
  author?: string;
}

type ContentItem = TextBlock | ImageBlock | QuoteBlock;

interface BlogContentProps {
  // Blog meta info
  title: string;
  publishedAt: string;
  readTime: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    bio: string;
  };

  // Brief section
  excerpt: string;

  // Flexible content items (text blocks, image blocks, quotes)
  contentItems: ContentItem[];
}

export default function BlogContent({
  title,
  publishedAt,
  readTime,
  category,
  tags,
  author,
  excerpt,
  contentItems,
}: BlogContentProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <article className={styles.article}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Blog Header */}
          <header className={styles.header}>
            {/* Meta Info */}
            <div className={styles.meta}>
              <span className={styles.category}>{category}</span>
              <span className={styles.readTime}>{readTime}</span>
            </div>

            {/* Title */}
            <h1 className={styles.title}>{title}</h1>

            {/* Excerpt */}
            <p className={styles.excerpt}>{excerpt}</p>

            {/* Author & Date */}
            <div className={styles.authorSection}>
              <div className={styles.authorInfo}>
                <div className={styles.authorDetails}>
                  <span className={styles.authorName}>{author.name}</span>
                  <span className={styles.authorBio}>{author.bio}</span>
                </div>
              </div>
              <time className={styles.publishDate}>
                {formatDate(publishedAt)}
              </time>
            </div>

            {/* Tags */}
            <div className={styles.tags}>
              {tags.map((tag, index) => (
                <span key={index} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* Flexible Content Items */}
          <div className={styles.articleContent}>
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
                        {item.caption && (
                          <figcaption className={styles.imageCaption}>
                            {item.caption}
                          </figcaption>
                        )}
                      </div>
                    ))}
                  </div>
                );
              } else if (item.type === "quote") {
                return (
                  <blockquote key={index} className={styles.quote}>
                    <p className={styles.quoteText}>"{item.quote}"</p>
                    {item.author && (
                      <cite className={styles.quoteAuthor}>
                        — {item.author}
                      </cite>
                    )}
                  </blockquote>
                );
              } else {
                return (
                  <div key={index} className={styles.contentBlock}>
                    {item.heading && (
                      <h2 className={styles.subheading}>{item.heading}</h2>
                    )}
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
      </div>
    </article>
  );
}
