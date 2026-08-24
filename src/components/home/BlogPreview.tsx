import Image from "next/image";
import Link from "next/link";
import { articles } from "@/data/articles";

export function BlogPreview() {
  const posts = articles.slice(0, 3);

  return (
    <section className="section" id="insights">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Insights</span>
          <h2>Notes from the desk</h2>
          <p>
            Short reads on markets, discipline, and how to use Betpro with a clear head.
          </p>
        </div>
        <div className="blog-grid">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
              <div className="blog-card-media">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 800px) 100vw, 33vw"
                />
              </div>
              <div className="meta">
                <span>{post.category}</span>
                <span>{post.readTime}</span>
              </div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <span className="more">Read article →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
