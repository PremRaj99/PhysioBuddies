import React from "react";
import Hero from "../../components/Home/Hero";
import Recommend from "../../components/Home/Recommend";
import Human from "../Human/Human.jsx";
import Corousel from "../../components/Common/Corousel";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Human />
      <Corousel text="✦ Explore our blog, discover health's beauty and benefits" />
      <Recommend/>
    </div>
  );
}
