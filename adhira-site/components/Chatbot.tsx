"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { FaPaperPlane, FaXmark } from "react-icons/fa6";
import { chat, hero, site } from "@/lib/content";
import { type ChatMessage, sendChatMessage } from "@/lib/chat-engine";

const WELCOME: ChatMessage = {
  role: "assistant",
  content: chat.welcome,
};

function createId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

type MessageWithId = ChatMessage & { id: string };

type ChatbotProps = {
  variant?: "page" | "widget";
  onClose?: () => void;
};

export default function Chatbot({ variant = "page", onClose }: ChatbotProps) {
  const isWidget = variant === "widget";
  const [messages, setMessages] = useState<MessageWithId[]>([
    { ...WELCOME, id: "welcome" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState<string | null>(null);
  const [geminiReady, setGeminiReady] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const consecutiveErrorsRef = useRef(0);

  useEffect(() => {
    fetch("/api/chat")
      .then((res) => res.json())
      .then((data: { configured?: boolean }) => {
        if (data.configured) setGeminiReady(true);
      })
      .catch(() => setGeminiReady(false));
  }, []);

  useEffect(() => {
    if (!isWidget) return;
    const t = setTimeout(() => inputRef.current?.focus(), 300);
    return () => clearTimeout(t);
  }, [isWidget]);

  const scrollToBottom = useCallback(() => {
    requestAnimationFrame(() => {
      scrollRef.current?.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading, scrollToBottom]);

  const submitText = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const userMessage: MessageWithId = {
      id: createId(),
      role: "user",
      content: trimmed,
    };

    const history: ChatMessage[] = [
      ...messages.map(({ role, content }) => ({ role, content })),
      { role: "user", content: trimmed },
    ];

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const { reply, mode: responseMode } = await sendChatMessage(history);
      consecutiveErrorsRef.current = 0;
      setMode(responseMode);
      setMessages((prev) => [
        ...prev,
        { id: createId(), role: "assistant", content: reply },
      ]);
    } catch {
      consecutiveErrorsRef.current += 1;
      const errorMessage =
        consecutiveErrorsRef.current > 2
          ? chat.errorPersistent
          : chat.errorBusy;
      setMode("local");
      setMessages((prev) => [
        ...prev,
        {
          id: createId(),
          role: "assistant",
          content: errorMessage,
        },
      ]);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitText(input);
  };

  const clearChat = () => {
    consecutiveErrorsRef.current = 0;
    setMessages([{ ...WELCOME, id: "welcome" }]);
    setMode(null);
    inputRef.current?.focus();
  };

  const isGemini = mode === "gemini" || mode === "api" || geminiReady;
  const statusLabel =
    mode === "gemini" || mode === "api"
      ? chat.poweredBy
      : geminiReady
        ? chat.poweredBy
        : chat.noKeyHint;
  const showSuggestions = messages.length <= 2 && !loading;
  const panelClass = isWidget
    ? "chat-panel chat-panel--widget"
    : "chat-panel chat-panel--page mx-auto w-full max-w-3xl";

  return (
    <div className={panelClass}>
      <header className="chat-panel-header">
        <div className="flex items-center gap-3 min-w-0">
          <div className="relative shrink-0">
            <div className="chat-avatar-ring">
              <Image
                src={hero.photo}
                alt={site.name}
                width={isWidget ? 40 : 44}
                height={isWidget ? 40 : 44}
                className={`rounded-full object-cover ${isWidget ? "h-10 w-10" : "h-11 w-11"}`}
              />
            </div>
            <span
              className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white dark:border-neutral-900 ${
                isGemini ? "bg-emerald-500" : "bg-amber-400"
              }`}
              title={statusLabel}
            />
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-sm truncate text-neutral-900 dark:text-white">
              {chat.assistantName}
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 truncate">
              {isWidget ? chat.taglineWidget : chat.taglinePage}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1 shrink-0">
          <span
            className={`hidden sm:inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${
              isGemini
                ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300"
                : "bg-amber-500/15 text-amber-800 dark:text-amber-200"
            }`}
          >
            {statusLabel}
          </span>
          <button
            type="button"
            onClick={clearChat}
            className="h-9 w-9 rounded-full flex items-center justify-center text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            disabled={loading || messages.length <= 1}
            aria-label="Clear chat"
            title="Clear chat"
          >
            <svg
              className="w-4 h-4 opacity-60"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
          {isWidget && onClose && (
            <button
              type="button"
              onClick={onClose}
              className="h-9 w-9 rounded-full flex items-center justify-center text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Close chat"
            >
              <FaXmark className="w-4 h-4 opacity-70" />
            </button>
          )}
        </div>
      </header>

      <div
        ref={scrollRef}
        className="chat-messages"
        role="log"
        aria-live="polite"
        aria-label="Chat messages"
      >
        {messages.map((msg) => (
          <ChatBubble key={msg.id} message={msg} compact={isWidget} />
        ))}
        {loading && <TypingIndicator compact={isWidget} />}
      </div>

      {showSuggestions && (
        <div className="chat-suggestions">
          <p className="text-[11px] font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2 px-1">
            Try asking
          </p>
          <div className="flex flex-wrap gap-2">
            {(isWidget
              ? chat.suggestedPrompts.slice(0, 4)
              : chat.suggestedPrompts
            ).map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => submitText(prompt)}
                className="chat-suggestion-chip"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="chat-input-bar">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={chat.inputPlaceholder}
          className="chat-input"
          disabled={loading}
          aria-label="Chat message"
          autoComplete="off"
        />
        <button
          type="submit"
          className="chat-send-btn"
          disabled={loading || !input.trim()}
          aria-label="Send message"
        >
          {loading ? (
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
          ) : (
            <FaPaperPlane className="w-4 h-4" />
          )}
        </button>
      </form>
    </div>
  );
}

function ChatBubble({
  message,
  compact,
}: {
  message: MessageWithId;
  compact?: boolean;
}) {
  const isUser = message.role === "user";
  const avatarSize = compact ? "w-7 h-7 text-[9px]" : "w-8 h-8 text-[10px]";

  return (
    <div className={`flex gap-2.5 ${isUser ? "flex-row-reverse" : "flex-row"}`}>
      {!isUser && (
        <div className="chat-avatar-ring shrink-0 mt-1">
          <div
            className={`bg-gradient-to-br from-violet-500 to-indigo-600 text-white rounded-full flex items-center justify-center font-bold shadow-sm ${avatarSize}`}
          >
            AC
          </div>
        </div>
      )}
      <div
        className={`flex flex-col ${compact ? "max-w-[90%]" : "max-w-[88%] sm:max-w-[78%]"} ${isUser ? "items-end" : "items-start"}`}
      >
        <span className="text-[10px] font-medium text-neutral-400 mb-1 px-1">
          {isUser ? "You" : chat.assistantName}
        </span>
        <div
          className={`chat-bubble ${isUser ? "chat-bubble-user" : "chat-bubble-assistant"}`}
        >
          {message.content}
        </div>
      </div>
    </div>
  );
}

function TypingIndicator({ compact }: { compact?: boolean }) {
  const avatarSize = compact ? "w-7 h-7 text-[9px]" : "w-8 h-8 text-[10px]";

  return (
    <div className="flex gap-2.5">
      <div className="chat-avatar-ring shrink-0 mt-1">
        <div
          className={`bg-gradient-to-br from-violet-500 to-indigo-600 text-white rounded-full flex items-center justify-center font-bold ${avatarSize}`}
        >
          AC
        </div>
      </div>
      <div className="chat-bubble chat-bubble-assistant py-3.5 px-4">
        <span className="flex gap-1 items-center h-4">
          <span className="chat-typing-dot" style={{ animationDelay: "0ms" }} />
          <span className="chat-typing-dot" style={{ animationDelay: "150ms" }} />
          <span className="chat-typing-dot" style={{ animationDelay: "300ms" }} />
        </span>
      </div>
    </div>
  );
}
