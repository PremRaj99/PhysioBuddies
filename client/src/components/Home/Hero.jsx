import React from "react";
import "./Hero.css";
import scroll1 from "../../assets/images/scroll-1.png";
import scroll2 from "../../assets/images/scroll-2.png";
import scroll3 from "../../assets/images/scroll-3.png";
import scroll4 from "../../assets/images/scroll-4.png";

export default function Hero() {
  return (
    <div className="flex md:flex-row flex-col justify-center items-center px-4 md:px-8 lg:gap-32 lg:min-h-[calc(100vh-96px)] md:gap-4 bg-[#ecf6ff] text-black py-4">
      {/* #ddebf9 */}
      <div className="flex gap-2 scale-90 sm:scale-100 lg:scale-150 flex-nowrap p-4 md:p-8">
        {/* Section for animation */}
        <div
          id="scroll-container"
          className=" w-20"
        >
          <div className="scroll-text delay-0">
            <img
              src={scroll1}
              alt="Scroll 1"
            />
          </div>
        </div>
        <div
          id="scroll-container"
          className=" w-20"
        >
          <div className="scroll-text delay-1">
            <img
              src={scroll2}
              alt="Scroll 2"
            />
          </div>
        </div>
        <div
          id="scroll-container"
          className=" w-20"
        >
          <div className="scroll-text delay-2">
            <img
              src={scroll3}
              alt="Scroll 3"
            />
          </div>
        </div>
        <div
          id="scroll-container"
          className=" w-20"
        >
          <div className="scroll-text delay-3">
            <img
              src={scroll4}
              alt="Scroll 4"
            />
          </div>
        </div>
        {/* section for animation ends */}
      </div>

      {/* section for text */}
      <div className="flex flex-col md:items-start items-center text-center md:text-start gap-4 scale-75 md:scale-90 lg:scale-105">
        <h1 className="text-[#15415c] font-bold text-5xl ">
          {/* font-[SourGummy] */}
          Relieve Pain, <br />
          Restore Movement,
          <br /> Revive Your Life
        </h1>
        <h2 className="  text-lg font-semibold w-[32ch]">
          Book Your Physiotherapy Appointment
          Today and Take the First Step Toward
          Wellness!
        </h2>
        <p className="text-w text-sm  max-w-[50ch]">
          Are you struggling with pain, mobility
          issues, or recovering from an injury? At
          Physio Buddies, we specialize in
          personalized physiotherapy treatments
          designed to help you regain strength,
          flexibility, and freedom.
        </p>
      </div>
    </div>
  );
}
