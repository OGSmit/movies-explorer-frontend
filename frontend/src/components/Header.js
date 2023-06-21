import './Header.css'
import logo from '../image/header__logo.svg'

function Header() {

  return (
    <div className='header'>
      <img alt='логотип проекта' src={logo} className='header__logo' />
      <div className='header__movie-nav'>
        <a href='#' className='header__link-movie'>Фильмы</a>
        <a href='#' className='header__link-movie'>Сохранённые фильмы</a>
      </div>
      <button className='header__burger' type='button'></button> 
      <div className='header__account-info'>
        <p className='header__account-name'>Аккаунт</p>
        <div className='header__account-logo' ></div>
      </div>
    </div>
  )
}

export default Header;