import React, { useState } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../moviesCard/MoviesCard';

function MoviesCardList({ filteredMovies, isNeedMoreButton }) {
  const [visibleMovies, setVisibleMovies] = useState(3);

  const handleLoadMore = () => {
    setVisibleMovies((prevVisibleMovies) => prevVisibleMovies + 3);
  };

  const renderedMovies = filteredMovies.slice(0, visibleMovies);

  return (
    <section className='movieCardList'>
      <ul className='movieCardList__list'>
        {renderedMovies.map((movie) => (
          <MoviesCard key={movie.id} name={movie.nameRU} duration={movie.duration} link={movie.trailerLink} poster={movie.image.url} />
        ))}
      </ul>
      {isNeedMoreButton && filteredMovies.length > visibleMovies && (
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
