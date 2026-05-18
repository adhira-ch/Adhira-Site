import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import type { Article } from "@/lib/article-types";
import { pages } from "@/lib/content";

type BlogMainProps = {
  articles: Article[];
};

export default function BlogMain({ articles }: BlogMainProps) {
  const t = pages.blog;

  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <h1 className="heading">{t.title}</h1>

      {articles.length === 0 ? (
        <div className="mt-16 max-w-lg mx-auto text-center rounded-3xl border border-violet-500/20 bg-violet-500/5 px-8 py-12">
          <p className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
            {t.emptyTitle}
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
            {t.emptySubtitle}
          </p>
        </div>
      ) : (
        <ul className="mt-16 grid gap-6 max-w-3xl mx-auto">
          {articles.map((article) => (
            <li key={article.slug}>
              <Link
                href={`/blog/${article.slug}`}
                className="group block rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-sm p-6 transition-all hover:border-violet-500/40 hover:shadow-lg hover:shadow-violet-500/10"
              >
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
                <h2 className="mt-2 text-xl font-bold text-neutral-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-300 transition-colors">
                  {article.title}
                </h2>
                {article.subtitle && (
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    {article.subtitle}
                  </p>
                )}
                <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-400 line-clamp-3">
                  {article.excerpt}
                </p>
                {article.tags && article.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-violet-500/10 px-2.5 py-0.5 text-[11px] font-medium text-violet-700 dark:text-violet-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
