import React, {useEffect, useState} from "react";
import {Link} from 'react-scroll'

function NavBar(page) {
    const [currentPage, setSelectedPage] = useState(page);

    return (
        <nav className="absolute top-0 left-0 right-0 w-full h-20 bg-sky-950 z-20">
            <div className="flex text-white justify-center space-x-20 mt-5 font-bold text-3xl">

                    <Link
                    to="aboutme"
                    smooth={true}
                    duration={500}
                    offset={-50}
                    className={currentPage.page === "home" ? "underline" : ""} id="home">
                    /Home
                    </Link>

                <p className={currentPage.page === "projects" ? "underline" : ""} id="projects">
                    <Link
                        to="projects"
                        smooth={true}
                        duration={500}
                        offset={-50}>
                        /Projects
                    </Link>
                </p>
                <p className={currentPage.page === "experience" ? "underline" : ""} id="experience">/Experience</p>
                <p className={currentPage.page === "about" ? "underline" : ""} id="about">/About</p>
            </div>
        </nav>
    )
}

export default NavBar;