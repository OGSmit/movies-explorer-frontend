import './SavedMovies.css'
import { useState } from 'react';
import Header from '../Header';
import SearchForm from '../../components/movies/searchForm/SearchForm'
import MoviesCardList from '../movies/moviesCardList/MoviesCardList'
import Footer from '../Footer'
import mainApi from '../../utils/MainApi';

function SavedMovies({ isloggedIn }) {

  const [savedMovies, setSavedMovies] = useState(JSON.parse(localStorage.getItem('savedMovie')))
  const [isEmptyResult, setIsEmptyResult] = useState(false);

  async function handleDeleteMovie(id) {
    return mainApi.removeMovie(id)
      .then(res => {
        const updatedFilteredMovies = savedMovies.filter((movie) => movie._id !== res.data._id)
        setSavedMovies(updatedFilteredMovies)
      })
  }

  const handleSearch = (searchOptions) => {
    const { query, isShortFilm } = searchOptions;
    const filtered = savedMovies.filter((movie) => {
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
    setSavedMovies(filtered);
  }

  return (
    <>
      <Header isloggedIn={isloggedIn} />
      <main className='savedMovies'>
        <SearchForm onSearch={handleSearch} />
        {isEmptyResult ? <span className='empty-result'>Ничего не найдено</span> : null}
        <MoviesCardList inSaveMovies={true} isNeedMoreButton={false} movies={savedMovies} onDelete={handleDeleteMovie} />
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies;