import './Movies.css';
import Header from '../Header';
import SearchForm from './searchForm/SearchForm'
import MoviesCardList from './moviesCardList/MoviesCardList'
import Footer from '../Footer'

function Movies() {

  return (
    <div>
      <Header />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </div>
  )
}

export default Movies;