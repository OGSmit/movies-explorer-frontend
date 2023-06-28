import './SavedMovies.css'
import Header from '../Header';
import SearchForm from '../../components/movies/searchForm/SearchForm'
import MoviesCardList from '../movies/moviesCardList/MoviesCardList'
import Footer from '../Footer'

function SavedMovies({ isloggedIn }) {

  return (
    <div className='savedMovies'>
      <Header isloggedIn={isloggedIn} />
      <SearchForm />
      <MoviesCardList isNeedMoreButton={false} />
      <Footer />
    </div>
  )
}

export default SavedMovies;