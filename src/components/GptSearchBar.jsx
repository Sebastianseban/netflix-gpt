
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import { API_OPTIONS } from "../utils/constants";
import { geminiModel } from "../utils/googleai";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch()
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const fetchMovie = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
   try {
     const result = await geminiModel.generateContent(gptQuery);
     const response = await result.response;
     const text = await response.text();
 
     const movies = text.split(",")
     .map((title) => title.trim())
     .filter((title) => title.length > 0 );
 
     const allMovies = await Promise.all(movies.map(fetchMovie))
 
    

     dispatch(addGptMovieResult({movieNames : movies,movieResults : allMovies}))
     console.log("Fetched Movies:", allMovies);

   } catch (error) {
         console.error("Error fetching GPT movies:", error);

   }
  
  };

  return (
    <div className="pt-[25%] md:pt-[10%] flex justify-center px-4">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-2/3 lg:w-1/2 bg-black/60 backdrop-blur-md rounded-full border border-amber-50 shadow-lg flex items-center overflow-hidden"
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="flex-grow px-6 py-4 text-white bg-transparent  outline-none placeholder-gray-400"
        />
        <button
          onClick={handleGptSearchClick}
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
