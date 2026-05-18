import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI, type Content } from "@google/generative-ai";
import { buildGeminiSystemPrompt } from "@/lib/chat-context.server";
import { getLocalChatReply } from "@/lib/chat-local.server";

export const runtime = "nodejs";

const DEFAULT_GEMINI_MODEL = "gemini-2.5-flash-lite";

type IncomingMessage = { role: string; content: string };

function buildGeminiHistory(messages: IncomingMessage[]): Content[] {
  const prior = messages.slice(0, -1).filter(
    (m) =>
      (m.role === "user" || m.role === "assistant") && m.content?.trim()
  );

  const history: Content[] = [];
  for (const m of prior) {
    const role = m.role === "user" ? "user" : "model";
    const entry: Content = { role, parts: [{ text: m.content.trim() }] };

    if (history.length === 0 && role === "model") continue;

    const last = history[history.length - 1];
    if (last?.role === role) {
      const lastText = last.parts?.[0]?.text ?? "";
      last.parts = [{ text: `${lastText}\n\n${m.content.trim()}` }];
      continue;
    }

    history.push(entry);
  }

  return history;
}

export async function GET() {
  const configured = Boolean(process.env.GEMINI_API_KEY?.trim());
  return NextResponse.json({
    configured,
    model: process.env.GEMINI_MODEL ?? DEFAULT_GEMINI_MODEL,
    mode: configured ? "gemini" : "local",
  });
}

export async function POST(req: NextRequest) {
  let body: { messages?: IncomingMessage[] };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const messages = body.messages;
  if (!Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json(
      { error: "messages array is required" },
      { status: 400 }
    );
  }

  const lastUser = [...messages].reverse().find((m) => m.role === "user");
  if (!lastUser?.content.trim()) {
    return NextResponse.json({ error: "No user message found" }, { status: 400 });
  }

  const apiKey = process.env.GEMINI_API_KEY?.trim();
  if (!apiKey) {
    return NextResponse.json({
      reply: getLocalChatReply(lastUser.content),
      mode: "local",
    });
  }

  const modelName = process.env.GEMINI_MODEL ?? DEFAULT_GEMINI_MODEL;
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: modelName,
    systemInstruction: buildGeminiSystemPrompt(),
    generationConfig: {
      temperature: 0.75,
      topP: 0.92,
      maxOutputTokens: 768,
    },
  });

  const history = buildGeminiHistory(messages);

  try {
    let reply: string;

    if (history.length === 0) {
      const result = await model.generateContent(lastUser.content.trim());
      reply =
        result.response.text()?.trim() ??
        "I couldn't generate a response. Please try again.";
    } else {
      const chatSession = model.startChat({ history });
      const result = await chatSession.sendMessage(lastUser.content.trim());
      reply =
        result.response.text()?.trim() ??
        "I couldn't generate a response. Please try again.";
    }

    return NextResponse.json({ reply, mode: "gemini" });
  } catch (err) {
    console.error("Gemini error:", err);
    const message =
      err instanceof Error ? err.message : "Failed to generate response";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
