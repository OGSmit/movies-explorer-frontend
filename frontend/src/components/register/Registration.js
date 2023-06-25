import './Registration.css'
import logo from '../../image/header__logo.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Registration() {
  const [formValue, setFormValue] = useState({});
  const [formErrorMessage, setFormErrorMessage] = useState({});

  function handleChangeName(e) {
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

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   const { name, email, password } = formValue;
  // }

  return (
    <div className='registration'>
      <div className='registration__container-top'>
        <Link to='/' className='header__logo-link'><img className='registartion__logo' alt='логотип' src={logo}></img></Link>
        <h2 className='registration__title'>Добро пожаловать!</h2>
      </div>
      <div className='registration__container-main'>
        <form className='registration__form' >
          <label className='registration__label' htmlFor='registration__input_name'>Имя</label>
          <input className='registration__input registration__input_name'
                 id='registration__input_name'
                 name='name'
                 required
                 minLength={2}
                 type="text"
                 onChange={handleChangeName}></input>
          <span className={formErrorMessage.name === 'undefined'?  'registration__error-invisible': 'registration__error'}>{formErrorMessage.name || ''}</span>
          <label className='registration__label' htmlFor='registration__input_email'>E-mail</label>
          <input className='registration__input registration__input_email'
                 id='registration__input_email'
                 name='email'
                 required
                 type="email"
                 onChange={handleChangeEmail}></input>
          <span className={formErrorMessage.email === 'undefined'?  'registration__error-invisible': 'registration__error'}>{formErrorMessage.email || ''}</span>
          <label className='registration__label' htmlFor='registration__input_password'>Пароль</label>
          <input className='registration__input registration__input_password'
                 id='registration__input_password'
                 name='password'
                 required
                 minLength={8}
                 type="password"
                 onChange={handleChangePassword}></input>
          <span className={formErrorMessage.password === 'undefined'?  'registration__error-invisible': 'registration__error'}>{formErrorMessage.password || ''}</span>
          <button className='registration__button-submit'>Зарегистрироваться</button>
        </form>
        <div className='registration__container-bottom'>
          <p className='registration__link-description'>Уже зарегистрированы?</p>
          <Link to='/sign-in' className='registration__link-login'>Войти</Link>
        </div>
      </div>
    </div>
  )
}

export default Registration;