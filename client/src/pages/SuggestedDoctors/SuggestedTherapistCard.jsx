import React from "react";

export default function SuggestedTherapistCard({
  profilePhoto = "https://plus.unsplash.com/premium_photo-1723514536306-26fe5c4adeb7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  fullName = "Dr. John Doe",
  specialization = "Sports Physiotherapy",
  patientCount = 120,
  experience = "10 years",
}) {
  return (
    <div className="p-6 bg-bg-primary shadow-lg rounded-xl m-2 ">
      <div className="w-full">
        <img
          src={profilePhoto}
          alt="img"
          className="object-cover rounded-2xl w-full md:h-96 h-64"
        />
      </div>
      <div className="">
        <h3 className="text-lg font-bold mt-4 text-text-primary">
          {fullName}
        </h3>
        <p className="text-sm text-gray-500">
          {specialization}
        </p>
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center flex-wrap">
            <span className="ml-1">
              Number of pateint {patientCount}
            </span>
          </div>
          <div className="flex items-center flex-wrap">
            <span className="ml-1">
              {experience}+ experience
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
