import React from "react";
// @ts-ignore
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn() {

  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group flex items-center justify-center h-[2.4rem] w-[7rem] borderBlack gap-2 rounded-full
  bg-gray-900 text-white outline-none transition-all hover:scale-110 focus:scale-110 active:scale-105
  hover:bg-gray-950 disabled:scale-105 disabled:bg-opacity-65 dark:bg-white dark:bg-opacity-10"
  disabled={pending}
    >
        {pending ? <div className="h-5 w-5 border-b-2 rounded-full animate-spin"></div> : 
        <>
        Submit{" "}
      <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>}
      
    </button>
  );
}
