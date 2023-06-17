import './Header.css'
import logo from '../image/header__logo.svg';

function Header() {

  return (
    <header className='header'>
      <img alt='логотип' src={logo} />
      <div className='header__container'>
        <a href='#' className='header__button header__button_signIn'>Регистрация</a>
        <button className='header__button header__button_enter'>Войти</button>
      </div>
    </header>
  )
}

export default Header;