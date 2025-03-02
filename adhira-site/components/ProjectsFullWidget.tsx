"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import { Spotlight } from "./ui/Spotlight";
import { Lens } from "./ui/lens";

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5 pt-12 w-full">
        {projects.map((item) => (
          <div
            className="card flex flex-col items-center justify-between p-4 pb-32 w-full h-full flex-grow"
            key={item.id}
          >
            <PinContainer title={item.title} href={item.link}>
              {/* Image container */}
              <div className="relative w-full h-64 overflow-hidden rounded-3xl mb-6">
                <Lens
                  zoomFactor={2}
                  lensSize={150}
                  isStatic={false}
                  ariaLabel="Zoom Area"
                >
                  <img
                    src={item.img}
                    alt="cover"
                    className="w-full h-full object-cover"
                  />
                </Lens>
              </div>

              {/* Title */}
              <h1 className="font-bold md:text-xl text-base line-clamp-1 text-center w-full">
                {item.title}
              </h1>

              {/* Description */}
              <p className="lg:font-normal font-light text-sm line-clamp-4 dark:text-white-100 light:text-black text-center w-full my-2">
                {item.des}
              </p>

              {/* Footer with icons and button */}
              <div className="flex items-center justify-between w-full mt-auto">
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
                    <p className="flex md:text-xs text-sm text-purple">
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