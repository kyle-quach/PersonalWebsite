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


  const oceanThemeStyle = {
    background: 'rgba(21, 34, 56, 0.9)', // Dark blue with some transparency for depth
    color: '#fff',
    borderTop: '10px solid #1CA9C9', // Simulate the top border as the crest of a wave
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
          It's just begun:)
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
