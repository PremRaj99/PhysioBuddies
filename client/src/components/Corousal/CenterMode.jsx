import React, { Component } from "react";
import Slider from "react-slick";

function CenterMode() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img
            src="https://plus.unsplash.com/premium_photo-1661767448598-f42428886f1c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="placeholder"
            className="w-full h-64 object-cover"
          />
        </div>
        <div>
          <img
            src="https://plus.unsplash.com/premium_photo-1661767448598-f42428886f1c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="placeholder"
            className="w-full h-64 object-cover"
          />
        </div>
        <div>
          <img
            src="https://plus.unsplash.com/premium_photo-1661767448598-f42428886f1c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="placeholder"
            className="w-full h-64 object-cover"
          />
        </div>
        <div>
          <img
            src="https://plus.unsplash.com/premium_photo-1661767448598-f42428886f1c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="placeholder"
            className="w-full h-64 object-cover"
          />
        </div>
        <div>
          <img
            src="https://plus.unsplash.com/premium_photo-1661767448598-f42428886f1c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="placeholder"
            className="w-full h-64 object-cover"
          />
        </div>
        <div>
          <img
            src="https://plus.unsplash.com/premium_photo-1661767448598-f42428886f1c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="placeholder"
            className="w-full h-64 object-cover"
          />
        </div>
        <div>
          <img
            src="https://plus.unsplash.com/premium_photo-1661767448598-f42428886f1c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="placeholder"
            className="w-full h-64 object-cover"
          />
        </div>
      </Slider>
    </div>
  );
}

export default CenterMode;
