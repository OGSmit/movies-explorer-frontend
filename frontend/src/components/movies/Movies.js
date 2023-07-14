import './Movies.css';
import { useEffect, useState } from 'react';
import Header from '../Header';
import SearchForm from './searchForm/SearchForm'
import MoviesCardList from './moviesCardList/MoviesCardList'
import Footer from '../Footer'
import mainApi from '../../utils/MainApi';
import { getInitialMovies } from '../../utils/MoviesApi';
import Preloader from '../Preloader/Preloader/Preloader';


function Movies({ isloggedIn }) {
  const [beatMovies, setBeatMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isEmptyResult, setIsEmptyResult] = useState(false);

  useEffect(() => {
    getBeatMovies()
    getSavedMovies()
  }, []);

  async function getSavedMovies() {
    return mainApi.getInitialMovie()
      .then(res => {
        setSavedMovies(res)
        localStorage.setItem('savedMovie', JSON.stringify(res))
      })
      .catch(err => alert(err))
  }

  async function getBeatMovies() {
    return getInitialMovies()
      .then(res => {
        setBeatMovies(res)
        localStorage.setItem('beatMovie', JSON.stringify(res))
      })
      .catch(err => alert(err))
  }

  const handleSearch = (searchOptions) => {
    localStorage.setItem('searchOptions', JSON.stringify(searchOptions))
    const { query, isShortFilm } = searchOptions;
    const filtered = beatMovies.filter((movie) => {
      const isIncluded = movie.nameRU.toLowerCase().includes(query.toLowerCase());
      const isShort = movie.duration <= 40;
      if (isShortFilm) {
        return isIncluded && isShort;
      } else {
        return isIncluded;
      }
    });

    if (filtered.length === 0) {
      setIsEmptyResult(true)
    }
    else {
      setIsEmptyResult(false)
    }
    localStorage.setItem('searchResult', JSON.stringify(filtered));
    setFilteredMovies(filtered);
  }

  async function handleSaveMovie(movie) {
    return mainApi.addMovie(movie)
      .then(res => {
        setSavedMovies(prev => [...prev, res])
      })
      .catch(err => alert(err))
  }

  async function handleDeleteMovie(movie) {
    const movieGonnaRemove = savedMovies.find((item) => (movie.id + '') === item.movieId)
    return mainApi.removeMovie(movieGonnaRemove._id)
      .then(res => {
        const newArr = savedMovies.filter((item) => item._id !== movieGonnaRemove._id)
        setSavedMovies(newArr);
      })
      .catch(err => alert(err))
  }

  useEffect(() => {
    localStorage.setItem('savedMovie', JSON.stringify(savedMovies))
  }, [savedMovies])

  return (
    <>
      <Header isloggedIn={isloggedIn} />
      <main className='main'>
        <SearchForm
          onSearch={handleSearch}
          query={JSON.parse(localStorage.getItem('searchOptions')).query}
          checkBox={JSON.parse(localStorage.getItem('searchOptions')).isShortFilm} />
        {isEmptyResult ? <span className='empty-result'>Ничего не найдено</span> : null}
        <MoviesCardList
          movies={JSON.parse(localStorage.getItem('searchResult')) || filteredMovies}
          savedMovies={savedMovies}
          isNeedMoreButton={true}
          onHandleDeleteMovie={handleDeleteMovie}
          onHandleSaveMovie={handleSaveMovie} />
      </main>
      <Footer />
    </>
  )
}

export default Movies;
