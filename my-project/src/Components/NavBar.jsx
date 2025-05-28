import React, {useState} from "react";
import { Menu, X } from 'lucide-react';
import ReactRoundedImage from "react-rounded-image"
import me from '../assets/MeMojiNoBg.png'
import resume from "../../public/resume.pdf";

function NavBar({page, eduRef, aboutRef, projectsRef, experienceRef}) {
    const [currentPage, setSelectedPage] = useState(page);
    const [dropwdown, setDropdown] = useState(false);

    function selectElement(ref, page) {
        ref.current?.scrollIntoView(
            {behavior: 'smooth', block:'nearest'});
        setSelectedPage(page);
    }

    function contact() {
        const contactRef = document.getElementById("contact");
        contactRef?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
        <nav className="md:block hidden absolute top-0 left-0 right-0 w-full h-20 bg-sky-950 z-20">
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
        <nav className="md:hidden flex flex-rows-2 w-full text-white font-bold p-4 text-xl relative justify-center">
            <div className="relative">
                <div className="z-10 relative">
                    <ReactRoundedImage image={me} imageWidth={100} imageHeight={100} />
                </div>
                <div className="h-10 w-1 bg-gray-500 rotate-90 absolute top-6 -right-4 z-0" />
                <div className="h-10 w-1 bg-gray-500 rotate-90 absolute top-6 -left-4 z-0"/>
                <a href={resume} download className="absolute top-7 -right-32 text-lg">
                    <button className="hover:bg-sky-950 bg-sky-950 border-orange-400 border-2 rounded flex items-center gap-2 px-4 py-1">
                        Resume
                    </button>
                </a>
                <a onClick={contact} className="absolute top-7 -left-32 text-lg">
                    <button onClick={contact} className="hover:bg-sky-950 bg-sky-950 border-orange-400 border-2 rounded flex items-center gap-2 px-4 py-1">
                        Contact
                    </button>
                </a>
            </div>

        </nav>
        </>
    )
}

export default NavBar;