import React, { useEffect } from "react";
import { MdVerified } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { MdOutlineStarHalf } from "react-icons/md";
import { MdOutlineStarOutline } from "react-icons/md";

export default function TherapistItemCard({
  profilePhoto,
  fullName,
  specialization,
  rating,
  isAvailable,
  reviewCount,
  verified,
  experience,
}) {
  const filledStars = Math.floor(rating);
  const halfFilledStars =
    rating % filledStars !== 0;
  const emptyStars =
    5 - filledStars - halfFilledStars;
  const stars = [];
  useEffect(() => {
    for (let i = 0; i < filledStars; i++) {
      stars.push("F");
    }
    if (halfFilledStars) {
      stars.push("H");
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push("E");
    }
    // console.log(rating)
  }, []);

  return (
    <div className="shadow-lg rounded-xl bg-yellow-50 flex p-1">
      <div className="rounded-3xl w-52 p-2 mx-1 relative">
        <img
          src={profilePhoto}
          alt="img"
          className="object-cover rounded-xl"
        />
        {isAvailable && (
          <div className="bg-green-500 w-5 h-5 rounded-full absolute right-[-150px] top-8"></div>
        )}
        
      </div>
      <div className="flex flex-col p-5 gap-2">
        <div className="flex bg-white rounded-2xl w-24 h-12 gap-2 items-center justify-center">
          <MdOutlineStarPurple500 className="text-yellow-300" />
          <span>{rating}</span>
        </div>
        <div className="text-xl">{fullName}</div>
        <div className="text-gray-500 flex gap-5">
          {specialization}
          <span>{experience}</span>
        </div>
        <div className="">
          {verified}
        </div>
      </div>
    </div>
  );
}
