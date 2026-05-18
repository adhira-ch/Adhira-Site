import "server-only";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { getPublishedArticles } from "@/lib/articles.server";

const CHAT_CONTEXT_PATH = join(process.cwd(), "content/chat-context.md");

export interface KnowledgeChunk {
  id: string;
  topic: string;
  content: string;
  keywords: string[];
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function loadChatContextMarkdown(): string {
  try {
    return readFileSync(CHAT_CONTEXT_PATH, "utf8").trim();
  } catch {
    return "";
  }
}

export function buildKnowledgeChunks(): KnowledgeChunk[] {
  const markdown = loadChatContextMarkdown();
  if (!markdown) return [];

  const parts = markdown.split(/^## /m).filter(Boolean);

  return parts.map((block, index) => {
    const newline = block.indexOf("\n");
    const topic =
      newline === -1 ? block.trim() : block.slice(0, newline).trim();
    const content =
      newline === -1 ? "" : block.slice(newline + 1).trim();

    const topicWords = topic
      .toLowerCase()
      .split(/[\s/&]+/)
      .filter((w) => w.length > 2);

    const contentWords =
      content
        .toLowerCase()
        .match(/\b[a-z][a-z0-9]{3,}\b/g)
        ?.slice(0, 40) ?? [];

    return {
      id: slugify(topic) || `section-${index}`,
      topic,
      content,
      keywords: [...new Set([...topicWords, ...contentWords])],
    };
  });
}

function buildArticlesKnowledgeSection(): string {
  const articles = getPublishedArticles();
  if (articles.length === 0) {
    return "No published articles yet. The blog page shows a coming-soon message.";
  }

  return articles
    .map(
      (a) =>
        `### ${a.title} (${a.date})\n${a.excerpt}${a.tags?.length ? `\nTags: ${a.tags.join(", ")}` : ""}`
    )
    .join("\n\n");
}

export function buildGeminiSystemPrompt(): string {
  const knowledge = loadChatContextMarkdown();
  const articlesSection = buildArticlesKnowledgeSection();

  if (!knowledge) {
    return "You are a portfolio assistant. No knowledge file was found at content/chat-context.md.";
  }

  return [
    knowledge,
    "",
    "---",
    "",
    "## Published articles (auto-loaded from content/articles/)",
    articlesSection,
    "",
    "## Response style (always follow)",
    "- Sound like a knowledgeable colleague in conversation — never like a website or brochure.",
    "- Do not paste bullet lists from the knowledge base unless the user asks for a list.",
    "- Do not say \"according to my knowledge base\" or quote sections verbatim.",
    "- Short question → short answer. Open-ended question → a few clear sentences, then offer to go deeper.",
    "- If unsure, say so and suggest LinkedIn or the About / Projects pages on the portfolio.",
  ].join("\n");
}
