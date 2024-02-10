import { useState } from "react";
import { logo } from "../assets";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <div className="flex justify-between ">
        <img src={logo} alt="" className="h-[20px]" />
        <div className="hidden md:flex">
          <ul className="flex flex-row">
            <li className="mr-4 transition-all duration-350 ease-in-out hover:scale-110 cursor-pointer hover:border-b-[1px]">
              Home
            </li>
            <li className="mr-4 transition-all duration-350 ease-in-out hover:scale-110 cursor-pointer hover:border-b-[1px]">
              About Me
            </li>
            <li className="mr-4 transition-all duration-350 ease-in-out hover:scale-110 cursor-pointer hover:border-b-[1px]">
              Skills
            </li>
            <li className="mr-4 transition-all duration-350 ease-in-out hover:scale-110 cursor-pointer hover:border-b-[1px]">
              Portfolio
            </li>
            <li className="mr-4 transition-all duration-350 ease-in-out hover:scale-110 cursor-pointer hover:border-b-[1px]">
              Contact Me
            </li>
          </ul>
        </div>
        <div className="md:hidden lg:hidden">
          {!toggle ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer "
              onClick={() => {
                setToggle(true);
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer float-right"
              onClick={() => {
                setToggle(false);
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          )}

          {toggle ? (
            <ul className="flex flex-col mt-8 p-4 bg-gray-500 rounded-2xl absolute right-4">
              <li className="p-2 ml-6 transition-all duration-350 ease-in-out hover:scale-110 cursor-pointer">
                Home
              </li>
              <li className="p-2 ml-6 transition-all duration-350 ease-in-out hover:scale-110 cursor-pointer">
                About Me
              </li>
              <li className="p-2 ml-6 transition-all duration-350 ease-in-out hover:scale-110 cursor-pointer">
                Skills
              </li>
              <li className="p-2 ml-6 transition-all duration-350 ease-in-out hover:scale-110 cursor-pointer">
                Portfolio
              </li>
              <li className="p-2 ml-6 transition-all duration-350 ease-in-out hover:scale-110 cursor-pointer">
                Contact Me
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
