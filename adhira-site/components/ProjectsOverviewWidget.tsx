"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import MagicButton from "./ui/MagicButton";
import Link from "next/link";

const ProjectsOverview = () => {
  return (
    <div className="pb-10">
      <div className="flex flex-wrap justify-center gap-20 lg:gap-64 p-4 mt-5"> {/* Increased gap between cards */}
        {projects.slice(0, 2).map((item) => (
          <div
            className="flex items-center justify-center sm:w-[35vw] w-[40vw] lg:w-[25vw] h-[25rem] sm:h-[28rem] lg:h-[32rem]"
            key={item.id}
          >
            <PinContainer title={item.title} href={item.link}>
              <div className="relative flex items-center justify-center sm:w-[30vw] w-[40vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
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
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-4 dark:text-white-100 light:text-black"
                style={{
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

      {/* Added padding to avoid overlap of the button */}
      <div className="flex flex-wrap items-center justify-center pt-10">
        <Link href="/projects">
          <MagicButton
            title="Learn More About My Projects"
            icon={<FaLocationArrow />}
            position="right"
          />
        </Link>
      </div>
    </div>
  );
};

export default ProjectsOverview;
