import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import BlogContent from "@/components/BlogContent";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Website Speed for Scottish Businesses — Why It Matters (and How to Fix It)",
  description:
    "Your website’s speed directly affects enquiries, sales and Google rankings. A practical performance guide for Scottish SMEs across Edinburgh, Glasgow, Fife, Aberdeen, Dundee & Inverness.",
  keywords: [
    "website speed Scotland",
    "web performance Scotland",
    "Core Web Vitals Scotland",
    "website optimisation Scotland",
    "Edinburgh web performance",
    "Glasgow website speed",
    "Fife web designer",
    "Aberdeen website optimisation",
    "Dundee Core Web Vitals",
    "Inverness web design",
    "LCP INP CLS",
    "Google PageSpeed",
    "fast websites Scotland",
  ],
  openGraph: {
    title:
      "Website Speed for Scottish Businesses — Why It Matters (and How to Fix It)",
    description:
      "Learn how site speed impacts conversions and rankings, and follow a clear plan to improve Core Web Vitals for your Scottish business website.",
    url: "https://callangeorge.com/blog/website-speed-performance-guide",
    siteName: "Freelance Web Designer & SEO — Fife & Edinburgh",
    locale: "en_GB",
    type: "article",
    publishedTime: "2025-03-08T00:00:00.000Z",
  },
  alternates: {
    canonical: "https://callangeorge.com/blog/website-speed-performance-guide",
  },
};

export default function WebsiteSpeedBlogPost() {
  const contentItems = [
    {
      type: "text" as const,
      heading: "Why Website Speed Matters for Scottish Businesses",
      paragraphs: [
        "Website speed isn’t just a technical detail — it’s a revenue driver. Whether you serve customers in Edinburgh, Glasgow, Fife, Aberdeen, Dundee or Inverness, a faster site means more enquiries, better Google visibility and a smoother experience on real Scottish mobile networks.",
        "Most visitors expect pages to load in a couple of seconds. If your site drags, people bounce, rankings drop and ads get more expensive. The flip side: optimise performance, and everything else gets easier.",
      ],
    },
    {
      type: "text" as const,
      heading: "The Real Cost of a Slow Website",
      paragraphs: [
        "Slow pages create a ripple effect: fewer form submissions and calls, weaker SEO signals and higher abandonment on mobile. It also hurts trust — a sluggish site feels outdated and unreliable.",
        "For local service businesses (salons, cafés, trades, gyms, clinics), every extra second can be the difference between a booked slot and a lost customer.",
      ],
      list: [
        "Higher bounce rates and lower conversion rates, especially on mobile.",
        "Reduced visibility in Google as user signals and Core Web Vitals suffer.",
        "Wasted ad spend as landing pages fail to convert.",
      ],
    },
    {
      type: "text" as const,
      heading: "How Speed Affects Your Search Rankings",
      paragraphs: [
        "Google uses real-world user experience signals to inform rankings. If your site loads quickly and responds fast to input, you’re more likely to outrank slower competitors targeting the same Scottish audiences.",
        "Performance improvements often create a virtuous cycle: better speed → improved rankings → more traffic → more leads.",
      ],
    },
    {
      type: "text" as const,
      heading: "Core Web Vitals: What to Measure in 2025+",
      paragraphs: [
        "Focus on the three Core Web Vitals that reflect real user experience:",
      ],
      list: [
        "Largest Contentful Paint (LCP): How quickly your main content appears (aim ≤ 2.5s).",
        "Interaction to Next Paint (INP): Overall interaction responsiveness (aim ≤ 200ms).",
        "Cumulative Layout Shift (CLS): Visual stability as the page loads (aim ≤ 0.1).",
      ],
    },
    {
      type: "text" as const,
      heading: "Quick Wins to Speed Up Your Website",
      paragraphs: [
        "You don’t need to rebuild your entire site to see gains. Start with high-impact fixes that move the needle fast:",
      ],
      list: [
        "Optimise images: Serve properly sized images in WebP/AVIF and lazy-load below the fold.",
        "Reduce JavaScript: Remove unused libraries, defer non-critical scripts and avoid heavy page builders.",
        "Use caching & a CDN: Leverage HTTP caching and serve assets via a CDN for faster delivery UK-wide.",
        "Choose fast hosting: Avoid slow shared hosting; use a performant host with edge caching.",
        "Preload critical assets: Fonts, hero images and above-the-fold CSS.",
      ],
    },
    {
      type: "text" as const,
      heading: "The Mobile Speed Imperative (Especially in Scotland)",
      paragraphs: [
        "Most first visits happen on mobile and often on variable 4G coverage. Your pages should feel instant on real devices, not just desktop broadband.",
        "Design mobile-first: prioritise readable content, lightweight components and fast interactions.",
      ],
      list: [
        "Test on mid-range phones over 4G, not just your desktop Mac.",
        "Avoid oversized hero videos and auto-playing media on mobile.",
        "Make tap targets large and forms minimal to speed up completion.",
      ],
    },
    {
      type: "text" as const,
      heading: "How to Measure and Monitor Performance",
      paragraphs: [
        "Measure before and after changes so you know what worked. Use both lab and field data:",
      ],
      list: [
        "Google PageSpeed Insights & Lighthouse for lab tests and guidance.",
        "Chrome User Experience (CrUX) data for real-world Core Web Vitals.",
        "WebPageTest or GTmetrix to profile waterfalls and find bottlenecks.",
        "Set up ongoing monitoring so regressions are caught early.",
      ],
    },
    {
      type: "text" as const,
      heading: "A Simple 4-Step Plan for Scottish SMEs",
      paragraphs: [
        "Apply this sequence to improve speed without breaking your site:",
      ],
      list: [
        "Audit current performance and prioritise the biggest wins.",
        "Optimise images, fonts and third-party scripts first.",
        "Measure Core Web Vitals after each change and iterate.",
        "Bake performance into your ongoing workflow (CI checks, regular audits).",
      ],
    },
    {
      type: "text" as const,
      heading: "Ready to Make Your Site Faster?",
      paragraphs: [
        "I build fast, SEO-friendly websites for Scottish small businesses. If your site is slow or underperforming, I can help you fix it and turn speed into a competitive advantage.",
      ],
    },
  ];

  return (
    <div>
      <Navbar />
      <Header title="BLOG" />
      <BlogContent
        title="Why Website Speed Matters for Scottish Businesses"
        publishedAt="2025-03-08"
        readTime="7 min read"
        category="Performance"
        tags={["performance", "Core Web Vitals", "site speed", "Scotland"]}
        author={{
          name: "Callan George",
          bio: "Scotland-based Web Designer & SEO Specialist",
        }}
        excerpt="Your website’s speed directly affects enquiries, sales and rankings. A practical performance guide for Scottish SMEs — with steps you can implement today."
        contentItems={contentItems}
      />
      <FinalCTA />
      <Footer />
    </div>
  );
}
