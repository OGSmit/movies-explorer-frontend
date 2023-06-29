import './MoviesCard.css'
import defaultImage from '../../../image/movieCard__poster.png'

function MoviesCard({ name, poster }) {

  return (
    <div className='moviesCard'>
      <div className='moviesCard__container'>
        <h2 className='moviesCard__title'>{name}</h2>
        <p className='moviesCard__duration'>1ч 42м</p>
        <button type='button' className='moviesCard__like'></button>
      </div>
      <img alt={`постер к фильму ${name}`} className='moviesCard__poster' src={poster || defaultImage}></img>
    </div>
  )
}

// BEM validation done!
export default MoviesCard;