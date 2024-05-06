"use client";

import React from 'react'
import {motion} from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from '@/lib/hooks';

export default function About() {

  const {ref} = useSectionInView("About");

  return (
    <motion.section ref={ref} id="about" className='mb-20 w-full sm:max-w-[45rem] text-sm  leading-8 text-center sm:mb-32 scroll-mt-28'
    initial={{opacity:0, y:100}}
    animate={{opacity:1, y:0}}
    transition={{delay:0.175}}
    >
        <SectionHeading>About Me</SectionHeading>
        <p className='mb-3'>
            I have completed bachelor of engineering in{" "}
            <span className="font-bold">electronics & communication</span> in 2013. After graduation, 
            I started working in software industry. Since 2013, I worked in different techonologies
            and played different roles. I always feel good when I could{"  "}
            <span className="font-bold">solve a problem or learn something new</span>{" "}
            which doesn't have to be always a new techonology.
        </p>
        <p>
        Now, I am working as a{" "}
        <span className="font-bold">lead technology solution development</span> having expertise in{"  "}
        <span className="underline">full software development lifecycle, Java, Python, Javascript,</span>{" "}
        <span className="underline">Web automation, process automation,
        Jboss BPMN workflow engines, Drools rules engines and various frameworks.</span>{" "}
        I have proven track record in{" "}
        <span className="italic">optimizing application performance, leading cross-functional teams</span>{" "}
        <span className="italic">and delivering high-quality solutions.</span> Looking to utilize skills 
         and expertise to foster innovation and drive success within a new organization.
        </p>
    </motion.section>
    
  )
}
