import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import BlogContent from "@/components/BlogContent";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Web Design Trends 2025 for Scottish Small Businesses — What Actually Works",
  description:
    "A practical guide to 2025 web design trends that boost conversions and performance for Scottish SMEs across Edinburgh, Glasgow, Fife, Aberdeen, Dundee & Inverness.",
  keywords: [
    "web design Scotland",
    "web design trends 2025",
    "Scottish small business websites",
    "Edinburgh web design",
    "Glasgow web design",
    "Fife web designer",
    "Aberdeen web design",
    "Dundee web design",
    "Inverness web design",
    "modern web design",
    "UI design trends",
    "UX design",
    "accessible web design",
    "sustainable web design",
    "AI in web design",
    "responsive design",
  ],
  openGraph: {
    title:
      "Web Design Trends 2025 for Scottish Small Businesses — What Actually Works",
    description:
      "2025 web design trends that actually move the needle for Scottish SMEs—applied for speed, accessibility and conversions.",
    url: "https://callangeorge.com/blog/modern-web-design-trends-2025",
    siteName: "Freelance Web Designer & SEO — Fife & Edinburgh",
    locale: "en_GB",
    type: "article",
    publishedTime: "2025-03-01T00:00:00.000Z",
  },
  alternates: {
    canonical: "https://callangeorge.com/blog/modern-web-design-trends-2025",
  },
};

export default function WebDesignTrendsBlogPost() {
  const contentItems = [
    {
      type: "text" as const,
      heading: "Web Design Trends 2025 for Scottish Small Businesses",
      paragraphs: [
        "Web design keeps evolving, but not every trend is worth your time—especially when you’re running a business in Scotland and need your website to turn visitors into enquiries. This guide breaks down the 2025 trends that actually help Scottish SMEs across Edinburgh, Glasgow, Fife, Aberdeen, Dundee and Inverness win more customers online.",
        "Below, I’ll show you what matters, why it matters, and how to apply it without bloating your site or hurting performance.",
      ],
    },
    {
      type: "text" as const,
      heading: "1) Intentional Minimalism (Designed to Convert)",
      paragraphs: [
        "Minimalism in 2025 is about clarity and conversion—clean layouts that guide users to call, book or buy. Think focused pages, strong hierarchy, and friction-free journeys.",
        "For local service businesses in Scotland (plumbers, cafés, salons, PTs), this means fewer distractions and clearer CTAs ('Book an appointment in Edinburgh', 'Call our Glasgow studio').",
      ],
      list: [
        "Use one clear primary CTA above the fold on each page.",
        "Cut visual clutter; remove elements that don’t support the user’s next step.",
        "Structure content for skim-readers with scannable headings and short paragraphs.",
      ],
    },
    {
      type: "text" as const,
      heading: "2) Bold Typography as a Brand Asset",
      paragraphs: [
        "Large, confident type grabs attention on mobile and desktop and helps you stand out locally without heavy imagery. Pair a distinctive display font for headings with a highly readable body font.",
        "Typography reduces dependency on large hero images—improving load speed and Lighthouse scores.",
      ],
      list: [
        "Use font sizes that establish clear visual hierarchy on mobile first.",
        "Limit yourself to 2 font families to keep performance and consistency tight.",
        "Test legibility on smaller devices—most Scottish customers will first see you on mobile.",
      ],
    },
    {
      type: "text" as const,
      heading: "3) Micro-Interactions & Subtle Animations",
      paragraphs: [
        "Lightweight animations (hover states, button feedback, subtle reveals) make your site feel modern and trustworthy—without gimmicks.",
        "Keep them tasteful, accessible and performance-friendly so they enhance the journey rather than distract from it.",
      ],
      list: [
        "Prefer CSS animations and reduce JavaScript where possible.",
        "Use motion to indicate state changes (adding to cart, form success).",
        "Respect reduced-motion preferences for accessibility.",
      ],
    },
    {
      type: "text" as const,
      heading: "4) Dark Mode & Adaptive Interfaces",
      paragraphs: [
        "Dark mode isn’t just a trend—it’s a comfort feature. Respecting the user’s system preference earns trust and can reduce eye strain.",
        "Adaptive interfaces can also tailor content blocks by location or opening hours (handy for multi-location Scottish businesses).",
      ],
      list: [
        "Implement prefers-color-scheme so your site adapts automatically.",
        "Check colour contrast in both light and dark themes.",
        "If you have multiple locations, surface the closest branch and relevant contact options.",
      ],
    },
    {
      type: "text" as const,
      heading: "5) Sustainable, Accessible, High-Performance Design",
      paragraphs: [
        "Fast, accessible websites rank better, convert more and cost less to run. In 2025, sustainable choices align with business results.",
        "Treat accessibility as standard: strong colour contrast, keyboard navigation, descriptive labels and alt text. This helps real users and improves SEO.",
      ],
      list: [
        "Optimise images (WebP/AVIF), lazy-load below-the-fold content.",
        "Ship fewer scripts; audit and remove unused libraries.",
        "Follow WCAG best practices (contrast, focus states, semantic HTML).",
        "Choose efficient hosting/CDN and cache assets aggressively.",
      ],
    },
    {
      type: "text" as const,
      heading: "6) Practical AI to Reduce Friction",
      paragraphs: [
        "AI is most valuable when it saves users time: smarter search, pre-filled forms, relevant content, and helpful chat—without being intrusive.",
        "For Scottish SMEs, that could mean automated FAQs, appointment triage, or location-aware suggestions (Edinburgh vs Glasgow pricing, availability, or routes).",
      ],
      list: [
        "Use AI for genuine UX wins: better on-site search, content suggestions, support triage.",
        "Keep data collection transparent; don’t gate basic info behind chat.",
        "Measure impact—deploy only where AI improves completion rates.",
      ],
    },
    {
      type: "text" as const,
      heading: "How to Apply These Trends Without Hurting SEO",
      paragraphs: [
        "It's easy to bloat a site with trends. The key is to implement with intent and measurement.",
      ],
      list: [
        "Design mobile-first and test performance early.",
        "Use semantic HTML and accessible patterns by default.",
        "Measure Core Web Vitals and make iterative changes.",
      ],
    },
  ];

  return (
    <div>
      <Navbar />
      <Header title="BLOG" />
      <BlogContent
        title="Web Design Trends 2025 for Scottish Small Businesses"
        publishedAt="2025-03-01"
        readTime="6 min read"
        category="Web Design"
        tags={["web design trends", "UI/UX", "performance", "Scotland"]}
        author={{
          name: "Callan George",
          bio: "Scotland-based Web Designer & SEO Specialist",
        }}
        excerpt="2025 web design trends that matter for Scottish SMEs — practical guidance for modern, fast, accessible websites that convert."
        contentItems={contentItems}
      />
      <FinalCTA />
      <Footer />
    </div>
  );
}
