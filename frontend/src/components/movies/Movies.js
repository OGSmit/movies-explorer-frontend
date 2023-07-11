import './Movies.css';
import { useEffect, useState } from 'react';
import Header from '../Header';
import SearchForm from './searchForm/SearchForm'
import MoviesCardList from './moviesCardList/MoviesCardList'
import Footer from '../Footer'
import { getInitialMovies } from '../../utils/MoviesApi';

function Movies({ isloggedIn }) {

  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    handleGetAllMovies();
  }, []);

  const handleGetAllMovies = () => {
    const allMovies = JSON.parse(localStorage.getItem('allMovies'));

    if (typeof allMovies === 'undefined') {
      return getInitialMovies()
        .then((res) => {
          localStorage.setItem('allMovies', JSON.stringify(res));
          setMovies(res);
        })
        .catch((err) => alert(err));
    } else {
      setMovies(allMovies);
    }
  };

  const handleSearch = (searchOptions) => {
    const russianRegex = /[А-Яа-я]/;
    const { query, isShortFilm } = searchOptions;
    if (russianRegex.test(query)) {
      const filtered = movies.filter((movie) => {

        const isIncluded = movie.nameRU.toLowerCase().includes(query.toLowerCase());
        const isShort = movie.duration <= 40;

        if (isShortFilm) {
          return isIncluded && isShort;
        } else {
          return isIncluded;
        }
      });
      setFilteredMovies(filtered);
    } else {
      const filtered = movies.filter((movie) => {

        const isIncluded = movie.nameEN.toLowerCase().includes(query.toLowerCase());
        const isShort = movie.duration <= 40;

        if (isShortFilm) {
          return isIncluded && isShort;
        } else {
          return isIncluded;
        }
      });
      setFilteredMovies(filtered);
    }
  }

  return (
    <>
      <Header isloggedIn={isloggedIn} />
      <main>
        <SearchForm onSearch={handleSearch} />
        {filteredMovies.length >= 1 ? <MoviesCardList filteredMovies={filteredMovies} isNeedMoreButton={true} /> : ''}
      </main>
      <Footer />
    </>
  )
}

export default Movies;
