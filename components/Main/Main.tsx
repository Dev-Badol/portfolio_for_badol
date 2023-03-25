import { TypeAnimation } from "react-type-animation";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail} from "react-icons/ai";
import { FaFacebook } from 'react-icons/fa';

const Main = () => {
  return (
    <div className="w-full pt-32 md:pt-64 h-screen text-center">
      <div className="max-w-[1240px] w-full mx-auto p-2 flex justify-center items-center">
        <div className="flex flex-col items-center gap-2">
          <p className="uppercase md:text-2xl font-bold text-xl">Let's build someting together</p>
          <TypeAnimation
            sequence={[
              "Hi,I'm Badol",
              1000,
              "I'm a Front End Developer",
              2000,
              "Thanks for Visiting us",
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "1.5em", color: "#5651e5", font: "bold" }}
          />
          <p className="py-4 text-gray-600 sm:max-w-[70%] text-xl md:text-xl m-auto">
            I’m focused on building responsive front-end web applications
            integrating back-end technologies.
          </p>
          <div className="flex gap-6 pt-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
              <BsFillPersonLinesFill />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
              <FaFacebook />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
