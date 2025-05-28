import {useInView} from "react-intersection-observer";
import {Element} from "react-scroll";
import CGIExperience from "./CGIExperience.jsx";
import React, {forwardRef, useCallback} from "react";

const Experience = forwardRef((props, ref) => {
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
        <div id="experience">
            <div ref={setRefs} className={`transition-opacity duration-1000 ease-in-out ${inView ? "opacity-100" : "opacity-0"
            } container mx-auto p-4 mb-24 mt-24 relative w-11/12 h-auto`}>
                <div className="absolute inset-0 bg-opacity-40 bg-sky-950 rounded-md shadow-lg"></div>
                <div className="relative text-white mb-5">
                    <p className="text-4xl font-bold">Experience 🧠</p>
                </div>
                <CGIExperience/>
            </div>
        </div>
    )
});

export default Experience;