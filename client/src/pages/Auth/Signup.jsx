import SignupForm from '../../components/Auth/SignupForm';
import signUpIcon from '../../assets/images/SignUpIcon.png';

export default function Signup() {
  return (
    <div className='bg-green-50 h-screen flex flex-wrap '>
      <div className="">
        <img src = {signUpIcon} alt="icon" />
      </div>
      <SignupForm />
    </div>
  )
}
