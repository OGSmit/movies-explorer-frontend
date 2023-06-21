import './Profile.css'
import Header from '../Header';

function Profile() {

  return (
    <div className='profile'>
      <Header />
      <div className='profile__container'>
        <h2 className='profile__title'>Привет, Виталий!</h2>
        <form className='profile__form'>
          <div className='profile__container-input'>
            <label className='profile__input-label' for='profile__input_name'>Имя</label>
            <input className='profile__input profile__input_name' placeholder='Виталий' id='profile__input_name'></input>
          </div>
          <div className='profile__container-input'>
            <label className='profile__input-label' for='profile__input_email'>E-mail</label>
            <input className='profile__input profile__input_email' placeholder='pochta@yandex.ru' id='profile__input_email'></input>
          </div>
          <button type='submit' className='profile__button_submit'>Редактировать</button>
        </form>
        <button type='button' className='profile__button_exit'>Выйти из аккаунта</button>
      </div>
    </div>
  )
}

export default Profile;