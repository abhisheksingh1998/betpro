import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogListing } from "@/components/blog/BlogListing";

const BLOG_TITLE = "Betpro Blog – Sports Betting & Gaming Insights";
const BLOG_DESCRIPTION =
  "Read the latest Betpro insights covering live cricket odds, football betting preparation, responsible betting and useful sports gaming tips.";
const BLOG_URL = "https://www.bpexch.games/blog";

export const metadata: Metadata = {
  title: {
    absolute: BLOG_TITLE,
  },
  description: BLOG_DESCRIPTION,
  alternates: {
    canonical: BLOG_URL,
  },
  openGraph: {
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
    url: BLOG_URL,
  },
};

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": "https://www.bpexch.games/blog#blog",
  name: "Betpro Blog",
  url: "https://www.bpexch.games/blog",
  description: "Sports betting and gaming insights from Betpro.",
  publisher: {
    "@type": "Organization",
    name: "Betpro",
    url: "https://www.bpexch.games/",
  },
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <Header variant="inner" active="blog" />
      <main>
        <BlogListing />
      </main>
      <Footer />
    </>
  );
}
