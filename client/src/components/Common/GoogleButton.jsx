import React from "react";
import { FcGoogle } from "react-icons/fc";

export default function GoogleButton() {
  return (
    <div className="flex-1 w-full shadow-md border-2 border-gray rounded-full py-2 px-2 flex justify-center items-center gap-4 duration-200 hover:border-red-700 cursor-pointer">
      <FcGoogle className="size-6" />
      <div className="font-roboto text-center font-medium">Continue with Google</div>
    </div>
  );
}
