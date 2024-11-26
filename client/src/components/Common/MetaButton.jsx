import React from "react";
import { BiLogoFacebookCircle } from "react-icons/bi";

export default function GoogleButton() {
  return (
    <div className="flex-1 w-full shadow-md border-2 border-gray rounded-full py-2 px-2 flex justify-center items-center gap-4 hover:border-black duration-200 hover:cursor-pointer">
    <BiLogoFacebookCircle className="size-6" />
    <div className="font-roboto font-medium">Continue with Facebook</div>
  </div>
  );
}
