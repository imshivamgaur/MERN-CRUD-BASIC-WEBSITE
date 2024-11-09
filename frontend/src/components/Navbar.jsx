import React, { useState } from "react";
import { MdOutlineAddBox } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { useProductStore } from "../../store/product";

const Navbar = ({ colorMode, toggleColorMode }) => {
  // const [colorMode, setColorMode] = useState("dark");

  return (
    <>
      <div
        className={`${
          colorMode === "dark" ? "bg-gray-800" : "bg-gray-300"
        } flex justify-center transition-all duration-[.3s]`}
      >
        <div
          className={`px-10 rounded-lg py-2 flex justify-between items-center w-[1140px]`}
        >
          <h3 className={`text-xl sm:text-3xl font-bold cursor-pointer bg-clip-text text-transparent bg-gradient-to-r ${colorMode=== "dark"? "from-red-500 via-red-300 to-green-500": "from-blue-800 via-blue-500 to-green-500"} `}>
            <Link to={"/"}>PRODUCT STORE 🛒</Link>
          </h3>

          <div className="flex gap-2 sm:gap-4">
            <Link to={"/create"}>
              <button className="bg-gray-700  text-white  px-2 sm:px-3 py-2 text-xl  sm:text-2xl rounded-md">
                <MdOutlineAddBox />
              </button>
            </Link>
            <button
              onClick={toggleColorMode}
              className="bg-gray-700  text-white sm:px-3 px-2 py-2 text-xl sm:text-2xl rounded-md"
            >
              {colorMode === "dark" ? <MdLightMode /> : <MdDarkMode/> }
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
