import Button from "@/components/Common/Button";
import SecondaryButton from "@/components/Common/SecondaryButton";
import React from "react";
import { Link } from "react-router-dom";

export default function WhyChooseUsCard({
  icon,
  title,
  desc,
}) {
  return (
    <div className=" text-text-primary flex flex-col items-center gap-4 justify-center p-4">
      <div className="p-4 flex w-full justify-center fill-bg-primary">
        <img
          src={icon}
          alt="icon"
          className="md:w-28 md:h-28 w-14 h-14 "
        />
      </div>
      <div className="text-center flex flex-col gap-4 p-4 justify-center">
        <h3 className="font-bold md:text-2xl text-base ">
          {title}
        </h3>
        <p className="text-gray-600 text-sm hidden md:block md:text-base ">
          {desc}
        </p>
        <Link to="/about">
          <SecondaryButton
            className={`hover:bg-text-primary duration-500 hover:text-white`}
          >
            Learn More
          </SecondaryButton>
        </Link>
      </div>
    </div>
  );
}
