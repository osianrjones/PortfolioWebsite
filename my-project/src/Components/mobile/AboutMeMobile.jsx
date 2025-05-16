import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typewriter } from "react-simple-typewriter";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { useInView } from "react-intersection-observer";

export default function AboutMeMobile() {
    const [ref, inView] = useInView({
        threshold: 0.4,
    });

    return (
        <div className={`transition-opacity duration-1000 ease-in-out
         bg-sky-950 rounded-2xl bg-opacity-40 w-full h-1/2 items-start text-3xl font-bold text-white pl-2 
         ${ inView ? "opacity-100" : "opacity-0"}`} ref={ref}>
            <p className="pl-2">
                Hi 👋, I'm{" "}
                <span>
                    <Typewriter
                        words={["Osian.", "a software engineer.", "Osh."]}
                        loop={1}
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={3000}/>
                </span></p>
                <div className="text-lg pt-4 pb-2 font-normal">
                    <p>A passionate and enthusiastic graduate Software Engineer, from South Wales.</p>
                    <p>In my free time, you will catch me playing some marginally above average hockey,
                            running or chilling out with my many pets.</p>
                            <p> My tech stack ranges from C# / .NET within an industrial setting, to React and Ethereum
                            blockchain research within academia.</p>
                </div>
                <div className="flex flex-row text-5xl space-x-6 pt-4 justify-center lg:justify-start pb-2">
                           <a href="https://github.com/osianrjones">
                            <FontAwesomeIcon icon={faGithub} className="hover:scale-110 transition-transform" />
                           </a>
                           <a href="https://www.linkedin.com/in/osian-jones-5a46381bb/">
                            <FontAwesomeIcon icon={faLinkedin} className="hover:scale-110 transition-transform" />
                           </a>
                </div>
        </div>
    )
}