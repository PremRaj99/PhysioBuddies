import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Common/Button";
import GoogleButton from "../Common/GoogleButton";
import MetaButton from "../Common/MetaButton";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <div className="bg-green-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl overflow-hidden">
        <div className="bg-green-800 text-white p-4 text-center">
          <h2 className="text-3xl font-bold">Login</h2>
          <p className="text-green-100 mt-2">
            Please log in to book an appointment
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 flex flex-col text-sm gap-2">
          <div className="">
            <label
              htmlFor="email"
              className="block text-green-800 font-semibold"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-2 py-2 border-2 border-green-800 rounded-lg focus:outline-none focus:ring-0"
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="">
            <label
              htmlFor="password"
              className="block text-green-800 font-semibold"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-2 py-2 border-2 border-green-800 rounded-lg focus:outline-none focus:ring-0"
              placeholder="********"
              required
            />
          </div>

          <div className="text-right mt-1">
            <Link
              to="/forgotpassword"
              className="text-green-800 text-sm hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-green-800 text-white py-[10px] px-8 my-2 rounded-lg hover:bg-green-700 transition duration-300 font-semibold"
          >
            Login
          </button>

          <div className="flex items-center justify-center gap-4">
            <div className="border-t border-green-300 flex-grow"></div>
            <span className="text-green-800 font-semibold">OR</span>
            <div className="border-t border-green-300 flex-grow"></div>
          </div>

          <div className="flex flex-col items-center gap-2 text-sm">
            <GoogleButton />
            <MetaButton />
          </div>

          <div className="text-sm flex items-center justify-center gap-1 mt-2 text-green-800">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-medium hover:underline"
            >
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}