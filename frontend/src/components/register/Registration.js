import './Registration.css'
import logo from '../../image/header__logo.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Registration({ onRegistration }) {
  const [formValue, setFormValue] = useState({});
  const [formErrorMessage, setFormErrorMessage] = useState({});
  const isFormFieldsValid = !formErrorMessage.name &&
                            !formErrorMessage.email &&
                            !formErrorMessage.password &&
                            formErrorMessage.name == '' &&
                            formErrorMessage.email == '' &&
                            formErrorMessage.password == '';

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

  function handleSubmit(e) {
    e.preventDefault();
    const { name, email, password } = formValue;
    onRegistration(name, email, password, e)
  }

  return (
    <section class='registration'>
      <div class='registration__container-top'>
        <Link to='/' class='registration__logo-link'><img class='registration__logo' alt='логотип' src={logo}></img></Link>
        <h2 class='registration__title'>Добро пожаловать!</h2>
      </div>
      <div class='registration__container-main'>
        <form class='registration__form' onSubmit={handleSubmit}>
          <label class='registration__label' htmlFor='registration__input_name'>Имя</label>
          <input class='registration__input registration__input_name'
            id='registration__input_name'
            name='name'
            required
            minLength={2}
            type="text"
            onChange={handleChangeName}></input>
          <span class={formErrorMessage.name === 'undefined' ? 'registration__error-invisible' : 'registration__error'}>{formErrorMessage.name || ''}</span>
          <label class='registration__label' htmlFor='registration__input_email'>E-mail</label>
          <input class='registration__input registration__input_email'
            id='registration__input_email'
            name='email'
            required
            type="email"
            onChange={handleChangeEmail}></input>
          <span class={formErrorMessage.email === 'undefined' ? 'registration__error-invisible' : 'registration__error'}>{formErrorMessage.email || ''}</span>
          <label class='registration__label' htmlFor='registration__input_password'>Пароль</label>
          <input class='registration__input registration__input_password'
            id='registration__input_password'
            name='password'
            required
            minLength={8}
            type="password"
            onChange={handleChangePassword}></input>
          <span class={formErrorMessage.password === 'undefined' ? 'registration__error-invisible' : 'registration__error'}>{formErrorMessage.password || ''}</span>
          <button disabled={!isFormFieldsValid} class='registration__button-submit' >Зарегистрироваться</button>
        </form>
        <div class='registration__container-bottom'>
          <p class='registration__link-description'>Уже зарегистрированы?</p>
          <Link to='/sign-in' class='registration__link-login'>Войти</Link>
        </div>
      </div>
    </section>
  )
}

// BEM validation done!
export default Registration;