import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import Home_Logo from "../assets/Home.svg"

const Home = () => {
    return(
        <div className="flex flex-row justify-around items-center w-[98%] h-screen">
            <div className="flex flex-col h-3/4 w-[40%] justify-around items-center">
                <div className="text-4xl font-sans">
                    <p className="mb-3">Hi, I am</p>
                    <p className="text-5xl font-extrabold animate-fadeIn">Komal Vikas Bejjam</p>
                    <div className="relative h-8">
                        {/* Full Stack Java Developer (26 characters) */}
                        <p className="absolute whitespace-nowrap overflow-hidden border-r-2 border-black text-xl font-mono opacity-100 animate-[typing_4s_steps(26)_forwards,erasing_2s_steps(26)_4s_forwards]">
                            Full Stack Java Developer
                        </p>

                        {/* Backend Developer (17 characters) */}
                        <p className="absolute whitespace-nowrap overflow-hidden border-r-2 border-black text-xl font-mono opacity-0 animate-[typing_4s_steps(17)_6s_forwards,erasing_2s_steps(17)_10s_forwards] delay-[6s]">
                            Backend Developer
                        </p>

                        {/* Frontend Developer (18 characters) */}
                        <p className="absolute whitespace-nowrap overflow-hidden border-r-2 border-black text-xl font-mono opacity-0 animate-[typing_4s_steps(18)_12s_forwards,erasing_2s_steps(18)_16s_forwards] delay-[12s]">
                            Frontend Developer
                        </p>
                    </div>
                </div>
                <div className="flex flex-row">
                    <a href="https://www.linkedin.com/in/komalvikas"><FaLinkedinIn /></a>
                    <a href="https://github.com/KomalVikas13"><IoLogoGithub /></a>
                </div>
            </div>
            <div className="w-[60%] h-[95%]">
                <img src={Home_Logo} className="w-full"/>
            </div>
        </div>
    )
}

export default Home