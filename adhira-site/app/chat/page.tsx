"use client";

import { FloatingDock } from "@/components/ui/FloatingDock";
import { Spotlight } from "@/components/ui/Spotlight";
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";
import { pages } from "@/lib/content";

export default function ChatPage() {
  const t = pages.chatbot;

  return (
    <main className="relative dark:bg-black-100 flex flex-col overflow-hidden mx-auto sm:px-10 px-5 min-h-screen pb-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:-left-20 md:-top-20 h-[50vh]"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[60vh] w-[40vw]"
          fill="purple"
        />
        <div className="h-full w-full dark:bg-black-100 bg-white dark:bg-dot-white/[0.15] bg-dot-black/[0.12] flex items-center justify-center absolute inset-0">
          <div className="absolute inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
      </div>

      <FloatingDock
        currentPage="Chat"
        desktopClassName="flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4"
        mobileClassName="fixed bottom-0 right-0"
      />

      <div className="relative z-10 max-w-3xl w-full mx-auto pt-32 pb-8">
        <h1 className="text-center text-3xl sm:text-4xl font-bold mb-8 text-neutral-900 dark:text-white tracking-tight">
          {t.title}{" "}
          <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            {t.titleAccent}
          </span>
        </h1>
        <Chatbot variant="page" />
      </div>

      <Footer />
    </main>
  );
}
