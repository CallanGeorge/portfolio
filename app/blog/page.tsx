import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import BlogSection from "@/components/BlogSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import styles from "../page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Web Development Insights & Tips | Callan George",
  description:
    "Read my latest thoughts on web development, SEO, design trends, and business growth strategies. Expert insights from an Edinburgh-based freelance web developer.",
  keywords: [
    "web development blog",
    "SEO tips",
    "web design insights",
    "freelance developer blog",
    "Edinburgh web developer",
    "business website tips",
    "web performance",
    "digital marketing",
  ],
  openGraph: {
    title: "Blog | Web Development Insights & Tips | Callan George",
    description:
      "Expert insights on web development, SEO, and business growth from an Edinburgh-based freelance developer.",
    url: "https://callangeorge.com/blog",
    siteName: "Callan George - Web Designer & Developer",
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
