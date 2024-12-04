import React from "react";
import {
  Link,
  useNavigate,
} from "react-router-dom";
import RecommendCard from "../Common/RecommendCard";
import Slider from "react-slick";

export default function RecommendCorousal() {
  const recommendations = [
    {
      img: "https://plus.unsplash.com/premium_photo-1725576700671-28f9113cafa0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Sport Physiotherapy",
      desc: "Comprehensive evaluations and sport-specific treatments enhance performance, prevent injuries, and promote optimal recovery for athletes.",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661425799212-ce4525117228?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Wrist Pain",
      desc: "We assess wrist pain, implement targeted therapies, and guide you through exercises to enhance.",
    },
    {
      img: "https://images.unsplash.com/photo-1701826510629-051bb954fb8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Neck Pain",
      desc: "We evaluate your neck pain, provide targeted treatments, and offer exercises to promote healing and mobility.",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661779581951-eb3a2fe942bb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Shoulder Pain",
      desc: "We assess shoulder pain, develop a customized treatment plan, and guide you through rehabilitation exercises.",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1664478293088-72dec50e8d4c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Elbow Pain",
      desc: "We evaluate your elbow pain, provide targeted treatments, and recommend exercises to restore strength and flexibility.",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1664910605048-44c8450c0356?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Knee Pain",
      desc: "Individualized assessments determine the root cause, followed by targeted therapies to restore function and alleviate discomfort.",
    },
    {
      img: "https://images.unsplash.com/photo-1706777193603-76c3e9613553?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Orthopedic Care",
      desc: "Comprehensive evaluations lead to personalized rehabilitation strategies, enhancing mobility and strength for orthopedic patients.",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661604378017-a48211f0d347?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Neuro Physiotherapy",
      desc: "Focused assessments guide tailored interventions, helping patients regain movement, strength, and independence after neurological conditions.",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1666299785666-b15701106335?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Pediatric Care",
      desc: "We evaluate children's movement, design fun therapies, and educate families to support healthy growth and development.",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1725576700671-a4880dddf9b0?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Sport Physiotherapy",
      desc: "Comprehensive evaluations and sport-specific treatments enhance performance, prevent injuries, and promote optimal recovery for athletes.",
    },
  ];
  const navigate = useNavigate();
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
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="bg-bg-secondary p-2 pb-6 text-[#2D3342]">
      <div className="font-medium text-center p-2 px-4">
        Confused about what’s best for you? Let us
        guide you toward the perfect solution for
        your health.
      </div>
      <div className="p-5">
        <Slider {...settings}>
          {recommendations.map(
            (recommendations, index) => (
              <div className="m-4">
                <Link to="/doctors">
                  <div
                    className="w-[90%] border border-gray-300 rounded-lg shadow-lg duration-150 bg-bg-secondary"
                    onClick={navigate("/doctors")}
                  >
                    <img
                      src={recommendations.img}
                      alt="card img"
                      className="w-full h-44 rounded-t-lg object-cover"
                    />
                    <div className="p-2">
                      <h2 className="font-semibold ">
                        {recommendations.title}
                      </h2>
                      <p className="text-sm font-thin text-gray-800">
                        {recommendations.desc}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            )
          )}
        </Slider>
      </div>
    </div>
  );
}
