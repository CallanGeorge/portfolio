import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import styles from "../page.module.css";

export const metadata: Metadata = {
  title: "Contact | Web Designer & Developer in Fife & Edinburgh",
  description:
    "Ready to grow your business with a professional website? Contact Callan George, a web designer and developer serving small businesses in Fife and Edinburgh. Get your free consultation today.",
  keywords: [
    "contact web designer",
    "hire web developer",
    "web design consultation",
    "website quote",
    "small business web design",
    "Fife web designer",
    "Edinburgh web developer",
    "freelance web designer",
    "website development quote",
    "professional web design services",
    "local web designer Scotland",
    "custom website development",
    "responsive web design",
    "SEO web design",
    "business website design",
  ],
  openGraph: {
    title: "Contact | Professional Web Designer & Developer",
    description:
      "Ready to grow your business with a professional website? Contact Callan George for web design and development services in Fife and Edinburgh. Free consultation available.",
    url: "https://callangeorge.com/contact",
    siteName: "Callan George - Web Designer & Developer",
    images: [
      {
        url: "/default-thumbnail.webp",
        width: 1200,
        height: 630,
        alt: "Default social thumbnail",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Callan George | Professional Web Designer & Developer",
    description:
      "Ready to grow your business with a professional website? Contact Callan George for web design and development services in Fife and Edinburgh.",
    images: ["/default-thumbnail.webp"],
  },
  alternates: {
    canonical: "https://callangeorge.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Header
        title="CONTACT"
        subtitle="READY TO GROW YOUR BUSINESS? LET'S START THE CONVERSATION."
      />
      <ContactForm />
      <Footer />
    </main>
  );
}
