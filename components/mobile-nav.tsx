"use client";
import { links } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Hamburger from "hamburger-react";
import { useClickAway } from "react-use";

export default function MobileNav() {
  const [isOpen, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      if (typeof window != "undefined" && window.document) {
        document.body.style.overflow = "hidden";
      }
    } else {
        document.body.style.overflow = "unset";
    }
  }, [isOpen]);


  return (
    <div className="block sm:hidden fixed right-0 top-1">
      <Hamburger toggled={isOpen} size={20} onToggle={setOpen} />

      {isOpen && (
        <motion.div 

          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="z-[9999] fixed right-0 top-[3rem] left-0 bottom-0 text-[0.9rem]  text-gray-600 backdrop-blur-sm
          "
        >
        <div > 
          <ul  className="flex gap-2 w-full flex-col "
          >
            {links.map((link, idx) => (
              <motion.li
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                  delay: 0.1 * idx,
                }}
                key={idx}
                className="flex  justify-center items-center border
                   
                   border-white border-opacity-40 bg-white bg-opacity-80 shadow-2xl shadow-black/[0.03] 
                   rounded-full p-3 hover:text-gray-900  dark:bg-gray-950 dark:border-black/40 
                   dark:bg-opacity-75 dark:text-gray-300 dark:hover:text-gray-50" 
              >

                <Link
                  href={link.hash}
                  onClick={() => setOpen((prev) => !prev)}
                  className=""
                >
                  {link.name}
                </Link>

              </motion.li>
            ))}
          </ul>
          </div>
        </motion.div>
      )}
    </div>
  );
}
