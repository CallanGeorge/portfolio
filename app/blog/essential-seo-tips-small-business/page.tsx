import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import BlogContent from "@/components/BlogContent";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "5 Essential SEO Tips for Scottish Small Business Websites | Callan George",
  description:
    "Practical SEO advice for Scottish small businesses. Learn how to rank in Google across Edinburgh, Glasgow, Fife, Aberdeen, Dundee & Inverness — from a Scotland-based web designer.",
  keywords: [
    "SEO Scotland",
    "Scottish small business SEO",
    "Edinburgh SEO",
    "Glasgow SEO",
    "Fife web design",
    "Aberdeen SEO",
    "Dundee web design",
    "Inverness SEO",
    "local SEO Scotland",
    "Scottish web designer",
    "small business websites Scotland",
    "Google Business Profile Scotland",
  ],
  openGraph: {
    title:
      "5 Essential SEO Tips for Scottish Small Business Websites | Callan George",
    description:
      "Five proven, local-first SEO strategies to help Scottish small businesses rank higher in Google and win more customers.",
    url: "https://callangeorge.com/blog/essential-seo-tips-small-business-scotland",
    siteName: "Callan George - Web Designer & SEO Specialist",
    locale: "en_GB",
    type: "article",
    publishedTime: "2025-03-15T00:00:00.000Z",
  },
  alternates: {
    canonical:
      "https://callangeorge.com/blog/essential-seo-tips-small-business-scotland",
  },
};

export default function SEOTipsBlogPost() {
  const contentItems = [
    {
      type: "text" as const,
      heading: "5 Essential SEO Tips for Scottish Small Business Websites",
      paragraphs: [
        "If you run a business in Scotland — whether you’re based in Edinburgh, Glasgow, Aberdeen, Dundee, Inverness, or across Fife — your customers are searching for you on Google every day. If they can’t find you, they’ll find a competitor.",
        "As a Scotland-based web designer and SEO specialist, I help small businesses get found online. Below are five practical, Scotland-focused SEO tactics you can start using today to boost visibility and enquiries.",
      ],
    },
    {
      type: "text" as const,
      heading: "1) Focus on Local SEO for Scotland",
      paragraphs: [
        "Your local presence is your superpower. Local search results often appear above national listings, which means you can outrank bigger brands in your area.",
        "Complete and maintain your Google Business Profile, keep your details consistent, and earn reviews from real local customers.",
      ],
      list: [
        "Claim & optimise your Google Business Profile (address, phone, opening hours, photos).",
        "Ask happy customers for reviews — and reply to every review.",
        "Use location terms in titles & meta descriptions (e.g. “Edinburgh coffee shop”, “Glasgow personal trainer”).",
        "Keep NAP (Name, Address, Phone) consistent across your website and listings.",
      ],
    },
    {
      type: "text" as const,
      heading: "2) Target Long-Tail, Location-Specific Keywords",
      paragraphs: [
        "Broad terms like “web design” or “SEO services” are competitive and vague. Long-tail phrases match how real customers search — and they convert better.",
      ],
      list: [
        "Examples: “affordable SEO for small businesses in Edinburgh”, “best web designer for cafes in Glasgow”, “accountant for contractors in Fife”.",
        "Create one focused page or article per intent; avoid cramming multiple topics into a single page.",
      ],
    },
    {
      type: "text" as const,
      heading: "3) Publish Helpful, Problem-Solving Content",
      paragraphs: [
        "Google rewards sites that genuinely help users. Answer the questions your customers ask before they contact you.",
        "Use Scottish, real-world examples to build trust and relevance.",
      ],
      list: [
        "Plumber in Dundee? “How to stop a dripping tap (and when to call a pro)”.",
        "Café in Aberdeen? “How to brew great coffee at home — our barista tips”.",
        "PT in Inverness? “10 beginner workouts for busy professionals”.",
      ],
    },
    {
      type: "text" as const,
      heading: "4) Improve Website Speed (It Helps SEO & Conversions)",
      paragraphs: [
        "A fast website keeps people on the page and signals quality to Google. Even a 1-second improvement can lift conversion rates.",
      ],
      list: [
        "Compress and properly size images (WebP/AVIF where possible).",
        "Use a reliable host/CDN and avoid heavy, unnecessary plugins/scripts.",
        "Audit with Lighthouse/PageSpeed Insights and fix the biggest bottlenecks first.",
      ],
    },
    {
      type: "text" as const,
      heading: "5) Earn Quality Local Backlinks",
      paragraphs: [
        "Relevant Scottish links beat dozens of low-quality directory links. Aim for authenticity and locality.",
      ],
      list: [
        "Partner with nearby businesses for cross-promotions and case studies.",
        "Sponsor local teams or events; request a link from organisers’ sites.",
        "Contribute articles to Scottish industry blogs or community sites.",
        "Join your local Chamber of Commerce or trade associations and get listed.",
      ],
    },
    {
      type: "text" as const,
      heading: "Need a Website That Ranks in Scotland?",
      paragraphs: [
        "SEO isn’t a one-off task — it’s consistent, customer-focused work. If you want a professional, SEO-optimised website designed to rank in Scottish searches and turn visitors into enquiries, I can help.",
        "I build fast, mobile-friendly sites with on-page SEO best practices from day one, tailored to your local market.",
      ],
      list: [
        "📍 Based in Edinburgh — working with businesses across Scotland.",
        "💬 Ready to grow? Get in touch and let’s plan your next steps.",
      ],
    },
  ];

  return (
    <div>
      <Navbar />

      <Header title="BLOG" />

      <BlogContent
        title="5 Essential SEO Tips for Scottish Small Business Websites"
        publishedAt="2025-03-15"
        readTime="5 min read"
        category="SEO"
        tags={[
          "SEO Scotland",
          "Local SEO",
          "Scottish Small Business",
          "Edinburgh SEO",
          "Glasgow Web Design",
        ]}
        author={{
          name: "Callan George",
          bio: "Scotland-based Web Designer & SEO Specialist",
        }}
        excerpt="Five proven, local-first SEO tactics for Scottish small businesses. Learn how to rank in Google across Edinburgh, Glasgow, Fife, Aberdeen, Dundee & Inverness — and turn searches into enquiries."
        contentItems={contentItems}
      />

      <FinalCTA />
      <Footer />
    </div>
  );
}
