"use client";
import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { FaPaperPlane } from "react-icons/fa";
import {motion} from "framer-motion";
import {sendEmail} from "@/actions/send-email"
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  const formRef = useRef<HTMLFormElement>(null);
  
  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-10 sm:mb-20 text-center w-[min(100%,38rem)]"
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:2}}
      viewport={{
        once:true
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="-mt-6 text-gray-700 text-sm dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:manivijay1991@gmail.com">
          manivijay1991@gmail.com
        </a>{" "}
        or through this form
      </p>

      <form  ref={formRef} className="mt-10 flex flex-col dark:text-black"
      action={  async (formData)=>{
        const {response, error } = await sendEmail(formData);
        
        if(error){
          toast.error(error);
          formRef.current?.reset();
          return;
        }

        toast.success("Email submitted successfully");
        formRef.current?.reset();
    
      }}
      >
        <input
          type="email"
          required
          name="senderEmail"
          className="py-3 px-4 borderBlack rounded-lg placeholder:text-sm dark:bg-white dark:bg-opacity-80
          dark:focus:bg-opacity-100 dark:outline-none transition-all"
          placeholder="Your email"
          maxLength={500}

        ></input>
        <textarea
          name="message"
          required
          className="my-3 h-52 p-4 borderBlack rounded-lg placeholder:text-sm  dark:bg-white dark:bg-opacity-80
          dark:focus:bg-opacity-100 dark:outline-none transition-all"
          placeholder="Message"
          maxLength={5000}
        ></textarea>

       <SubmitBtn/>
      </form>
    </motion.section>
  );
}
