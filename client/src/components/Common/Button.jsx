import { Link } from "react-router-dom";

export default function Button({
  buttonText,
  size = "",
}) {
  return (
    <button className=" w-full ease-in-out duration-700 bg-text-primary text-white px-4 py-2 rounded-3xl hover:text-text-primary hover:border hover:border-text-primary hover:bg-blue-50 text-xl md:text-base border border-bg-primary">
      {buttonText}
    </button>
  );
}
