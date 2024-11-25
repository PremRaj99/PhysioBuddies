import React from "react";
import LoginForm from "../../components/Auth/LoginForm";
import loginIcon from "../../assets/images/LoginIcon.png";

export default function Login() {
  return (
    <div className="bg-green-50 h-auto md:h-[90vh] w-full flex flex-col md:flex-row justify-between items-center p-8 gap-4">
      <div className="md:w-1/2 w-auto p-8">
        <img src={loginIcon} alt="login Icon" className="w-4/6 mx-auto" />
      </div>
      <div className="md:w-1/2 w-auto ">
        <LoginForm className="mx-auto"/>
      </div>
    </div>
  );
}
