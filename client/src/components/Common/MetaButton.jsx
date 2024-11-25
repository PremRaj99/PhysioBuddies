import React from "react";
import { BiLogoFacebookCircle } from "react-icons/bi";

export default function GoogleButton() {
  return (
    <div className="w-72 shadow-lg border border-gray rounded-full py-2 px-4 flex items-center justify-between hover:translate-y-[-5px] hover:cursor-pointer">
      {/* <FcGoogle className="size-8" /> */}
      <BiLogoFacebookCircle className="size-8" />
      <div className="font-roboto font-medium ml-8">
        Continue with Facebook
      </div>
    </div>
  );
}
