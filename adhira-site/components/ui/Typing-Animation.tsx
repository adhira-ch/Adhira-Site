"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface TypingAnimationProps extends MotionProps {
  words: string[]; // List of words to type
  className?: string;
  duration?: number;
  delay?: number;
  as?: React.ElementType;
  startOnView?: boolean;
}

export function TypingAnimation({
  words,
  className,
  duration = 100,
  delay = 0,
  as: Component = "div",
  startOnView = false,
  ...props
}: TypingAnimationProps) {
  const MotionComponent = motion.create(Component, {
    forwardMotionProps: true,
  });

  const [displayedText, setDisplayedText] = useState<string>("");
  const [started, setStarted] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0); // Index of current word
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!startOnView) {
      const startTimeout = setTimeout(() => {
        setStarted(true);
      }, delay);
      return () => clearTimeout(startTimeout);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setStarted(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay, startOnView]);

  useEffect(() => {
    if (!started) return;

    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < words[currentWordIndex].length) {
        setDisplayedText(words[currentWordIndex].substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);

        // Start clearing the text after a short delay
        setTimeout(() => {
          const clearingEffect = setInterval(() => {
            if (i > 0) {
              setDisplayedText(words[currentWordIndex].substring(0, i - 1));
              i--;
            } else {
              clearInterval(clearingEffect);
              setCurrentWordIndex((prevIndex) =>
                (prevIndex + 1) % words.length
              ); // Move to the next word in the list
            }
          }, duration);
        }, 500); // Delay before clearing the word
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [started, currentWordIndex, words, duration]);

  return (
    <MotionComponent
      ref={elementRef}
      className={cn(
        "text-4xl leading-[5rem] tracking-[-0.02em]",
        className
      )}
      {...props}
    >
      {displayedText}
    </MotionComponent>
  );
}