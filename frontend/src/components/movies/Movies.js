import './Movies.css';
import Header from '../Header';
import SearchForm from './searchForm/SearchForm'
import MoviesCardList from './moviesCardList/MoviesCardList'
import Footer from '../Footer'

function Movies({ isloggedIn }) {

  return (
    <>
      <Header isloggedIn={isloggedIn} />
      <main>
        <SearchForm />
        <MoviesCardList inSaveMovies={false} isNeedMoreButton={true} />
      </main>
      <Footer />
    </>
  )
}

export default Movies;