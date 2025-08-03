'use client'

import { useState, useEffect } from 'react'
import styles from './ContactForm.module.css'

export default function ContactForm() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I\'ll get back to you soon.')
    // Reset form
    setFormData({
      name: '',
      email: '',
      project: '',
      message: ''
    })
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.contentGrid}>
          
          {/* Left Side - Welcome Text */}
          <div className={`${styles.welcomeContainer} ${isVisible ? styles.visible : styles.hidden}`}>
            <h2 className={styles.welcomeTitle}>
              Let's discuss your project and create something amazing together. I'm here to help bring your vision to life.
            </h2>
            
            {/* Contact Points */}
            <div className={styles.contactPoints}>
              <div className={styles.contactPoint}>
                <span className={styles.contactBullet}>📧</span>
                <span className={styles.contactText}>hello@callangeorge.com</span>
              </div>
              
              <div className={styles.contactPoint}>
                <span className={styles.contactBullet}>📱</span>
                <span className={styles.contactText}>+44 7XXX XXX XXX</span>
              </div>
              
              <div className={styles.contactPoint}>
                <span className={styles.contactBullet}>📍</span>
                <span className={styles.contactText}>Edinburgh, Scotland</span>
              </div>
            </div>
          </div>

          {/*  Contact Form */}
          <div className={`${styles.formContainer} ${isVisible ? styles.visible : styles.hidden}`}>
                         <form onSubmit={handleSubmit} className={styles.form}>
               
               <div className={styles.formGrid}>
                 <div className={styles.formGroup}>
                   <label htmlFor="name" className={styles.label}>Name *</label>
                   <input
                     type="text"
                     id="name"
                     name="name"
                     value={formData.name}
                     onChange={handleChange}
                     required
                     className={styles.input}
                     placeholder="Your full name"
                   />
                 </div>
                 
                 <div className={styles.formGroup}>
                   <label htmlFor="email" className={styles.label}>Email *</label>
                   <input
                     type="email"
                     id="email"
                     name="email"
                     value={formData.email}
                     onChange={handleChange}
                     required
                     className={styles.input}
                     placeholder="your@email.com"
                   />
                 </div>
               </div>
               
               <div className={styles.formGroup}>
                 <label htmlFor="project" className={styles.label}>Project Type *</label>
                 <select
                   id="project"
                   name="project"
                   value={formData.project}
                   onChange={handleChange}
                   required
                   className={styles.select}
                 >
                   <option value="">Select a project type</option>
                   <option value="new-website">New Website</option>
                   <option value="redesign">Website Redesign</option>
                   <option value="ecommerce">E-commerce Store</option>
                   <option value="maintenance">Website Maintenance</option>
                   <option value="consultation">Consultation</option>
                   <option value="other">Other</option>
                 </select>
               </div>
               
               <div className={styles.formGroup}>
                 <label htmlFor="message" className={styles.label}>Project Description *</label>
                 <textarea
                   id="message"
                   name="message"
                   value={formData.message}
                   onChange={handleChange}
                   required
                   rows={6}
                   className={styles.textarea}
                   placeholder="Please describe your project, goals, and any specific requirements..."
                 />
               </div>
               
               <button type="submit" className={styles.submitButton}>
                 SEND MESSAGE
               </button>
               
             </form>
          </div>
        </div>

      </div>
    </section>
  )
} 