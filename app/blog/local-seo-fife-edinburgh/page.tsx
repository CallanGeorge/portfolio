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
        "Think about the last time you searched for a café, hairdresser, or plumber. Chances are, you clicked one of the top results. Your potential customers in Fife and Edinburgh do exactly the same. If your business doesn’t show up, those enquiries often go to a competitor. The good news is there are clear, simple steps you can take to improve your chances of being seen.",
      ],
    },
    {
      type: "text" as const,
      heading: "1. Make Sure Your Website Works on Mobile",
      paragraphs: [
        "Most local searches happen on phones. If your site has tiny text, menus that are hard to tap, or buttons that don’t work properly, people will leave fast—and Google notices. A mobile-friendly site keeps visitors around longer and helps your rankings. To check yours, simply open your website on your phone. If it feels awkward, that’s a sign changes are needed.",
      ],
    },
    {
      type: "text" as const,
      heading: "2. Speed Up Your Website",
      paragraphs: [
        "A slow website is one of the fastest ways to lose a potential customer. Google also rewards faster sites with higher positions. You can test your speed using Google’s free PageSpeed Insights tool. Compressing large images, reducing unnecessary plugins, and using modern hosting are all ways to make your site faster.",
      ],
    },
    {
      type: "text" as const,
      heading: "3. Use Clear, Local Content",
      paragraphs: [
        "Google needs to know what you do and where you do it. Instead of vague titles like 'Welcome', use something descriptive such as 'Family Hairdresser in Dunfermline'. Mentioning your service and location naturally throughout your pages helps customers and search engines alike. Avoid keyword stuffing—just write clearly for real people.",
      ],
    },
    {
      type: "text" as const,
      heading: "4. Optimise Your Google Business Profile",
      paragraphs: [
        "When people search 'near me', the map section is often the first thing they click. That’s powered by your Google Business Profile. Make sure your profile is claimed, your contact details are correct, and your opening hours and photos are up to date. Encourage customers to leave reviews—fresh activity helps your profile show up more often.",
      ],
    },
    {
      type: "text" as const,
      heading: "5. Collect Reviews Regularly",
      paragraphs: [
        "Reviews not only build trust with new customers, they also signal to Google that your business is active and reliable. Set up a simple process: after completing a job or service, politely ask happy customers if they’d be willing to leave a quick review. The more recent and genuine reviews you have, the more likely you are to rank above competitors.",
      ],
    },
    {
      type: "text" as const,
      heading: "6. Use Clear Calls-to-Action",
      paragraphs: [
        "Getting visitors is only half the battle—turning them into customers is what really matters. Each page should make it obvious how to take the next step, whether that’s a 'Call Now' button, an online booking link, or a simple contact form. Make sure these work smoothly on mobile as well as desktop.",
      ],
    },
    {
      type: "text" as const,
      heading: "Putting It All Together",
      paragraphs: [
        "Ranking locally on Google comes down to a few essentials: a fast, mobile-friendly website, clear and locally focused content, an optimised Google Business Profile, and steady flow of reviews. Get those right and you’ll already be ahead of many competitors.",
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
