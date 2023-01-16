import React from "react";

import html from "../images/html.png";
import css from "../images/css.png";
import javascript from "../images/javascript.png";
import reactImage from "../images/react.png";
import tailwind from "../images/tailwind.png";
import cpp from "../images/cpp.png";
import python from "../images/python.png";
import photoshop from "../images/Photoshop.png";
import figma from "../images/figma.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-600",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-sky-500",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-300",
    },
    {
      id: 6,
      src: cpp,
      title: "CPP",
      style: "shadow-blue-500",
    },
    {
      id: 7,
      src: python,
      title: "Python",
      style: "shadow-yellow-500",
    },
    {
      id: 8,
      src: photoshop,
      title: "Abobe Photoshop",
      style: "shadow-sky-400",
    },
    {
      id: 9,
      src: figma,
      title: "Figma",
      style: "shadow-purple-600",
    },
  ];

  return (
    <div
      name="skills"
      className=" w-full h-full py-10 bg-gradient-to-b from-gray-800 to-black"
    >
      <div className="max-w-screen-lg mx-auto pl-4 pt-12 flex flex-col justify-center w-full h-full text-gray-200">
        <div>
          <p className="text-5xl font-bold border-b-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400 border-gray-500 inline">
            Skills
          </p>
        </div>

        <div className="pt-12 w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
