import styles from './ProjectBrief.module.css'

interface ProjectBriefProps {
  title: string
  description: string
}

export default function ProjectBrief({ title, description }: ProjectBriefProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </section>
  )
} 