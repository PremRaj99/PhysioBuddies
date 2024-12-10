import React from "react";
import formatDate from "../../utils/formatDate";
import { FaEye } from "react-icons/fa";

export default function BlogCard({
  img,
  title = "",
  descr = "",
  date,
  views = 0,
  onClick,
}) {
  const eclipseTitle =
    title.length > 120
      ? title.substring(0, 120) + "..."
      : title;
  const eclipseDesc =
    descr.length > 60 ? descr.substring(0, 60) + "..." : descr;
  const dateFormat = formatDate(date);
  return (
    <div
      className="w-96 border border-gray-300 rounded-lg hover:scale-[1.01] shadow-lg duration-150 cursor-pointer"
      onClick={onClick}
    >
      <img
        src={img}
        alt="card img"
        className="w-full h-44 rounded-t-lg object-cover"
      />
      <div className="p-2">
        <h3 className="text-lg  font-semibold truncate ">
          {eclipseTitle}
        </h3>
        <p className="text-sm font-thin text-gray-800">
          {eclipseDesc}
        </p>
        <div className="text-xs pt-2 font-semibold flex justify-between items-center">
          {dateFormat}
          <div className="flex items-center gap-2">
            {" "}
            <FaEye /> <span>{views}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
