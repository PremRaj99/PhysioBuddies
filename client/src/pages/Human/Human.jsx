import React from "react";
import humanImg from "../../assets/images/human.png";
import { FaArrowRight } from "react-icons/fa6";

const Human = () => {
  return (
    <div className="h-screen p-7 flex flex-col lg:flex-row lg:justify-around lg:items-center bg-green-50">
      {/* Container for Image */}
      <div className="h-2/3 w-full lg:w-2/3 flex justify-center items-center">
        <img src={humanImg} alt="Human Img" className="h-full w-auto" />
      </div>

      {/* Container for Text */}
      <div className="w-full h-1/3 lg:w-1/2 flex mt-4 lg:mt-0 flex-col gap-5 px-6 py-4">
        <h6 className="md:text-2xl sm:text-xl">
          To match you with the right physiotherapist
        </h6>
        <h1 className="md:text-6xl sm:text-xl">Show us where it hurts</h1>
        <p className="md:text-lg sm:text-sm">
          <strong>Click the area</strong> we will be treating or{" "}
          <strong>enter the details below.</strong>
        </p>
        <input className="outline m-6 w-1/3" type="text" />
        <div className="px-4 ">
          <button className="bg-green-500 rounded-sm p-3 flex items-center">
            Continue
            <FaArrowRight />
          </button>{" "}
          or call +91 999XXX9999
        </div>
      </div>
    </div>
  );
};

export default Human;
