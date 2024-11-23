import React from "react";
import PropTypes from "prop-types";
import "tailwindcss/tailwind.css";

const Carousel = ({ text }) => {
  return (
    <div className="relative overflow-hidden bg-green-500 text-white">
      <div className="whitespace-nowrap animate-marquee">
        <span className="inline-block px-4 py-2 text-normal md:text-3xl font-[SourGummy]">
          {text}
        </span>
        <span className="inline-block px-4 py-2 text-normal md:text-3xl font-[SourGummy]">
          {text}
        </span>
        <span className="inline-block px-4 py-2 text-normal md:text-3xl font-[SourGummy]">
          {text}
        </span>
      </div>
    </div>
  );
};

// Define the marquee animation
const styles = `
@keyframes marquee {
    0% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
}
.animate-marquee {
    animation: marquee 15s linear infinite;
}
`;

// Inject the styles into the document head
const styleSheet =
  document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

Carousel.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Carousel;
