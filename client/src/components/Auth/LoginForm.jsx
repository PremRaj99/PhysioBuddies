import Button from "../Common/Button";
import { Link } from "react-router-dom";
import GoogleButton from "../Common/GoogleButton";
import MetaButton from "../Common/MetaButton";

export default function LoginForm() {
  return (
    <div className="rounded-lg shadow-xl w-auto md:w-4/5  bg-white px-4 py-8">
      <form
        action=""
        className="flex flex-col gap-4"
      >
        <h1 className="text-2xl font-bold text-center ">
          Login
        </h1>
        <p className="text-gray-600 p-2">
          Please log in to book appointment
        </p>
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

        <div className="p-2">
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
        <div className="p-4">
          <Button buttonText="Login" />
        </div>
        <p className="text-center text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-green-500"
          >
            Sign up
          </Link>
        </p>
        <p className="text-center text-gray-600">
          <Link
            to="/forgotpassword"
            className="text-green-500 text-center"
          >
            {" "}
            Forgot Password?
          </Link>
        </p>
        
        <div className="">

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
        </div>
      </form>
    </div>
  );
}
