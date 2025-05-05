import { FaClock } from "react-icons/fa6";
import { BsEmojiSmileFill } from "react-icons/bs";
import { FaMessage } from "react-icons/fa6";
import { FaIdCard } from "react-icons/fa";
import { IoBagCheck } from "react-icons/io5";
import Search from "./Search";
const Header = () => {
  return (
    <div>
      <div className="flex bg-[#FDFDFD]  flex-col justify-center items-center relative ">
        <p className="text-2xl font-bold mt-22 lg:text-5xl lg:mt-30">
          Over <span className="text-blue-500">5,000 jobs</span> are <br />
          <p className="flex items-center justify-center"> waiting for you</p>
        </p>
        <p className="mt-4 ">
          <p className="flex items-center justify-center">
            work with the best companies,
          </p>{" "}
          <br />
          <p className="flex items-center justify-center -mt-6">
            {" "}
            hire the experienced professionals
          </p>
        </p>
        <div>
          <div className=" absolute left-10 top-35  text-5xl md:left-30 md:top-35  md:text-5xl    bg-gray-300 flex items-center justify-center w-15 rounded-full h-15 shadow-lg  opacity-25 lg:w-25 lg:h-25 lg:left-40 lg:top-45 lg:text-7xl bottom-1 text-emerald-600  ">
            <FaClock />
          </div>
          <div className="absolute right-10 top-35 text-5xl md:right-30 md:top-35 md:text-5xl   bg-gray-300 flex items-center justify-center w-15 rounded-full h-15 shadow-lg  opacity-25 lg:w-25 lg:h-25  lg:right-40 lg:top-45 bottom-1 lg:text-7xl text-gray-700">
            <BsEmojiSmileFill />
          </div>
          <div className="absolute right-82  top-10 text-5xl md:right-50  md:top-10 md:text-5xl   bg-gray-300 flex items-center justify-center w-15 rounded-full h-15 shadow-lg  opacity-25 lg:w-25 lg:h-25 lg:right-90 lg:top-15 lg:text-7xl lg:p-5 text-cyan-600">
            <FaMessage />
          </div>
          <div className="absolute left-60 top-2 text-5xl md:left-90 md:top-2 md:text-5xl bg-gray-300 flex items-center justify-center w-15 rounded-full h-15 shadow-lg  opacity-25 lg:w-25 lg:h-25  lg:left-160 lg:p-5 lg:top-2 lg:text-7xl text-fuchsia-600">
            <FaIdCard />
          </div>
          <div className="absolute left-85 top-10 text-5xl md:left-50 md:top-10 md:text-5xl  bg-gray-300 flex items-center justify-center w-15 rounded-full h-15 shadow-lg  opacity-25 lg:w-25 lg:h-25  lg:left-90 lg:top-15 lg:text-7xl text-indigo-600">
            <IoBagCheck />
          </div>
        </div>

        {/* <Search /> */}
        {/* <div className=" w-110  text-end">Advance search</div> */}
      </div>
    </div>
  );
};

export default Header;
