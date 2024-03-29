import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-gray-200 md:h-screen"
    >
      <div className="max-w-screen-lg px-8 pt-24 pb-12 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl md:text-5xl font-bold inline border-b-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400 border-gray-500">
            About Me
          </p>
        </div>
        <br />
        <p className="text-base md:text-xl text-justify pl-1 pr-4 pt-10 leading-loose">
          I'm Akshat and I belong to Sundernagar, a town in district Mandi of
          Himachal Pradesh. I completed my bachelors in Computer Science &
          Engineering with proficiency in Data Science from Jaypee University of
          Information Technology, Waknaghat, Solan, Himachal Pradesh.
        </p>
        <br />
        <p className="text-base md:text-xl text-justify pl-1 pr-4 pt-10 leading-loose">
          I enjoy doing Software Development and I have made several projects
          using HTML, CSS, ReactJS, Python & Machine Learning which includes
          Realtime Weather App, Reminder App, Currency Converter, Image
          colorization using DCGANs, Respiratory Disease Detection using CNN
          technique.
        </p>
      </div>
    </div>
  );
};

export default About;
