import React, { useState } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../moviesCard/MoviesCard';
import mainApi from '../../../utils/MainApi';
import { useLocation } from 'react-router-dom';
import { BASE_URL } from '../../../constants/constants';

function MoviesCardList({ movies, isNeedMoreButton, onDelete }) {


  const [visibleMovies, setVisibleMovies] = useState(7);
  const location = useLocation();

  const isSavedMovie = location.pathname === '/saved-movies';

  async function handleSaveMovie(movie) {
    return mainApi.addMovie(movie)
  }

  const handleLoadMore = () => {
    setVisibleMovies((prevVisibleMovies) => prevVisibleMovies + 7);
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
