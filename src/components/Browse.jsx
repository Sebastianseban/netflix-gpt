import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import { MainContainer } from "./MainContainer";
import SecondaryContainer from "./secondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;
