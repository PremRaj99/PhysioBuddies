import React from "react";
import { FaReact, FaCode } from "react-icons/fa";

export default function ServicesCard({
  icon,
  name,
  desc,
}) {
  return (
    <div className="group relative [perspective:1000px] m-2 ">
      {/* Flip card inner container */}
      <div className="relative  transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] p-20 bg-bg-secondary md:h-96 h-64">
        {/* Front side */}
        <div className="absolute inset-0 flex items-center justify-center bg-text-primary rounded-lg [backface-visibility:hidden]">
          <div className="flex flex-col justify-evenly h-full">
            <img
              src={icon}
              alt="icons"
              className="object-cover md:h-36 h-24 invert brightness-0"
            />
            <div className="text-white text-base md:text-xl text-center">
              {name}
            </div>
          </div>
        </div>

        {/* Back side */}
        <div className="absolute inset-0 flex items-center justify-center bg-teal-500 rounded-lg [transform:rotateY(180deg)] [backface-visibility:hidden] p-4">
          <ul className="list-disc pl-5 space-y-2 text-white md:text-sm text-xs">
            {desc && desc.length > 0 ? (
              desc.map((item, index) => (
                <li
                  key={index}
                  className=""
                >
                  {item}
                </li>
              ))
            ) : (
              <li className=" italic">
                No description available
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
