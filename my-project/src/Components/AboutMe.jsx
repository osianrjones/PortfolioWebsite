import me from '../assets/MeMojiNoBg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faDownload} from "@fortawesome/fontawesome-free-solid";
import {Typewriter} from "react-simple-typewriter";
import {useInView} from "react-intersection-observer";
import {Element} from "react-scroll";
import resume from "../../public/resume.pdf";
import {forwardRef, useCallback} from "react";

const AboutMe = forwardRef((props, ref) => {
    const { ref: inViewRef, inView } = useInView({
        threshold: 1,
    });

    // Combine the forwarded ref and the inView ref
    const setRefs = useCallback(
        (node) => {
            if (ref) ref.current = node;
            inViewRef(node);
        },
        [ref, inViewRef]
    );

    const moveToContact = () => {
        const contactElement = document.getElementById("contact");
        if (contactElement) {
            contactElement.scrollIntoView({ behavior: "smooth" , block:'nearest'});
        }
    }

    return (
        <Element name="aboutme">
            <div
                ref={setRefs}
                className={`relative w-11/12 max-w-6xl mx-auto mt-0 px-4 py-10 rounded-md shadow-lg transition-opacity duration-1000 ${
                    inView ? "opacity-100" : "opacity-0"
                }`}
            >
                {/* Background that grows with content */}
                <div className="absolute inset-0 bg-sky-950 bg-opacity-40 rounded-md z-0" />

                <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start gap-10">
                    {/* Text Section */}
                    <div className="flex flex-col items-center lg:items-start space-y-4 text-white">
                        <p className="text-5xl font-bold text-center lg:text-left">
                            Hi, I'm{" "}
                            <span>
                <Typewriter
                    words={["Osian.", "a software engineer.", "Osian."]}
                    loop={1}
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={3000}
                />
              </span>
                        </p>

                        <p className="text-2xl text-center lg:text-left">
                            A passionate and enthusiastic graduate Software Engineer, from South Wales.
                        </p>
                        <p className="text-2xl text-center lg:text-left">
                            In my free time, you will catch me playing some marginally above average hockey,
                            running or chilling out with my many pets.
                        </p>
                        <p className="text-2xl text-center lg:text-left">
                            My tech stack ranges from C# / .NET within an industrial setting, to React and Ethereum
                            blockchain research within academia.
                        </p>

                        {/* Icons */}
                        <div className="flex flex-row text-5xl space-x-6 pt-4 justify-center lg:justify-start">
                            <a href="https://github.com/osianrjones">
                                <FontAwesomeIcon icon={faGithub} className="hover:scale-110 transition-transform" />
                            </a>
                            <a href="https://www.linkedin.com/in/osian-jones-5a46381bb/">
                                <FontAwesomeIcon icon={faLinkedin} className="hover:scale-110 transition-transform" />
                            </a>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-row space-x-4 pt-4">
                            <a href={resume} download><button className="flex items-center gap-2 px-6 py-2 text-3xl border-2 border-orange-500 rounded-2xl bg-transparent hover:bg-orange-500 hover:text-black transition-colors">
                                <FontAwesomeIcon icon={faDownload} />
                                Resume
                            </button></a>

                            <button onClick={() => moveToContact()} className="px-6 py-2 text-3xl border-2 border-white rounded-2xl bg-transparent hover:bg-white hover:text-black transition-colors">
                                Contact
                            </button>
                        </div>
                    </div>

                    {/* Image */}
                    <img src={me} alt="Memoji of Osian" className="w-48 md:w-64 lg:w-72 object-contain" />
                </div>
            </div>
        </Element>
    );

});

export default AboutMe;