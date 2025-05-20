import React from "react";
import { LOGO, USER_AVATAR } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

  const navigate = useNavigate()
  const user = useSelector(store => store.user)


  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/")
    
      })
      .catch((error) => {
        
      });
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10  flex justify-between">
      <div className="w-44">
        <img className="w-36" src={LOGO} alt="logo" />
      </div>
  { user &&   <div className="flex items-center p-2 gap-2">
        <img className="w-10 h-10 " src={USER_AVATAR} alt="avatar" />
        <button
          onClick={handleSignOut}
          className="text-md font-bold text-teal-50"
        >
          signout
        </button>
      </div>}
    </div>
  );
};

export default Header;
