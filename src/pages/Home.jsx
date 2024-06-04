import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Logo from "../assets/pandacoding.png";
import { VortexBackground } from "../components/ui/VortexBackground";

function Home() {
  return (
    <VortexBackground>
      <div
        name="home"
        className="w-full h-auto sm:h-screen pt-[60px] pb-[10px]"
      >
        {/* container */}
        <div className="max-w-screen-lg mx-auto px-4 flex flex-col items-center justify-center h-full md:flex-row">
          <div className="flex flex-col justify-center h-full px-4">
            <p className="text-yellow-400 text-xl">Hi, My name is</p>
            <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
              Thisaru Supun
            </h1>
            <h2 className="text-3xl sm:text-5xl text-[#8892b0]">
              I'm a Full Stack Developer
            </h2>

            <div>
              <button className="text-white group bg-gradient-to-b from-gray-900 to-black rounded-xl px-6 py-3 my-2 flex items-center shadow-sm hover:shadow-blue-600">
                View Work
                <span className="group-hover:rotate-90 duration-500">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </button>
            </div>
          </div>

          <div>
            <img
              src={Logo}
              alt=""
              className="rounded-full mx-auto w-[200px] md:w-[300px] p-4"
            />
          </div>
        </div>
      </div>
    </VortexBackground>
  );
}

export default Home;
