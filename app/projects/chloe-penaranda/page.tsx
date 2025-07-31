import Navbar from '@/components/Navbar'
import Header from '../../../components/Header'
import ProjectBrief from '@/components/ProjectBrief'
import ProjectContentSection from '@/components/ProjectContentSection'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function ChloePenarandaPage() {
  return (
    <div>
      <Navbar />

      <Header 
        title="CHLOE PENARANDA"

      />
      
      <ProjectBrief 
        title="Crafting Literary Digital Presence"
        description="Chloe Penaranda's author website represents a perfect blend of literary elegance and modern digital design. This project focused on creating an immersive online experience that connects readers with her work while establishing her unique voice and brand in the competitive publishing landscape."
      />
      
      <ProjectContentSection 
        title="Author Platform & Reader Engagement"
        images={['/ChloePenaranda.png']}
        text="The website was designed to capture the essence of Chloe's writing style through carefully chosen typography, color schemes, and imagery that reflect her literary themes. We created dedicated sections for her published works, upcoming releases, and author blog, providing readers with comprehensive access to her content. The book showcase features detailed descriptions, reviews, and direct purchase links, while the events calendar keeps fans informed about book signings, readings, and literary events."
        imagePosition="left"
      />
      
      <ProjectContentSection 
        images={['/ChloePenaranda.png']}
        text="We integrated social media feeds and a newsletter signup system to help Chloe build and maintain her reader community. The site includes a media kit section for press and bookstore inquiries, along with high-resolution author photos and biographical information. The reading group discussion guides and book club resources add value for educators and reading groups, while the responsive design ensures the site looks beautiful on all devices, from desktop computers to mobile phones and tablets."
        imagePosition="right"
      />
      
      <FinalCTA />
      <Footer />
    </div>
  )
} 