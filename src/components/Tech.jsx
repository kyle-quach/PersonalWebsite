import React, { useEffect, useRef } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  // Ref for the container to apply animations
  const containerRef = useRef(null);

  useEffect(() => {
    // Floating animation logic here, using the containerRef
  }, []);

  return (
    <section className='ocean-theme-background p-10'>
      <div ref={containerRef} className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <article className='w-28 h-28 transition-transform duration-300 hover:-translate-y-2' 
                   key={technology.name}
                   aria-label={`Technology ball for ${technology.name}`}>
            <BallCanvas icon={technology.icon} />
          </article>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "ocean-wave"); // Pass a string that corresponds to the CSS class for ocean-wave background

