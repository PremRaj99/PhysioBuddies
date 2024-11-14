import React from "react";
import { useParams } from "react-router-dom";

export default function BlogPreview() {
  const doctor = {
    imageUrl:
      "https://images.unsplash.com/photo-1583639687726-84d20638bf63?q=80&w=2049&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Dr. Ethan Anderson, Gastroenterologist",
    description: "Specializes in digestive system treatments and procedures.",
    date: "2024-02-14",
    views: 3320,
  };
//   const key = useParams().key;
  return <>
    <div className="m-auto py-2 px-4"></div>
  </>
}
