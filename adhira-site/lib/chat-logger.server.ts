import { appendFile, mkdir } from "fs/promises";
import path from "path";

const LOG_DIR = path.join(process.cwd(), "logs");
const LOG_FILE = path.join(LOG_DIR, "chat.log");

export type ChatLogEntry = {
  question: string;
  mode: "gemini" | "local";
  status: "ok" | "error";
  latencyMs: number;
  responseChars?: number;
  error?: string;
};

// Appends a single JSON line per interaction. Falls back to stdout when the
// filesystem is read-only (e.g. serverless), so logs are never silently lost.
export async function logChatInteraction(entry: ChatLogEntry): Promise<void> {
  const line =
    JSON.stringify({ timestamp: new Date().toISOString(), ...entry }) + "\n";

  try {
    await mkdir(LOG_DIR, { recursive: true });
    await appendFile(LOG_FILE, line, "utf8");
  } catch {
    process.stdout.write(`[chat-log] ${line}`);
  }
}
