import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArticleDetail } from "@/components/blog/ArticleDetail";
import { articles, getArticleBySlug } from "@/data/articles";
import { SITE_URL } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article" };

  const title = article.seo?.title ?? article.title;
  const description = article.seo?.description ?? article.excerpt;
  const url = `${SITE_URL}/blog/${article.slug}`;

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "article",
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const url = `${SITE_URL}/blog/${article.slug}`;
  const description = article.seo?.description ?? article.excerpt;
  const headline = article.seo?.headline ?? article.title;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline,
    description,
    url,
    author: {
      "@type": "Organization",
      name: "Betpro",
    },
    publisher: {
      "@type": "Organization",
      name: "Betpro",
      url: `${SITE_URL}/`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Header variant="inner" active="blog" />
      <main>
        <ArticleDetail article={article} />
      </main>
      <Footer />
    </>
  );
}
