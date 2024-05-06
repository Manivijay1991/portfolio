"use client";

import { skillsData } from '@/lib/data'
import React from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks'
import {motion} from "framer-motion"


const fadeInAnimationVariant = {
    initial: {
        opacity:0,
        y:100,
    },
    animate: (index:number) => ({
        opacity:1,
        y:0,
        transition:{
            delay:0.05*index,
        },
    })
};

export default function Skills() {

  const {ref} = useSectionInView("Skills");

  return (
        <section ref={ref} className='mb-28 sm:max-w-[52rem] scroll-mt-28 sm:mb-40' id="skills">
            <SectionHeading>My Skills</SectionHeading>
            <ul className='flex flex-wrap justify-center gap-2 text-gray-800 text-sm '>
                {skillsData.map((skill, index)=> (
                    <motion.li className='bg-white border border-black/10 px-5 py-3 rounded-xl dark:bg-white/10 dark:text-white/80' 
                    key={index}
                    variants={fadeInAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once:true,
                    }}
                    custom={index}
                    >{skill}
                    </motion.li>
                ))}
            </ul>

        </section>
  )
}
