import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="mt-24 flex items-start space-x-3 mx-10">
      {/* Left */}
      <div className="flex flex-col items-start space-y-3 text-light-text w-1/2">
        <div className="flex items-center space-x-2">
          <div className="h-[2px] w-7 bg-[#64F4AB]" />
          <p className="text-[#64F4AB] font-light tracking-wide text-lg">
            Contact Me
          </p>
        </div>
        <h1 className="text-3xl sm:text-4xl sm:tracking-wide font-semibold">
          Get In Touch With Me
        </h1>
        <p className="text-left text-xl font-light w-3/4">
          The technological revolution is changing aspect of our lives, and the
          fabric of society itself. it’s also changing the way we learn and what
          we learn. Factual knowledge is less prized when everything you ever
          need to know can be found on your phone. There’s no imperative to be
          an expert Factual knowledge is less prized when everything you ever
          need to know can be found at doing everything.
        </p>
        {/* Email and Phone */}
        <div className="flex items-center space-x-10 pt-10">
          <div className="flex items-start space-x-9">
            <div className="p-3 rounded-full bg-gray-900">
              <Image src="/phone.svg" alt="My Image" width={50} height={50} />
            </div>
            <div className="flex flex-col">
              <h2 className="text-3xl sm:text-3xl sm:tracking-wide font-semibold">
                Phone
              </h2>
              <p className="text-lg  font-light max-w-2xl">123 456 758 88</p>
              <p className="text-lg  font-light max-w-2xl">568 123 478 88</p>
            </div>
          </div>

          <div className="flex items-start space-x-9">
            <div className="p-3 rounded-full bg-gray-900">
              <Image src="/email.svg" alt="My Image" width={50} height={50} />
            </div>
            <div className="flex flex-col">
              <h2 className="text-3xl sm:text-3xl sm:tracking-wide font-semibold">
                Email
              </h2>
              <p className="text-lg  font-light max-w-2xl">example@email.com</p>
              <p className="text-lg  font-light max-w-2xl">example@email.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right */}

      <form className="w-1/2 flex flex-col space-y-4 items-start">
        <div className="flex items-center w-full space-x-5 text-light-text">
          <input
            className="rounded-lg h-14 w-full p-2 border-[#64F4AB] border bg-transparent outline-none"
            placeholder="Full Name"
            type="text"
          />
          <input
            className="rounded-lg h-14 p-2 w-full border-[#64F4AB] border bg-transparent outline-none"
            placeholder="Email"
            type="text"
          />
        </div>
        <textarea
          name=""
          id=""
          cols={30}
          rows={10}
          className="rounded-lg w-full p-2 border-[#64F4AB] border bg-transparent outline-none text-light-text"
          placeholder="Message"
        ></textarea>
        <button className="py-4 px-14 rounded-xl bg-gradient-to-r from-yellow-400 shadow-2xl to-yellow-600 hover:bg-gradient-to-b transition-colors text-xl transform duration-150">
          Send To Me
        </button>
      </form>
    </div>
    // </div>
  );
};

export default Contact;
