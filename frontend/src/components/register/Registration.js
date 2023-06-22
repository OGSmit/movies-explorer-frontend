import './Registration.css'
import logo from '../../image/header__logo.svg';

function Registration() {

  return (
    <div className='registration'>
      <div className='registration__container-top'>
        <img className='registartion__logo' alt='логотип' src={logo}></img>
        <h2 className='registration__title'>Добро пожаловать!</h2>
      </div>
      <div className='registration__container-main'>
        <form className='registration__form'>
          <label className='registration__label' for='registration__input_name'>Имя</label>
          <input className='registration__input registration__input_name' id='registration__input_name'></input>
          <label className='registration__label' for='registration__input_email'>E-mail</label>
          <input className='registration__input registration__input_email' id='registration__input_email'></input>
          <label className='registration__label' for='registration__input_password'>Пароль</label>
          <input className='registration__input registration__input_password' id='registration__input_password'></input>
          <button className='registration__button-submit'>Зарегистрироваться</button>
        </form>
        <div className='registration__container-bottom'>
          <p className='registration__link-description'>Уже зарегистрированы?</p>
          <a href='#' className='registration__link-login'>Войти</a>
        </div>
      </div>
    </div>
  )
}

export default Registration;