import SignupForm from '../../components/Auth/SignupForm';
import signUpIcon from '../../assets/images/SignUpIcon.png';

export default function Signup() {
  return (
    <div className="bg-green-50 h-auto md:h-[90vh] w-full flex flex-col md:flex-row justify-between items-center p-8 gap-4">
      <div className="md:w-1/2 w-auto p-8">
        <img src={signUpIcon} alt="login Icon" className="w-4/6 mx-auto" />
      </div>
      <div className="md:w-1/2 w-auto ">
        <SignupForm className="mx-auto"/>
      </div>
    </div>
  )
}
