import './MoviesCardList.css'
import MoviesCard from '../moviesCard/MoviesCard';

function MoviesCardList({isNeedMoreButton}) {

  return (
    <section className='movieCardList'>
      <MoviesCard name={'33 слова о дизайне'} />
      <MoviesCard name={'Киноальманах «100 лет дизайна»'}/>
      <MoviesCard name={'В погоне за Бенкси'}/>
      <MoviesCard name={'Баския: Взрыв реальности'}/>
      <MoviesCard name={'long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-name'}/>
      {isNeedMoreButton? <div className='movieCardList__more'>
        <button type='button' className='movieCardList__button-more'>Еще</button>
      </div> : ''}
    </section>
  )
}

// BEM validation done!
export default MoviesCardList;