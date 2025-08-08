"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./BlogSection.module.css";

export default function BlogSection() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const blogPosts = [
    {
      title: "5 Essential SEO Tips for Small Business Websites",
      excerpt:
        "Discover the most effective SEO strategies that can help your small business rank higher in Google and attract more customers.",
      slug: "essential-seo-tips-small-business",
      category: "SEO",
      readTime: "5 min read",
      publishedAt: "2025-03-15",
      featured: true,
    },
    {
      title: "Why Your Website Speed Matters More Than You Think",
      excerpt:
        "Learn how website performance directly impacts your conversions, search rankings, and user experience.",
      slug: "website-speed-performance-guide",
      category: "Performance",
      readTime: "7 min read",
      publishedAt: "2025-03-08",
      featured: false,
    },
    {
      title: "The Complete Guide to Modern Web Design Trends",
      excerpt:
        "Explore the latest design trends that are shaping the web in 2025 and how to implement them effectively.",
      slug: "modern-web-design-trends-2025",
      category: "Design",
      readTime: "6 min read",
      publishedAt: "2025-03-01",
      featured: false,
    },
  ];

  const handleBlogClick = (slug: string) => {
    router.push(`/blog/${slug}`);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Blog Posts Grid */}
        <div
          className={`${styles.blogGrid} ${
            isVisible ? styles.visible : styles.hidden
          }`}
        >
          {blogPosts.map((post, index) => (
            <article key={index} className={styles.blogCard}>
              {/* Title - Fixed height */}
              <h3 className={styles.cardTitle}>{post.title}</h3>

              {/* Excerpt - Fixed height */}
              <p className={styles.cardDescription}>{post.excerpt}</p>

              {/* Meta Section - Fixed height for alignment */}
              <div className={styles.metaSection}>
                <div className={styles.metaContainer}>
                  <span className={styles.category}>{post.category}</span>
                  <span className={styles.readTime}>{post.readTime}</span>
                </div>
                <p className={styles.publishDate}>
                  {formatDate(post.publishedAt)}
                </p>
                {post.featured && (
                  <p className={styles.featuredBadge}>Featured Post</p>
                )}
              </div>

              {/* CTA Button - Fixed position */}
              <div className={styles.buttonContainer}>
                <button
                  className={styles.ctaButton}
                  onClick={() => handleBlogClick(post.slug)}
                >
                  READ ARTICLE
                </button>
              </div>

              {/* Divider */}
              <div className={styles.divider}></div>

              {/* Tags - Takes remaining space */}
              <div className={styles.tagsContainer}>
                <h4 className={styles.tagsTitle}>Tags:</h4>
                <div className={styles.tagsList}>
                  <div className={styles.tagItem}>
                    <span className={styles.tagBullet}></span>
                    <span className={styles.tagText}>{post.category}</span>
                  </div>
                  <div className={styles.tagItem}>
                    <span className={styles.tagBullet}></span>
                    <span className={styles.tagText}>Web Development</span>
                  </div>
                  <div className={styles.tagItem}>
                    <span className={styles.tagBullet}></span>
                    <span className={styles.tagText}>Business Growth</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
