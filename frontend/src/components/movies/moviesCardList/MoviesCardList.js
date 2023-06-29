import './MoviesCardList.css'
import MoviesCard from '../moviesCard/MoviesCard';

function MoviesCardList({isNeedMoreButton}) {

  return (
    <section className='movieCardList'>
      <ul className='movieCardList__list'>
        <li><MoviesCard name={'33 слова о дизайне'} /></li>
        <li><MoviesCard name={'Киноальманах «100 лет дизайна»'}/></li>
        <li><MoviesCard name={'В погоне за Бенкси'}/></li>
        <li><MoviesCard name={'Баския: Взрыв реальности'}/></li>
        <li><MoviesCard name={'long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-name'}/></li>
      </ul>
      {isNeedMoreButton? <div className='movieCardList__more'>
        <button type='button' className='movieCardList__button-more'>Еще</button>
      </div> : ''}
    </section>
  )
}

// BEM validation done!
export default MoviesCardList;