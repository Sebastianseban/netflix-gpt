import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import GptSerach from "./GptSearach";
import Header from "./Header";
import  MainContainer  from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer"



const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSerach);

  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearach />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer/>
        </>
      )}
    </div>
  );
};

export default Browse;
