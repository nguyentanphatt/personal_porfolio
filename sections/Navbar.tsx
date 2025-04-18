"use client";
import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MenuToggle from "@/components/MenuToggle";
import { Planet } from "@/constants/image";
import useScrollSpy from "@/constants/hook";
const Navbar = ({ links, sectionRefs }: {
  links: { href: string; name: string }[];
  sectionRefs: React.RefObject<HTMLElement>[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useScrollSpy(sectionRefs, 100) || 'home';

  return (
    <div className="py-4 lg:py-8 fixed w-[80%] md:w-[570px] top-0 z-50 left-1/2 -translate-x-1/2">
      <div className="relative md:hidden backdrop-blur-sm border-2 border-light-blue px-1.5 py-0.5 rounded-xl bg-transparent">
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
                    href={`#${link.href}`}
                    key={link.name}
                    className={`py-2 text-white text-lg ${
                      activeSection === link.href ? "text-sky-blue" : ""
                    }`}
                    onClick={()=>setIsOpen(!open)}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="relative hidden md:flex items-center justify-center gap-[48px] px-3.5 py-3 border-2 border-light-blue rounded-full backdrop-blur-sm">
        {links.map((link) => (
          <div
            key={`#${link.href}`}
            className="relative cursor-pointer"
          >
            {activeSection  === link.href && (
              <motion.div
                layoutId="nav-indicator"
                className="absolute -inset-1 bg-light-blue rounded-full z-0"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <a
              href={`#${link.href}`}
              className={`relative px-4 py-2 transition-colors duration-300 text-lg ${
                activeSection === link.href ? "text-black z-10" : "text-white"
              }`}
            >
              {link.name}
            </a>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default Navbar;