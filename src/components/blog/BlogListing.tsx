import Link from "next/link";
import { articles } from "@/data/articles";

export function BlogListing() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow">Betpro insights</span>
          <h1>Market notes & player guides</h1>
          <p>
            Practical writing on live odds, football prep, and responsible play —
            written for Betpro members.
          </p>
        </div>
      </div>
      <section className="section" style={{ paddingTop: "2.5rem" }}>
        <div className="container blog-grid">
          {articles.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
              <div className="meta">
                <span>{post.category}</span>
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <span className="more">Read article →</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
