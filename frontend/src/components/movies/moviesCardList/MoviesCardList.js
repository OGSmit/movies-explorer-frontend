import './MoviesCardList.css'
import MoviesCard from './moviesCard/MoviesCard'

function MoviesCardList() {

  return (
    <div className='movieCardList'>
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <div className='movieCardList__more'>
        <button type='button' className='movieCardList__button-more'>Еще</button>
      </div>
    </div>
  )
}

export default MoviesCardList;