import React from "react";
import Main_Img from "../images/Main_Img.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="flex flex-row grid-cols-2 h-screen w-full pt-20 pb-10 bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full grow-0 shrink-0">
          <h1 className="pb-2 sm:text-5xl font-bold text-gray-200">
            I'm Akshat
          </h1>
          <h2 className="max-w-xl sm:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">
            A Software Developer
          </h2>

          <p className="text-gray-400 text-justify py-6 pr-6 max-w-md">
            I have 2 years of experience building and designing software.
            Currently, I love to work on web applications using technologies like HTML, CSS, Tailwind, React etc.
          </p>

          <div>
            <Link
              to="about"
              smooth
              duration={600}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-purple-500 to-blue-400 cursor-pointer"
            >
              About Me
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="grow-0 shrink-0">
          <img
            src={Main_Img}
            alt="Profile Photo"
            className="h-auto shadow-gray-600 shadow-lg rounded-2xl md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
