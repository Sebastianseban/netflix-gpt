import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import Header from "./Header";
import { MainContainer } from "./MainContainer";
import SecondaryContainer from "./secondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies()
  useTrendingMovies()
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;
