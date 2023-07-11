import './Profile.css'
import Header from '../Header';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile({ goExit, isloggedIn, onUserEdit, setCurrentUser }) {
  const navigate = useNavigate();

  const userInfo = useContext(CurrentUserContext);

  const [formValue, setFormValue] = useState({});
  const [formErrorMessage, setFormErrorMessage] = useState({});
  const [gonnaEdit, setGonnaEdit] = useState(false)

  const [editError, setEditError] = useState('')

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

  const doExit = () => {
    goExit()
  }

  const handelGonnaEdit = () => {
    const inputs = document.querySelectorAll('.profile__input');
    inputs.forEach(input => {
      input.disabled = false;
    });
    setGonnaEdit(true);
  }

  const handleUserEdit = () => {
    const { name = userInfo.data.name, email = userInfo.data.email } = formValue;
    onUserEdit(name, email)
      .catch((err) => {
        (err === 'Ошибка: 409') ?
        setEditError('Пользователь с таким email уже существует.') : setEditError('При регистрации пользователя произошла ошибка.')
      })
  }


  return (
    <>
      <Header isloggedIn={isloggedIn} />
      <main className='profile'>
        <section className='profile__container'>
          <h1 className='profile__title'>{`Привет, ${userInfo.data.name}!`}</h1>
          <form className='profile__form'>
            <div className='profile__container-input'>
              <label className='profile__input-label' htmlFor='profile__input_name'>Имя</label>
              <input name='name'
                disabled={true}
                onChange={handleChangeName}
                type='text'
                required
                minLength={2}
                maxLength={18}
                className='profile__input profile__input_name'
                placeholder={userInfo.data.name}
                id='profile__input_name'></input>
              <span className={formErrorMessage.name === 'undefined' ? 'profile__error-invisible' : 'profile__error'}>{formErrorMessage.name || ''}</span>
            </div>
            <div className='profile__container-input'>
              <label className='profile__input-label' htmlFor='profile__input_email'>E-mail</label>
              <input name='email'
                disabled={true}
                type='email'
                required
                onChange={handleChangeEmail}
                className='profile__input profile__input_email'
                placeholder={userInfo.data.email}
                id='profile__input_email'></input>
              <span className={formErrorMessage.email === 'undefined' ? 'profile__error-invisible' : 'profile__error'}>{formErrorMessage.email || ''}</span>
            </div>
            {gonnaEdit ?
              <>
                <span className={editError.length > 1 ? 'profile__submit-error' : 'profile__submit-error profile__submit-error_invisible' }>{editError}</span>
                <button onClick={handleUserEdit}  type='button' className='profile__button-save'>Сохранить</button>
              </> :
              <button onClick={handelGonnaEdit} type='button' className='profile__button-edit'>Редактировать</button>
            }
          </form>
          <button onClick={doExit} type='button' className={gonnaEdit ? 'profile__button-exit profile__button-exit_invisible' : 'profile__button-exit'}>Выйти из аккаунта</button>
        </section>
      </main>
    </>
  )
}

// BEM validation done!
export default Profile;