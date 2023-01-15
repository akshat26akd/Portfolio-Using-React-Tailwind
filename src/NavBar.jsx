import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "education",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "projects",
    },
    {
      id: 6,
      link: "skills",
    },
    {
      id: 7,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-center items-center w-full h-16 text-white bg-transparent absolute">

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-normal text-gray-400 opacity-80 hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400 hover:scale-105 hover:opacity-100 hover:font-extrabold duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* <div
        onClick={() => setNav(!nav)}
        className="flex right-0 px-8 py-8 cursor-pointer text-gray-500 md:hidden absolute"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div> */}

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
