"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Java</li>
        <li>SQL</li>
        <li>Python</li>
        <li>Azure</li>
        <li>Snowflake</li>
        <li>Databricks</li>
        <li>Fivetran</li>
        <li>Machine Learning</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>PU(11th & 12th) - Expert Pre University</li>
        <li>
          {" "}
          B.Tech in CSE(Information Science) - M S Ramaiah University of Applied
          Sciences
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>SnowPro Assoicate - Platform Certificate</li>
        <li>
          Career Essentials in Generative AI by Microsoft and LinkedIn -
          Microsoft
        </li>
        <li>Azure Data Engineering Bootcamp - Udemy</li>
        <li>SQL Adavanced - HackerRank </li>
        <li>Cloud Computing - GeeksforGeeks</li>
        <li>Problem Solving - HackerRank</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am a passionate Computer Science undergraduate with a strong interest in technology and problem-solving. 
          With a dedicated and persistent approach, I strive to excel in my work and achieve remarkable results.
           My primary areas of interest revolve around Data Engineering and Machine Learning.
            I find immense joy in exploring the vast possibilities offered by these fields and leveraging them to create practical solutions. 
            Throughout my academic journey, I have had the opportunity to work on various projects that have provided me with hands-on experience and real-world application. 
            By merging my knowledge and skills, I have developed a collection of projects that showcase my ability to tackle challenges and deliver tangible outcomes. 
            These projects encompass a wide range of domains and are designed to address real-time needs.
             Here, you can explore more about me and my projects, gaining insights into my expertise, achievements, and aspirations.
            
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
