"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Spotlight } from "./Spotlight";

interface TimelineEntry {
  id: number;
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  desc: string;
  className: string;
  thumbnail?: string;
  link?: string;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const convertToHtml = (text: string) => {
    const lines = text.split("\n");
    const html = lines
      .map((line) => {
        if (line.startsWith("- ")) {
          return `<li>${line.substring(2)}</li>`;
        }
        return `<p>${line}</p>`;
      })
      .join("");
    return html;
  };

  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <h1 className="heading">
        An overview of{" "}
        <span className="text-purple">Adhira's Work Experience</span>
      </h1>
      <div
        className="w-full bg-white dark:bg-black-100 font-sans md:px-10"
        ref={containerRef}
      >
        <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex justify-start pt-10 md:pt-40 md:gap-10"
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                </div>
                <div className="hidden md:block md:pl-20">
                  <h3 className="text-xl md:text-3xl font-bold text-black-100 dark:text-white">
                    {item.position}
                  </h3>
                  <p className="text-lg md:text-xl text-black-100 dark:text-white">
                    {item.company}
                  </p>
                </div>
              </div>

              <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <div>
                <h3 className="md:hidden block text-lg mb-4 text-left font-bold text-black-100 dark:text-white">
                  {item.position}
                </h3>
                  <p className="text-lg font-semibold md:hidden">{item.company}</p>
                  <p className="text-med italic text-black-100 dark:text-neutral-400">
                    {item.startDate} - {item.endDate}
                  </p>
                  <div
                    dangerouslySetInnerHTML={{ __html: convertToHtml(item.desc) }}
                  />
                  {item.thumbnail && (
                    <div className="mt-4">
                      {item.link ? (
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          <img src={item.thumbnail} alt={item.position} className="w-full h-auto rounded-md" />
                        </a>
                      ) : (
                        <img src={item.thumbnail} alt={item.position} className="w-full h-auto rounded-md" />
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
          <div
            style={{
              height: height + "px",
            }}
            className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};