import './Movies.css';
import { useEffect, useState } from 'react';
import Header from '../Header';
import SearchForm from './searchForm/SearchForm'
import MoviesCardList from './moviesCardList/MoviesCardList'
import Footer from '../Footer'
import mainApi from '../../utils/MainApi';
import { getInitialMovies } from '../../utils/MoviesApi';
import Preloader from '../Preloader/Preloader/Preloader';
import { SHORT_FILM_DURATION } from '../../constants/constants';

function Movies({ isloggedIn, setInfoTool, closeInfoTool }) {
  const [beatMovies, setBeatMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isEmptyResult, setIsEmptyResult] = useState(false);

  const [wannaShort, setWannaShort] = useState(true);

  const [preloader, setPreloader] = useState(false);

  useEffect(() => {
    getBeatMovies()
    getSavedMovies()
  }, []);

  async function getSavedMovies() {
    setPreloader(true)
    return mainApi.getInitialMovie()
      .then(res => {
        setSavedMovies(res)
        localStorage.setItem('savedMovie', JSON.stringify(res))
      })
      .catch(err => setInfoTool({ text: err, statusOk: false, opened: true }))
      .finally(() => setPreloader(false))
  }

  async function getBeatMovies() {
    setPreloader(true)
    return getInitialMovies()
      .then(res => {
        setBeatMovies(res)
        localStorage.setItem('beatMovie', JSON.stringify(res))
      })
      .catch(err => setInfoTool({ text: err, statusOk: false, opened: true }))
      .finally(() => setPreloader(false))
  }

  const handleSearch = (searchQuery) => {
    localStorage.setItem('searchQuery', JSON.stringify(searchQuery))
    const filtered = beatMovies.filter((movie) => movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase()));
    if (filtered.length === 0) {
      setIsEmptyResult(true)
    }
    else {
      setIsEmptyResult(false)
      setFilteredMovies(filtered);
      localStorage.setItem('Result', JSON.stringify(filtered));
    }
  }

  const handleCheckBoxClick = (event) => {
    setWannaShort(event.target.checked)
  }

  async function handleSaveMovie(movie) {
    return mainApi.addMovie(movie)
      .then(res => {
        setSavedMovies(prev => [...prev, res])
      })
      .catch(err => setInfoTool({ text: err, statusOk: false, opened: true }))
  }

  async function handleDeleteMovie(movie) {
    const movieGonnaRemove = savedMovies.find((item) => (movie.id + '') === item.movieId)
    return mainApi.removeMovie(movieGonnaRemove._id)
      .then(res => {
        const newArr = savedMovies.filter((item) => item._id !== movieGonnaRemove._id)
        setSavedMovies(newArr);
      })
      .catch(err => setInfoTool({ text: err, statusOk: false, opened: true }))
  }

  useEffect(() => {
    localStorage.setItem('savedMovie', JSON.stringify(savedMovies))
  }, [savedMovies])

  const query = JSON.parse(localStorage.getItem('searchQuery')) || ''

  return (
    <>
      <Header isloggedIn={isloggedIn} />
      <main className='main' onClick={closeInfoTool}>
        <SearchForm
          onSearch={handleSearch}
          CheckBoxState={wannaShort}
          query={query}
          onCheckBoxClick={handleCheckBoxClick}
          setInfoTool={setInfoTool} />
        {isEmptyResult && <span className='empty-result'>Ничего не найдено</span>}
        {preloader && <Preloader />}
        {!isEmptyResult && <MoviesCardList
          movies={wannaShort ? JSON.parse(localStorage.getItem('Result')) || filteredMovies
            :JSON.parse(localStorage.getItem('Result')).filter((movie) => movie.duration < SHORT_FILM_DURATION) || filteredMovies.filter((movie) => movie.duration < SHORT_FILM_DURATION)}
          savedMovies={savedMovies}
          isNeedMoreButton={true}
          onHandleDeleteMovie={handleDeleteMovie}
          onHandleSaveMovie={handleSaveMovie} />}
      </main>
      <Footer />
    </>
  )
}

export default Movies;