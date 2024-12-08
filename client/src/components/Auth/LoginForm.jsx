import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Common/Button";
import GoogleButton from "../Common/GoogleButton";
import MetaButton from "../Common/MetaButton";
import useAuth from "@/services/authService";
import toast from "@/utils/toast";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const Auth = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Add your login logic here
    if(!formData.email || !formData.password) {
      return toast.error("Email and password are required!");
    }
    await Auth.login(formData.email, formData.password);
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center p-6">
      <div className="w-full max-w-md  bg-white shadow-2xl rounded-2xl overflow-hidden">
        <div className=" text-white p-4 bg-text-primary text-center">
          <h2 className="text-3xl font-bold">
            Login
          </h2>
          <p className=" mt-2">
            Please log in to book an appointment
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-6 flex flex-col text-sm gap-2"
        >
          <div className="">
            <label
              htmlFor="email"
              className="block text-text-primary font-semibold"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-2 py-2 border-2 border-text-primary rounded-lg focus:outline-none focus:ring-0"
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="">
            <label
              htmlFor="password"
              className="block text-text-primary font-semibold"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-2 py-2 border-2 border-text-primary rounded-lg focus:outline-none focus:ring-0"
              placeholder="********"
              required
            />
          </div>

          <div className="text-right mt-1">
            <Link
              to="/forgotpassword"
              className="text-text-primary text-sm hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-text-primary text-white py-[10px] px-8 my-2 rounded-lg hover:bg-text-primary transition duration-300 font-semibold"
          >
            {
              loading ? "Loading..." : "Login"
            }
          </button>

          <div className="flex items-center justify-center gap-4">
            <div className="border-t border-text-primary flex-grow"></div>
            <span className="text-text-primary font-semibold">
              OR
            </span>
            <div className="border-t border-text-primary flex-grow"></div>
          </div>

          <div className="flex flex-col items-center gap-2 text-sm">
            <GoogleButton />
            <MetaButton />
          </div>

          <div className="text-sm flex items-center justify-center gap-1 mt-2 text-text-primary">
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
