import './NotFound.css'

function NotFound() {

  return (
    <div className='not-found'>
      <div className='not-found__container'>
        <h1 className='not-found__title'>404</h1>
        <p className='not-found__description'>Страница не найдена</p>
        <a href='#' className='not-found__back-link'>Назад</a>
      </div>
    </div>
  )
}

export default NotFound;