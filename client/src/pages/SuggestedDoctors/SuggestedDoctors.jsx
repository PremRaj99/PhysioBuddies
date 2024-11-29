import React from "react";
import CenterMode from "../../components/Corousal/CenterMode";

export default function SuggestedDoctors() {
  const SuggestedDoctors = [
    {
      profilePhoto:
        "https://plus.unsplash.com/premium_photo-1723514536306-26fe5c4adeb7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fullName: "Dr. John Doe",
      specialization: "Sports Physiotherapy",
      rating: 3.5,
      isAvailable: true,
      reviewCount: 120,
      verified: true,
      experience: "10 years",
    },
    {
      profilePhoto:
        "https://plus.unsplash.com/premium_photo-1661764878654-3d0fc2eefcca?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fullName: "Dr. Jane Smith",
      specialization: "Orthopedic Physiotherapy",
      rating: 4.5,
      isAvailable: false,
      reviewCount: 95,
      verified: true,
      experience: "8 years",
    },
    {
      profilePhoto:
        "https://plus.unsplash.com/premium_photo-1661580574627-9211124e5c3f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fullName: "Dr. Mark Taylor",
      specialization:
        "Neurological Rehabilitation",
      rating: 4.7,
      isAvailable: true,
      reviewCount: 110,
      verified: true,
      experience: "12 years",
    },
    {
      profilePhoto:
        "https://plus.unsplash.com/premium_photo-1681966531074-0957dc900a5f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fullName: "Dr. Emma Brown",
      specialization: "Pediatric Physiotherapy",
      rating: 4.9,
      isAvailable: true,
      reviewCount: 150,
      verified: true,
      experience: "9 years",
    },
    {
      profilePhoto:
        "https://plus.unsplash.com/premium_photo-1661764878654-3d0fc2eefcca?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fullName: "Dr. Rahul Sharma",
      specialization: "Geriatric Physiotherapy",
      rating: 4.4,
      isAvailable: false,
      reviewCount: 80,
      verified: false,
      experience: "7 years",
    },
  ];
  return (
    <div className="bg-bg-secondary flex flex-col items-center gap-8 p-4">
      <div className="text-3xl font-medium py-4">
        Our Team of{" "}
        <span className="text-text-primary">Expert Physiotherapists</span>
      </div>
      {/* <CenterMode/> */}
     
    </div>
  );
}
