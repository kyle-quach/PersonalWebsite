import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      style={{
        backgroundColor: 'rgb(4 51 97 / 90%)', // Dark blue with opacity for depth
        padding: '20px',
        borderRadius: '15px',
        maxWidth: '360px',
        width: '100%',
        cursor: 'pointer',
      }}>
      <Tilt
        options={{
          max: 25, // Reduced the max tilt for subtlety
          scale: 1.05, // Slight scale to give a lift on hover
          speed: 400, // Adjusted for a smoother transition
          glare: true, // Added a glare effect for a water-like reflection
          "max-glare": 0.9, // Glare effect maxed at 50%
        }}
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
          {
  source_code_link ? (
    <div
      onClick={() => window.open(source_code_link, "_blank")}
      style={{
        background: 'rgba(0, 0, 0, 0.8)', // Dark overlay for contrast
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img
        src={github}
        alt='source code'
        className='w-1/2 h-1/2 object-contain'
      />
    </div>
  ) : (
    <div
      style={{
        background: 'rgba(0, 0, 0, 0.8)', // Similar theme as the original
        width: '80px',
        height: '40px',
        borderRadius: '15px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white', // Example text color, adjust as needed
        fontSize: '12px', // Example font size, adjust as needed
        textAlign:"center"
      }}
    >
      In Proccess 
    </div>
  )
}

          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Last Updated 2023-11-14</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
        I find that working on projects is the best way for me to learn. 
        There is something to be said for actually sitting down, thinking about how to solve the problem and actually implementing it. 
        I’ve found that there are hidden challenges that I wouldn’t have seen if I had just designed a solution on paper.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
