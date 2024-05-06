"use client"
import React from 'react'
import {motion} from "framer-motion"

export default function SectionDivider() {
  return (
    <motion.div className='h-12 w-1 mt-10 mb-10 bg-gray-200 rounded-full hidden sm:block dark:bg-opacity-20'
    initial={{opacity:0 , y:100}}
    animate={{opacity:1, y:0}}
    transition={{delay:0.125}}
    ></motion.div>
  )
}
