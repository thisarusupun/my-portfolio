import React, { useContext } from "react";
import currencyconverter from "../assets/currency-converter.png";
import bookstore from "../assets/bookstore-mern.png";
import moviereviews from "../assets/moviereviews.png";
import employeems from "../assets/Employee-MS.png";
import userregistration from "../assets/user-registration.png";
import weatherapplication from "../assets/weather-application.png";
import { GoCodeReview } from "react-icons/go";
import { GoRocket } from "react-icons/go";
import ThemeContext from "../context/ThemeContext";

function Projects() {
  const { theme } = useContext(ThemeContext);

  const projects = [
    {
      name: "Employee Management System",
      src: employeems,
      demo: "",
      code: "https://github.com/thisarusupun/Employee-Management-System.git",
    },
    {
      name: "Bookstore Application",
      src: bookstore,
      demo: "",
      code: "https://github.com/thisarusupun/books-store-mern.git",
    },
    {
      name: "Currency Converter",
      src: currencyconverter,
      demo: "https://thisarusupun-wdp-currencyconveter.netlify.app",
      code: "https://github.com/thisarusupun/Currency-Converter.git",
    },
    {
      name: "Movie Reviews",
      src: moviereviews,
      demo: "",
      code: "https://github.com/thisarusupun/Movie-Reviews.git",
    },
    {
      name: "User Registration",
      src: userregistration,
      demo: "",
      code: "https://github.com/thisarusupun/spring-boot-security-jwt.git",
    },
    {
      name: "Weather Application",
      src: weatherapplication,
      demo: "https://effortless-mooncake-ecbf3a.netlify.app",
      code: "https://github.com/thisarusupun/Weather-App.git",
    },
  ];

  const handleDemo = ({ demo }) => {
    // window.location.href = demo
    window.open(demo, "");
  };

  const handleCode = ({ code }) => {
    // window.location.href = code
    window.open(code, "");
  };

  return (
    <div
      name="projects"
      className={`${
        theme
          ? "bg-gradient-to-b from-gray-900 to-black text-white"
          : "bg-white text-black"
      }
            w-full h-auto sm:min-h-screen sm:h-auto pt-[60px] pb-[10px] px-[10px] sm:px-[50px] md:px-[100px] sm:pb-[50px]`}
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Projects
          </p>
          <p className="text-2xl pt-6">These are the projects I have done</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map((project, index) => {
            const { name, src, demo, code } = project;
            return (
              <div
                key={index}
                className="shadow-md shadow-gray-600 hover:shadow-yellow-400 rounded-lg p-3 flex sm:flex-col"
              >
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105 w-[200px] h-[150px] sm:h-[200px] sm:w-full"
                />

                <div className="flex-col items-center justify-center py-2">
                  <p className="text-center hover:text-yellow-400 text-lg">
                    {name}
                  </p>

                  <div className="w-full flex-col sm:flex sm:flex-row items-center justify-center py-2">
                    <button
                      className="w-28 px-6 mx-2 py-1 flex duration-200 hover:scale-105 text-white bg-gradient-to-b from-gray-900 to-black rounded-full items-center shadow-sm shadow-gray-400 hover:shadow-blue-600"
                      onClick={() => handleDemo({ demo })}
                    >
                      Demo <GoRocket className="pl-1" size={20} />
                    </button>

                    <button
                      className="w-28 px-6 mx-2 mt-2 sm:my-0 py-1 sm:py-1 flex duration-200 hover:scale-105 text-white bg-gradient-to-b from-gray-900 to-black rounded-full items-center shadow-sm shadow-gray-400 hover:shadow-blue-600"
                      onClick={() => handleCode({ code })}
                    >
                      Code <GoCodeReview className="pl-1" size={20} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
