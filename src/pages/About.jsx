import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function About() {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-gray-300 h-auto sm:h-screen pt-[60px] pb-[10px] px-20"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col  w-full h-full text-white">
        <div>
          <h1 className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            About
          </h1>
        </div>

        <div className="flex flex-col md:flex-row colst py-6">
          <div className="md:w-1/2 p-6">
            <h1 className="text-3xl">Myself</h1>
            <p className="text-2xl py-6">
              I am an honest, confident, and dedicated individual who is
              inspired by curiosity and creativity to explore new technologies
              and find novel solutions to complex problems. I am capable of
              working in a team and on my own and accepting challenges to reach
              my goals.
            </p>

            <div>
              <button className="text-white group bg-gradient-to-b from-gray-900 to-black rounded-xl px-6 py-3 my-2 flex items-center shadow-sm hover:shadow-blue-600">
                Resume
                <span className="group-hover:rotate-90 duration-500">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </button>
            </div>
          </div>

          <div className="md:w-1/2 p-6">
            <h1 className="text-3xl">Education</h1>
            <p className="text-2xl py-6">
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
