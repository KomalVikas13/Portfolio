import { FaReact, FaJava, FaHtml5, FaCss3Alt, FaDatabase } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMongodb, SiSpringboot } from "react-icons/si";

const Skills = () => {
    return (
        <section id="skills" className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Heading */}
                <h2 className="text-4xl font-bold text-center text-blue-800 mb-8">
                    Skills
                </h2>

                {/* Skills Scroll */}
                <div className="overflow-hidden">
                    <div className="flex animate-scrollSkills gap-16 justify-start">
                        {/* React */}
                        <div className="flex flex-col items-center gap-2">
                            <FaReact size={60} className="text-blue-400" />
                            <p className="text-gray-700 font-semibold">React</p>
                        </div>
                        {/* Java */}
                        <div className="flex flex-col items-center gap-2">
                            <FaJava size={60} className="text-red-600" />
                            <p className="text-gray-700 font-semibold">Java</p>
                        </div>
                        {/* Spring Boot */}
                        <div className="flex flex-col items-center gap-2">
                            <SiSpringboot size={60} className="text-green-600" />
                            <p className="text-gray-700 font-semibold">Spring Boot</p>
                        </div>
                        {/* HTML5 */}
                        <div className="flex flex-col items-center gap-2">
                            <FaHtml5 size={60} className="text-orange-600" />
                            <p className="text-gray-700 font-semibold">HTML5</p>
                        </div>
                        {/* CSS3 */}
                        <div className="flex flex-col items-center gap-2">
                            <FaCss3Alt size={60} className="text-blue-500" />
                            <p className="text-gray-700 font-semibold">CSS3</p>
                        </div>
                        {/* JavaScript */}
                        <div className="flex flex-col items-center gap-2">
                            <SiJavascript size={60} className="text-yellow-500" />
                            <p className="text-gray-700 font-semibold">JavaScript</p>
                        </div>
                        {/* Tailwind CSS */}
                        <div className="flex flex-col items-center gap-2">
                            <SiTailwindcss size={60} className="text-blue-400" />
                            <p className="text-gray-700 font-semibold">Tailwind</p>
                        </div>
                        {/* MongoDB */}
                        <div className="flex flex-col items-center gap-2">
                            <SiMongodb size={60} className="text-green-500" />
                            <p className="text-gray-700 font-semibold">MongoDB</p>
                        </div>
                        {/* MySQL */}
                        <div className="flex flex-col items-center gap-2">
                            <FaDatabase size={60} className="text-gray-600" />
                            <p className="text-gray-700 font-semibold">MySQL</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
