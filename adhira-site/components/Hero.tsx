import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import Link from 'next/link'
import { TypingAnimation } from './ui/Typing-Animation'

const Hero = () => {
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

        <div className="h-[50rem] w-full dark:bg-black-100 bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex items-center justify-center absolute top-0 left-0">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>

        <div className = "flex justify-center relative my-4 z-10">
          <div className = 'max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
            <div className="mb-6 rounded-full p-[3px] bg-gradient-to-tr from-purple to-blue-100 shadow-[0_8px_40px_-12px_rgba(203,172,249,0.7)]">
              <div className="h-40 w-40 md:h-48 md:w-48 rounded-full overflow-hidden bg-black-100">
                <img
                  src={"/profile.png"}
                  alt="Adhira Choudhury"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <TypingAnimation
              words={["Tech & AI @ McKinsey", "AI Product Builder", "AI Strategist", "AI Engineer", "Technical Product Lead", "Builder at Heart"]}
              duration={100}
              delay={500}
              className={"uppercase tracking-widest text-xs text-center dark:text-blue-100 max-w-80 min-h-5"}
            />
            <TextGenerateEffect
              words="Adhira Choudhury"
              className="text-[40px] md:text-5xl text-center"
            />
            <p className="text-center py-4">
            I build <b>AI products</b>, and the strategy to scale them. <b>Georgia Tech CS & AI</b> in two years. Shipped a federal GenAI system to <b>40,000+ users</b>. Led AI teams at <b>Deloitte</b>. Engineered at <b>Amazon</b>. Now shaping AI strategy at <b>McKinsey</b>.
            </p>
            <Link href="/about-me">
                <MagicButton title="More about me" icon={<FaLocationArrow />} position="right" />
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Hero