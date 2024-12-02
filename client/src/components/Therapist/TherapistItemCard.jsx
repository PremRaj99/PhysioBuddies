import React, { useEffect } from "react";
import { MdVerified } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { MdOutlineStarHalf } from "react-icons/md";
import { MdOutlineStarOutline } from "react-icons/md";
import StarRating from "./StarRating";

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
  }, []);

  return (
    <div className="border border-gray-300 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 sm:w-auto w-2/5">
      <img
        src={profilePhoto}
        alt=""
        className="object-cover w-56 bg-text-primary"
      />
      <div className="p-4 bg-bg-secondary">
        <div className="flex items-center justify-center gap-2 text-sm text-center text-text-primary font-semibold ">
          {isAvailable && (
            <p className="w-2 h-2 rounded-full bg-green-500"></p>
          )}
          <p>{specialization}</p>
        </div>
        <p className="text-[#262626] text-base md:text-lg font-medium flex gap-2 items-center">
          {fullName}l
          <span>
            {verified && <MdVerified />}
          </span>
        </p>
        <p className="text-[#5C5C5C] text-sm">
          {experience}
        </p>
        <div className="flex items-center gap-2 flex-wrap-reverse text-sm md:text-base text-yellow-400">
          <StarRating rating={rating} />
          <p className="text-[#5C5C5C]">
            {reviewCount} reviews
          </p>
        </div>
      </div>
    </div>
  );
}
