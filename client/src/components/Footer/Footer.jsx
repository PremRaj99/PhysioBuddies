import React, { useRef } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { PiInstagramLogoFill } from "react-icons/pi";
import { SiFacebook } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import img from "../../assets/images/img.png";
import Corousel from "../Common/Corousel";

export default function Footer() {
  const banner = useRef();

  const scroll = () => {
    console.log(banner.current);
  };
  scroll();
  return (
    <>
      {/* Banner */}
      <Corousel text="✦ Your Recovery, Our Mission" />

      <footer>
        {/* Footer Upper Section */}

        <div className="relative -bottom-16 flex lg:flex-row flex-col items-center justify-center gap-10 bg-[#fff9e9] rounded-xl lg:mx-40 mx-8 px-8 pt-10 md:pt-0 mt-6 md:px-32 shadow-xl">
          <div className="flex flex-col gap-4 items-center lg:items-start flex-1">
            <h2 className="text-3xl font-semibold">
              Contact Us
            </h2>
            <p className="text-sm lg:text-start text-center text-gray-700">
              Whether you have questions about our
              services, want to book an
              appointment, or just need some
              advice, we're here to help. Reach
              out to our friendly team today.
            </p>
            <button className="px-4 w-full md:w-fit md:px-16 py-2 bg-[#1a3e57] text-white rounded-full text-sm">
              Contact Us
            </button>
          </div>
          <div className="flex-1 h-72 flex items-end justify-center">
            <img
              src={img}
              className="w-[150px] md:w-[300px]"
              alt=""
            />
          </div>
          {/* <div className="flex-1"></div> */}
        </div>

        <div className="bg-bg-primary flex flex-wrap w-full justify-evenly py-12 pt-24 px-10 leading-6">
          {/* Logo and Description */}
          <div className="flex flex-col gap-4">
            <img
              src={logo}
              alt="Logo"
              className=" w-28 md:w-48 "
            />
            <p className="text-xs max-w-[50ch] w-full">
              At Physioplus, we are committed to
              helping you regain mobility and live
              a pain-free life through
              personalized physiotherapy
              treatments. Our expert
              physiotherapists combine advanced
              techniques with compassionate care
              to address your unique needs.
            </p>
            <ul className="flex justify-start items-center gap-4">
              <li>
                <Link to="/">
                  <SiFacebook className="text-2xl" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <PiInstagramLogoFill className="text-2xl" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FaLinkedin className="text-2xl" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap justify-evenly gap-8">
            {/* Company Links */}
            <div className="">
              <span className="block font-bold text-lg md:text-xl mb-4">
                Company
              </span>
              <ul className="flex flex-col gap-2 text-sm md:text-base">
                <li>
                  <Link to="/about">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Additional Links */}
            <div className="">
              <span className="block font-bold text-lg md:text-xl mb-4">
                Links
              </span>
              <ul className="flex flex-col gap-2 text-sm md:text-base">
                <li>
                  <Link to="/">Blogs</Link>
                </li>
                <li>
                  <Link to="/">
                    PhysioBuddies
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="">
              <span className="block font-bold text-lg md:text-xl mb-4">
                Contact Us
              </span>
              <ul className="flex flex-col gap-2 text-sm md:text-base">
                <li className="flex items-center gap-2">
                  <MdOutlineLocalPhone /> +91
                  99979999
                </li>
                <li className="flex items-center gap-2">
                  <MdOutlineEmail />{" "}
                  PhysioBuddies@gmail.com
                </li>
              </ul>
            </div>
          </div>
          <div className="w-screen text-center">
            <hr className="my-4 border-t-2 border-gray-300" />
            <Link
              to="/"
              className="hover:underline"
            >
              Copyright © 2024 by PhysioBuddies.
              All Rights Reserved.
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
