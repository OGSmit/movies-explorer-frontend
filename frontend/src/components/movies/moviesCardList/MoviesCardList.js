import React, { useState, useEffect } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../moviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';
import { BASE_URL } from '../../../constants/constants';

function MoviesCardList({ movies, isNeedMoreButton, onDelete, onHandleDeleteMovie, onHandleSaveMovie, savedMovies }) {
  const location = useLocation();
  const [visibleMovies, setVisibleMovies] = useState(7);
  const isSavedMovie = location.pathname === '/saved-movies';

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      let visibleCount;
      if (screenWidth < 768) {
        visibleCount = 5;
      } else {
        visibleCount = 7;
      }
      setVisibleMovies(visibleCount);
    };
  
    handleResize();
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    let resizeTimeout;
  
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const screenWidth = window.innerWidth;
        let visibleCount;
        if (screenWidth < 768) {
          visibleCount = 5;
        } else {
          visibleCount = 7;
        }
        setVisibleMovies(visibleCount);
      }, 500);
    };
  
    handleResize();
    window.addEventListener('resize', handleResize);
  
    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
              movie={movie}
              isSavedMovie={isSavedMovie}
              savedMovies={savedMovies}
              name={movie.nameRU}
              duration={movie.duration}
              link={movie.trailerLink}
              posterLink={`${BASE_URL}${movie.image.url}`}
              onSave={() => onHandleSaveMovie(movie)}
              onDelete={() => onHandleDeleteMovie(movie)} />
          )) :

          movies.map((movie) => (

            <MoviesCard key={movie._id}
              isSavedMovie={isSavedMovie}
              name={movie.nameRU}
              duration={movie.duration}
              link={movie.trailerLink}
              posterLink={movie.image}
              onClickDeleteButton={() => { onDelete(movie._id) }} />
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
