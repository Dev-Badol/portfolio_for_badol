import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        {/* <Image src={logo} alt="" width="120" height="20" />
         */}
        logo
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>{" "}
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>{" "}
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Project
              </li>
            </Link>{" "}
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? " md:hidden fixed right-0 top-0 w-full h-screen backdrop-brightness-50 backdrop-blur-sm bg-white/30 " : ""
        }
      >
        <div
          className={
            nav
              ? " md:hidden fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 "
              : "fixed left-[-200%] p-10 top-0 ease-in duration-300 "
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              {/* <Image src='' alt='' /> */}
              <h1>logo</h1>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul>
              <Link href="/">
                <li className="py-4 text-sm uppercase hover:border-b">Home</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm uppercase hover:border-b">About</li>
              </Link>{" "}
              <Link href="/">
                <li className="py-4  text-sm uppercase hover:border-b">
                  Skills
                </li>
              </Link>{" "}
              <Link href="/">
                <li className="py-4 text-sm uppercase hover:border-b">
                  Project
                </li>
              </Link>{" "}
              <Link href="/">
                <li className="py-4  text-sm uppercase hover:border-b">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-36">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let's Connect
              </p>
              <div className="flex mr-4 pt-6  gap-4">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                  <FaGithub />
                </div>
               
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                  <AiOutlineMail />
                </div>
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
