import {useInView} from "react-intersection-observer";
import React, {forwardRef, useCallback} from "react";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import EthProject from "./EthProject.jsx";
import SpectralProject from "./SpectralProject.jsx";
import {Element} from "react-scroll";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Projects = forwardRef((props, ref) => {
    const { ref: inViewRef, inView } = useInView({
        threshold: 0.4,
    });

    // Combine the forwarded ref and the inView ref
    const setRefs = useCallback(
        (node) => {
            if (ref) ref.current = node; // Forwarded ref
            inViewRef(node); // useInView ref
        },
        [ref, inViewRef]
    );
    return (
        <Element name="projects">
            <div ref={setRefs} className={`transition-opacity duration-1000 ease-in-out ${inView ? "opacity-100" : "opacity-0"
            } container mx-auto p-4 mb-24 mt-24 relative w-11/12 h-auto`}>
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
});

export default Projects;