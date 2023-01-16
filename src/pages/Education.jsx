import React from "react";

const Education = () => {
  return (
    <div
      name="education"
      className="w-full h-full py-10 bg-gradient-to-b from-black to-gray-800 text-gray-200"
    >
      <div className="max-w-screen-lg mx-auto px-8 py-12  flex flex-col justify-center w-full h-full text-gray-200">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold border-b-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400 border-gray-500 pt-1 inline">
            Education
          </h1>

          {/*University*/}

          <div>
            <h2 className="pt-10 text-xl md:text-3xl font-bold">
              B.Tech. | Computer Science & Engineering
            </h2>
            <p className="pt-3 font-medium leading-relaxed">
              Jaypee University of Information Technology
              <br />
              (Solan, Himachal Pradesh)
            </p>
            <div className="flex flex-col justify-between items-baseline">
              <h3 className="pt-2 font-normal text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">
                2019 - Present
              </h3>
              <h3 className="pt-1 font-normal text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">
                8.0 C.G.P.A
              </h3>
            </div>
          </div>

          {/*XII*/}

          <div>
            <h2 className="pt-10 text-xl md:text-3xl font-bold">
              Senior Secondary (XII) | Non-Medical | C.B.S.E.
            </h2>
            <p className="pt-3 font-medium leading-relaxed">
              St. Xavier's Residential School
              <br />
              (Kot, Sundarnagar, Himachal Pradesh)
            </p>
            <div className="flex flex-col justify-between items-baseline">
              <h3 className="pt-2 font-normal text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">
                2018 - 2019
              </h3>
              <h3 className="pt-1 font-normal text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">
                Percentage: 84.2%
              </h3>
            </div>
          </div>

          {/*X*/}

          <div>
            <h2 className="pt-10 text-xl md:text-3xl font-bold">
              Secondary (X) | Science | C.B.S.E.
            </h2>
            <p className="pt-3 font-medium leading-relaxed">
              Govt. Sr. Sec. Model School
              <br />
              (BBMB Colony, Sundarnagar, Himachal Pradesh)
            </p>
            <div className="flex flex-col justify-between items-baseline">
              <h3 className="pt-2 font-normal text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">
                2016 - 2017
              </h3>
              <h3 className="pt-1 font-normal text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">
                9.8 C.G.P.A
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
