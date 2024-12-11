import Hero from "../../components/Home/Hero";
import Recommend from "../../components/Home/Recommend";
import RecommendCorousal from "../../components/Home/RecommendCorousal.jsx";
import ConditionsWeTreat from "../ConditionsWeTreat/ConditionsWeTreat.jsx";
import FAQ from "../FAQ/FAQ";
import SuggestedDoctors from "../SuggestedDoctors/SuggestedDoctors.jsx";
import TestimonialCourosal from "../Testimonial/TestimonialCourosal.jsx";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";

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
      <FAQ />
    </div>
  );
}
