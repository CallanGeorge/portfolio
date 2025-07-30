import Navbar from '@/components/Navbar'
import Header from '../../../components/Header'
import ProjectBrief from '@/components/ProjectBrief'
import ProjectContentSection from '@/components/ProjectContentSection'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function BodyCorePage() {
  return (
    <div>
      <Navbar />

      <Header 
        title="BODYCORE"
        subtitle="PT TRAINING - 2024"
      />
      
      <ProjectBrief 
        title="Transforming Personal Training"
        description="BodyCore is a comprehensive personal training platform designed to connect fitness enthusiasts with professional trainers. The project focused on creating an intuitive user experience that makes booking sessions, tracking progress, and achieving fitness goals seamless and engaging."
      />
      
      <ProjectContentSection 
        title="Design & Development"
        images={['/bodycore.png']}
        text="The BodyCore platform was built with a mobile-first approach, ensuring that users can easily access their training schedules and progress from anywhere. We implemented a clean, modern design that emphasizes usability and accessibility. The booking system allows users to view trainer profiles, check availability, and schedule sessions with just a few taps. The dashboard provides comprehensive analytics on workout progress, helping users stay motivated and track their fitness journey effectively."
        imagePosition="left"
      />
      
      <ProjectContentSection 
        images={['/bodycore.png']}
        text="We integrated advanced features such as real-time chat between trainers and clients, progress photo uploads, and custom workout plan creation. The platform also includes a payment system for seamless transactions and a review system to maintain quality standards. The responsive design ensures optimal performance across all devices, while the intuitive navigation makes it easy for users of all technical backgrounds to use the platform effectively."
        imagePosition="right"
      />
      
      <FinalCTA />
      <Footer />
    </div>
  )
} 