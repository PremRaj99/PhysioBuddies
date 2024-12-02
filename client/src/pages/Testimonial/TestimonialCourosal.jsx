import React from "react";
import TestimonialCard from "./TestimonialCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoArrowForwardCircleSharp } from "react-icons/io5";

export default function TestimonialCourosal() {
  const testimonialData = [
    {
      condition: "Frozen Shoulder",
      testimonial:
        "Your assessment method is so good & patient support resolves issues promptly.",
      name: "Nishith Patel",
      age: 66,
      occupation: "Business Owner",
      location: "UAE",
      rating: 5,
      img: "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      condition: "Lower Back Pain",
      testimonial:
        "The treatment was very effective, and the staff was supportive throughout the process.",
      name: "Anita Sharma",
      age: 54,
      occupation: "Teacher",
      location: "India",
      rating: 4.5,
      img: "https://images.unsplash.com/photo-1591285513111-c86b923330b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      condition: "Arthritis",
      testimonial:
        "Excellent diagnosis and professional care. My pain has reduced significantly.",
      name: "John Smith",
      age: 72,
      occupation: "Retired Engineer",
      location: "USA",
      rating: 5,
      img: "https://media.istockphoto.com/id/1541958668/photo/portrait-of-smiling-senior-indian-woman-wearing-sari-standing-with-cross-arms-looking-at.webp?a=1&b=1&s=612x612&w=0&k=20&c=t61aJWy2tUjUb84SkctNNHmRtHd8_-adgVNL5XD-EfI=",
    },
    {
      condition: "Migraine",
      testimonial:
        "The personalized approach made a huge difference in managing my condition.",
      name: "Fatima Al-Rashid",
      age: 39,
      occupation: "Marketing Manager",
      location: "Saudi Arabia",
      rating: 4,
      img: "https://plus.unsplash.com/premium_photo-1691003661034-270897091854?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      condition: "Tennis Elbow",
      testimonial:
        "I appreciate the detailed guidance and exercises that helped me recover faster.",
      name: "Carlos Mendes",
      age: 45,
      occupation: "Athlete",
      location: "Brazil",
      rating: 4.5,
      img: "https://images.unsplash.com/photo-1498558263790-a9555e3d002d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  var settings = {
    dots: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
    autoplaySpeed: 2000,
    infinite: true,
  };

  return (
    <div className="bg-bg-primary py-8 px-8 md:px-16 ">
      <div className="text-center font-bold text-2xl mt-4 mb-8">
        What our patients say{" "}
      </div>
      <Slider
        {...settings}
        className="px-1 "
      >
        {testimonialData.map(
          (testimonial, index) => (
            <TestimonialCard
              condition={testimonial.condition}
              testimonial={
                testimonial.testimonial
              }
              name={testimonial.name}
              age={testimonial.age}
              occupation={testimonial.occupation}
              location={testimonial.location}
              img={testimonial.img}
              rating={testimonial.rating}
            />
          )
        )}
      </Slider>
    </div>
  );
}
