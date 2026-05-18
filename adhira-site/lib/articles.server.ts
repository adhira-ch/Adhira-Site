import "server-only";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import type { Article } from "@/lib/article-types";

const ARTICLES_DIR = join(process.cwd(), "content/articles");

function isArticleFile(filename: string): boolean {
  if (!filename.endsWith(".json")) return false;
  if (filename.startsWith("_")) return false;
  if (filename.includes("template")) return false;
  return true;
}

function parseArticleFile(filename: string): Article | null {
  try {
    const raw = readFileSync(join(ARTICLES_DIR, filename), "utf8");
    const data = JSON.parse(raw) as Article;

    if (data.published === false) return null;
    if (!data.slug?.trim() || !data.title?.trim() || !data.date || !data.body?.trim()) {
      console.warn(`[articles] Skipping ${filename}: missing slug, title, date, or body`);
      return null;
    }

    return {
      ...data,
      slug: data.slug.trim(),
      title: data.title.trim(),
      excerpt: data.excerpt?.trim() || `${data.body.slice(0, 160).trim()}…`,
      author: data.author?.trim() || "Adhira Choudhury",
    };
  } catch (err) {
    console.warn(`[articles] Failed to parse ${filename}:`, err);
    return null;
  }
}

export function getPublishedArticles(): Article[] {
  if (!existsSync(ARTICLES_DIR)) return [];

  return readdirSync(ARTICLES_DIR)
    .filter(isArticleFile)
    .map(parseArticleFile)
    .filter((a): a is Article => a !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getArticleBySlug(slug: string): Article | null {
  return getPublishedArticles().find((a) => a.slug === slug) ?? null;
}

export function getArticleSlugs(): string[] {
  return getPublishedArticles().map((a) => a.slug);
}
