import React, { useState } from "react";
import Header from "./Header";
import { BG_URL } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="h-screen object-cover" src={BG_URL} alt="logo" />
      </div>
      <form className="w-full md:w-3/12 absolute p-12 bg-[#000000d5] my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "SignIn" : "SignUp"}
        </h1>

       {!isSignInForm && <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          className="p-4 my-4 w-full bg-gray-700"
        />}
        <input
          type="text"
          name="email"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="p-4 my-4 w-full  bg-gray-700"
        />
        <p className="text-red-500 font-bold text-lg py-2">ERROR</p>
        <button type="submit" className="p-4 my-6 bg-red-700 w-full rounded-lg">
          Sign In
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
