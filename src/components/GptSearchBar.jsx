import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[25%] md:pt-[10%] flex justify-center px-4">
      <form className="w-full md:w-2/3 lg:w-1/2 bg-black/60 backdrop-blur-md rounded-full border border-amber-50 shadow-lg flex items-center overflow-hidden">
        <input
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="flex-grow px-6 py-4 text-white bg-transparent  outline-none placeholder-gray-400"
        />
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 transition-colors px-6 py-3 text-white font-medium rounded-full mr-2"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
