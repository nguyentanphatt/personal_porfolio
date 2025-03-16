"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import MenuToggle from "@/components/MenuToggle";
import { Planet } from "@/constants/image";
const Navbar = () => {
  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "My Tech",
      href: "/tech",
    },
    {
      name: "My Works",
      href: "/project",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  const router = useRouter();
  const [active, setActive] = useState("/");
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (href: string) => {
    setActive(href);
    //router.push(href);
  };

  return (
    <div className="mt-5 flex items-center justify-center backdrop-blur-xs sticky top-5 z-50 ">
      <div className="relative md:hidden border-2 border-light-blue px-1.5 py-0.5 rounded-xl bg-transparent">
        <div className="gap-[180px] flex justify-between items-center">
          <Planet className="text-white" />
          <div onClick={() => setIsOpen(!isOpen)}>
            <MenuToggle isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ ease: "easeInOut", duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="flex flex-col items-center gap-4 py-4">
                {links.map((link) => (
                  <a
                    href={link.href}
                    key={link.name}
                    className="py-2 text-white text-lg"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="relative hidden md:flex gap-[48px] px-3.5 py-2.5 border-2 border-light-blue rounded-full">
        {links.map((link) => (
          <div
            key={link.href}
            className="relative cursor-pointer"
            onClick={() => handleClick(link.href)}

          >
            {active === link.href && (
              <motion.div
                layoutId="nav-indicator"
                className="absolute inset-0 bg-light-blue rounded-full z-0 hover:bg-amber-400"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <h1
              className={`relative px-4 py-2 transition-colors duration-300 text-lg ${
                active === link.href ? "text-black z-10" : "text-white"
              }`}
            >
              {link.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
