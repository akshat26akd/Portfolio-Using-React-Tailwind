import React from "react";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full h-full py-10 bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto px-8 py-12  flex flex-col justify-center w-full h-full text-gray-200">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold border-b-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400 border-gray-500 pt-1 inline">
            Projects
          </h1>

          {/*Image Colorization*/}

          <div>
            <h2 className="pt-10 text-xl md:text-3xl font-bold">
              Image Colorization using Deep Convolutional Generative Adversarial
              Networks.
            </h2>

            <div className="flex flex-col justify-between items-baseline">
              <h3 className="pt-2 pb-5 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">
                01/2022 - 05/2022
              </h3>

              <li className="text-sm md:text-base">
                To fully generalize the colorization procedure using a
                conditional Deep Convolutional Generative Adversarial Network.
              </li>
              <br />
              <a
                className="duration-300 hover:scale-105 group text-white w-fit px-3 py-2 flex items-center rounded-md bg-gradient-to-r from-purple-500 to-blue-400 cursor-pointer"
                href={
                  "https://github.com/akshat26akd/Image-Colorization-Using-GANs"
                }
                target="_blank"
              >
                Github Link
              </a>
            </div>
          </div>

          {/*Respiratory Disease Detection*/}

          <div>
            <h2 className="pt-10 text-xl md:text-3xl font-bold">
              Respiratory Disease Detection using Respiratory Sounds via CNN
            </h2>

            <div className="flex flex-col justify-between items-baseline">
              <h3 className="pt-2 pb-5 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">
                07/2021 - 11/2021
              </h3>

              <li className="text-sm md:text-base">
                Designed and evaluated a deep learning-based methodology to
                monitor respiratory problems using Convolutional Neural
                Networks.
              </li>
              <br />
              <a
                className="duration-300 hover:scale-105 group text-white w-fit px-3 py-2 flex items-center rounded-md bg-gradient-to-r from-purple-500 to-blue-400 cursor-pointer"
                href={
                  "https://github.com/akshat26akd/Respiratory-Disease-Detection"
                }
                target="_blank"
              >
                Github Link
              </a>
            </div>
          </div>

          {/*Portfolio*/}

          <div>
            <h2 className="pt-10 text-xl md:text-3xl font-bold">
              Portfolio Website using ReactJs and Tailwind CSS
            </h2>

            <div className="flex flex-col justify-between items-baseline">
              <h3 className="pt-2 pb-5 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">
                11/2022 - 12/2022
              </h3>

              <li className="text-sm md:text-base">
                Developed a personal portfolio website using latest technologies
                like ReactJs, Tailwind CSS etc.
              </li>
              <br />
              <a
                className="duration-300 hover:scale-105 group text-white w-fit px-3 py-2 flex items-center rounded-md bg-gradient-to-r from-purple-500 to-blue-400 cursor-pointer"
                href={
                  "https://github.com/akshat26akd/Portfolio-Using-React-Tailwind"
                }
                target="_blank"
              >
                Github Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
