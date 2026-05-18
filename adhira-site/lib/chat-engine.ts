export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export async function sendChatMessage(
  messages: ChatMessage[]
): Promise<{ reply: string; mode: "gemini" | "local" | "api" }> {
  const lastUser = [...messages].reverse().find((m) => m.role === "user");
  if (!lastUser?.content.trim()) {
    return { reply: "Please enter a message.", mode: "local" };
  }

  const apiUrl =
    process.env.NEXT_PUBLIC_CHAT_API_URL ||
    (typeof window !== "undefined" ? "/api/chat" : "");

  if (!apiUrl) {
    return {
      reply: "Chat API is not configured.",
      mode: "local",
    };
  }

  const res = await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages }),
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(
      (data as { error?: string }).error ?? `API error ${res.status}`
    );
  }

  return {
    reply:
      (data as { reply?: string }).reply ??
      "I couldn't generate a response. Please try again.",
    mode:
      (data as { mode?: string }).mode === "gemini"
        ? "gemini"
        : (data as { mode?: string }).mode === "local"
          ? "local"
          : "api",
  };
}
