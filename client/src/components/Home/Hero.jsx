import React from "react";
import "./Hero.css";
import scroll1 from "../../assets/images/scroll-1.png";
import scroll2 from "../../assets/images/scroll-2.png";
import scroll3 from "../../assets/images/scroll-3.png";
import scroll4 from "../../assets/images/scroll-4.png";

export default function Hero() {
  return (
    <div className="flex bg-green-50 lg:h-screen h-auto">
      <div className="flex flex-nowrap w-1/2 ">
        {/* Section for animation */}
        <div id="scroll-container" className="m-2 w-60">
          <div className="scroll-text delay-0">
            <img src={scroll1} alt="Scroll 1" />
          </div>
        </div>
        <div id="scroll-container" className="w-52 m-2 ">
          <div className="scroll-text delay-1">
            <img src={scroll2} alt="Scroll 2" />
          </div>
        </div>
        <div id="scroll-container" className="w-52 m-2">
          <div className="scroll-text delay-2">
            <img src={scroll3} alt="Scroll 3" />
          </div>
        </div>
        <div id="scroll-container" className="w-52 m-2">
          <div className="scroll-text delay-3">
            <img src={scroll4} alt="Scroll 4" />
          </div>
        </div>
{/* section for animation ends */}

        <div className="w-1/2"></div>
      </div>
    </div>
  );
}
