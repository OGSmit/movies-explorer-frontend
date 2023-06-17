import "./AboutMe.css"
import avatar from '../../image/Mylogo.png'

function AboutMe() {

  return (
    <section className="aboutMe" id="aboutMe">
      <p className="aboutMe__description"></p>
      <div className="aboutMe__container">
        <div className="aboutMe__container-bio">
          <h2 className="aboutMe__name">Олег</h2>
          <p className="aboutMe__about">Фронтенд-разработчик, 35 лет</p>
          <p className="aboutMe__bio">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
            После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
           <a href="https://github.com/OGSmit" className="aboutMe__link">Github</a> 
        </div>
        <img alt="фотография студента" src={avatar} className="aboutMe__avatar"/>
      </div>
    </section>
  )
}

export default AboutMe;