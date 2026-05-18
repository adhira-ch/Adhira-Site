import "server-only";
import Fuse from "fuse.js";
import {
  buildKnowledgeChunks,
  type KnowledgeChunk,
} from "@/lib/chat-context.server";
import { chat } from "@/lib/content";

const chunks = buildKnowledgeChunks();

const fuse = new Fuse(chunks, {
  keys: [
    { name: "keywords", weight: 0.45 },
    { name: "topic", weight: 0.3 },
    { name: "content", weight: 0.25 },
  ],
  threshold: 0.38,
  ignoreLocation: true,
  includeScore: true,
  useExtendedSearch: true,
});

const STOPWORDS = new Set([
  "a", "an", "the", "is", "are", "was", "were", "do", "does", "did",
  "where", "what", "who", "how", "when", "why", "she", "her", "he", "his",
  "they", "them", "i", "me", "my", "you", "your", "at", "in", "on", "for",
  "to", "of", "and", "or", "right", "now", "currently", "tell", "about",
  "adhira", "choudhury",
]);

type IntentRule = { pattern: RegExp; chunkIds: string[] };

const INTENT_RULES: IntentRule[] = [
  {
    pattern:
      /\b(where|what).*(work|job|employ)|\b(work|job|employ).*(now|today|current|present)|\bmckinsey\b/i,
    chunkIds: ["work-experience-detailed", "linkedin-profile-summary"],
  },
  {
    pattern:
      /\b(school|college|university|education|study|studied|graduate|graduated|degree|gatech|georgia tech)\b/i,
    chunkIds: ["education-coursework-and-honors"],
  },
  {
    pattern: /\b(skill|programming|tech stack|technologies|languages)\b/i,
    chunkIds: ["skills-and-expertise"],
  },
  {
    pattern: /\b(contact|linkedin|github|reach|connect|email)\b/i,
    chunkIds: ["collaboration-and-contact"],
  },
  {
    pattern: /\b(project|built|startup|partnr|bloodsight|seed|van\.?go)\b/i,
    chunkIds: ["projects-detailed"],
  },
  {
    pattern: /\b(tennis|federer|painting|hobby|interest)\b/i,
    chunkIds: ["personal-interests-and-personality"],
  },
];

function tokenize(query: string): string[] {
  return query
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 1 && !STOPWORDS.has(w));
}

function matchIntent(query: string): KnowledgeChunk | null {
  for (const rule of INTENT_RULES) {
    if (!rule.pattern.test(query)) continue;
    for (const id of rule.chunkIds) {
      const chunk = chunks.find((c) => c.id === id);
      if (chunk) return chunk;
    }
  }
  return null;
}

function scoreByKeywords(query: string): KnowledgeChunk | null {
  const tokens = tokenize(query);
  if (tokens.length === 0) return null;

  let best: { chunk: KnowledgeChunk; score: number } | null = null;

  for (const chunk of chunks) {
    const keywordSet = new Set(
      chunk.keywords.flatMap((k) => k.toLowerCase().split(/\s+/))
    );
    let hits = 0;
    for (const token of tokens) {
      if (keywordSet.has(token)) hits += 1;
      else if ([...keywordSet].some((k) => k.includes(token) || token.includes(k))) {
        hits += 0.5;
      }
    }
    const score = hits / tokens.length;
    if (score > 0 && (!best || score > best.score)) {
      best = { chunk, score };
    }
  }

  return best && best.score >= 0.35 ? best.chunk : null;
}

function formatChunkAsReply(chunk: KnowledgeChunk): string {
  const lines = chunk.content
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .filter((l) => !l.startsWith("|") && !l.startsWith("---"));

  if (lines.length <= 4) return lines.join("\n");

  return `${lines.slice(0, 4).join("\n")}\n\n(Ask if you'd like more on ${chunk.topic.toLowerCase()}.)`;
}

export function getLocalChatReply(query: string): string {
  const trimmed = query.trim();
  if (!trimmed) {
    return "Please ask a question about Adhira's background, work, or projects.";
  }

  const lower = trimmed.toLowerCase();
  if (/^(hi|hello|hey|yo)\b/.test(lower)) return chat.welcome;
  if (/thank/.test(lower)) {
    return "You're welcome! Feel free to ask anything else about Adhira's experience or projects.";
  }
  if (/linkedin|github|contact|reach|connect/.test(lower)) {
    const contactChunk = chunks.find((c) => c.id === "collaboration-and-contact");
    if (contactChunk) return formatChunkAsReply(contactChunk);
    return "You can connect with Adhira on LinkedIn (linkedin.com/in/adhira-choudhury) or GitHub (github.com/adhira-ch).";
  }

  const intentChunk = matchIntent(trimmed);
  if (intentChunk) return formatChunkAsReply(intentChunk);

  const keywordChunk = scoreByKeywords(trimmed);
  if (keywordChunk) return formatChunkAsReply(keywordChunk);

  const tokens = tokenize(trimmed);
  const fuseQuery =
    tokens.length > 0 ? tokens.map((t) => `'${t}`).join(" ") : trimmed;
  const results = fuse.search(fuseQuery, { limit: 3 });

  if (results.length === 0 || (results[0].score ?? 1) > 0.5) {
    return "I don't have specific information on that. Try asking about her work at McKinsey or Deloitte, projects like Partnr or BloodSight AI, education at Georgia Tech, or how to get in touch.";
  }

  const top = results[0].item;
  const related = results
    .slice(1)
    .filter((r) => (r.score ?? 1) < 0.45)
    .map((r) => r.item.topic);

  let reply = formatChunkAsReply(top);
  if (related.length > 0) {
    reply += `\n\nYou might also ask about: ${related.slice(0, 2).join(", ")}.`;
  }
  return reply;
}
