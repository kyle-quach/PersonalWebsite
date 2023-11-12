import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import meomeo from "../assets/cardBackground.png";
//backgroundImage: "url('https://files.oaiusercontent.com/file-hLqdNPLS45FBGGmUSsBR3fyE?se=2023-11-12T04%3A32%3A04Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D797089bd-f715-48c9-bd27-eb8b97a05717.webp&sig=swOiQ/ZUweTOE0j5IAnGL4dXsKxEpxTYtPV2VcyN9Ok%3D')" }} // Use a wave SVG pattern as background image
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full bg-gradient-to-b from-cyan-500 to-blue-800 p-[1px] rounded-[20px] shadow-lg overflow-hidden'
      style={{
        boxShadow: "0px 10px 20px #00000088", // Dark shadow for depth
        background: `url(${meomeo}), linear-gradient(to bottom, #0195c6, #013a63)`, // Add a wave pattern on top of gradient
        backgroundBlendMode: 'overlay' // Blends the wave pattern with the gradient
      }}
    >
      <div
        className='bg-dark-blue opacity-90 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col relative'
      >
        {/* Icon provided by the user */}
        <img
          src={icon}
          alt={`${title} icon`}
          className='w-16 h-16 object-contain mb-4'
        />
        {/* Title provided by the user */}
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
        {/* Decorative element to enhance the ocean theme */}
        <div className='absolute bottom-0 left-0 w-full h-12 bg-wave-bottom bg-cover' />
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    < >
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am Computer Science student who is interested in building web application.
        I have gained proficiency in languages such as Typescript, Java,
        and am familiar with frameworks like React and Spring, among others. 
        My experience also extends to cloud platforms, particularly AWS, 
        and database systems such as MongoDB and SQL databases. Currently, 
        I am exploring myself in the following fields: 
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
