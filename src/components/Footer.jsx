import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MdOutlinePhonelinkRing } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const footerPosition = document.getElementById("footer").offsetTop;
      if (currentScrollY > footerPosition - window.innerHeight / 2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <motion.footer
        id="footer"
        className="bg-bg dark:bg-dar_bg_secondary "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto md:py-10 p-2 flex flex-col md:flex-row justify-between">
          {/* Left Side - Logo */}
          <div className="w-full md:w-1/5 mb-6 md:mb-0">
            <div className="flex md:justify-start justify-center font-custom items-center space-x-3 font-bold text-5xl mb-4">
              <img
                className="h-11 w-11 rounded-full"
                src="../../logo.jpg"
                alt=""
              />
              <a href="/" className="text-primary text-base">
                &lt;Developer/&gt;
              </a>
            </div>
            <p className="text-Gray font-normal md:text-left text-center leading-snug my-2 text-sm md:text-[16px] font-custom">
              Maximize your investment in the capital market world with the
              convenience and various features provided by Tradiant.
            </p>
            <p className="text-Gray  md:text-left text-center font-normal leading-snug my-3 text-md font-custom">
              Unduh Aplikasi
            </p>
            <div className="flex justify-center md:justify-start">
              <img className="md:w-13" src="../../footer.png" alt="" />
            </div>
          </div>

          {/* Right Side - Navigation Links */}
          <div className="flex flex-col md:flex-row p-5 md:p-1 gap-6">
            <div className="flex flex-col gap-3">
              <h1 className="text-black dark:text-white font-bold my-2 text-[16px]">
                Resources
              </h1>
              <a
                href="/about"
                className="text-Gray hover:underline font-custom"
              >
                About Us
              </a>
              <a
                href="/journey"
                className="text-Gray hover:underline font-custom"
              >
                Journey
              </a>
              <a href="/blog" className="text-Gray hover:underline font-custom">
                Blog
              </a>
              <a
                href="/contact"
                className="text-Gray hover:underline font-custom"
              >
                Contact
              </a>
              <a href="/help" className="text-Gray hover:underline font-custom">
                Help
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-black dark:text-white font-bold my-2 text-sm md:text-[16px]">
                Help
              </h1>
              <a
                href="/house-rules"
                className="text-Gray hover:underline font-custom"
              >
                House Rules
              </a>
              <a
                href="/our-terms"
                className="text-Gray hover:underline font-custom"
              >
                Our Terms
              </a>
              <a
                href="/privacy-policy"
                className="text-Gray hover:underline font-custom"
              >
                Privacy & Policy
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-black dark:text-white font-bold my-2 text-sm md:text-[16px]">
                Contact Us
              </h1>
              <a
                href="/phone"
                className="text-Gray flex items-center hover:underline font-custom"
              >
                <MdOutlinePhonelinkRing className="mr-1" />
                9301024584
              </a>
              <a
                href="/email"
                className="text-Gray flex items-center hover:underline font-custom"
              >
                <IoMdMail className="mr-1" /> deveshsen512@gmail.com
              </a>
              <a
                href="/address"
                className="text-Gray flex  hover:underline font-custom"
              >
                <FaLocationDot className="mr-1" />
                Mandideep distt raisen <br /> Madhya Pradesh india
              </a>
            </div>
          </div>
        </div>
      </motion.footer>
      <motion.h1
        className="text-center font-Poppins font-normal text-sm md:text-base dark:bg-dark_bg dark:text-white p-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.5 }}
      >
        Copyright @Deveshsen 2024. All Rights Reserved.
      </motion.h1>
    </div>
  );
};

export default Footer;
