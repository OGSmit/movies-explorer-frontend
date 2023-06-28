import './Movies.css';
import Header from '../Header';
import SearchForm from './searchForm/SearchForm'
import MoviesCardList from './moviesCardList/MoviesCardList'
import Footer from '../Footer'

function Movies({ isloggedIn }) {

  return (
    <div>
      <Header isloggedIn={isloggedIn} />
      <SearchForm />
      <MoviesCardList isNeedMoreButton={true} />
      <Footer />
    </div>
  )
}

export default Movies;