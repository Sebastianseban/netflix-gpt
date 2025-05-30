import React from "react";
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSerach);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {});
  };

  const HandleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10  flex flex-col md:flex-row justify-between">
      <div className="w-44">
        <img className="w-36" src={LOGO} alt="logo" />
      </div>
      {user && (
        <div className="flex items-center p-2 gap-2">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={HandleGptSearchClick}
            className="py-2 px-4 m-2 hover:cursor-pointer hover:bg-purple-800 bg-gradient-to-t bg-purple-500 text-white "
          >
           {showGptSearch ? "Homepage" :"GPT serach"}
          </button>
          <img className="w-10 h-10 " src={USER_AVATAR} alt="avatar" />
          <button
            onClick={handleSignOut}
            className="text-md font-bold text-teal-50"
          >
            signout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
