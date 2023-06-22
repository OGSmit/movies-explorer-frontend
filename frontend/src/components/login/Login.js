import './Login.css'

import logo from '../../image/header__logo.svg';

function Login() {

  return (
    <div className='login'>
      <div className='login__container-top'>
        <img className='registartion__logo' alt='логотип' src={logo}></img>
        <h2 className='login__title'>Рады видеть!</h2>
      </div>
      <div className='login__container-main'>
        <form className='login__form'>
          <label className='login__label' for='login__input_email'>E-mail</label>
          <input className='login__input login__input_email' id='login__input_email'></input>
          <label className='login__label' for='login__input_password'>Пароль</label>
          <input className='login__input login__input_password' id='login__input_password'></input>
          <button className='login__button-submit'>Войти</button>
        </form>
        <div className='login__container-bottom'>
          <p className='login__link-description'>Ещё не зарегистрированы?</p>
          <a href='#' className='login__link-login'>Регистрация</a>
        </div>
      </div>
    </div>
  )
}

export default Login;