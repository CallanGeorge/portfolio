import styles from './ProjectContentSection.module.css'

interface ProjectContentSectionProps {
  images: string[]
  text: string
  imagePosition?: 'left' | 'right'
  title?: string
}

export default function ProjectContentSection({ 
  images, 
  text, 
  imagePosition = 'left',
  title 
}: ProjectContentSectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {title && <h3 className={styles.sectionTitle}>{title}</h3>}
        
        <div className={`${styles.content} ${imagePosition === 'right' ? styles.reversed : ''}`}>
          {/* Images Side */}
          <div className={styles.imagesContainer}>
            {images.map((image, index) => (
              <div key={index} className={styles.imageWrapper}>
                <img 
                  src={image} 
                  alt={`Project image ${index + 1}`}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
          
          {/* Text Side */}
          <div className={styles.textContainer}>
            <p className={styles.text}>{text}</p>
          </div>
        </div>
      </div>
    </section>
  )
} 