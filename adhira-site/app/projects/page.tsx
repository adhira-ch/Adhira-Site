import Footer from "@/components/Footer";
import ProjectsFullWidget from "@/components/ProjectsFullWidget";
import { FloatingDock } from "@/components/ui/FloatingDock";

export default function Projects() {

  return (
    <main className="relative dark:bg-black-100 flex justidy-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingDock
          currentPage="Projects"
          desktopClassName="flex max-w-fit  fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4"
          mobileClassName="fixed bottom-0 right-0"
        />
        <ProjectsFullWidget />
        <Footer />
      </div>
    </main>
  );
}