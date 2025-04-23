import {useInView} from "react-intersection-observer";
import {Element} from "react-scroll";
import CGIExperience from "./CGIExperience.jsx";
import React from "react";

const Experience = () => {
    const {ref, inView} = useInView({
        threshold: 0.4,
    });

    return (
        <Element name="experience">
            <div ref={ref} className={`transition-opacity duration-1000 ease-in-out ${inView ? "opacity-100" : "opacity-0"
            } container mx-auto p-4 mb-24 mt-24 relative w-1/2 h-auto`}>
                <div className="absolute inset-0 bg-opacity-40 bg-sky-950 rounded-md shadow-lg"></div>
                <div className="relative text-white mb-5">
                    <p className="text-4xl font-bold">Experience 🧠</p>
                </div>
                <CGIExperience/>
            </div>
        </Element>
    )
}

export default Experience;