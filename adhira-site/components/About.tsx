"use client";
import { Spotlight } from "./ui/Spotlight";
import { about } from "@/data";

const About = () => {
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
        About Me
      </h1>
      <p
        className="lg:text-xl lg:font-normal font-light text-sm dark:text-white-100 light:text-black"
        style={{
          margin: "1vh 0",
          whiteSpace: "pre-line", // Ensures line breaks from the string are rendered
        }}
      >
        {about.desc}
      </p>
    </div>
  );
};

export default About;