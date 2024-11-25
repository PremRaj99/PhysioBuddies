import { Link } from "react-router-dom";
import Button from "../Common/Button";
import GoogleButton from "../Common/GoogleButton";
import MetaButton from "../Common/MetaButton";

export default function SignupForm() {
  return (
    <div className="rounded-lg shadow-xl w-auto md:w-4/5 bg-white px-4 py-8 my-8">
      <form
        action=""
        className="flex flex-col gap-1"
      >
        <h1 className="text-2xl font-bold text-center ">
          Sign Up
        </h1>

        <p className="text-gray-600 p-2">
          Please sign up to book appointment
        </p>

        <div className="p-2">
          <label>
            Full Name
            <input
              type="text"
              id="name"
              className="border-2 border-green-800 rounded-lg px-2 py-1 w-full"
              placeholder="Your Name"
            />
          </label>
        </div>

        <div className="p-2">
          <label>
            Username
            <input
              type="text"
              id="name"
              className="border-2 border-green-800 rounded-lg px-2 py-1 w-full"
              placeholder="Your Username"
            />
          </label>
        </div>

        <div className="p-2">
          <label>
            Email
            <input
              type="email"
              id="email"
              className="border-2 border-green-800 rounded-lg px-2 py-1 w-full"
              placeholder="your@email.com"
            />
          </label>
        </div>

        <div className="flex flex-wrap">
          <div className="p-2 md:w-1/2 w-full">
            <label>
              Password
              <input
                type="password"
                id="password"
                className="border-2 border-green-800 rounded-lg px-2 py-1 w-full"
                placeholder="********"
              />
            </label>
          </div>

          <div className="p-2 md:w-1/2 w-full">
            <label>
              Confirm Password
              <input
                type="password"
                id="confirmPassword"
                className="border-2 border-green-800 rounded-lg px-2 py-1 w-full"
                placeholder="********"
              />
            </label>
          </div>
        </div>

        <div className="p-4">
          <Link to="/login">
            <Button buttonText="Sign Up" />
          </Link>
        </div>

        <p className="text-center">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-green-500"
          >
            Login
          </Link>
        </p>

        <div className="flex items-center justify-center">
          <div className="w-2/5">
            <hr />
          </div>
          <span className="mx-4">or</span>
          <div className="w-2/5">
            <hr />
          </div>
        </div>

        <div className="my-4 flex justify-center gap-4 items-center">
          <GoogleButton />
          <MetaButton />
        </div>
      </form>
    </div>
  );
}
