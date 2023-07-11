import './MoviesCard.css'
import defaultImage from '../../../images/movieCard__poster.png'

function MoviesCard({ name, poster, link, duration }) {
  const BASE_URL = 'https://api.nomoreparties.co'
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  
  return (
    <div className='moviesCard'>
      <div className='moviesCard__container'>
        <h2 className='moviesCard__title'>{name}</h2>
        <p className='moviesCard__duration'>{`${hours}ч ${minutes}м`}</p>
        <button type='button' className='moviesCard__like' ></button>
      </div>
      <a href={link || 'https://www.yandex.ru'} className='moviesCard__link' target="_blank" rel="noreferrer">
        <img alt={`постер к фильму ${name}`} className='moviesCard__poster' src={`${BASE_URL}${poster}` || defaultImage}></img>
      </a>
    </div>
  )
}

// BEM validation done!
export default MoviesCard;