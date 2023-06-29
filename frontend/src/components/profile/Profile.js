import './Profile.css'
import Header from '../Header';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Profile({ isloggedIn }) {
  const navigate = useNavigate();

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

  const goExit = () => {
    navigate('/')
  }

  return (
    <>
      <Header isloggedIn={isloggedIn} />
      <main className='profile'>
        <div className='profile__container'>
          <h1 className='profile__title'>Привет, Виталий!</h1>
          <form className='profile__form'>
            <div className='profile__container-input'>
              <label className='profile__input-label' htmlFor='profile__input_name'>Имя</label>
              <input name='name'
                onChange={handleChangeName}
                type='text'
                required
                minLength={2}
                maxLength={18}
                className='profile__input profile__input_name'
                placeholder='Виталий'
                id='profile__input_name'></input>
              <span className={formErrorMessage.name === 'undefined' ? 'profile__error-invisible' : 'profile__error'}>{formErrorMessage.name || ''}</span>
            </div>
            <div className='profile__container-input'>
              <label className='profile__input-label' htmlFor='profile__input_email'>E-mail</label>
              <input name='email'
                type='email'
                required
                onChange={handleChangeEmail}
                className='profile__input profile__input_email'
                placeholder='pochta@yandex.ru'
                id='profile__input_email'></input>
              <span className={formErrorMessage.email === 'undefined' ? 'profile__error-invisible' : 'profile__error'}>{formErrorMessage.email || ''}</span>
            </div>
            <button type='submit' className='profile__button-submit'>Редактировать</button>
          </form>
          <button onClick={goExit} type='button' className='profile__button-exit'>Выйти из аккаунта</button>
        </div>
      </main>
    </>
  )
}

// BEM validation done!
export default Profile;