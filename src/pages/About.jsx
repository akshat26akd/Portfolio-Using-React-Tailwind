import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-gray-200"
    >
      <div className="max-w-screen-lg pl-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-5xl font-bold inline border-b-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400 border-gray-500">
            About Me
          </p>
        </div>
        <br/>
        <p className="text-justify text-xl mt-20 leading-loose">
          I'm Akshat and I belong to Sundernagar, a town in district Mandi of Himachal Pradesh.
          <br />
          I am pursuing my bachelors in Computer Science & Engineering with proficiency in Data Science from Jaypee University of Information Technology, Waknaghat, Solan, Himachal Pradesh.
        </p>
<br/>
        <p className="text-justify text-xl mt-20 leading-loose">
          I enjoy doing Frontend Development and I have made several projects using HTML, CSS, Tailwind, React.<br />
          I also have a great interest in Software development and made a couple of machine learning projects which includes Respiratory Disease Detection using CNN technique
          and Image colorization using DCGANs.
        </p>

      </div>
    </div>
  );
};

export default About;