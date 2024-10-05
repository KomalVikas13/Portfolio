import { useState, useEffect, useRef } from "react";
import 'tailwindcss/tailwind.css'; // Make sure to import Tailwind CSS
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import Home_Logo from "../assets/Home.svg";

const Home = () => {
  const [titles, setTitles] = useState(["Full Stack Java Developer", "Backend Developer", "Frontend Developer"]);
  const [currentTitle, setCurrentTitle] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prevTitle) => (prevTitle + 1) % titles.length);
      setKey((prevKey) => prevKey + 1); // Change key to force re-render
    }, 6000); // Slide in for 3 seconds, slide out for 3 seconds

    return () => clearInterval(interval);
  }, [titles]);

  return (
    <div className="flex flex-row justify-around items-center w-[98%] h-screen">
      <div className="flex flex-col h-1/2 w-[40%] justify-around items-center">
        <div className="text-4xl font-sans">
          <p className="mb-3">Hi, I am</p>
          <p className="text-5xl font-extrabold text-blue-800">Komal Vikas Bejjam</p>
          <div className="relative h-8 overflow-hidden whitespace-nowrap pb-10">
            <p key={key} className="inline-block animate-slide-in-out font-space font-semibold">-- {titles[currentTitle]} --</p>
          </div>
        </div>
        <div className="flex flex-row justify-around w-28">
          <div className="border rounded-full p-2 bg-gray-800 text-white text-2xl hover:scale-125 transition duration-300 hover:shadow-lg hover:bg-black">
            <a href="https://www.linkedin.com/in/komalvikas"><FaLinkedinIn /></a>
          </div>
          <div className="border rounded-full p-2 bg-gray-800 text-white text-2xl hover:scale-125 transition duration-300 hover:shadow-lg hover:bg-black">
            <a href="https://github.com/KomalVikas13"><IoLogoGithub /></a>
          </div>
        </div>
      </div>
      <div className="w-[60%] h-[95%]">
        <img src={Home_Logo} className="w-full" alt="Home Logo" />
      </div>
    </div>
  );
};

export default Home;
