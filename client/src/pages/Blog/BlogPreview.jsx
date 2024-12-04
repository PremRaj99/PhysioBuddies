import React from "react";
import { useParams } from "react-router-dom";

export default function BlogPreview() {
  const doctor = {
    imageUrl:
      "https://images.unsplash.com/photo-1583639687726-84d20638bf63?q=80&w=2049&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title:
      "Dr. Ethan Anderson, Gastroenterologist",
    content:
      "Specializes in digestive system treatments and procedures.",
    date: "2024-02-14",
    views: 3320,
  };
  return (
    <div className="bg-bg-secondary flex justify-center px-6 py-3">
      <div className="bg-bg-primary w-4/6 mx-8 shadow-lg">
        <div className="mx-auto w-96">
          <img
            src={doctor.imageUrl}
            alt="img"
            className="object-cover"
          />
        </div>
        <div className="">
          
        </div>
        <div className="flex justify-between">
          <div className="text-sm p-4">
            {doctor.date}
          </div>
          <div className="text-sm p-4">
            {doctor.views}
          </div>
        </div>
      </div>
    </div>
  );
}
