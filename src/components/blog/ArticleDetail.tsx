import Link from "next/link";
import type { Article } from "@/data/articles";
import { getRelatedArticles } from "@/data/articles";

export function ArticleDetail({ article }: { article: Article }) {
  const related = getRelatedArticles(article.slug);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow">
            {article.category} · {article.readTime}
          </span>
          <h1>{article.title}</h1>
          <p>
            {article.date} · Betpro Insights
          </p>
        </div>
      </div>

      <div className="container article-layout">
        <article className="article-body">
          {article.sections.map((section) => (
            <section key={section.id} id={section.id}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </section>
          ))}

          <div className="related">
            <h2>More from Betpro</h2>
            <div className="blog-grid" style={{ marginTop: "1.25rem" }}>
              {related.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
                  <div className="meta">
                    <span>{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </article>

        <aside className="toc">
          <h3>On this page</h3>
          {article.sections.map((section) => (
            <a key={section.id} href={`#${section.id}`}>
              {section.heading}
            </a>
          ))}
          <Link href="/blog" style={{ marginTop: "1.25rem", color: "var(--bp-mint)" }}>
            ← All insights
          </Link>
        </aside>
      </div>
    </>
  );
}
