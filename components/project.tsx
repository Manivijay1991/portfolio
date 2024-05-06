"use client";
import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll , useTransform} from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
// first position indicates target which is DIV here and second position indicates view port.
// [0 1] - first position 0 indicates start of referrence container . 1 - end of view port. Animation should start when end of the 
// of the  viewport meets the top of the container. scroll up animation
// [1.33,1] - 1.33 is 133% of container crossed the end of view port then animation should begin. scroll down animation.


const scaleProgress = useTransform(scrollYProgress, [0,1],[0.8, 1]);
const opacityProgress = useTransform(scrollYProgress, [0,1],[0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-10 last:sm-0"
    >
      <section
        className="bg-gray-100 max-w-[42rem] border overflow-hidden border-black/5 rounded-lg  relative
            hover:bg-gray-200 sm:max-h-[25rem] transition
            sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20
            "
      >
        <div
          className="pt-4 pb-7 px-5 sm:pl-10 sm:pt-10 sm:max-w-[50%] 
      flex flex-col h-full sm:group-even:ml-[18rem]"
        >
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 text-sm dark:text-white/70"> {description}</p>
          <ul className="flex flex-wrap gap-2 mt-4 sm:mt-6">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-black/[0.7] rounded-full px-3 py-1 text-[.7rem]
             uppercase text-white tracking-wider dark:text-white/70"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          className="absolute hidden sm:block top-14 -right-40 w-[28.5rem] rounded-t-lg shadow-2xl
          group-hover:scale-[1.04]
          group-hover:-translate-x-3
          group-hover:translate-y-3
          group-hover:-rotate-2

          group-even:-left-40

          group-even:group-hover:translate-x-3
          group-even:group-hover:translate-y-3
          group-even:group-hover:scale-[1.04]
          group-even:group-hover:rotate-2
          "


          src={imageUrl}
          alt="Project image"
          quality={90}
        ></Image>
      </section>
    </motion.div>
  );
}
