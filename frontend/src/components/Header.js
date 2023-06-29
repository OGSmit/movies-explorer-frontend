import './Header.css'
import logo from '../images/header__logo.svg';
import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import BurgerMenu from './burgerMenu/BurgerMenu';

function Header({ isloggedIn }) {
  const location = useLocation();
  const navigate = useNavigate();

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

  const goSignUp = () => {
    navigate('/signup');
  };

  const goSignIn = () => {
    navigate('/signin');
  };

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
          <Link to='/profile' className=' header__account-info'>
            <p className='header__account-name'>Аккаунт</p>
            <div className='header__account-logo'></div>
          </Link>
        </header > :

        <header className='header header_unlogged'>
          <Link to='/' className='header__logo-link'><img alt='логотип' src={logo} /></Link>
          <div className='header__container'>
            <button onClick={goSignUp} type='button' className='header__button header__button_signIn'>Регистрация</button>
            <button onClick={goSignIn} type='button' className='header__button header__button_enter'>Войти</button>
          </div>
        </header>}
      <BurgerMenu isOpened={isBurgerOpened} onClose={handleBurgerOpening} />
    </>
  )
}

export default Header;