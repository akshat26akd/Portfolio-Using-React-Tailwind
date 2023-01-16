import React from "react";
import HeroImage from "../images/HeroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 pt-10 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h1 className="pt-2 pb-4 text-5xl font-bold text-white">
            I'm Akshat
          </h1>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">
            A Software Developer
          </h1>
          <p className="sm:text-xl text-justify text-gray-500 py-8 max-w-md">
            I have 2 years of experience building and designing software.
            Currently, I love to work on web applications using technologies
            like HTML, CSS, Tailwind, React etc.
          </p>

          <div>
            <a
              href="https://drive.google.com/file/d/1AJ12RIu0BfZv3_iwAGJgdPtF2Bi4E4hm/view?usp=sharing"
              target="_blank"
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-purple-500 to-blue-400 cursor-pointer shadow-gray-700 shadow-lg"
            >
              Resume
              <span>
                <MdOutlineKeyboardArrowRight size={25} className="pt-0.5" />
              </span>
            </a>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="h-auto shadow-gray-600 shadow-lg rounded-2xl mx-auto my-10 w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
