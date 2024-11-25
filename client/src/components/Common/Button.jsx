import { Link } from "react-router-dom";

export default function Button({buttonText}) {
  return (
    <button className=" w-full  ease-in-out duration-300 bg-green-600 text-white px-4 py-2 rounded-3xl hover:text-green-950 hover:border hover:border-green-950 hover:bg-green-50">
      {buttonText}
    </button>
  );
}
