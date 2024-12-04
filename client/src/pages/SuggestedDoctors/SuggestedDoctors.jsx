import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./SuggestedDoctors.css";
import SuggestedTherapistCard from "./SuggestedTherapistCard";

export default function SuggestedDoctors() {
  const suggestedDoctors = [
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

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
        }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="bg-bg-primary py-8 px-8 md:px-40">
      <div className="text-center font-bold text-2xl mt-4 mb-8">
        Our Team of{" "}
        <span className="text-teal-600">
          Expert Physiotherapists
        </span>
      </div>
      <Slider
        {...settings}
        className="px-1 flex justify-center items-center gap-4"
      >
        {suggestedDoctors.map((doctor, index) => (
          <SuggestedTherapistCard
            key={index}
            fullName={doctor.fullName}
            profilePhoto={doctor.profilePhoto}
          />
        ))}
      </Slider>
    </div>
  );
}
