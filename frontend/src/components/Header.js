import './Header.css'
import logo from '../image/header__logo.svg';
import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import BurgerMenu from './burgerMenu/BurgerMenu';

function Header({ isloggedIn }) {
  const location = useLocation();

  const [isBurgerOpened, setIsBurgerOpened] = useState(false)

// заблочил скролл при открытом бургере 
  useEffect(() => {
    const body = document.querySelector('body');

    if (isBurgerOpened) {
      body.classList.add('no-scroll');
    } else {
      body.classList.remove('no-scroll');
    }
  }, [isBurgerOpened])

  function handleBurgerOpening() {
    setIsBurgerOpened(!isBurgerOpened);
  }

  return (
    <>
      {isloggedIn ?

        <header className='header'>
          <Link to='/' className='header__logo-link' > <img alt='логотип проекта' src={logo} className='header__logo' /></Link>
          <nav className='header__movie-nav'>
            <NavLink to='/movies' className={location.pathname === '/movies' ? 'header__link-movie-active' : 'header__link-movie'}>Фильмы</NavLink>
            <NavLink to='/saved-movies' className={location.pathname === '/saved-movies' ? 'header__link-movie-active' : 'header__link-movie'}>Сохранённые фильмы</NavLink>
          </nav>
          <button onClick={handleBurgerOpening} className='header__burger' type='button'></button>
          <div className='header__account-info'>
            <p className='header__account-name'>Аккаунт</p>
            <Link to='/profile' className='header__account-logo'></Link>
          </div>
        </header > :

        <header className='header'>
          <Link to='/' className='header__logo-link'><img alt='логотип' src={logo} /></Link>
          <div className='header__container'>
            <Link to='/sign-up' className='header__button header__button_signIn'>Регистрация</Link>
            <Link to='/sign-in' className='header__button header__button_enter'>Войти</Link>
          </div>
        </header>}
      <BurgerMenu isOpened={isBurgerOpened} onClose={handleBurgerOpening} />
    </>
  )
}

export default Header;