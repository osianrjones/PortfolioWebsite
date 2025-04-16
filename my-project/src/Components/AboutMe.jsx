import me from '../assets/MeMojiNoBg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faDownload} from "@fortawesome/fontawesome-free-solid";
import {Typewriter} from "react-simple-typewriter";

function AboutMe() {
    return (
        <div className="relative w-2/3 h-1/2 mx-auto mt-72">
            <div className="absolute inset-0 bg-opacity-40 bg-sky-950 rounded-md shadow-lg"></div>

            <div className="relative flex flex-row">
                <div className="inset-0 flex flex-col items-center pt-10 px-4 space-y-4">
                    <p className="text-5xl text-white font-bold">Hi, I'm <span>
                        <Typewriter
                            words={['Osian.', 'a software engineer.', "Osian."]}
                            loop={1}
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={3000}
                        />
                      </span>
                    </p>
                    <p className="text-2xl text-white">A passionate and enthusiastic graduate Software Engineer, from
                        Swansea University.</p>
                    <p className="text-2xl text-white">In my free time, you will catch me
                        playing some marginally above average hockey, running or chilling out with my many pets.</p>
                    <p className="text-2xl text-white">My tech stack ranges from C# / .NET within an industrial
                        setting, to React and Ethereum blockchain research within academia.</p>
                    <div className="flex flex-row text-6xl text-white space-x-6">
                        <a href="https://github.com/osianrjones"><FontAwesomeIcon icon={faGithub} className="hover:text-7xl"/></a>
                        <a href="https://www.linkedin.com/in/osian-jones-5a46381bb/"><FontAwesomeIcon icon={faLinkedin} className="hover:text-7xl"/></a>
                    </div>
                    <div className="flex flex-row text-white space-x-4">
                        <button
                            className="flex items-center gap-2 px-6 py-2 text-3xl border-2 border-orange-500 rounded-2xl bg-transparent hover:bg-orange-500 hover:text-black transition-colors">
                            <FontAwesomeIcon icon={faDownload}/>
                            Resume
                        </button>

                        <button
                            className="px-6 py-2 text-3xl border-2 border-white rounded-2xl bg-transparent hover:bg-white hover:text-black transition-colors">
                            Contact
                        </button>
                    </div>
                </div>
                <img src={me} alt={"A photo of myself, but in MeMoji form."} className="pb-8"/>
            </div>
        </div>
    )
}

export default AboutMe;