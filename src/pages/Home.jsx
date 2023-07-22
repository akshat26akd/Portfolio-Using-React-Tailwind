import React from "react";
import HeroImage from "../images/HeroImage.png";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg h-screen md:grid md:grid-cols-2 flex flex-col md:gap-28 mx-auto pt-16 px-8 md:px-4 pb-6 items-center">
        <>
          <div>
            <h1 className="pt-6 pb-4 text-4xl font-bold text-white">
              I'm Akshat
            </h1>
            <div className="text-5xl py-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">
              A Software Developer
            </div>
            <p className="sm:text-lg text-justify text-gray-500 py-8 max-w-md">
              Currently I am working as a Graduate Engineer Trainee in Continental Automotive Components Pvt. Ltd. Technical Center India.
            </p>
            <div>
              <a
                href="https://drive.google.com/uc?export=download&id=16xvtFqTCSNGiKNS7vZe_EoA75FhyuAfz"
                target="_blank"
                className="group text-white w-fit px-4 py-2 my-1 flex items-center rounded-md bg-gradient-to-r from-purple-500 to-blue-400 cursor-pointer shadow-gray-700 shadow-lg duration-300 hover:scale-105 "
              >
                Resume
              </a>
            </div>
          </div>
        </>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="h-auto w-full shadow-gray-600 shadow-lg rounded-2xl mx-auto my-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
