import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ContactMe from "../components/ContactMe";
import { skills, experiences } from "../constants/index";
import Introduction from "../components/Introduction";

const About = () => {
  const content = [
    "I've actively engaged on diverse projects, from building scalable web applications to implementing robust distributed systems. My expertise is developing highly available backend services and creating interactive front-end applications. 🚀 I'm dedicated to expanding my skills and staying updated on the latest technologies. 🦾",
    "Outside of work, I enjoy exploring new technologies, contributing to open-source projects, and spending time in nature, camping, and hiking 🏕.",
  ];

  return (
    <section className="max-container">
      {/* Introduction */}
      <Introduction first="Hello, I'm" second="Vincent" content={content} />
      {/* My Skills */}
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text"> My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill, index) => (
            <div key={index} className="block-container w-20 h-20">
              <div className="btn-back rounded-xl"> </div>
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Work Experience */}
      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        {/* briefly intro */}
        <div className="mt-5 flex flex-col gap-3 text-slate-600">
          <p className="text">
            I've worked with all sorts of companies, leaving up my skills and
            teaming up with smart people. Here's the rundown:
          </p>
        </div>
        {/* Contents */}
        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={`${experience.company_name}-${index}`}
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
                iconStyle={{ background: experience.iconBg }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black font-medium"
                    style={{ margin: 0, fontSize: "0.9rem" }}
                  >
                    {experience.company_name}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-medium pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      {/* Bottom */}
      <hr className="border-slate-200" />
      <ContactMe />
    </section>
  );
};

export default About;
