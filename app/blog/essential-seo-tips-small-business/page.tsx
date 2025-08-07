import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import BlogContent from "@/components/BlogContent";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "5 Essential SEO Tips for Small Business Websites | Callan George",
  description:
    "Discover the most effective SEO strategies that can help your small business rank higher in Google and attract more customers. Expert tips from an Edinburgh web developer.",
  keywords: [
    "SEO tips",
    "small business SEO",
    "local SEO",
    "Google ranking",
    "search engine optimization",
    "small business marketing",
    "website optimization",
    "Edinburgh SEO",
  ],
  openGraph: {
    title: "5 Essential SEO Tips for Small Business Websites | Callan George",
    description:
      "Expert SEO strategies to help your small business rank higher in Google and attract more customers.",
    url: "https://callangeorge.com/blog/essential-seo-tips-small-business",
    siteName: "Callan George - Web Designer & Developer",
    locale: "en_GB",
    type: "article",
    publishedTime: "2024-03-15T00:00:00.000Z",
  },
  alternates: {
    canonical:
      "https://callangeorge.com/blog/essential-seo-tips-small-business",
  },
};

export default function SEOTipsBlogPost() {
  const contentItems = [
    {
      type: "text" as const,
      heading: "1. Focus on Local SEO",
      paragraphs: [
        "As a small business, your biggest advantage is your local presence. Google My Business is your secret weapon here. Make sure your listing is complete, accurate, and regularly updated.",
        "Include your exact business address, phone number, and opening hours. Encourage satisfied customers to leave reviews, and always respond to them professionally. This builds trust and shows Google that you're an active, legitimate business.",
      ],
      list: [
        "Claim and optimize your Google My Business listing",
        "Encourage customer reviews and respond to them",
        "Use local keywords in your content",
        "Include your location in page titles and meta descriptions",
      ],
    },
    {
      type: "text" as const,
      heading: "2. Target Long-Tail Keywords",
      paragraphs: [
        "Instead of competing for generic terms like 'web design', focus on specific phrases your customers actually search for like 'affordable web design for restaurants in Edinburgh'.",
        "These longer, more specific keywords have less competition and higher conversion rates because they capture people who know exactly what they want.",
      ],
    },
    {
      type: "text" as const,
      heading: "3. Create Valuable, Problem-Solving Content",
      paragraphs: [
        "Google rewards websites that genuinely help users. Instead of just talking about your services, create content that solves your customers' problems.",
        "If you're a plumber, write about 'How to fix a leaky tap' or '5 signs you need emergency plumbing'. This positions you as an expert and captures people at different stages of the buying journey.",
      ],
    },
    {
      type: "text" as const,
      heading: "4. Optimize Your Website Speed",
      paragraphs: [
        "Page speed is a major ranking factor, especially on mobile. A slow website doesn't just hurt your SEO – it kills conversions too.",
        "Compress your images, choose a reliable hosting provider, and avoid unnecessary plugins. Even a one-second improvement in load time can significantly boost your rankings and user experience.",
      ],
    },
    {
      type: "text" as const,
      heading: "5. Build Quality Local Backlinks",
      paragraphs: [
        "A few high-quality local backlinks are worth more than hundreds of spammy ones. Partner with other local businesses, sponsor community events, or contribute to local publications.",
        "The key is relevance and authenticity. A link from your local chamber of commerce or industry association carries much more weight than a random directory listing.",
      ],
    },
    {
      type: "text" as const,
      paragraphs: [
        "SEO doesn't have to be complicated. Start with these five fundamentals, be consistent, and measure your results. Remember, SEO is a marathon, not a sprint – but the businesses that stick with it see real, lasting growth.",
        "Need help implementing these strategies for your business? I specialize in SEO-optimized websites that help small businesses get found online. Let's discuss how we can improve your search visibility.",
      ],
    },
  ];

  return (
    <div>
      <Navbar />

      <Header title="BLOG" />

      <BlogContent
        title="5 Essential SEO Tips for Small Business Websites"
        publishedAt="2024-03-15"
        readTime="5 min read"
        category="SEO"
        tags={["SEO", "Small Business", "Local SEO", "Google", "Marketing"]}
        author={{
          name: "Callan George",
          bio: "Web Developer & SEO Specialist",
        }}
        excerpt="Discover the most effective SEO strategies that can help your small business rank higher in Google and attract more customers. These proven techniques focus on practical, implementable tactics that deliver real results."
        contentItems={contentItems}
      />

      <FinalCTA />
      <Footer />
    </div>
  );
}
