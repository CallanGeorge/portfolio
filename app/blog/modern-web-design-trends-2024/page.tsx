import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import BlogContent from "@/components/BlogContent";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Complete Guide to Modern Web Design Trends 2024 | Callan George",
  description:
    "Explore the latest design trends that are shaping the web in 2024 and how to implement them effectively. From minimalism to AI integration, discover what's next in web design.",
  keywords: [
    "web design trends 2024",
    "modern web design",
    "UI design trends",
    "UX design",
    "website design",
    "design inspiration",
    "minimalist design",
    "responsive design",
  ],
  openGraph: {
    title:
      "The Complete Guide to Modern Web Design Trends 2024 | Callan George",
    description:
      "Discover the latest web design trends shaping 2024 and learn how to implement them for better user experience.",
    url: "https://callangeorge.com/blog/modern-web-design-trends-2024",
    siteName: "Callan George - Web Designer & Developer",
    locale: "en_GB",
    type: "article",
    publishedTime: "2024-03-01T00:00:00.000Z",
  },
  alternates: {
    canonical: "https://callangeorge.com/blog/modern-web-design-trends-2024",
  },
};

export default function WebDesignTrendsBlogPost() {
  const contentItems = [
    {
      type: "text" as const,
      paragraphs: [
        "Web design is constantly evolving, and 2024 has brought exciting new trends that balance aesthetic appeal with functionality. Whether you're redesigning your business website or planning a new project, understanding these trends will help you create a modern, engaging experience for your users.",
      ],
    },
    {
      type: "text" as const,
      heading: "1. Intentional Minimalism",
      paragraphs: [
        "Minimalism isn't new, but 2024's approach is more intentional. It's not just about white space—it's about purposeful design that guides users toward specific actions. Every element serves a function, and unnecessary clutter is eliminated.",
        "This trend focuses on improved readability, faster loading times, and clearer user journeys. Your visitors can focus on what matters most without distractions.",
      ],
    },
    {
      type: "text" as const,
      heading: "2. Bold Typography as a Design Element",
      paragraphs: [
        "Typography is becoming the hero of web design. Large, bold fonts aren't just readable—they're making statements and creating visual hierarchy without relying on images or graphics.",
        "Custom fonts and creative typography combinations help brands stand out while maintaining excellent user experience across all devices.",
      ],
    },
    {
      type: "text" as const,
      heading: "3. Micro-Interactions and Subtle Animations",
      paragraphs: [
        "Small animations and micro-interactions provide feedback, guide users, and add personality to websites without overwhelming the experience. Think hover effects, loading animations, and button states that feel natural and responsive.",
        "These details make your website feel alive and professional, improving user engagement and satisfaction.",
      ],
    },
    {
      type: "text" as const,
      heading: "4. Dark Mode and Adaptive Interfaces",
      paragraphs: [
        "Dark mode isn't just trendy—it's practical. It reduces eye strain, saves battery life on mobile devices, and creates a premium feel. More importantly, websites are adapting to user preferences automatically.",
        "Adaptive interfaces that respond to user settings and behaviors create personalized experiences that feel tailored to each visitor.",
      ],
    },
    {
      type: "text" as const,
      heading: "5. Sustainable and Accessible Design",
      paragraphs: [
        "Environmental consciousness is influencing web design. Lightweight, efficient websites that load quickly use less energy and provide better experiences for all users.",
        "Accessibility isn't an afterthought—it's built into the design process from the beginning. This includes proper color contrast, keyboard navigation, and screen reader compatibility.",
      ],
      list: [
        "Optimized images and efficient code reduce energy consumption",
        "Accessible design reaches wider audiences and improves SEO",
        "Sustainable hosting choices matter for environmental impact",
        "Performance optimization benefits everyone",
      ],
    },
    {
      type: "text" as const,
      heading: "6. AI-Enhanced User Experiences",
      paragraphs: [
        "AI integration is becoming subtle and practical. Smart forms that adapt to user input, personalized content recommendations, and intelligent chatbots enhance user experience without feeling invasive.",
        "The key is using AI to solve real problems rather than adding it for novelty. When done right, users benefit from more efficient interactions and relevant content.",
      ],
    },
    {
      type: "text" as const,
      heading: "Implementing These Trends Effectively",
      paragraphs: [
        "Not every trend suits every business. The key is choosing elements that align with your brand identity and user needs. Start with one or two trends that solve specific problems for your audience.",
        "Remember: trends should enhance functionality, not replace it. The best websites combine current design trends with timeless usability principles.",
      ],
    },
    {
      type: "text" as const,
      paragraphs: [
        "2024's web design trends focus on creating better user experiences through thoughtful, purposeful design. By incorporating these elements strategically, you can create a website that looks modern while serving your business goals effectively.",
        "Ready to modernize your website with these cutting-edge design trends? I help businesses create contemporary websites that balance style with performance. Let's discuss how these trends can work for your brand.",
      ],
    },
  ];

  return (
    <div>
      <Navbar />

      <Header title="BLOG" />

      <BlogContent
        title="The Complete Guide to Modern Web Design Trends 2024"
        publishedAt="2024-03-01"
        readTime="6 min read"
        category="Design"
        tags={["Design", "Trends", "UX", "UI", "Minimalism", "Accessibility"]}
        author={{
          name: "Callan George",
          bio: "Web Designer & Developer",
        }}
        excerpt="Explore the latest design trends that are shaping the web in 2024 and how to implement them effectively. Discover how modern design principles can enhance your website's user experience and business performance."
        contentItems={contentItems}
      />

      <FinalCTA />
      <Footer />
    </div>
  );
}
