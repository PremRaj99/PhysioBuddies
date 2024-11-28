import React from "react";
// import humanImg from "../../assets/images/human.png";
import { FaArrowRight } from "react-icons/fa6";
import "../Human/Human.css";
import humanBody from "../../assets/images/humanBody.png"
import DropdownMenu from "./DropdownMenu";
const Human = () => {
  const diseases = [
    { name: "Stroke" },
    { name: "Traumatic Brain Injury (TBI)" },
    { name: "Parkinson's Disease" },
    { name: "Multiple Sclerosis (MS)" },
    { name: "Cerebral Palsy" },
    { name: "Alzheimer's Disease" },
    { name: "Epilepsy" },
    { name: "Brain Tumor" },
    { name: "Migraine" },
    { name: "Huntington's Disease" }
  ];
  

  return (
    <div className="bg-[#CAF0F8]">
      {/* #e8fbfb */}
      <div className="text-3xl text-center font-[SourGummy]">
        Tell Us Where is Hurts
      </div>
      <form
        id="HumanForm"
        className=" p-7 flex flex-col justify-center items-center lg:flex-row lg:justify-around lg:items-center "
      >
        {/* Container for Image */}
        <div className="h-[500px] w-[335px] scale-75 sm:scale-100 flex justify-center items-center">
          <form className="relative">
            <img
              src={humanBody}
              alt="Human Img"
              className="h-[500px] w-[335px]"
            />
            <input
              className="absolute top-[25.5px] left-[130px] border-none"
              type="radio"
              name="name"
              id="brain"
              value="brain"
            />
            <input
              className="absolute top-[66px] left-[130.8px]"
              type="radio"
              name="name"
              id="neck"
              value="neck"
            />
            <input
              className="absolute top-[91px] left-[178px]"
              type="radio"
              name="name"
              id="shoulder"
              value="shoulder"
            />
            <input
              className="absolute top-[166px] left-[69.5px]"
              type="radio"
              name="name"
              id="elbow"
              value="elbow"
            />
            <input
              className="absolute top-[180px] left-[131px]"
              type="radio"
              name="name"
              id="spine"
              value="spine"
            />
            <input
              className="absolute top-[230px] left-[59.5px]"
              type="radio"
              name="name"
              id="wrist"
              value="wrist"
            />
            <input
              className="absolute top-[251px] left-[101.5px]"
              type="radio"
              name="name"
              id="hip"
              value="hip"
            />
            <input
              className="absolute top-[286px] left-[101.5px]"
              type="radio"
              name="name"
              id="thigh"
              value="thigh"
            />
            <input
              className="absolute top-[336px] left-[98px]"
              type="radio"
              name="name"
              id="knee"
              value="knee"
            />
            <input
              className="absolute top-[389px] left-[94px]"
              type="radio"
              name="name"
              id="shin"
              value="shin"
            />
            <input
              className="absolute top-[442.4px] left-[91px]"
              type="radio"
              name="name"
              id="ankle"
              value="ankle"
            />
            <input
              className="absolute top-[268px] right-[45px]"
              type="radio"
              name="name"
              id="senior"
              value="senior"
            />
          </form>
        </div>

        {/* Container for Text */}
        <div className="w-full h-1/3 lg:w-1/2 flex mt-4 lg:mt-0 flex-col gap-5 px-6 py-4">
          {/* To Be Hidden Text when radio buttons clicked */}
          <div className="toBeHidden">
            <h6 className="md:text-2xl sm:text-xl">
              To match you with the right
              physiotherapist
            </h6>
            <h1 className="md:text-6xl sm:text-xl">
              Show us where it hurts
            </h1>
            <p
              id="selectedOption"
              className="md:text-lg sm:text-sm"
            >
              <strong>Click the area</strong> we
              will be treating or{" "}
              <strong>
                enter the details below.
              </strong>
            </p>
            <input
              className="m-6 w-1/3 shadow"
              type="text"
            />
          </div>

          {/* To Show When radio button is clicked */}
          <div className="toShowContent ">
            <div className="">
              <DropdownMenu />
              {/* <DropdownMenu diseases={diseases.name}/> */}
            </div>
          </div>

          <div className="px-4 ">
            <button className="bg-red-600 text-white rounded-sm p-3 flex items-center">
              Continue
              <FaArrowRight className="ml-2" />
            </button>
            or call +91 999XXX9999
          </div>
        </div>
      </form>
    </div>
  );
};

export default Human;
