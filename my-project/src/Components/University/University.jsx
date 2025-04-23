import {useInView} from "react-intersection-observer";
import {Element} from "react-scroll";
import EthProject from "../Projects/EthProject.jsx";
import SpectralProject from "../Projects/SpectralProject.jsx";
import React from "react";

const University = () => {
    const {ref, inView} = useInView({
        threshold: 0.4,
    });

    return (
        <Element name="about">
            <div ref={ref} className={`transition-opacity duration-1000 ease-in-out ${inView ? "opacity-100" : "opacity-0"
            } container mx-auto p-4 mb-24 mt-24 relative w-1/2 h-auto`}>
                <div className="absolute inset-0 bg-opacity-40 bg-sky-950 rounded-md shadow-lg"></div>
                <div className="relative text-white mb-5">
                    <p className="text-4xl font-bold">University 📜</p>
                    <p className="text-3xl mt-2">Software Engineering with a Year in Industry</p>
                    <p className="text-2xl mt-2">1st class degree award</p>
                    <p className="text-xl mt-2">My time at university has taught me the soft and technical skills
                        required to excel
                        as a dynamic, results driven programmer. I have developed the entrepreneurial skills required
                        to continue learning in my career. However, the course has given me the ability to convey
                        complex technical
                        knowledge succinctly. Outside of software, I was able join Swansea University's Hockey Club.
                     As part of the 1st XI, we competed across the South West of the country. My favourite memory
                    is competing in the Welsh Varsity 2025 in Cardiff.</p>
                </div>
            </div>
        </Element>
    )
}

export default University;