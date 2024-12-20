import React from "react";
import StarRating from "../../components/Therapist/StarRating";
export default function TestimonialCard({
  condition,
  testimonial,
  name,
  age,
  occupation,
  location,
  rating,
  img,
}) {
  if (testimonial.length > 80) {
    testimonial =
      testimonial.substring(0, 80) + "...";
  }
  return (
    <div className="bg-bg-primary rounded-lg shadow-xl my-2 mx-4 h-[500px] md:min-h-[500px]">
      <div className="text-xl bg-text-primary text-white text-center py-2 rounded-t-lg">
        {condition}
      </div>
      <div className="object-fit">
        <img
          src={img}
          alt="image"
          className="w-full object-cover "
        />
      </div>
      <div className="flex flex-col p-4 gap-1">
        <p>{testimonial}</p>
        <div className="flex justify-between mt-2 flex-wrap">
          <div className="font-semibold truncate">
            {name}, {age} <br />
            {occupation} <br />
            {location}
          </div>
          {/* star component */}
          <div className="pr-4">
            <StarRating rating={rating} />
          </div>
        </div>
      </div>
    </div>
  );
}
