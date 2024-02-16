import React, { useContext } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import ThemeContext from "../context/ThemeContext";

function About() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      name="about"
      className={`${
        theme
          ? "bg-gradient-to-b from-gray-900 to-black text-white"
          : "bg-white text-black"
      }
            w-full h-auto sm:min-h-screen sm:h-auto pt-[60px] pb-[10px] px-[10px] sm:px-[50px] md:px-[100px]`}
    >
      <div className="max-w-screen-lg mx-auto flex flex-col  w-full h-full ">
        <div>
          <h1 className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            About
          </h1>
        </div>

        <div className="flex flex-col md:flex-row colst py-6">
          <div className="md:w-1/2 p-6 pr-10">
            <h1 className="text-xl sm:text-3xl">Myself</h1>
            <p className="text-justify text-lg sm:text-2xl py-2 sm:py-6">
              I am an honest, confident, and dedicated individual who is
              inspired by curiosity and creativity to explore new technologies
              and find novel solutions to complex problems. I am capable of
              working in a team and on my own and accepting challenges to reach
              my goals.
            </p>

            <div>
              <a href="/cv.pdf">
                <button className="text-white group bg-gradient-to-b from-gray-900 to-black rounded-xl px-6 py-3 my-2 flex items-center shadow-sm shadow-gray-400 hover:shadow-blue-600">
                  Resume
                  <span className="group-hover:rotate-90 duration-500">
                    <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                  </span>
                </button>
              </a>
            </div>
          </div>

          <div className="md:w-1/2 p-6">
            <h1 className="text-xl sm:text-3xl">Education</h1>
            <p className="text-lg sm:text-2xl py-2 sm:py-6 ">
              UNIVERSITY OF MORATUWA <br />
              Bachelor of Science in Civil Engineering(Hons) (2019-2023)
              <br />
              <br />
              Full-Stack Developer Trainee Program (Reading)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
