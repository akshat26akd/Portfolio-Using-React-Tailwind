import React from "react";

const Certifications = () => {
  return (
    <div
      name="certifications"
      className="w-full h-full py-10 bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto px-8 py-12  flex flex-col justify-center w-full h-full text-gray-200">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold border-b-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400 border-gray-500 pt-1 inline">
            Certifications
          </h1>

          {/* BODY */}

          {/*Advanced React*/}

          <div>
            <h2 className="pt-10 text-xl md:text-3xl font-bold">
              Advanced React
            </h2>

            <div className="flex flex-col justify-between items-baseline">
              <h3 className="pt-2 pb-5 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">
                Coursera | Meta
              </h3>

              <ul className="text-sm md:text-base">
                Credential ID: XB52CCLDC6YW
              </ul>
              <br />
              <a
                className="duration-300 hover:scale-105 group text-white w-fit px-3 py-2 flex items-center rounded-md bg-gradient-to-r from-purple-500 to-blue-400 cursor-pointer"
                href={"https://www.coursera.org/verify/XB52CCLDC6YW"}
                target="_blank"
              >
                View Credentials
              </a>
            </div>
          </div>

          {/*Supervised Machine Learning: Regression and Classification*/}

          <div>
            <h2 className="pt-10 text-xl md:text-3xl font-bold">
              Machine Learning Specialization
            </h2>

            <div className="flex flex-col justify-between items-baseline">
              <h3 className="pt-2 pb-5 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">
                Coursera | Stanford Online | DeepLearning.AI
              </h3>

              <ul className="text-sm md:text-base">
                Credential ID: FE3AQCDBXKJV
              </ul>
              <br />
              <a
                className="duration-300 hover:scale-105 group text-white w-fit px-3 py-2 flex items-center rounded-md bg-gradient-to-r from-purple-500 to-blue-400 cursor-pointer"
                href={
                  "https://www.coursera.org/verify/specialization/FE3AQCDBXKJV"
                }
                target="_blank"
              >
                View Credentials
              </a>
            </div>
          </div>

          {/*Programming for Everybody (Getting Started with Python)*/}

          <div>
            <h2 className="pt-10 text-xl md:text-3xl font-bold">
              Programming for Everybody (Getting Started with Python)
            </h2>

            <div className="flex flex-col justify-between items-baseline">
              <h3 className="pt-2 pb-5 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">
                Coursera | University of Michigan
              </h3>

              <ul className="text-sm md:text-base">
                Credential ID: JX93TW87ZT62
              </ul>
              <br />
              <a
                className="duration-300 hover:scale-105 group text-white w-fit px-3 py-2 flex items-center rounded-md bg-gradient-to-r from-purple-500 to-blue-400 cursor-pointer"
                href={"https://www.coursera.org/verify/JX93TW87ZT62"}
                target="_blank"
              >
                View Credentials
              </a>
            </div>
          </div>

          {/*HTML, CSS, and Javascript for Web Developers*/}

          <div>
            <h2 className="pt-10 text-xl md:text-3xl font-bold">
              HTML, CSS, and Javascript for Web Developers
            </h2>

            <div className="flex flex-col justify-between items-baseline">
              <h3 className="pt-2 pb-5 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">
                Coursera | John Hopkins University
              </h3>

              <ul className="text-sm md:text-base">
                Credential ID: M9DNKSBPFGXH
              </ul>
              <br />
              <a
                className="duration-300 hover:scale-105 group text-white w-fit px-3 py-2 flex items-center rounded-md bg-gradient-to-r from-purple-500 to-blue-400 cursor-pointer"
                href={"https://www.coursera.org/verify/M9DNKSBPFGXH"}
                target="_blank"
              >
                View Credentials
              </a>
            </div>
          </div>
          {/* BODY */}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
