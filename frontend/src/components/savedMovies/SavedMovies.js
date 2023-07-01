import './SavedMovies.css'
import Header from '../Header';
import SearchForm from '../../components/movies/searchForm/SearchForm'
import MoviesCardList from '../movies/moviesCardList/MoviesCardList'
import Footer from '../Footer'

function SavedMovies({ isloggedIn }) {

  return (
    <>
      <Header isloggedIn={isloggedIn} />
      <main className='savedMovies'>
        <SearchForm />
        <MoviesCardList inSaveMovies={true} isNeedMoreButton={false} />
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies;