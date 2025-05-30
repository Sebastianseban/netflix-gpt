import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector((store)=>store.movies)


  return (
    movies.nowPlayingMovies &&
    <div className='bg-black'>
     <div className='-mt-20 pl-12 relative z-20'>
       <MovieList title={'Now playing'} movies={movies.nowPlayingMovies}/>
      <MovieList title={'Trending'} movies={movies.trendingMovies}/>
      <MovieList title={'Popular'} movies={movies.popularMovies}/>
      <MovieList title={'upcoming Moives'} movies={movies.nowPlayingMovies}/>
     
     </div>
    </div>
  )
}

export default SecondaryContainer