import './Login.css'
import { Link } from 'react-router-dom';
import logo from '../../image/header__logo.svg';
import { useState } from 'react';

function Login({ onLogin }) {
  const [formValue, setFormValue] = useState({});
  const [formErrorMessage, setFormErrorMessage] = useState({});
  const isFormFieldsValid = !formErrorMessage.email &&
                            !formErrorMessage.passwordform &&
                            formErrorMessage.email == '' &&
                            formErrorMessage.password == '';;

  function handleChangeEmail(e) {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value
    });

    setFormErrorMessage({
      ...formErrorMessage,
      [name]: e.target.validationMessage
    })
  }

  function handleChangePassword(e) {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value
    });

    setFormErrorMessage({
      ...formErrorMessage,
      [name]: e.target.validationMessage
    })
  }

  // Загатовка под сабмит

  function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = formValue;
    onLogin(email, password, e)
  }

  return (
    <div className='login'>
      <div className='login__container-top'>
        <Link to='/' className='header__logo-link'><img className='registartion__logo' alt='логотип' src={logo}></img></Link>
        <h2 className='login__title'>Рады видеть!</h2>
      </div>
      <div className='login__container-main'>
        <form className='login__form' onSubmit={handleSubmit}>
          <label className='login__label' htmlFor='login__input_email'>E-mail</label>
          <input className='login__input login__input_email'
            id='login__input_email'
            name='email'
            required
            type="email"
            onChange={handleChangeEmail}></input>
          <span className={formErrorMessage.email === 'undefined' ? 'login__error-invisible' : 'login__error'}>{formErrorMessage.email || ''}</span>
          <label className='login__label' htmlFor='login__input_password'>Пароль</label>
          <input className='login__input login__input_password'
            id='login__input_password'
            name='password'
            required
            minLength={8}
            type="password"
            onChange={handleChangePassword}></input>
          <span className={formErrorMessage.password === 'undefined' ? 'login__error-invisible' : 'login__error'}>{formErrorMessage.password || ''}</span>
          <button disabled={!isFormFieldsValid} className='login__button-submit'>Войти</button>
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