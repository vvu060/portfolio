import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full h-20 flex items-center justify-between py-4 px-6 bg-transparent">
      {/* Logo */}
      <div className="flex items-center space-x-5">
        <div className="flex items-end">
          <Image src="/compass.svg" alt="My Image" width={50} height={50} />
          <Image src="/v.svg" alt="My Image" width={50} height={50} />
        </div>

        {/* Links */}
        <div>
          <ul className="flex items-center space-x-5 text-light-text">
            <li className="hover:text-white">
              <a href="#">Home</a>
              <div className="h-[2px] bg-white" />
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Contact ME */}
      <div>
        <button className="p-4 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-600 hover:bg-gradient-to-b transition-colors transform duration-150">
          Contact Me
        </button>
      </div>
    </header>
  );
};

export default Header;
