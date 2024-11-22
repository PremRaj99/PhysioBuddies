import React from "react";
import RecommendCard from "../Common/RecommendCard";
import { useNavigate } from "react-router-dom";

export default function Recommend() {
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
  const navigate = useNavigate()

  return (
    <div className="bg-yellow-50 p-2 pb-6 text-[#2D3342]">
      <h2 className="text-center m-4 p-4 font-semibold md:text-3xl text-lg ">
        Need More Clarity on This !!!
      </h2>
      <div>
        <h3 className="font-medium text-center p-2 md:text-lg text-sm px-4">
          Confused about what’s best for you? Let us guide you toward the
          perfect solution for your health.
        </h3>
        <div className="flex flex-wrap py-2 gap-4 justify-center items-center">
          {recommendations.map((recommendations, index) => (
            <RecommendCard
              img={recommendations.img}
              title={recommendations.title}
              desc={recommendations.desc}
              key={index}
              navigate = {()=>navigate('/doctor')}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
