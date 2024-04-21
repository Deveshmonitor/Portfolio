import React from "react";
import Typewriter from "typewriter-effect";
import Services from './Services';

function Container() {
  return (
    <div>
      <div className="bg-bg dark:bg-dar_bg_secondary ">
        <div className=" pt-10 w-11/12 mx-auto flex justify-between flex-col md:flex-row ">
          {/* Left Side - Heading */}
          <div className="md:w-1/2 text-center md:pt-4 md:pl-4 md:text-left w-full">
            <h4 className="text-xl font-Poppins my-2 text-primary font-medium ">
              I Am SoftWare Engineer
            </h4>

            <h1 className="text-3xl md:text-5xl my-4 dark:text-white font-custom leading-tight font-bold mb-4 px-6 md:px-0">
              Welcome To My <span className="text-primary">World!</span> <br />
              <span className="text-primary"> I am </span> Devesh Sen.
            </h1>
            <div
              className="text-xl md:text-xl my-4
            dark:text-white font-custom leading-tight 
            font-bold mb-4 px-6 md:px-0"
            >
              <Typewriter
                options={{
                  strings: [
                    "Web Developement",
                    "App Development",
                    "ios Development",
                    "ERP Development",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 70,
                  deleteSpeeds: 20,
                }}
              />
            </div>

            <p className="text-Gray font-normal leading-snug my-2 text-sm font-custom">
              As a seasoned software engineer, I specialize in crafting
              innovative solutions across various platforms, including website
              development, app creation, and iOS/Windows application
              development. With a passion for exploring new ideas and pushing
              the boundaries of technology, I am dedicated to delivering
              high-quality products that exceed expectations. Let's turn your
              vision into reality through cutting-edge software solutions.
            </p>
            <div className="my-10">
              <button className="bg-primary hover:bg-secondary cursor-pointer font-semibold text-white text-[16px] font-Poppins px-6 py-4 rounded-md">
                Get Started
              </button>
              <button className="px-4 py-2  cursor-pointer text-[16px] font-Poppins font-semibold text-primary rounded-md">
                Explore Blogs
              </button>

              <div className="md:flex hidden items-center space-x-4">
                {/*<img src="../../Vector.png" alt="" />
                <img src="../../Vector (1).png" alt="" />*/}
              </div>
            </div>
          </div>
          <div className="w-full md:w-[40%]">
            <img
              className="w-full max-h-[80%]  rounded-md "
              src={"../../main.jpg"}
              alt="Your Image Description"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto flex flex-col justify-center py-4  md:py-12 dark:bg-dark_bg">
        <h1 className="md:text-2xl md:mb-14 font-semibold font-Poppins dark:text-white text-center">
          This site is working in progress
        </h1>
        <img className="md:my-14 mt-10 px-10" src="../../main.png" alt="" />
      </div>
      <Services/>
    </div>
  );
}

export default Container;
