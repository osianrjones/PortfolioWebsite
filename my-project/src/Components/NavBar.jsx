import React, {useEffect, useState} from "react";

function NavBar(page) {
    const [currentPage, setSelectedPage] = useState(page);

    return (
        <nav className="absolute top-0 left-0 right-0 w-full h-20 bg-sky-950">
            <div className="flex text-white justify-center space-x-20 mt-5 font-bold text-3xl">
                <p className={currentPage === "home" ? "underline" : ""} id="home">/Home</p>
                <p className={currentPage === "projects" ? "underline" : ""} id="projects">/Projects</p>
                <p className={currentPage === "experience" ? "underline" : ""} id="experience">/Experience</p>
                <p className={currentPage === "about" ? "underline" : ""} id="about">/About</p>
            </div>
        </nav>
    )
}

export default NavBar;