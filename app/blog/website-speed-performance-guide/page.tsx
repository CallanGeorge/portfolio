import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import BlogContent from "@/components/BlogContent";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Your Website Speed Matters More Than You Think | Callan George",
  description:
    "Learn how website performance directly impacts your conversions, search rankings, and user experience. Practical tips to speed up your website and boost your business.",
  keywords: [
    "website speed",
    "web performance",
    "page load time",
    "Core Web Vitals",
    "website optimization",
    "user experience",
    "conversion rate",
    "Google PageSpeed",
  ],
  openGraph: {
    title: "Why Your Website Speed Matters More Than You Think | Callan George",
    description:
      "Discover how website performance directly impacts your business success and learn practical ways to improve it.",
    url: "https://callangeorge.com/blog/website-speed-performance-guide",
    siteName: "Callan George - Web Designer & Developer",
    locale: "en_GB",
    type: "article",
    publishedTime: "2024-03-08T00:00:00.000Z",
  },
  alternates: {
    canonical: "https://callangeorge.com/blog/website-speed-performance-guide",
  },
};

export default function WebsiteSpeedBlogPost() {
  const contentItems = [
    {
      type: "text" as const,
      paragraphs: [
        "Your website's loading speed isn't just a technical metric—it's a business-critical factor that directly impacts your bottom line. In today's fast-paced digital world, users expect websites to load in under 3 seconds, and they'll abandon your site if it doesn't meet their expectations.",
      ],
    },
    {
      type: "text" as const,
      heading: "The Real Cost of a Slow Website",
      paragraphs: [
        "Amazon found that every 100ms of latency cost them 1% in sales. For a small business, this translates to real money lost every day. But it's not just about immediate sales—slow websites create a ripple effect that damages your brand and long-term growth.",
      ],
      list: [
        "40% of users abandon a site that takes more than 3 seconds to load",
        "A 1-second delay reduces customer satisfaction by 16%",
        "53% of mobile users leave sites that take longer than 3 seconds",
        "Page speed is a direct Google ranking factor",
      ],
    },
    {
      type: "text" as const,
      heading: "How Speed Affects Your Search Rankings",
      paragraphs: [
        "Google has made it clear: page speed is a ranking factor. With their Core Web Vitals update, they're measuring real user experience data. Sites that provide fast, smooth experiences rank higher and get more organic traffic.",
        "It's a virtuous cycle—faster sites rank better, get more traffic, and convert more visitors into customers.",
      ],
    },
    {
      type: "text" as const,
      heading: "Quick Wins to Speed Up Your Website",
      paragraphs: [
        "You don't need to be a developer to improve your website's speed. Here are the most impactful changes you can make:",
      ],
      list: [
        "Optimize images: Compress them and use modern formats like WebP",
        "Choose fast hosting: Shared hosting is often a bottleneck",
        "Enable browser caching: Let returning visitors load your site faster",
        "Minimize plugins: Each plugin adds weight to your site",
        "Use a Content Delivery Network (CDN) to serve files globally",
      ],
    },
    {
      type: "text" as const,
      heading: "The Mobile Speed Imperative",
      paragraphs: [
        "With mobile traffic accounting for over 50% of web usage, mobile speed is crucial. Mobile users are often on slower connections and have less patience for slow-loading sites.",
        "Google now uses mobile-first indexing, meaning they primarily use the mobile version of your site for ranking. If your mobile site is slow, your entire SEO strategy suffers.",
      ],
    },
    {
      type: "text" as const,
      heading: "Measuring Your Website's Performance",
      paragraphs: [
        "You can't improve what you don't measure. Use tools like Google PageSpeed Insights, GTmetrix, or WebPageTest to get detailed performance reports.",
        "Focus on Core Web Vitals: Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS). These metrics directly impact user experience and search rankings.",
      ],
    },
    {
      type: "text" as const,
      paragraphs: [
        "Website speed isn't a 'nice-to-have'—it's essential for business success. Every second of improvement can lead to higher conversions, better search rankings, and happier customers.",
        "Need help optimizing your website's performance? I specialize in building fast, high-performing websites that convert visitors into customers. Let's discuss how we can speed up your site and grow your business.",
      ],
    },
  ];

  return (
    <div>
      <Navbar />

      <Header title="BLOG" />

      <BlogContent
        title="Why Your Website Speed Matters More Than You Think"
        publishedAt="2024-03-08"
        readTime="7 min read"
        category="Performance"
        tags={[
          "Performance",
          "User Experience",
          "SEO",
          "Conversion",
          "Core Web Vitals",
        ]}
        author={{
          name: "Callan George",
          bio: "Web Developer & Performance Specialist",
        }}
        excerpt="Learn how website performance directly impacts your conversions, search rankings, and user experience. Discover practical strategies to optimize your site speed and boost your business success."
        contentItems={contentItems}
      />

      <FinalCTA />
      <Footer />
    </div>
  );
}
