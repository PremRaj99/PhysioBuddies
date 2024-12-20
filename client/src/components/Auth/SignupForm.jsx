import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Button from "../Common/Button";
import GoogleButton from "../Common/GoogleButton";
import MetaButton from "../Common/MetaButton";
import toast from "@/utils/toast";
import useAuth from "@/services/authService";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    phone: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.username ||
      !formData.email ||
      !formData.phone ||
      !formData.password
    ) {
      return toast.error("All fields are required!");
    }

    setLoading(true);
    Auth.signup(
      formData.fullName,
      formData.email,
      formData.username,
      formData.phone,
      formData.password
    );
    setLoading(false);
    // Add your signup logic here
  };

  return (
    <div className=" flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl overflow-hidden">
        <div className="bg-text-primary text-white p-4 text-center">
          <h2 className="text-3xl font-bold">Sign Up</h2>
          <p className=" mt-2">Please sign up to book an appointment</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-6 flex flex-col text-sm gap-2"
        >
          <div className="">
            <label
              htmlFor="fullName"
              className="block text-text-primary font-semibold"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-2 py-2 border-2 border-text-primary rounded-lg focus:outline-none focus:ring-0"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="">
            <label
              htmlFor="username"
              className="block text-text-primary font-semibold"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-2 py-2 border-2 border-text-primary rounded-lg focus:outline-none focus:ring-0"
              placeholder="Choose a username"
              required
            />
          </div>

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
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="">
            <label
              htmlFor="phone"
              className="block text-text-primary font-semibold"
            >
              Phone Number
            </label>
            <div className="flex">
              <input
                type="text"
                id="phoneCode"
                name="phoneCode"
                value="+91"
                className="max-w-12 px-2 py-2 border-2 border-r-0 border-text-primary rounded-l-lg focus:outline-none focus:ring-0 bg-gray-200"
              />
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                maxLength={10}
                minLength={10}
                className="flex-1 w-full px-2 py-2 border-2 border-text-primary rounded-r-lg focus:outline-none focus:ring-0"
                placeholder="Phone number"
                required
              />
            </div>
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
              placeholder="Create a strong password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-text-primary text-white py-[10px] px-8 my-2 rounded-lg hover:bg-text-primary transition duration-300 font-semibold"
          >
            Create Account
          </button>

          <div className="flex items-center justify-center gap-4">
            <div className="border-t border-text-primary flex-grow"></div>
            <span className="text-text-primary font-semibold">OR</span>
            <div className="border-t border-text-primary flex-grow"></div>
          </div>

          <div className="flex flex-col items-center gap-2 text-sm">
            <GoogleButton />
            <MetaButton />
          </div>

          <div className="text-sm flex items-center justify-center gap-1 mt-2 text-text-primary">
            Already have an account?{" "}
            <Link to="/login" className="font-medium hover:underline">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

// export default SignupForm;
