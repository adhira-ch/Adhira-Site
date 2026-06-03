"use client";
import { useRouter } from "next/navigation";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import { useRef, useState, useEffect } from "react";
import { IconHome } from "@tabler/icons-react";
import { FaLaptop, FaRegUser, FaBriefcase, FaNewspaper, FaRegSun, FaMoon, FaComments } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";

export const FloatingDock = ({
  desktopClassName,
  mobileClassName,
  currentPage,
}: {
  desktopClassName?: string;
  mobileClassName?: string;
  currentPage: string;
}) => {
  const router = useRouter();
  const { scrollY }: { scrollY: MotionValue<number> } = useScroll();

  const [visible, setVisible] = useState<boolean>(true);
  const [theme, setTheme] = useState<string>("dark");

  // Handle scroll visibility for navbar
  useMotionValueEvent(scrollY, "change", (current: number) => {
    const previous = scrollY.getPrevious();
    if (previous === undefined) return;

    const direction = current - previous;
    if (scrollY.get() < 50) {
      setVisible(true);
    } else {
      setVisible(direction < 0);
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const initialTheme = document.documentElement.classList.contains("dark") ? "dark" : "light";
      setTheme(initialTheme);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark", theme === "dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const items = [
    {
      title: "Home",
      icon: <IconHome className={currentPage === "Home" ? "text-purple" : ""} />,
      href: "/",
      onClick: () => router.push("/"),
    },
    {
      title: "About Me",
      icon: <FaRegUser className={currentPage === "About Me" ? "text-purple" : ""} />,
      href: "/about-me",
      onClick: () => router.push("/about-me"),
    },
    {
      title: "Projects",
      icon: <FaLaptop className={currentPage === "Projects" ? "text-purple" : ""} />,
      href: "/projects",
      onClick: () => router.push("/projects"),
    },
    {
      title: "Work Experience",
      icon: <FaBriefcase className={currentPage === "Work Experience" ? "text-purple" : ""} />,
      href: "/work-experience",
      onClick: () => router.push("/work-experience"),
    },
    {
      title: "Blog",
      icon: <FaNewspaper className={currentPage === "Blog" ? "text-purple" : ""} />,
      href: "/blog",
      onClick: () => router.push("/blog"),
    },
    {
      title: "Chat",
      icon: <FaComments className={currentPage === "Chat" ? "text-purple" : ""} />,
      href: "/chat",
      onClick: () => router.push("/chat"),
    },
  ];

  const itemsWithToggle = [
    ...items,
    {
      title: "Toggle Theme",
      icon: theme === "light" ? <FaMoon /> : <FaRegSun />,
      href: "#",
      isLink: false,
      onClick: toggleTheme,
    },
  ];

  return (
    <>
      <FloatingDockDesktop items={itemsWithToggle} className={desktopClassName} visible={visible} />
      <FloatingDockMobile items={itemsWithToggle} className={mobileClassName} visible={visible} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
  visible,
}: {
  items: { title: string; icon: React.ReactNode; href: string; isLink?: boolean; onClick?: () => void }[];
  className?: string;
  visible: boolean;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "relative block md:hidden",
        className,
        "fixed bottom-6 left-6 right-auto z-[5000]"
      )}
    >
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute bottom-full mb-2 inset-x-0 flex flex-col gap-2"
            animate={{
              y: visible ? 0 : -100,
              opacity: visible ? 1 : 0,
            }}
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                {item.isLink ? (
                  <Link href={item.href} key={item.title} className="h-10 w-10 rounded-full bg-gray-50 dark:bg-neutral-900 flex items-center justify-center">
                    <div className={`h-4 w-4`}>{item.icon}</div>
                  </Link>
                ) : (
                  <motion.div
                    onClick={item.onClick}
                    className="h-10 w-10 rounded-full bg-gray-50 dark:bg-neutral-800 flex items-center justify-center"
                  >
                    <div className={`h-4 w-4`}>{item.icon}</div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Open navigation menu"
        className="h-12 w-12 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/[0.2] shadow-lg flex items-center justify-center"
      >
        <IconLayoutNavbarCollapse className="h-5 w-5 text-neutral-700 dark:text-neutral-200" />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
  visible,
}: {
  items: { title: string; icon: React.ReactNode; href: string; isLink?: boolean; onClick?: () => void }[];
  className?: string;
  visible: boolean;
}) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto h-16 gap-4 items-end rounded-2xl bg-gray-50 dark:bg-neutral-900 px-4 pb-3",
        className,
        "hidden md:flex"
      )}
      animate={{
        y: visible ? 0 : -100,
        opacity: visible ? 1 : 0,
      }}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
  isLink,
  onClick,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
  isLink?: boolean;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  const widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  const heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20]
  );

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthStyle = useMotionTemplate`${width}px`;
  const heightStyle = useMotionTemplate`${height}px`;
  const widthIconStyle = useMotionTemplate`${widthIcon}px`;
  const heightIconStyle = useMotionTemplate`${heightIcon}px`;

  const [hovered, setHovered] = useState(false);

  return isLink ? (
    <Link href={href}>
      <motion.div
        ref={ref}
        style={{ width: widthStyle, height: heightStyle }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center relative"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="px-2 py-0.5 whitespace-pre rounded-md bg-gray-100 border dark:bg-neutral-800 dark:border-neutral-900 dark:text-white border-gray-200 text-neutral-700 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIconStyle, height: heightIconStyle }}
          className={`flex items-center justify-center`}
        >
          {icon}
        </motion.div>
      </motion.div>
    </Link>
  ) : (
    <motion.div
      ref={ref}
      onClick={onClick}
      style={{ width: widthStyle, height: heightStyle }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center relative"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 2, x: "-50%" }}
            className="px-2 py-0.5 whitespace-pre rounded-md bg-gray-100 border dark:bg-neutral-800 dark:border-neutral-900 dark:text-white border-gray-200 text-neutral-700 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs"
          >
            {title}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        style={{ width: widthIconStyle, height: heightIconStyle }}
        className={`flex items-center justify-center`}
      >
        {icon}
      </motion.div>
    </motion.div>
  );
}
