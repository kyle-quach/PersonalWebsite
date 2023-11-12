import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  const waveSvg = '<svg width="223px" height="223px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 10C5.48276 10 7.34483 7 7.34483 7C7.34483 7 9.2069 10 11.6897 10C14.1724 10 16.6552 7 16.6552 7C16.6552 7 19.1379 10 21 10" stroke="#1CA9C9" stroke-width="0.384" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M3 17C5.48276 17 7.34483 14 7.34483 14C7.34483 14 9.2069 17 11.6897 17C14.1724 17 16.6552 14 16.6552 14C16.6552 14 19.1379 17 21 17" stroke="#1CA9C9" stroke-width="0.384" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>'; // Replace with the path to your wave SVG file


  const oceanThemeStyle = {
    background: 'rgba(21, 34, 56, 0.9)', // Dark blue with some transparency for depth
    color: '#fff',
    borderTop: '8px solid #1CA9C9', // Simulate the top border as the crest of a wave
    position: 'relative', // Needed to position the wave SVG absolutely
  };

  const oceanThemeArrow = {
    borderRight: '7px solid #2a9d8f', // Teal color for arrow to add to the ocean theme
  };

  const oceanIconStyle = {
    background: experience.iconBg, // You can set this to a gradient or static ocean color
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
  };

  return (
    <VerticalTimelineElement
      contentStyle={oceanThemeStyle}
      contentArrowStyle={oceanThemeArrow}
      date={experience.date}
      iconStyle={oceanIconStyle}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          {/* Consider adding a wave or other ocean-themed SVG as a background to the icon */}
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      
      <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
      <p className='text-white text-[16px] font-semibold' style={{ margin: 0 }}>
        {experience.company_name}
      </p>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white text-[14px] pl-1 tracking-wider'
          >
            {/* Link styling with a hover effect that changes to a lighter shade of blue */}
            {point.includes('http') ? (
              <a href={point.substring(point.indexOf('http'))} className="text-lightblue-300 hover:underline" target="_blank" rel="noopener noreferrer">
                {point.substring(0, point.indexOf('http'))}
                {point.substring(point.indexOf('http'))}
              </a>
            ) : (
              point
            )}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
