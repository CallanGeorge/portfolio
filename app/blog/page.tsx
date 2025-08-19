import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import BlogSection from "@/components/BlogSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import styles from "../page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Web Design & SEO Blog — Practical Guides for Scottish Small Businesses",
  description:
    "Actionable tips on web design, site speed and local SEO for Scottish SMEs across Fife & Edinburgh.",
  keywords: [
    "web design blog",
    "SEO tips Scotland",
    "web performance",
    "freelance web designer",
    "Edinburgh SEO",
    "Fife web design",
    "digital marketing Scotland",
  ],
  openGraph: {
    title:
      "Web Design & SEO Blog — Practical Guides for Scottish Small Businesses",
    description:
      "Actionable insights on web design, SEO and performance for Scottish SMEs.",
    url: "https://callangeorge.com/blog",
    siteName: "Freelance Web Designer & SEO — Fife & Edinburgh",
    locale: "en_GB",
    type: "website",
  },
  alternates: {
    canonical: "https://callangeorge.com/blog",
  },
};

export default function BlogPage() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Header
        title="BLOG"
        subtitle="INSIGHTS, TIPS, AND THOUGHTS ON WEB DEVELOPMENT & BUSINESS GROWTH."
      />
      <BlogSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
