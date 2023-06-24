import './Login.css'
import { Link } from 'react-router-dom';
import logo from '../../image/header__logo.svg';

function Login() {

  return (
    <div className='login'>
      <div className='login__container-top'>
      <Link to='/' className='header__logo-link'><img className='registartion__logo' alt='логотип' src={logo}></img></Link>
        <h2 className='login__title'>Рады видеть!</h2>
      </div>
      <div className='login__container-main'>
        <form className='login__form'>
          <label className='login__label' htmlFor='login__input_email'>E-mail</label>
          <input className='login__input login__input_email' id='login__input_email'></input>
          <label className='login__label' htmlFor='login__input_password'>Пароль</label>
          <input className='login__input login__input_password' id='login__input_password'></input>
          <button className='login__button-submit'>Войти</button>
        </form>
        <div className='login__container-bottom'>
          <p className='login__link-description'>Ещё не зарегистрированы?</p>
          <Link to='/sign-up' className='login__link-login'>Регистрация</Link>
        </div>
      </div>
    </div >
  )
}

export default Login;