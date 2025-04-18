import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from "./Components/NavBar.jsx";
import rhoss from './assets/rhossili.jpg'
import AboutMe from "./Components/AboutMe.jsx";
import Footer from './Components/Footer.jsx';
import ContactForm from './Components/ContactForm.jsx';
import { Scrollbar } from 'react-scrollbars-custom';
import Projects from "./Components/Projects.jsx";

function App() {

  return (
    <div className="custom-scrollbars__content" style={{ backgroundImage: `url(${rhoss})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100vw',
        margin: 0,
        padding: 0,
        overflow: 'auto'}}>
        <NavBar page="home"/>
          <div className="w-[90%] h-[95%] mx-auto pr-8">
              <Scrollbar className="mt-40 text-sky-950" style={{ width: '100%', height: '75%' }} noScrollX>
                    <AboutMe/>
                    <Projects/>
                    <ContactForm key="contact-form"/>
              </Scrollbar>
          </div>
        <Footer/>
    </div>
  )
}

export default App
