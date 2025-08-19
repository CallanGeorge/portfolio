import { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import SEOContent from "@/components/SEOContent";
import FinalCTA from "../../components/FinalCTA";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title:
    "Local SEO Consultant Fife & Edinburgh — Rank Higher & Win More Enquiries",
  description:
    "Local SEO for small businesses across Fife & Edinburgh: Maps, on‑page, technical SEO and content that brings in leads. Fixed‑fee, no fluff.",
  keywords: [
    "SEO services Fife",
    "SEO Edinburgh",
    "local SEO Scotland",
    "small business SEO",
    "SEO consultant Fife",
    "Google ranking Edinburgh",
    "Google Maps SEO",
    "technical SEO",
    "content strategy",
    "backlink building",
    "SEO Kirkcaldy",
    "SEO Dunfermline",
    "SEO Leven",
  ],
  authors: [{ name: "Callan George" }],
  openGraph: {
    title:
      "Local SEO Consultant Fife & Edinburgh — Rank Higher & Win More Enquiries",
    description:
      "Local SEO for small businesses across Fife & Edinburgh: Maps, on‑page, technical SEO and content that brings in leads.",
    type: "website",
    locale: "en_GB",
    siteName: "Freelance Web Designer & SEO — Fife & Edinburgh",
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO Consultant Fife & Edinburgh",
    description:
      "Rank higher and win more enquiries with local SEO for small businesses.",
  },
  alternates: {
    canonical: "/seo-services",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "SEO Services",
};

export default function SEOServicesPage() {
  const contentItems = [
    {
      type: "text" as const,
      heading: "SEO for Local Businesses in Scotland",
      paragraphs: [
        "Whether you're a tradesperson in Kirkcaldy, a beauty salon in Dunfermline, or a fitness coach in Leven — local SEO helps you show up when people in your area search for services like yours. When done right, it puts your business in front of potential customers in two key places:",
        "Ranking in both means more visibility, more trust, and more leads — all without spending a penny on ads. It turns Google into a reliable, long-term source of new business.",
      ],
      list: [
        'Google Maps — the top 3 local listings that appear for "near me" searches',
        "Google Search — the traditional links people click when looking for a business online",
      ],
    },
    {
      type: "text" as const,
      heading: "How SEO Works (And Why It's So Powerful)",
      paragraphs: [
        "SEO (Search Engine Optimisation) is the process of making your website appear higher in search results when people search for things like:",
        "Getting to the top of Google means more visibility, more clicks, and more leads — every single day. You don't need to keep running ads. SEO is like setting up a permanent online billboard, and I help make sure your site earns that spot.",
      ],
      list: [
        '"best cafe in Fife"',
        '"joiner near me"',
        '"Fife online fitness coaching"',
      ],
    },
    {
      type: "text" as const,
      heading: "My SEO Strategy",
      paragraphs: [
        "My comprehensive approach covers all aspects of SEO to ensure your website not only ranks well but converts visitors into customers.",
      ],
    },
    {
      type: "text" as const,
      heading: "Technical SEO",
      paragraphs: [
        "Before your site can rank on Google, it needs a solid technical foundation. Search engines won't recommend a slow, broken, or confusing website — even if your content is great. Here's what I optimise first:",
        "Technical SEO isn't just a box to tick — it's the foundation that supports everything else. Get it right, and you've already outranked half your competitors.",
      ],
      list: [
        "Site speed & mobile responsiveness – 53% of mobile visitors leave if a page takes more than 3 seconds to load.",
        "Fixing crawl errors, 404s & broken links – These issues can block search engines from indexing your site properly.",
        "Clean heading structure & schema markup – Helps Google understand what your site is about and when to show it in search.",
        "Core Web Vitals – Google uses metrics like loading speed, interactivity, and layout stability as ranking factors.",
      ],
    },
    {
      type: "text" as const,
      heading: "Content Strategy",
      paragraphs: [
        "Once your site is technically sound, it's the content that brings traffic. I create and optimise content that aligns with what your ideal customers are actually searching for.",
        "I write and edit all content myself — no fluff or outsourced filler. Just clean, useful, optimised content.",
        "60% of marketers say SEO content brings in the highest quality leads — because it captures searchers when they're actively looking for a solution.",
      ],
      list: [
        "Keyword research & intent targeting – to identify the real phrases your customers type into Google.",
        "Optimising existing pages – improves ranking without needing to rebuild your site.",
        'Location-specific service pages – like "Window Cleaning Dunfermline" or "Wedding Photographer in Fife" that rank for local search terms.',
        "Blog & FAQ strategies – to capture longer-tail searches and build topical authority over time.",
      ],
    },
    {
      type: "text" as const,
      heading: "Local SEO",
      paragraphs: [
        "Local businesses rely heavily on \"near me\" searches. If you're not showing up in Google Maps, you're missing out on a big chunk of local traffic. Here's what I focus on:",
        "📍 46% of all Google searches have local intent — and 76% of those users visit a business within 24 hours. If your business isn't showing up locally, you're likely losing customers to someone who is.",
      ],
      list: [
        "Optimising your Google Business Profile – I make sure your listing includes relevant categories, services, photos, and business details. This helps you rank in the local Maps and encourages more people to call, visit, or click through.",
        "Ensuring NAP (Name, Address, Phone) consistency – I audit and correct your business details across over 50 key online directories. Inconsistent information confuses search engines and can hurt your rankings. Consistency builds trust and helps you rank better locally.",
        "Building local citations – I add your business to trustworthy local directories to reinforce your location and service area. These citations act as credibility signals for Google and help boost your visibility in local searches.",
        'Targeting "near me" and city-specific searches – I optimise your site content and service pages with keywords like "plumber in Glenrothes" or "joiner near me" so you show up when local customers are ready to book or enquire.',
      ],
    },
    {
      type: "text" as const,
      heading: "Backlink Building",
      paragraphs: [
        "Backlinks — links from other websites pointing to yours — are one of the most important ranking factors Google uses to assess trust and authority. But not all links are equal. Low-quality or spammy links can hurt your rankings, while relevant, high-authority links can move you up the search results. Here's how I build quality backlinks for your site:",
        "I don't use automated link schemes or pay-for-placement tactics. Every link is earned, relevant, and built with your long-term rankings in mind.",
        "Websites on the first page of Google have 3.8x more backlinks than those that don't rank. Quality links = higher trust, higher rankings, and more traffic.",
      ],
      list: [
        "Business directory submissions – I list your business in trusted local and industry-specific directories. These citations provide a baseline of credibility and help reinforce your business location and niche.",
        "Outreach to relevant blogs, partners, and local media – I identify opportunities to earn genuine editorial mentions or guest posts from sources your customers trust. These links carry more weight and are seen by both search engines and potential customers.",
        "Smart partnerships – I look for collaboration opportunities with aligned businesses (e.g. a wedding photographer and a florist) where both parties benefit from linking to each other. These natural, contextual links are highly valued by Google.",
      ],
    },
    {
      type: "text" as const,
      heading: "Ready to Rank Higher?",
      paragraphs: [
        "Whether you're just getting started or need to take your local rankings to the next level, I'd love to help. I work with small businesses across Fife and Edinburgh to turn websites into lead machines — and I'd be happy to do the same for you.",
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        <Header title="SEO" />
        <SEOContent
          briefTitle="Small Business SEO Services in Fife & Edinburgh"
          briefDescription="Professional SEO services that get results. I help small businesses across Fife and Edinburgh rank higher on Google, attract more local customers, and grow their online presence. From technical optimization to content strategy and local SEO, I provide comprehensive search engine optimization that drives real business growth."
          contentItems={contentItems}
        />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
