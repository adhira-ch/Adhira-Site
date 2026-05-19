"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { FaComments, FaXmark } from "react-icons/fa6";
import Chatbot from "@/components/Chatbot";
import { chat, site } from "@/lib/content";

export default function ChatWidget() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hintVisible, setHintVisible] = useState(true);

  const isChatPage = pathname === "/chat" || pathname === "/chatbot";

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (open) setHintVisible(false);
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    if (open) {
      document.addEventListener("keydown", onKey);
      return () => document.removeEventListener("keydown", onKey);
    }
  }, [open, close]);

  if (isChatPage) return null;

  return (
    <motion.div
      className="chat-widget-root"
      initial={false}
      animate={{ opacity: 1 }}
    >
      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Close chat overlay"
              className="chat-widget-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`Chat with ${site.firstName}'s portfolio assistant`}
              className="chat-widget-panel"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 380, damping: 32 }}
            >
              <Chatbot variant="widget" onClose={close} />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="chat-widget-launcher-wrap">
        <motion.button
          type="button"
          className="chat-widget-launcher"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close chat" : "Open chat assistant"}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <FaXmark className="w-6 h-6" />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <FaComments className="w-6 h-6" />
              </motion.span>
            )}
          </AnimatePresence>
          {!open && (
            <span className="chat-widget-launcher-pulse" aria-hidden />
          )}
        </motion.button>

        <AnimatePresence>
          {!open && hintVisible && (
            <motion.div
              className="chat-widget-hint"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ delay: 1.2 }}
            >
              <button
                type="button"
                className="chat-widget-hint-dismiss"
                onClick={() => setHintVisible(false)}
                aria-label="Dismiss hint"
              >
                <FaXmark className="w-3 h-3" />
              </button>
              Ask about {site.firstName}&apos;s work
            </motion.div>
          )}
        </AnimatePresence>

        {!open && (
          <span className="sr-only">{chat.assistantName}</span>
        )}
      </div>
    </motion.div>
  );
}
