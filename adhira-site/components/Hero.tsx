import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import Link from 'next/link'

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

        <div className = "flex justify-center relative my-20 z-10">
          <div className = 'max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
            <h2 className="uppercase tracking-widest text-xs text-center dark:text-blue-100 max-w-80">
                A technical builder and product strategist
            </h2>
            <TextGenerateEffect
              words="Adhira Choudhury"
              className="text-[40px] md:text-5xl text-center"
            />
            <p className="text-center py-6">
              I sell and build AI products for Deloitte Consulting. I studied CS (AI/Human Interactions) at Georgia Tech and worked at Amazon, Cognosos, Georgia Tech Research, and more.
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