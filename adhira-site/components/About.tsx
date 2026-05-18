"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Spotlight } from "./ui/Spotlight";
import { about, hero, pages } from "@/lib/content";

function ProfilePhoto() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className="flex h-[300px] w-[300px] max-w-full items-center justify-center rounded-full border-4 border-purple bg-gradient-to-br from-violet-500/20 to-indigo-600/20 text-4xl font-bold text-violet-600 dark:text-violet-300"
        aria-hidden
      >
        AC
      </div>
    );
  }

  return (
    <img
      src={hero.photo}
      alt="Adhira Choudhury"
      width={300}
      height={300}
      className="rounded-full shadow-lg border-4 border-purple object-cover aspect-square max-w-full"
      onError={() => setFailed(true)}
    />
  );
}

export default function About() {
  const t = pages.about;

  return (
    <div className="pb-20 pt-36 relative container mx-auto px-6 md:px-12">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <h1 className="heading text-center">
        {t.title}{" "}
        <span className="text-purple">{t.titleAccent}</span>
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mt-8">
        <div className="w-full md:w-1/5 flex justify-center shrink-0">
          <ProfilePhoto />
        </div>
        <div className="w-full md:w-4/5 text-center md:text-left about-prose">
          <ReactMarkdown>{about.general}</ReactMarkdown>
        </div>
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-purple text-center mb-6">
          {t.sections.currentRole}
        </h2>
        <div className="about-prose max-w-4xl mx-auto text-center md:text-left">
          <ReactMarkdown>{about.currentRole}</ReactMarkdown>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-purple text-center mb-6">
          {t.sections.education}
        </h2>
        <div className="about-prose max-w-4xl mx-auto text-center md:text-left">
          <ReactMarkdown>{about.education}</ReactMarkdown>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-purple text-center mb-6">
          {t.sections.techStack}
        </h2>
        <div className="about-prose max-w-4xl mx-auto text-center md:text-left">
          <ReactMarkdown>{about.techStack}</ReactMarkdown>
        </div>
      </section>
    </div>
  );
}
