import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen py-24 bg-gradient-to-b from-black to-gray-800 p-4 text-gray-200"
    >
      <div className="flex flex-col justify-center max-w-screen-lg mx-auto px-8 py-12 ">
        <div>
          <p className="text-4xl md:text-5xl font-bold inline border-b-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400 border-gray-500">
            Get In Touch!
          </p>
          <p className="py-6 text-base">
            Submit the form below to get in touch with me.
          </p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/3d823566-484c-4f6d-99f7-399bebfd271b"
            target="blank"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-gray-200 focus:outline-none border-purple-200"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-gray-200 focus:outline-none border-purple-200"
              required
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="8"
              className="p-2 bg-transparent border-2 rounded-md text-gray-200 focus:outline-none border-purple-200"
            ></textarea>

            <button className="text-white bg-gradient-to-r from-purple-500 to-blue-400 px-6 py-3 mt-10 mx-auto flex items-center rounded-md hover:scale-105 duration-300">
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
