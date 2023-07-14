import './SavedMovies.css'
import { useEffect, useState } from 'react';
import Header from '../Header';
import SearchForm from '../../components/movies/searchForm/SearchForm'
import MoviesCardList from '../movies/moviesCardList/MoviesCardList'
import Footer from '../Footer'
import mainApi from '../../utils/MainApi';

function SavedMovies({ isloggedIn }) {

  const [savedMovies, setSavedMovies] = useState([])

  useEffect(() => {
    getSavedMovies()
  }, []);

  async function getSavedMovies() {
    return mainApi.getInitialMovie()
      .then(res => {
        setSavedMovies(res)
      })
      .catch(err => alert(err))
  }

 async function handleDeleteMovie(id) {
    return mainApi.removeMovie(id)
      .then(res => {
        const updatedFilteredMovies = savedMovies.filter((movie) => movie._id !== res.data._id)
        setSavedMovies(updatedFilteredMovies)
      })
  }

  return (
    <>
      <Header isloggedIn={isloggedIn} />
      <main className='savedMovies'>
        <SearchForm />
        <MoviesCardList inSaveMovies={true} isNeedMoreButton={false} movies={savedMovies} onDelete={handleDeleteMovie} />
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies;