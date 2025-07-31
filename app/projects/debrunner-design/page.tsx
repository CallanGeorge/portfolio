import Navbar from '@/components/Navbar'
import Header from '../../../components/Header'
import ProjectBrief from '@/components/ProjectBrief'
import ProjectContentSection from '@/components/ProjectContentSection'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function DebrunnerDesignPage() {
  return (
    <div>
      <Navbar />

      <Header 
        title="DEBRUNNER DESIGN"
      />
      
      <ProjectBrief 
        title="Elevating Creative Excellence"
        description="Debrunner Design is a cutting-edge design agency specializing in brand identity, digital experiences, and creative solutions. This project involved creating a sophisticated online presence that showcases their portfolio while establishing them as industry leaders in contemporary design."
      />
      
      <ProjectContentSection 
        title="Brand Identity & Digital Presence"
        images={['/debrunner-design.png']}
        text="The Debrunner Design website was crafted to reflect the agency's commitment to innovative design and creative excellence. We developed a clean, minimalist aesthetic that allows their work to speak for itself while maintaining strong brand consistency throughout. The site features an intuitive portfolio system that categorizes projects by industry and design type, making it easy for potential clients to explore relevant work and understand the agency's capabilities."
        imagePosition="left"
      />
      
      <ProjectContentSection 
        images={['/debrunner-design.png']}
        text="We implemented advanced animation and interaction design to create an engaging user experience that reflects the agency's creative expertise. The responsive design ensures optimal viewing across all devices, while the content management system allows the team to easily update their portfolio with new projects. The site also includes a streamlined contact process and project inquiry system, helping to convert visitors into potential clients through clear calls-to-action and compelling case study presentations."
        imagePosition="right"
      />
      
      <FinalCTA />
      <Footer />
    </div>
  )
} 