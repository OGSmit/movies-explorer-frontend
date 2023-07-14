import React, { useState, useEffect } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../moviesCard/MoviesCard';
import mainApi from '../../../utils/MainApi';
import { useLocation } from 'react-router-dom';
import { BASE_URL } from '../../../constants/constants';

function MoviesCardList({ movies, isNeedMoreButton, onDelete }) {

  // const [filteredMovies, setFilteredMovies] = useState([])
  const [visibleMovies, setVisibleMovies] = useState(3);
  const location = useLocation();

  const isSavedMovie = location.pathname === '/saved-movies';

// useEffect(() => {
//   setFilteredMovies([...movies])
// }, [])

  async function handleSaveMovie(movie) {
    return mainApi.addMovie(movie)
  }

  // async function handleDeleteMovie(id) {
  //   return mainApi.removeMovie(id)
  //     .then(res => {
  //       const updatedFilteredMovies = filteredMovies.filter((movie) => {
  //         if (movie._id !== res.data._id) {
  //           return movie
  //         }
  //       })
  //       setFilteredMovies([...updatedFilteredMovies])
  //     })
  // }

  const handleLoadMore = () => {
    setVisibleMovies((prevVisibleMovies) => prevVisibleMovies + 3);
  };

  const renderedMovies = movies.slice(0, visibleMovies);

  return (
    <section className='movieCardList'>
      <ul className='movieCardList__list'>
        {!isSavedMovie ?

          renderedMovies.map((movie) => (

            <MoviesCard key={movie.id}
              isSavedMovie={isSavedMovie}
              name={movie.nameRU}
              duration={movie.duration}
              link={movie.trailerLink}
              posterLink={`${BASE_URL}${movie.image.url}`}
              onClickLikeButton={() => { handleSaveMovie(movie) }} />
          )):

          movies.map((movie) => (

            <MoviesCard key={movie._id}
              isSavedMovie={isSavedMovie}
              name={movie.nameRU}
              duration={movie.duration}
              link={movie.trailerLink}
              posterLink={movie.image}
              onClickLikeButton={() => { onDelete(movie._id) }} />
          ))}
      </ul>
      {isNeedMoreButton && movies.length > visibleMovies && (
        <div className='movieCardList__more'>
          <button type='button' className='movieCardList__button-more' onClick={handleLoadMore}>
            Еще
          </button>
        </div>
      )}
    </section>
  );
}

export default MoviesCardList;
