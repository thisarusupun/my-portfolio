import React, { useContext } from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import Java from "../assets/java.png";
import SpringBoot from "../assets/springboot.png";
import MySQL from "../assets/mysql.png";
import Mongo from "../assets/mongo.png";
import GitHub from "../assets/github.png";
import NodeJS from "../assets/nodejs.png";
import ExpressJS from "../assets/expressjs.png";
import ThemeContext from "../context/ThemeContext";

function Skills() {
  const { theme } = useContext(ThemeContext);

  const techs = [
    {
      src: Java,
      title: "Java",
      style: "shadow-red-500",
    },
    {
      src: JavaScript,
      title: "Java Script",
      style: "shadow-yellow-500",
    },
    {
      src: SpringBoot,
      title: "Spring Boot",
      style: "shadow-green-500",
    },
    {
      src: ReactImg,
      title: "React JS",
      style: "shadow-sky-600",
    },
    {
      src: NodeJS,
      title: "Node JS",
      style: "shadow-lime-500",
    },
    {
      src: ExpressJS,
      title: "Express JS",
      style: "shadow-zinc-600",
    },
    {
      src: HTML,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      src: CSS,
      title: "CSS",
      style: "shadow-blue-500",
    },

    {
      src: Tailwind,
      title: "Tailwind CSS",
      style: "shadow-indigo-500",
    },

    {
      src: MySQL,
      title: "MySQL",
      style: "shadow-blue-500",
    },
    {
      src: Mongo,
      title: "Mongo DB",
      style: "shadow-green-500",
    },
    {
      src: GitHub,
      title: "Github",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="skills"
      className={`${
        theme
          ? "bg-gradient-to-b from-gray-900 to-black text-white"
          : "bg-gray-200 text-black"
      }
            w-full h-auto sm:min-h-screen sm:h-auto pt-[60px] pb-[10px] px-[10px] sm:px-[50px] md:px-[100px]`}
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="text-2xl pt-6">
            These are the technologies I work with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map((tech, index) => (
            <div
              key={index}
              className={`shadow-md hover:scale-110 duration-500 py-2 rounded-lg ${tech.style}`}
            >
              <img src={tech.src} alt="" className="w-20 h-20 mx-auto" />
              <p className="mt-4">{tech.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
