"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { MdOutlineFileDownload } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { useSectionInView } from "@/lib/hooks";
import { useActionSectionContext } from "@/context/active-section-context";
import profilePic from "@/public/profilepic.jpeg";

export default function Intro() {

const {ref} = useSectionInView("Home", 0.5);
const {setActiveSection, setTimeOfLastClick} = useActionSectionContext();
 
 
  return (
    <section ref={ref} id="home" className="z-[1] mb-28 w-full sm:max-w-[50rem]  sm:mb-0 scroll-mt-[100rem]">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div className="z-10"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 0.2 }}
          >
            <Image
              // src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=368&h=368&q=100"
              // height="192"
              // width="192"
              src={profilePic}
              quality="90"
              priority={true}
              alt="Mani Vijay's profile picture"
              className=" h-[9rem] w-[9rem] rounded-full border-[0.35rem] border-white shadow-xl object-cover"
            ></Image>
          </motion.div>

          <motion.span
            className="text-4xl absolute bottom-0 right-0"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 155,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-12 mt-10 px-4 text-2xl sm:text-3xl text-center dark:text-white"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hi,</span> I'm{" "}
        <span className="font-bold">Manikandan Vijayan.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">11 years</span> of experience. I build{" "}
        <span className="italic">
          websites, APIs and automate process flows
        </span>
        . My focus is <span className="underline">java, python, React.js,</span>{" "}
        web automation using <span className="underline">selenium</span> and
        process automation using <span className="underline">UiPath(RPA)</span>
      </motion.h1>

      <motion.div className="flex flex-col items-center justify-center sm:flex-row gap-4 px-6 text-sm"
      initial={{opacity:0, y:100}}
      animate={{opacity:1, y:0}}
      transition={{delay:0.1}}
      >
        <Link
          href="#contact"
          className="group flex items-center justify-center px-7 py-3 gap-2
            bg-gray-900 text-white rounded-full outline-none
            focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950
            transition 
            "
            onClick={()=>{
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
        >
          Contact me here <FiArrowRight className="opacity-70 group-hover:translate-x-1 transition"/>
        </Link>
        <a className="group flex items-center justify-center px-7 py-3 gap-2
            bg-white rounded-full outline-none
            focus:scale-110 hover:scale-110 active:scale-105
            transition cursor-pointer border border-black/10
            dark:bg-white/10
            "
            href="/Manikandan Vijayan Resume - Google Docs.pdf"
            download={true}
            target="_blank"
        >Download Resume <MdOutlineFileDownload className="opacity-60 group-hover:translate-y-1 transition"/></a>

        <a className="flex items-center justify-center p-[.90rem] text-gray-600
            bg-white rounded-full outline-none text-[.95rem]
            focus:scale-[1.15] hover:scale-[1.15] active:scale-105 hover:text-gray-950
            transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60"
            href="https://linkedin.com/"
            target="_blank"
        ><BsLinkedin /></a>
      </motion.div>
    </section>
  );
}
