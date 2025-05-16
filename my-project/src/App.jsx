import {useRef, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from "./Components/NavBar.jsx";
import rhoss from './assets/rhossili.jpg'
import AboutMe from "./Components/AboutMe.jsx";
import Footer from './Components/Footer.jsx';
import ContactForm from './Components/ContactForm.jsx';
import { Scrollbar } from 'react-scrollbars-custom';
import Projects from "./Components/Projects/Projects.jsx";
import Experience from "./Components/Experience/Experience.jsx";
import University from "./Components/University/University.jsx";
import AboutMeMobile from './Components/mobile/AboutMeMobile';
import UniversityMobile from './Components/mobile/UniversityMobile';

function App() {
    const eduRef = useRef();
    const aboutRef = useRef();
    const projectsRef = useRef();
    const experienceRef = useRef();

  return (
    <div className="custom-scrollbars__content" style={{ backgroundImage: `url(${rhoss})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100vw',
        margin: 0,
        padding: 0,
        overflow: 'hidden'}}>
        <NavBar page="home" eduRef={eduRef} aboutRef={aboutRef}
                projectsRef={projectsRef} experienceRef={experienceRef}/>
          <div className="w-[90%] h-[95%] mx-auto pr-8 md:block hidden">
              <Scrollbar className="mt-40 text-sky-950" style={{ width: '100%', height: '83%' }} noScrollX>
                    <AboutMe ref={aboutRef}/>
                    <University ref={eduRef}/>
                    <Projects ref={projectsRef}/>
                    <Experience ref={experienceRef}/>
                    <ContactForm key="contact-form"/>
              </Scrollbar>
          </div>
          <div className="md:hidden block items-center justify-center h-screen p-4 overflow-scroll">
            <AboutMeMobile/>
            <UniversityMobile/>
            <ContactForm key="contact-form"/>
          </div>
        <Footer/>
    </div>
  )
}

export default App
