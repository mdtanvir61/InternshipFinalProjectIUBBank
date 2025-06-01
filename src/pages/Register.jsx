import RegisterBanner from "../components/Sections/RegisterSection/RegisterBanner";
import RegisterForm from "../components/Sections/RegisterSection/RegisterForm";


const Register = () => {
  return (
    <div className="w-full overflow-x-hidden">
       <RegisterBanner/>
       <RegisterForm/>
    </div>
  );
};

export default Register;