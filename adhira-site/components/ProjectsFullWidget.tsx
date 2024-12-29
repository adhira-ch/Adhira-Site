"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import MagicButton from "./ui/MagicButton";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";

const ProjectsFullWidget = () => {
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
        An overview of {" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap justify-center gap-16 p-4 mt-10"> {/* Increased gap between cards */}
        {projects.map((item) => (
          <div
            className="flex items-center justify-center sm:w-[35vw] w-[40vw] h-[25rem] sm:h-[28rem] lg:h-[30rem]"
            key={item.id}
          >
            <PinContainer title={item.title} href={item.link}>
              <div className="relative flex items-center justify-center sm:w-[35vw] w-[40vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-4"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <a href={item.link}>
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Site
                    </p>
                  </a>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsFullWidget;