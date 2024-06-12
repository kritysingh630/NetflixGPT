import React, { useRef, useState } from "react";
import Header from "./Header";
import { CheckValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [ErrorMessage,setErrorMessage] = useState(null)

  const FullName = useRef(null)
  const email = useRef(null);
  const password = useRef(null);

  const toggleCheckValidation = () => {
    const message = CheckValidData(FullName.current.value,email.current.value,password.current.value)
    setErrorMessage(message)
  };

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Bkg"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 p-8 my-36 bg-black mx-auto right-0 left-0 text-white rounded-lg bg opacity-80"
      >
        <h2 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>
        {!isSignInForm && (
          <input
          ref={FullName}
            className="p-4 my-2 w-full bg-slate-700 rounded-md"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="p-4 my-2 w-full bg-slate-700 rounded-md"
          type="text"
          placeholder="Email Address"
        />
        <input
          ref={password}
          className="p-4 my-2 w-full bg-slate-700 rounded-md"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-500 font-bold text-md py-2">{ErrorMessage}</p>
        <button
          className="p-4 my-4 bg-red-600 w-full rounded-lg"
          onClick={toggleCheckValidation}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registered, Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
