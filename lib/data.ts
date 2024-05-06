import kafkaImg from "@/public/kafkaLogo.png";
import healthcareClmSys from "@/public/HealthcareClmSystem.jpeg"
import reactImg from "@/public/reactLogo.webp"
import seleniumImg from "@/public/seleniumLogo.png"
import uipathImg from "@/public/uipathLogo.jpeg"
import redisImg from "@/public/redisLogo.png"
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
    {name:"Home",
     hash:"#home",
    },
    {name:"About",
     hash:"#about",
    },
    {name:"Projects",
     hash:"#projects",
    },
    {name:"Skills",
     hash:"#skills",
    },
    {name:"Experience",
     hash:"#experience",
    },
    {name:"Contact",
     hash:"#contact",
    },
] as const;

export const projectsData = [
  {
    title:"Healthcare claims adjudication",
    description:"Designed and built a sophisticated rules engine application for adjudicating healthcare claims, which was then made available as a service endpoint for consumers to access. This rules engine is capable of processing 20,000 claims within a span of 4 hours.",
    tags: ["Redhat BRMS","Drools","SOAP API","Java", "Jboss"],
    imageUrl: healthcareClmSys
    },
    {
      title:"Web-based Data Management Configuration Platform",
      description:"We created a comprehensive full-stack application tailored for business users. It provides a comprehensive list of all data management configurations, empowering business users to grasp how data is configured and collaborate with development teams to implement necessary updates.",
      tags: ["ReactJS","Springboot","Rest API","Oracle"],
      imageUrl: reactImg
      },
    {
      title: "Web Application Automation",
      description:
        "Utilized the Selenium library for automated regression testing of web applications. This implementation significantly decreased the regression testing duration from 26 hours to just 3 hours.",
      tags: ["Sprigboot", "Selenium", "TestNG"],
      imageUrl: seleniumImg,
    },
    {
      title: "Efficient Data Caching for High-Performance Applications",
      description:
        "Utilized Redis for data caching, resulting in a significant reduction in the number of database calls made by the application during the processing of 50,000 healthcare payments. As a result, the overall processing time decreased from 6 hours to 3.5 hours.",
      tags: ["Redis"],
      imageUrl: redisImg,
    },
    {
      title: "FaxFlow: Real-Time Delivery System",
      description:
        "Created a data streaming application using Apache Kafka to deliver real-time faxes to healthcare providers. Designed and developed the system to ensure seamless transmission of information, facilitating efficient communication within healthcare networks.",
      tags: ["Apache Kafka", "Springboot"],
      imageUrl: kafkaImg,
    },

    {
      title: "Process Automation",
      description:
        "The user traverses various web and desktop applications to review and rectify healthcare claims that are stuck in production. An automated end-to-end flow is established using the UiPath product, resulting in approximately 45 minutes saved for resolving each claim compared to manual intervention.",
      tags: ["UiPath"],
      imageUrl: uipathImg,
    },
] as const;

export const skillsData = [
  'Java',
  "JBoss Drools",
  "Jboss BPMN",
  "Apache camel",
  "Apache kafka",
  "REST API",
  "SOAP API",
  "Spring boot",
  "Spring batch",
  "Selenium",
  "PL/SQL",
  "Redis",
  "UiPath",
  "Python",
  "Javascript",
  "React.js",
  "Next.js",
  "Typescript",
  "HTML",
  "CSS"
] as const;

export const experiencesData = [
  {
    title: "Graduated Engineering",
    location: "Chennai, India",
    description:
      "I have completed bachelor of engineering in electronics and communication with gpa of 8.7.",
    icon: React.createElement(LuGraduationCap),
    date: "2013",
  },
  {
    title: "Backend Developer",
    location: "Chennai, India",
    description:
      "I worked as a backend developer and I built REST and SOAP API for consumers to interact with health care claims processing system. Tech stack includes Java, Springboot and JBoss app server.",
    icon: React.createElement(CgWorkAlt),
    date: "2013 - 2016",
  },
  {
    title: "Backend Developer",
    location: "Tampa, FL",
    description:
      "I worked as a backend developer and I built complex rules engine system to process health care claims and payments. Tech stack includes Java, Springboot, Jboss BRMS and Drools engine.",
    icon: React.createElement(CgWorkAlt),
    date: "2016 - 2019",
  },
  {
    title:"Full-stack developer",
    location:"Tampa, FL",
    description:"I'm now a full stack developer and responsible for developing and managing multiple front-end & and backend applications and building web and process automation. Tech stack includes springboot, springbatch, React.js, HTML, CSS, Apache kafka, Apache camel, python, selenium and UiPath ",
    icon: React.createElement(CgWorkAlt),
    date:"2019 - present"
  },
] as const;

