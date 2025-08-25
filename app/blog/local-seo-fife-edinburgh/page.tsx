import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import BlogContent from "@/components/BlogContent";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Local Businesses in Fife & Edinburgh Can Rank Higher on Google",
  description:
    "A straightforward guide for local businesses in Fife and Edinburgh on how to appear higher in Google search results — and how professional web design and SEO can help you get there.",
  keywords: [
    "local SEO Scotland",
    "Edinburgh local SEO",
    "Fife local SEO",
    "Google Business Profile",
    "mobile friendly websites",
    "website speed SEO",
    "reviews for SEO",
    "calls to action websites",
    "Scottish business websites",
  ],
  openGraph: {
    title: "How Local Businesses in Fife & Edinburgh Can Rank Higher on Google",
    description:
      "Simple, practical advice for Fife and Edinburgh businesses to get more customers from Google with the right website design and SEO.",
    url: "https://callangeorge.com/blog/local-seo-fife-edinburgh",
    siteName: "Freelance Web Designer & SEO — Fife & Edinburgh",
    locale: "en_GB",
    type: "article",
    publishedTime: "2025-08-25T00:00:00.000Z",
  },
  alternates: {
    canonical: "https://callangeorge.com/blog/local-seo-fife-edinburgh",
  },
};

export default function LocalSEOFifeEdinburghPost() {
  const contentItems = [
    {
      type: "text" as const,
      heading: "Why Showing Up on Google Matters",
      paragraphs: [
        "Think about the last time you looked for a café, hairdresser, or tradesperson. Chances are, you searched on Google and clicked one of the top results. Your potential customers in Fife and Edinburgh do exactly the same. If your business doesn’t show up, you’re losing enquiries to competitors who do. The good news? There are clear steps you can take to improve your chances of being seen.",
      ],
    },
    {
      type: "text" as const,
      heading: "Mobile-Friendly Websites Win More Customers",
      paragraphs: [
        "Most people now search on their phone. If your site is hard to use on a small screen—tiny text, buttons that don’t work, or awkward menus—people will quickly leave. Google notices this too and pushes mobile-friendly sites higher up. I design every site with mobile in mind first, so your business looks professional and works smoothly whether someone is searching in a café in Edinburgh or on the go in Fife.",
      ],
    },
    {
      type: "text" as const,
      heading: "Why Website Speed Makes a Difference",
      paragraphs: [
        "We’ve all clicked on a site that takes ages to load and given up. Slow sites lose customers and drop down the rankings. Google prefers fast, easy-to-use websites. By building lightweight websites and optimising images and code, I make sure your site loads quickly and keeps customers engaged. A fast site doesn’t just help rankings—it means more people actually stick around to call or book.",
      ],
    },
    {
      type: "text" as const,
      heading: "Clear Content That Google (and Customers) Understand",
      paragraphs: [
        "Google needs to understand what your business does and where you do it. That means having clear page titles and content that mention your services and location in a natural way. For example, instead of a homepage that just says 'Welcome', a better title might be 'Family Hairdresser in Dunfermline'. I help write content that speaks directly to your customers while also giving Google the right signals to rank you locally.",
      ],
    },
    {
      type: "text" as const,
      heading:
        "Your Google Business Profile Is Just as Important as Your Website",
      paragraphs: [
        "When someone searches 'plumber near me', the first thing they see is the map with local businesses. That’s powered by your Google Business Profile. Keeping this up to date with your correct address, phone number, opening hours, photos, and reviews is crucial. I help businesses claim, optimise, and manage their profiles so they show up in that all-important map section—and get more local calls.",
      ],
    },
    {
      type: "text" as const,
      heading: "Reviews Build Trust and Improve Rankings",
      paragraphs: [
        "Having lots of recent positive reviews not only convinces new customers to choose you, it also helps push your business higher in local results. Asking for reviews can feel awkward, but it’s a simple system once you know how. I help set up an easy review process so happy customers can quickly leave feedback on Google, boosting both your credibility and your visibility.",
      ],
    },
    {
      type: "text" as const,
      heading: "Clear Calls-to-Action: Turning Visitors into Customers",
      paragraphs: [
        "It’s one thing to get people to your site—it’s another to get them to act. Every page should make it easy to contact you, book an appointment, or request a quote. That might mean a clear 'Call Now' button on mobile or a short contact form that actually works. I design sites that guide visitors naturally towards taking the next step, so you’re not just getting clicks, you’re getting customers.",
      ],
    },
    {
      type: "text" as const,
      heading: "How I Can Help Your Business Rank Higher",
      paragraphs: [
        "For local businesses, SEO can feel confusing and overly technical. My job is to make it simple: build you a professional, mobile-first website that loads fast, is easy to use, and gives Google all the right signals. I’ll also help you set up and manage your Google Business Profile, collect reviews, and write clear content that makes your services stand out. The result? More visibility in Fife and Edinburgh searches, more website visits, and more customers contacting you.",
      ],
    },
  ];

  return (
    <div>
      <Navbar />
      <Header title="BLOG" />
      <BlogContent
        title="How rank on Google: Fife and Edinburgh"
        publishedAt="2025-08-25"
        readTime="6 min read"
        category="SEO"
        tags={[
          "local SEO",
          "mobile websites",
          "website speed",
          "Google Business Profile",
          "reviews",
          "calls to action",
          "Scotland",
        ]}
        author={{
          name: "Callan George",
          bio: "Web Designer & SEO Specialist helping local businesses across Fife and Edinburgh get found online.",
        }}
        excerpt="A straightforward guide for local businesses in Fife and Edinburgh on how to appear higher in Google search results — and how professional web design and SEO can help you get there."
        contentItems={contentItems}
      />
      <FinalCTA />
      <Footer />
    </div>
  );
}
