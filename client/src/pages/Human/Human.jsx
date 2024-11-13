import React from "react";
import humanImg from "../../assets/images/human.png";

const Human = () => {
  return (
    <div className="h-screen p-7 flex flex-col lg:flex-row lg:justify-around lg:items-center bg-green-50">
      {/* Container for Image */}
      <div className="h-2/3 w-full lg:w-1/2 flex justify-center items-center">
        <img src={humanImg} alt="Human Img" className="h-full w-auto" />
      </div>

      {/* Container for Text */}
      <div className="w-full h-1/3 lg:w-2/3 flex justify-center items-center text-center mt-4 lg:mt-0">
        <h4>To match you with the right physiotherapist</h4>
        
      </div>
    </div>
  );
};

export default Human;
