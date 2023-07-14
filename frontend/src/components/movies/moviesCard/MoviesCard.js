import './MoviesCard.css'
import React, { useState } from 'react';


function MoviesCard({ name, posterLink, link, duration, onClickLikeButton, isSavedMovie }) {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;

  const [isCliked, setIsCliked] = useState(false)

  async function handleSaveMovie() {
    try {
      await onClickLikeButton()
        .then((res) => {
          console.log(res)
          setIsCliked(true);
        });
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className='moviesCard'>
      <div className='moviesCard__container'>
        <h2 className='moviesCard__title'>{name}</h2>
        <p className='moviesCard__duration'>{`${hours}ч ${minutes}м`}</p>
        <button onClick={isCliked ? null : handleSaveMovie} type='button' className={`${isSavedMovie ? 'moviesCard__like moviesCard__like_delete' : 'moviesCard__like'} ${isCliked ? 'moviesCard__like_liked' : ''}`} ></button>
      </div>
      <a href={link || 'https://www.yandex.ru'} className='moviesCard__link' target="_blank" rel="noreferrer">
        <img alt={`постер к фильму ${name}`} className='moviesCard__poster' src={posterLink}></img>
      </a>
    </div>
  )
}

// BEM validation done!
export default MoviesCard;