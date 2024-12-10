import React from "react";
import Hero from "../../components/Home/Hero";
import Recommend from "../../components/Home/Recommend";
import Human from "../Human/Human.jsx";
import Corousel from "../../components/Common/Corousel";
import ConditionsWeTreat from "../ConditionsWeTreat/ConditionsWeTreat.jsx";
import TestimonialCourosal from "../Testimonial/TestimonialCourosal.jsx";
import SuggestedDoctors from "../SuggestedDoctors/SuggestedDoctors.jsx";
import RecommendCard from "../../components/Common/RecommendCard.jsx";
import RecommendCorousal from "../../components/Home/RecommendCorousal.jsx";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import QuestionsSection from "../QuestionsSection/QuestionsSection";

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <Human /> */}
      <div className="hidden sm:block">
        <Recommend />
      </div>
      <div className="block sm:hidden">
        <RecommendCorousal />
      </div>
      <ConditionsWeTreat />
      <TestimonialCourosal />
      <WhyChooseUs />
      <SuggestedDoctors />
      <QuestionsSection />
    </div>
  );
}
