import React from 'react';
import resumeFile from '../assets/KyleQuachResume.pdf'; // Import your resume file
//import "./Resume.css"
const ResumePage = () => {
    return (
        <div style={styles.container}>
          <iframe
            style={styles.iframe}
            src={resumeFile}
            title="Resume"
            width="100%"
            height="1000vh"
          />
        </div>
      );
    };    
    const styles = {
      container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      },
    };

export default ResumePage;
