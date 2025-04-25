import React, {useState} from "react";
import {Link} from 'react-scroll'

function NavBar({page, eduRef, aboutRef, projectsRef, experienceRef}) {
    const [currentPage, setSelectedPage] = useState(page);

    function selectElement(ref, page) {
        ref.current?.scrollIntoView(
            {behavior: 'smooth', block:'nearest'});
        setSelectedPage(page);
    }

    return (
        <nav className="absolute top-0 left-0 right-0 w-full h-20 bg-sky-950 z-20">
            <div className="flex text-white justify-center space-x-20 mt-5 font-bold text-3xl">

                <button id="about"
                        onClick={() => selectElement(aboutRef, "about")}>
                    /Home
                </button>

                <button id="education"
                        onClick={() => selectElement(eduRef, "education")}>
                    /Education
                </button>

                <button id="projects"
                        onClick={() => selectElement(projectsRef, "projects")}>
                    /Projects
                </button>

                <button id="experience"
                        onClick={() => selectElement(experienceRef, "experience")}>
                    /Experience
                </button>
            </div>
        </nav>
    )
}

export default NavBar;