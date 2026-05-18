import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import Footer from "@/components/Footer";
import { FloatingDock } from "@/components/ui/FloatingDock";
import { getArticleBySlug, getArticleSlugs } from "@/lib/articles.server";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article not found" };
  return {
    title: `${article.title} | Adhira Choudhury`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <main className="relative dark:bg-black-100 flex flex-col overflow-hidden mx-auto sm:px-10 px-5 min-h-screen pb-24">
      <FloatingDock
        currentPage="Blog"
        desktopClassName="flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4"
        mobileClassName="fixed bottom-0 right-0"
      />

      <article className="relative z-10 max-w-3xl w-full mx-auto pt-32 pb-12">
        <Link
          href="/blog"
          className="text-sm font-medium text-violet-600 dark:text-violet-300 hover:underline mb-8 inline-block"
        >
          ← Back to articles
        </Link>

        <time
          dateTime={article.date}
          className="text-xs font-medium text-violet-600 dark:text-violet-300"
        >
          {new Date(article.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>

        <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white tracking-tight">
          {article.title}
        </h1>

        {article.subtitle && (
          <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
            {article.subtitle}
          </p>
        )}

        <p className="mt-4 text-sm text-neutral-500">
          By {article.author}
        </p>

        {article.tags && article.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-violet-500/10 px-2.5 py-0.5 text-xs font-medium text-violet-700 dark:text-violet-200"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="article-prose mt-10 max-w-none">
          <ReactMarkdown>{article.body}</ReactMarkdown>
        </div>
      </article>

      <Footer />
    </main>
  );
}
