import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogListing } from "@/components/blog/BlogListing";

export const metadata: Metadata = {
  title: "Insights & Sports Guides",
  description:
    "Betpro insights on live cricket odds, football prep, and responsible play for Indian players.",
};

export default function BlogPage() {
  return (
    <>
      <Header variant="inner" active="blog" />
      <main>
        <BlogListing />
      </main>
      <Footer />
    </>
  );
}
