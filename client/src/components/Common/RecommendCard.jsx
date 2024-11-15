import React from "react";

export default function RecommendCard({
  img = "https://images.unsplash.com/photo-1701826510629-051bb954fb8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  title = "",
  descr = "We evaluate your neck pain, provide targeted treatments, and offer exercises to promote healing and mobility.",
}) {
  return (
    <div className="w-96 border border-gray-300 rounded-lg shadow-lg duration-150 bg-[#f9f7f777] m-1">
      <img
        src={img}
        alt="card img"
        className="w-full h-44 rounded-t-lg object-cover"
      />
      <div className="p-2">
        <h2 className="font-semibold ">{title}</h2>
        <p className="text-sm font-thin text-gray-800">{descr}</p>
        <div className="underline text-xs pt-2 font-semibold hover:cursor-pointer">
          Book Now
        </div>
      </div>
    </div>
  );
}
