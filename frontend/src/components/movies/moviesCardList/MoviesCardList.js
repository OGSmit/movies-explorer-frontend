import './MoviesCardList.css'
import MoviesCard from '../moviesCard/MoviesCard';

function MoviesCardList({ inSaveMovies, isNeedMoreButton }) {

  return (
    <section className='movieCardList'>
      <ul className='movieCardList__list'>
        <li className='movieCardList__item'><MoviesCard inSaveMovies={inSaveMovies} name={'В погоне заВ погоне за БенксиВ погоне за БенксиВ погоне за Бенкси Бенкси'} /></li>
       

        <li className='movieCardList__item'><MoviesCard inSaveMovies={inSaveMovies} name={'long-long-long-long-long-long-long-long-long- long-long-long-long-long-long-long-long- long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-name'} /></li>
      </ul>
      {isNeedMoreButton ?
        <>
          <div className='movieCardList__more'>
            <button type='button' className='movieCardList__button-more'>Еще</button>
          </div>
        </>
        : 
        <>
        <div className='movieCardList__more movieCardList__more_invisible'>
            <button type='button' className='movieCardList__button-more movieCardList__button-more_invisible'>Еще</button>
          </div>
        </>}
    </section>
  )
}

// BEM validation done!
export default MoviesCardList;