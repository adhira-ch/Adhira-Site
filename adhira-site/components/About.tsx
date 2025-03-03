"use client";
import { Spotlight } from "./ui/Spotlight";
import Image from "next/image";

const About = () => {
  return (
    <div className="pb-20 pt-36 relative container mx-auto px-6 md:px-12">
      {/* Aesthetic Spotlights */}
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Title */}
      <h1 className="heading text-center">
        About <span className="text-purple">Me</span>
      </h1>

      {/* General Description Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mt-8">
        {/* Profile Image */}
        <div className="w-1/5">
          <Image
            src="undergrad.jpg"
            alt="Adhira's Profile"
            width={300}
            height={300}
            className="rounded-full shadow-lg border-4 border-purple"
          />
        </div>

        {/* Full-width Description */}
        <div className="w-4/5 text-center md:text-left">
          <p className="lg:text-xl lg:font-normal font-light text-sm dark:text-white-100 light:text-black">
            I&#39;m Adhira (uh-DEER-ah), an innovator, technical builder, and business strategist. With a passion for solving complex problems, I design and deploy AI-driven solutions that are impactful, scalable, and secure. My expertise lies at the intersection of AI engineering and management consulting—driving technological innovation while aligning with business goals to create measurable value.
          </p>
        </div>
      </div>

      {/* Current Role Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-purple text-center mb-4">My Work</h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="w-4/5 text-center md:text-left">
            <p className="lg:text-lg lg:font-normal font-light text-sm dark:text-white-100 light:text-black">
              Currently, I’m a <strong>Technical Product Lead & AI R&D Solutions Engineer at Deloitte Consulting</strong>, helping clients harness AI and emerging technologies to boost efficiency and profitability. My role spans across:
              <br /><br />
              - <strong>AI Strategy & Implementation</strong>: Supporting applied research and deploying AI-driven solutions tailored to emerging business needs.<br />
              - <strong>Technical Leadership</strong>: Serving as both a hands-on AI engineer and technical lead, bridging the gap between development and executive decision-making.<br />
              - <strong>Scalable AI Engineering</strong>: Architecting <strong>multi-modal AI applications</strong>, such as a <strong>secure retrieval-augmented generation (RAG) chatbot</strong> leveraging <strong>NVIDIA DGX systems</strong> and advanced embeddings.<br />
              - <strong>Business Impact</strong>: Driving <strong>$11M in project sales</strong> this year through cutting-edge <strong>Generative AI</strong> innovations.<br /><br />
              My tech stack includes <strong>Python, C++, React, AWS, NVIDIA Hardware, LangGraph, Llama-Index, PyTorch, NumPy</strong>, and various associated libraries/frameworks. I specialize in developing <strong>scalable, secure, and real-world AI solutions</strong> that drive business transformation.
            </p>
          </div>
          {/* Right-Aligned Stacked Images */}
          <div className="w-1/5 flex flex-col gap-6 items-end">
            <Image src="demo.jpg" alt="Deloitte Demo" width={320} height={200} className="rounded-lg shadow-lg" />
            <Image src="Deloitte_Demo.jpg" alt="Bloodsight AI" width={320} height={200} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-purple text-center mb-4">Education & Achievements</h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left-Aligned Stacked Images */}
          <div className="w-1/5 flex flex-col gap-6 items-start">
            <Image src="partner.JPG" alt="Undergrad" width={280} height={200} className="rounded-lg shadow-lg" />
            <Image src="Bloodsight_AI.jpg" alt="Demo" width={280} height={200} className="rounded-lg shadow-lg" />
          </div>
          <div className="w-4/5 text-center md:text-left">
            <p className="lg:text-lg lg:font-normal font-light text-sm dark:text-white-100 light:text-black">
              I earned my <strong>Bachelor of Science in Computer Science with Highest Honors from Georgia Tech</strong>, specializing in <strong>Artificial Intelligence & Human-Computer Interaction</strong>. Completing my degree in <strong>just two years at age 19</strong>, I took on leadership roles as <strong>Executive VP for AI for Medicine & Healthcare</strong> and led impactful research projects like the <strong>Job Scam Prediction Initiative for Big Data Big Impact</strong>.
              <br /><br />
              My <strong>hackathon experience fuels my creative problem-solving</strong>, with award-winning solutions recognized at <strong>AI ATL (sponsored by Google, BCG, and Anthropic)</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Past Experiences Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-purple text-center mb-4">Past Experiences</h2>
        <div className="flex flex-col md:flex-row items-center gap-10 w-8/10">
          <div className="w-4/5 text-center md:text-left">
            <p className="lg:text-lg lg:font-normal font-light text-sm dark:text-white-100 light:text-black">
              Before Deloitte, I worked at:
              <br /><br />
              - <strong>Amazon</strong> → Enhanced the <strong>Kindle</strong> user experience by developing 2 features.<br />
              - <strong>Cognosos</strong> → Spearheaded <strong>scalable infrastructure modernization</strong>, supported documentation migration.<br />
              - <strong>LEAP Foundation </strong> → CEO & Co-Founder, led all projects, partnerships, & operations.<br /><br />
              Across all experiences, my mission is clear: <strong>to build groundbreaking AI-driven solutions that solve real-world challenges, drive business impact, and empower users.</strong>
            </p>
          </div>
          {/* Right-Aligned Image */}
          <div className="w-1/5 flex items-end">
            <Image src="LEAP_pres.png" alt="Past Experiences" width={350} height={250} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

