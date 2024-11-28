import { Link } from "react-router-dom";

export default function Button({
  buttonText,
  size = "",
}) {
  return (
    <button className=" w-full  ease-in-out duration-300 bg-[#15415c] text-white px-4 py-2 rounded-3xl hover:text-[#15415c] hover:border hover:border-[#15415c] hover:bg-blue-50 text-xl md:text-base">
      {buttonText}
    </button>
  );
}
