import { BrowserRouter, Route, Routes } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, ResumePage } from "./components";


const App = () => {
  return (
    <BrowserRouter>
    <Routes>


      {/* The main page */}
      <Route path="/" element={
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      }/>
      
      {/* The resume page */}
      <Route path="/resume" element={<ResumePage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
