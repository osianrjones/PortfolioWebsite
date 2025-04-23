import {useInView} from "react-intersection-observer";
import React from "react";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import EthProject from "./EthProject.jsx";
import SpectralProject from "./SpectralProject.jsx";
import {Element} from "react-scroll";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Projects = () => {

    const {ref, inView} = useInView({
        threshold: 0.4,
    });

    return (
        <Element name="projects">
            <div ref={ref} className={`transition-opacity duration-1000 ease-in-out ${inView ? "opacity-100" : "opacity-0"
            } container mx-auto p-4 mb-24 mt-24 relative w-1/2 h-auto`}>
                <div className="absolute inset-0 bg-opacity-40 bg-sky-950 rounded-md shadow-lg"></div>
                <div className="relative text-white mb-5">
                    <p className="text-4xl font-bold">Projects 🚀</p>
                </div>
                <EthProject/>
                <SpectralProject/>
                <p className="relative inset text-white text-3xl mt-2">For all projects: <a className="hover:text-5xl" href="https://github.com/osianrjones"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a></p>
            </div>
        </Element>
    )
}

export default Projects;