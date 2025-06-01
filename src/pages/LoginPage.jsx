import { useContext, useEffect } from "react";
import LoginBanner from "../components/Sections/LoginSection/LoginBanner";
import LoginForm from "../components/Sections/LoginSection/LoginForm";
import { useAuth } from "../components/Context/Context";
import { Router } from "react-router-dom";

const LoginPage = () => {
  // const {user} = useAuth()
  // const router = Router()
  // useEffect(()=> {
  //   if(user){
  //     router
  //   }
  // },[])

  return (
    <div className="w-full overflow-x-hidden">
      <LoginBanner/>
      <LoginForm/>
    </div>
  );
};

export default LoginPage;