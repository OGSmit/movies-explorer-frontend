import './MoviesCard.css'
import tester from '../../../image/Mylogo.png'

function MoviesCard() {

  return (
    <div className='moviesCard'>
      <div className='moviesCard__container'>
        <h2 className='moviesCard__title'>33 слова о дизайне</h2>
        <p className='moviesCard__duration'>1ч 42м</p>
        <button className='moviesCard__like'></button>
      </div>
      <img alt='постер фильма' className='moviesCard__poster' src={tester}></img>
    </div>
  )
}

// BEM validation done!
export default MoviesCard;