import './Movies.css';
import { useEffect, useState } from 'react';
import Header from '../Header';
import SearchForm from './searchForm/SearchForm'
import MoviesCardList from './moviesCardList/MoviesCardList'
import Footer from '../Footer'
import { getInitialMovies } from '../../utils/MoviesApi';
import Preloader from '../Preloader/Preloader/Preloader';

function Movies({ isloggedIn }) {

  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isPreloaderActive, setIsPreloaderActive] = useState(false);
  const [isEmptyResult, setIsEmptyResult] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    handleGetAllMovies();
  }, []);

  const handleGetAllMovies = () => {
    setIsPreloaderActive(true);
    const allMovies = JSON.parse(localStorage.getItem('allMovies'));
    if (typeof allMovies === 'undefined') {
      return getInitialMovies()
        .then((res) => {
          localStorage.setItem('allMovies', JSON.stringify(res));
          setMovies(res);
        })
        .catch((err) => {
          setErrorMessage(
            'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.'
          );
        })
        .finally(() => setIsPreloaderActive(false));
    } else {
      setMovies(allMovies);
      setIsPreloaderActive(false)
    }
  };

  const handleSearch = (searchOptions) => {
    localStorage.setItem('searchOptions', JSON.stringify(searchOptions));
    const { query, isShortFilm } = searchOptions;
    const filtered = movies.filter((movie) => {
      const isIncluded = movie.nameRU.toLowerCase().includes(query.toLowerCase());
      const isShort = movie.duration <= 40;
      if (isShortFilm) {
        return isIncluded && isShort;
      } else {
        return isIncluded;
      }
    });
    if (filtered.length === 0){
      setIsEmptyResult(true)
    } 
     else {
      setIsEmptyResult(false)
     }
    localStorage.setItem('searchResult', JSON.stringify(filtered));
    setFilteredMovies(filtered);
  }

  return (
    <>
      <Header isloggedIn={isloggedIn} />
      <main className='main'>
        <SearchForm onSearch={handleSearch} />
        {isPreloaderActive ? <Preloader /> : null}
        {errorMessage ? (
          <span className='error-message'>{errorMessage}</span>
        ) : null}
        {isEmptyResult ? <span className='empty-result'>Ничего не найдено</span> : null}
        {filteredMovies.length >= 1 ? <MoviesCardList movies={filteredMovies} isNeedMoreButton={true} /> : null}
      </main>
      <Footer />
    </>
  )
}

export default Movies;
