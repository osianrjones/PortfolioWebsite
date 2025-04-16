import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from "./Components/NavBar.jsx";
import rhoss from './assets/rhossili.jpg'
import AboutMe from "./Components/AboutMe.jsx";

function App() {

  return (
    <div className="App" style={{ backgroundImage: `url(${rhoss})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100vw',
        margin: 0,
        padding: 0,
        overflow: 'hidden'}}>
        <NavBar page="page"/>
        <AboutMe/>
    </div>
  )
}

export default App
