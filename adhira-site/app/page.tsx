import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { FloatingDock } from "@/components/ui/FloatingDock";
import { IconHome, IconSettings } from "@tabler/icons-react";
import { FaLaptop, FaRegUser, FaBriefcase, FaPhone, FaSearchengin, FaRegSun, FaMoon } from "react-icons/fa6";
import Image from "next/image";

export default function Home() {
  const items = [
    { title: "Home", icon: <IconHome />, href: "/" },
    { title: "About", icon: <FaRegUser />, href: "/about-me" },
    { title: "Projects", icon: <FaLaptop />, href: "/projects" },
    { title: "Work Experience", icon: <FaBriefcase />, href: "/work-experience" },
    // Add more items as needed
  ];
  
  return (
    <main className="relative bg-black-100 flex justidy-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingDock
          items={items}
          desktopClassName="flex max-w-fit  fixed bottom-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4"
          mobileClassName="fixed bottom-0 right-0"
        />
        <Hero />
        <Grid />
        <Footer />
      </div>
    </main>
  );
}
