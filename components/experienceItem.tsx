import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { experiencesData } from "@/lib/data";
import { useInView } from "react-intersection-observer";
import { once } from "events";
import { useTheme } from "@/context/theme-context";

type ExperienceItemProps = (typeof experiencesData)[number];

export default function ExperienceItem(item: ExperienceItemProps) {

  const {theme} = useTheme()
  const { ref, inView } = useInView({ triggerOnce: true,
  });

  return (
    <div ref={ref}  className='vertical-timeline-element'>
      <VerticalTimelineElement 
        contentStyle={{
          boxShadow: "none",
          background: theme ==="light" ? "#f3f4f6" : "rgb(255,255,255,0.05)",
          border: "1px solid rgb(0,0,0,0.05)",
          textAlign: "left",
          padding: "1.3rem 2rem",

        }}
        contentArrowStyle={{
          borderRight: theme ==="light" ?  "0.4rem solid #9ca3af" :"0.4rem solid rgb(255,255,255,0.5)",
        }}
        iconStyle={{
          fontSize: "1.5rem",
          background: theme ==="light" ?  "white" :"rgb(255,255,255,0.15)",
        }}
        visible={inView}
        date={item.date}
        icon={item.icon}

      >
        <h3 className="font-semibold capitalize">{item.title}</h3>
        <p className="font-normal !mt-0">{item.location}</p>
        <p className="mt-1 !font-normal !text-sm text-gray-600 dark:text-white/75">{item.description}</p>
      </VerticalTimelineElement>
      </div>
  );
}
