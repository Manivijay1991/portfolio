"use client";
import React, { useEffect } from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SectionHeading from './section-heading';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { useInView } from 'react-intersection-observer';
import ExperienceItem from './experienceItem';

export default function 
Experience() {

  const { ref , inView} = useSectionInView("Experience",0.1);


  return (
        <section ref={ref} id = "experience" className='z-[-10] scroll-m-28 mb:28 sm:mb-40'>

            <SectionHeading>My Experience</SectionHeading>
            <VerticalTimeline lineColor="">
                {
                    experiencesData.map((item, index)=> (
                        <React.Fragment key={index}>
                           <ExperienceItem {...item}></ExperienceItem>
                        </React.Fragment>
                    ))}
            </VerticalTimeline>
        </section>
  )
}
