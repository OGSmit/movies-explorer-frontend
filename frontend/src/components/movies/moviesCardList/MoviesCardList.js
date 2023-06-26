import './MoviesCardList.css'
import MoviesCard from '../moviesCard/MoviesCard';

function MoviesCardList({isNeedMoreButton}) {

  return (
    <div className='movieCardList'>
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      {isNeedMoreButton? <div className='movieCardList__more'>
        <button type='button' className='movieCardList__button-more'>Еще</button>
      </div> : ''}
    </div>
  )
}

// BEM validation done!
export default MoviesCardList;