import React from "react";

const Work_Exp = () => {
  return (
    <div
      name="experience"
      className="w-full h-full py-10 bg-gradient-to-b from-gray-800 to-black text-gray-200"
    >
      <div className="max-w-screen-lg mx-auto px-8 pt-12 flex flex-col justify-center w-full h-full text-gray-200">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-normal border-b-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400 border-gray-500 pt-1 inline">
            Work Experience
          </h1>

          {/*Continental*/}

          <div>
            <h2 className="pt-10 text-xl md:text-3xl font-bold">
              Graduate Engineer Trainee (GET)
            </h2>
            <p className="pt-3 text-base md:text-xl font-medium leading-relaxed">
              Continental Automotive Components Pvt. Ltd. (Technical Center India)
              <br />
              (Electronic City, Bengaluru, Karnataka)
            </p>
            <div className="flex flex-col justify-between items-baseline">
              <h3 className="pt-2 pb-5 font-semibold  text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">
                07/2023 - Present
              </h3>
              <li className="text-sm md:text-base pb-2">
                Currently working on Complex Device Drivers under Reusable Modules Department.
              </li>
              <li className="text-sm md:text-base pb-2">
                Completed a 3 months training program in the field of
                Automotive Software Development.
              </li>
            </div>
          </div>

          {/*CareX*/}

          <div>
            <h2 className="pt-10 text-xl md:text-3xl font-bold">
              Application Development Intern
            </h2>
            <p className="pt-3 text-base md:text-xl font-medium leading-relaxed">
              CareX Pvt. Ltd.
              <br />
              (Noida, Uttar Pradesh)
            </p>
            <div className="flex flex-col justify-between items-baseline">
              <h3 className="pt-2 pb-5 font-semibold  text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">
                05/2022 - 07/2022
              </h3>
              <li className="text-sm md:text-base pb-2">
                Developed a working prototype of the product for user as well as
                for the service provider.
              </li>

              <li className="text-sm md:text-base pb-2">
                Worked in a team of 8 for the development of product.
              </li>

              <li className="text-sm md:text-base pb-2">
                Designed the UI of the application on Figma & Adobe XD.
              </li>

              <li className="text-sm md:text-base pb-2">
                Created a wireframe of the product for the future development of
                the product.
              </li>

              <li className="text-sm md:text-base">
                Developed the frontend of the app using React Native.
              </li>
            </div>
          </div>

          {/*Infowiz*/}

          <div>
            <h2 className="pt-10 text-xl md:text-3xl font-bold">
              Project Intern
            </h2>
            <p className="pt-3 text-base md:text-xl  font-medium leading-relaxed">
              InfoWiz A Software Solution
              <br />
              (Remote)
            </p>
            <div className="flex flex-col justify-between items-baseline">
              <h3 className="pt-2 pb-5 font-semibold  text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">
                05/2022 - 07/2022
              </h3>

              <li className="text-sm md:text-base pb-2">
                Worked on a Fake News Detection System based on Machine Learning
                Algorithms.
              </li>
            </div>
          </div>

          {/*AdDigital Comms*/}

          <div>
            <h2 className="pt-10 text-xl md:text-3xl font-bold">
              Graphic Designing Intern
            </h2>
            <p className="pt-3 text-base md:text-xl font-medium leading-relaxed">
              AdDigital Communications
              <br />
              (Remote)
            </p>
            <div className="flex flex-col justify-between items-baseline">
              <h3 className="pt-2 pb-5 font-semibold  text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">
                05/2021 - 06/2021
              </h3>

              <li className="text-sm md:text-base pb-2">
                Designed various promotional posts for social media of the
                company.
              </li>

              <li className="text-sm md:text-base pb-2">
                Designed the Letterhead, Brochure, Posters, Flexes for the
                company.
              </li>
            </div>
          </div>

          {/*College Guru*/}

          <div>
            <h2 className="pt-10 text-xl md:text-3xl font-bold">
              Multimedia Intern
            </h2>
            <p className="pt-3 text-base md:text-xl font-medium leading-relaxed">
              College Guru
              <br />
              (Solan, Himachal Pradesh)
            </p>

            <div className="flex flex-col justify-between items-baseline">
              <h3 className="pt-2 pb-5 font-semibold  text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">
                11/2019 - 03/2020
              </h3>

              <li className="text-sm md:text-base pb-2">
                Designed the UI of the College Guru App and website.
              </li>

              <li className="text-sm md:text-base pb-2">
                Designed the Brochure, Flyers, Posters, Social Media Posts etc.
              </li>

              <li className="text-sm md:text-base pb-2">
                Responsible for all the multimedia related works of this startup
                under H.P. Government Startup Scheme.
              </li>

              <li className="text-sm md:text-base">
                Eventually elevated to the leadership role of Multimedia
                operations.
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work_Exp;
