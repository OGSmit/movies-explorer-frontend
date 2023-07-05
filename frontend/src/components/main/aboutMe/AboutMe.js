import "./AboutMe.css"
import avatar from '../../../images/bio__avatar.png'

function AboutMe() {

  return (
    <section className="aboutMe" id="aboutMe">
        <h2 className="aboutMe__description">Студент</h2>
        <div className="aboutMe__container">
          <div className="aboutMe__container-bio">
            <h3 className="aboutMe__name">Виталий</h3>
            <p className="aboutMe__about">Фронтенд-разработчик, 35 лет</p>
            <p className="aboutMe__bio">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
              и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
              После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
            <a href="https://github.com/OGSmit" target="_blank" rel="noreferrer" className="aboutMe__link">Github</a>
          </div>
          <img alt="фотография студента" src={avatar} className="aboutMe__avatar" />
        </div>
    </section>
  )
}

// BEM validation done!
export default AboutMe;