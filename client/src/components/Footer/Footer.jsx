import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { PiInstagramLogoFill } from "react-icons/pi";
import { SiFacebook } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import logo from '../../assets/logo.jpg';
import img from '../../assets/img.png'

export default function Footer() {
  return (
    <>
      <footer>
        {/* Footer Upper Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center h-full bg-green-50 px-8 sm:px-16 lg:px-28 py-8 sm:py-0 xl:h-3/5 xl:mx-48 md:mx-20 ">
          <div className="p-4 sm:p-6 md:p-8 flex flex-col justify-evenly text-center sm:text-left sm:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-sm sm:text-base lg:text-lg mb-6">
              Whether you have questions about our services, want to book an appointment, or just need some advice, we're here to help. Reach out to our friendly team today.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full w-full sm:w-auto">
              Contact Us Now
            </button>
        </div>

          {/* Image Content */}
        <div className="w-full sm:w-1/2 lg:w-2/3 flex justify-center sm:justify-end mt-8 sm:mt-0">
        <img src={img} alt="Physiotherapist" className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-lg object-cover" />
        </div>
        </div>



        <div className="bg-yellow-50 flex flex-wrap p-10 leading-6">
          {/* Logo and Description */}
          <div className="w-full md:w-2/5 flex p-4 md:p-6 flex-col">
            <img src={logo} alt="Logo" className="h-28 w-28 md:h-48 md:w-48 mr-4" />
            <p className="text-sm md:text-base my-4">
              At Physioplus, we are committed to helping you regain mobility and live a pain-free life through personalized physiotherapy treatments. Our expert physiotherapists combine advanced techniques with compassionate care to address your unique needs.
            </p>
            <ul className="py-8 px-6 flex justify-between items-center w-1/2">
              <li> <a href="#"> < SiFacebook className="text-2xl" /></a> </li>
              <li> <a href="#"> <PiInstagramLogoFill className="text-2xl"/> </a> </li>
              <li> <a href="#"> <FaLinkedin className="text-2xl"/> </a> </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="w-1/2 md:w-1/6 p-4">
            <span className="block font-bold text-lg md:text-xl mb-4">Company</span>
            <ul className="space-y-2 text-sm md:text-base">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Refund Policy</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Additional Links */}
          <div className="w-1/2 md:w-1/6 p-4">
            <span className="block font-bold text-lg md:text-xl mb-4">Links</span>
            <ul className="space-y-2 text-sm md:text-base">
              <li><a href="#">Blogs</a></li>
              <li><a href="#">PhysioBuddies</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/5 p-4">
            <span className="block font-bold text-lg md:text-xl mb-4">Contact Us</span>
            <ul className="space-y-2 text-sm md:text-base">
              <li className="flex items-center space-x-2">
                <MdOutlineLocalPhone /> +91 99979999
                
              </li>
              <li className="flex items-center space-x-2">
                <MdOutlineEmail/> PhysioBuddies@gmail.com
              </li>
            </ul>
          </div>
          <div className="w-screen text-center">
            <hr className="my-4 border-t-2 border-gray-300" />
             <a href="#" className="hover:underline">Copyright © 2024 by Physioplus. All Rights Reserved.</a>
          </div>
        </div>
      </footer>
    </>
  );
}
