import './MoviesCard.css'
import defaultImage from '../../../images/movieCard__poster.png'

function MoviesCard({ inSaveMovies, name, poster, link, duration }) {

  return (
    <div className='moviesCard'>
      <div className='moviesCard__container'>
        <h2 className='moviesCard__title'>{name}</h2>
        <p className='moviesCard__duration'>{duration}</p>
        <button type='button' className={inSaveMovies?'moviesCard__like moviesCard__like_delete' : 'moviesCard__like' }></button>
      </div>
      <a href={link || 'https://www.yandex.ru'} className='moviesCard__link' target="_blank" rel="noreferrer">
        <img alt={`постер к фильму ${name}`} className='moviesCard__poster' src={poster || defaultImage}></img>
      </a>
    </div>
  )
}

// BEM validation done!
export default MoviesCard;