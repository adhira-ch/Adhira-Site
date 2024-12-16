/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/

"use client"
import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { FaSearchengin, FaRegSun, FaMoon } from "react-icons/fa6";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  const [theme, setTheme] = useState("dark");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const itemsWithToggle = [
    ...items,
    {
      title: "Toggle Theme",
      icon: theme === "light" ? <FaMoon /> : <FaRegSun />,
      href: "#",
      isLink: false,
      onClick: toggleTheme,
    },
    {
      title: "Search",
      icon: <FaSearchengin />,
      href: "#",
      isLink: false,
      onClick: () => setIsSearchOpen(true),
    },
  ];

  const filteredItems = itemsWithToggle.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <FloatingDockDesktop
        items={filteredItems}
        className={desktopClassName}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
      />
      <FloatingDockMobile
        items={filteredItems}
        className={mobileClassName}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
      />
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-neutral-900 p-4 rounded-md">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="mb-2 p-2 rounded-md bg-gray-50 dark:bg-neutral-800"
            />
            <button
              onClick={() => setIsSearchOpen(false)}
              className="mt-2 p-2 bg-red-500 text-white rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
  searchQuery,
  setSearchQuery,
  isSearchOpen,
  setIsSearchOpen,
}: {
  items: { title: string; icon: React.ReactNode; href: string; isLink?: boolean; onClick?: () => void }[];
  className?: string;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute bottom-full mb-2 inset-x-0 flex flex-col gap-2"
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
                    <div className="h-4 w-4">{item.icon}</div>
                  </Link>
                ) : (
                  <motion.div
                    onClick={item.onClick}
                    style={{ width: widthIcon, height: heightIcon }}
                    className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center relative"
                  >
                    <motion.div
                      style={{ width: widthIconStyle, height: heightIconStyle }}
                      className="flex items-center justify-center"
                    >
                      {item.icon}
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="h-10 w-10 rounded-full bg-gray-50 dark:bg-neutral-800 flex items-center justify-center"
      >
        <IconLayoutNavbarCollapse className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
  searchQuery,
  setSearchQuery,
  isSearchOpen,
  setIsSearchOpen,
}: {
  items: { title: string; icon: React.ReactNode; href: string; isLink?: boolean; onClick?: () => void }[];
  className?: string;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
}) => {
  let mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden md:flex h-16 gap-4 items-end rounded-2xl bg-gray-50 dark:bg-neutral-900 px-4 pb-3",
        className
      )}
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
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  let heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20]
  );

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
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
          className="flex items-center justify-center"
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
        className="flex items-center justify-center"
      >
        {icon}
      </motion.div>
    </motion.div>
  );
}