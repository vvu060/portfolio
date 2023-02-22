import React from "react";
import Image from "next/image";
import Instagram from "./Instagram";
import LinkedIn from "./LinkedIn";
import Twitch from "./Twitch";
import Behance from "./Behance";

const Footer = () => {
  return (
    <footer className="mt-10 overflow-x-hidden  w-full py-4 h-36 px-6  flex items-center bg-transparent justify-between">
      {/* Logo */}
        <div>
            <div className="flex cursor-pointer space-x-4">
            <Image src="/compass.svg" alt="My Image" width={50} height={50} />
            <Image src="/v.svg" alt="My Image" width={50} height={50} />
      </div>
        </div>
         {/* T & C */}
        <div>
          <p className="text-xl sm:tracking-wide cursor-pointer text-light-text font-montserrat font-light">© 2022 – JF Digital Elementor WordPress Theme.</p>
        </div>
         
         {/* Logos */}

         <div className="flex cursor-pointer items-center space-x-8">
          <Instagram/>
          <LinkedIn/>
          <Twitch/>
          <Behance/>
         </div>
    
    </footer>
  );
};

export default Footer;
