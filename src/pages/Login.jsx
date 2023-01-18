import React, { useRef, useState } from "react";
import logo from "../assets/icons/logo.svg";
import eye from "../assets/icons/eye.png";
import eye_close from "../assets/icons/hidden.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [passwordEyeCanSee, setPasswordEyeCanSee] = useState(false);
  const [errorText, setErrorText] = useState("");

  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();

  const loginSubmit = (e) => {
    e.preventDefault();
    navigate("/");
    // if(emailRef.current.value !== 'demo@demo.com') {
    //     setErrorText('Invalid Email')
    // }
    // else if (passwordRef !== 'demo123') {
    //     setErrorText('Invalid Password')
    // }else if(emailRef.current.value === 'demo@demo.com' && passwordRef.current.value === 'demo123'){
    //     localStorage.setItem('status', 'true')
    //     setErrorText('')
    //     navigate('/')
    // }
  };

  return (
    <>
      <div
        // style={{ backgroundImage: `url(` + bg_pattern + `)` }}
        className={`w-full h-screen  fixed inset-0 z-[700] bg-cover bg-no-repeat bg-center gradient-bg`}
      ></div>

      {/* login component */}
      <form
        onSubmit={loginSubmit}
        className="bg-[white] shadow-2xl fixed top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] w-[90%] max-w-[400px]   rounded-lg  z-[710] "
      >
        <div className="w-full  flex justify-center items-center ">
          <img src={logo} className="w-full max-w-[120px] " alt="" />
        </div>
        <div className="w-full p-3 mt-2">
          <div className="w-full">
            <input
              type="text"
              ref={emailRef}
              className=" my-2 p-2 w-full outline-none  border-b-2 focus:border-b-[#82c071] rounded-md  transition-all"
              placeholder="Email"
            />
          </div>
          <div className="w-full flex justify-center items-end bg-white    my-5    ">
            <input
              type={passwordEyeCanSee ? "text" : "password"}
              ref={passwordRef}
              className=" p-2 w-full outline-none group border-b-2 rounded-bl-md peer focus:border-b-[#82c071]"
              placeholder="Password"
            />
            <span className=" pb-2 border-b-2 flex justify-center items-center rounded-br-md peer-focus:border-b-[#82c071]">
              <img
                src={passwordEyeCanSee ? eye_close : eye}
                className="w-[22px] cursor-pointer opacity-60"
                alt=""
                onClick={() => setPasswordEyeCanSee(!passwordEyeCanSee)}
              />
            </span>
          </div>
        </div>
        <div className="w-full">{errorText}</div>
        <div className="w-full flex justify-center items-center p-3  ">
          <button className="p-3 w-full bg-[#82c071]  hover:bg-opacity-80 active:bg-opacity-80 focus:bg-opacity-80 outline-none transition-all text-white font-medium tracking-widest rounded-[10px] active:scale-[0.95]">
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
