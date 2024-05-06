import { useActionSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { SectionName } from "./types";


export function useSectionInView (sectionName : SectionName, threshold = 0.75) {


  const {setActiveSection, activeSection, timeOfLastClick, setTimeOfLastClick} = useActionSectionContext();
  const {ref, inView} = useInView( {
    threshold
  });

  useEffect(()=> {
    if(inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  },[inView,activeSection , setActiveSection,timeOfLastClick,  sectionName])


  return {
    ref,
    inView,
  };

}