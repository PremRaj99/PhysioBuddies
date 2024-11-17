import React from "react";
import Hero from "../../components/Home/Hero";
import Recommend from "../../components/Home/Recommend";
import Human from "../Human/Human";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Human />
      <Recommend/>
    </div>
  );
}
