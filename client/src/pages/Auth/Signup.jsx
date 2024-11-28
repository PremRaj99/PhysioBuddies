import SignupForm from "../../components/Auth/SignupForm";
import signUpIcon from "../../assets/images/SignUpIcon.png";

export default function Signup() {
  return (
    <div className="bg-bg-primary w-full flex flex-col md:flex-row justify-evenly items-center md:px-8 gap-8">
      <img src={signUpIcon} alt="login Icon" className="max-w-[30rem] w-1/2 hidden md:block" />
      <div className="md:w-[30rem] w-full pb-8 my-16">
        <SignupForm />
      </div>
    </div>
  );
}
