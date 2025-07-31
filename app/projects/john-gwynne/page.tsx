import Navbar from '@/components/Navbar'
import Header from '../../../components/Header'
import ProjectBrief from '@/components/ProjectBrief'
import ProjectContentSection from '@/components/ProjectContentSection'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function JohnGwynnePage() {
  return (
    <div>
      <Navbar />

      <Header 
        title="JOHN GWYNNE"
      />
      
      <ProjectBrief 
        title="Epic Fantasy Digital Experience"
        description="John Gwynne's author website brings the rich world of epic fantasy literature to digital life. This project centered on creating an immersive online experience that captures the depth and complexity of his storytelling while providing fans with exclusive content and community engagement opportunities."
      />
      
      <ProjectContentSection 
        title="World-Building & Fan Community"
        images={['/JohnGwynne.png']}
        text="The website design draws inspiration from John's epic fantasy novels, incorporating atmospheric imagery and design elements that transport visitors into his fictional worlds. We developed interactive character guides, detailed world maps, and timeline features that allow readers to explore the intricate universes he's created. The book series pages include reading order guides, character relationship charts, and spoiler-free chapter previews to help both new and returning readers navigate his extensive bibliography."
        imagePosition="left"
      />
      
      <ProjectContentSection 
        images={['/JohnGwynne.png']}
        text="We implemented a robust fan community platform with discussion forums, exclusive author updates, and behind-the-scenes content about his writing process. The site features a comprehensive events calendar for book tours, conventions, and virtual appearances, along with signed book ordering capabilities. The mobile-optimized design ensures that fans can access content seamlessly across all devices, while the integrated social media feeds keep the community connected and engaged with regular updates and interactive content."
        imagePosition="right"
      />
      
      <FinalCTA />
      <Footer />
    </div>
  )
} 