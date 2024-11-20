import React from "react";
// import humanImg from "../../assets/images/human.png";
import { FaArrowRight } from "react-icons/fa6";
import "../Human/Human.css";
import humanBody from "../../assets/images/humanbody.png"
const Human = () => {
  return (
    <div className="h-[calc(100vh-96px)] p-7 flex flex-col justify-center items-center lg:flex-row lg:justify-around lg:items-center bg-green-50">
      {/* Container for Image */}
      <div className="h-[500px] w-[335px] scale-75 sm:scale-100 flex justify-center items-center">
        <form className="relative">
          <img
            src={humanBody}
            alt="Human Img"
            className="h-[500px] w-[335px]"
          />
          <input
            className="absolute top-[25.5px] left-[134px] border-none"
            type="radio"
            name="brain"
            id="brain"
          />
          <input
            className="absolute top-[66px] left-[134.8px]"
            type="radio"
            name="neck"
            id="neck"
          />
          <input
            className="absolute top-[91px] left-[182px]"
            type="radio"
            name="shoulder"
            id="shoulder"
          />
          <input
            className="absolute top-[166px] left-[73.5px]"
            type="radio"
            name="elbow"
            id="elbow"
          />
          <input
            className="absolute top-[180px] left-[135px]"
            type="radio"
            name="spine"
            id="spine"
          />
          <input
            className="absolute top-[230px] left-[63.5px]"
            type="radio"
            name="wrist"
            id="wrist"
          />
          <input
            className="absolute top-[251px] left-[105.5px]"
            type="radio"
            name="hip"
            id="hip"
          />
          <input
            className="absolute top-[286px] left-[105.5px]"
            type="radio"
            name="thigh"
            id="thigh"
          />
          <input
            className="absolute top-[336px] left-[102px]"
            type="radio"
            name="knee"
            id="knee"
          />
          <input
            className="absolute top-[389px] left-[98px]"
            type="radio"
            name="shin"
            id="shin"
          />
          <input
            className="absolute top-[442.4px] left-[95px]"
            type="radio"
            name="ankle"
            id="ankle"
          />
          <input
            className="absolute top-[268px] right-[41px]"
            type="radio"
            name="senior"
            id="senior"
          />
        </form>
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
        <input className="m-6 w-1/3 shadow" type="text" />
        <div className="px-4 ">
          <button className="bg-green-500 rounded-sm p-3 flex items-center">
            Continue
            <FaArrowRight className="ml-2" />
          </button>
          or call +91 999XXX9999
        </div>
      </div>
    </div>
  );
};

export default Human;
