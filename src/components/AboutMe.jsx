import aboutMe from "../assets/about_me.svg"
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const AboutMe = () => {

    useEffect(() => {
        AOS.init({ duration: 1000, easing: "ease-out" });
    }, []);

    return(
        <div id="about-me" className="flex flex-col justify-center items-center m-10 gap-4 scroll-mt-24">
            {/* Decorative Separator */}
            <p className="font-bold text-4xl text-blue-800 font-sans relative">
                About me
                {/* <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-blue-800 rounded"></span> */}
                </p>
            <div className="flex items-center gap-3">
                <img src={aboutMe} className="w-[20%]" data-aos="fade-right"></img>
                <p className="italic text-xl p-3" data-aos="fade-left">"I graduated in Electronics and Communication Engineering from <strong>National Institue of Technology, Warangal[NITW]</strong>, where I developed a strong analytical and problem-solving mindset. To transition into software development( <strong>Web development</strong> ), I pursued an intensive <strong>Full Stack Java Development course</strong>, gaining expertise in creating end-to-end web applications. I further enriched my practical knowledge through a six-month <strong>Internship</strong> at <strong>Ai Variant</strong>, where I contributed to developing secure and efficient <strong>Software solutions</strong>, refining both my technical and teamwork skills."</p>
            </div>
        </div>
    )
}

export default AboutMe