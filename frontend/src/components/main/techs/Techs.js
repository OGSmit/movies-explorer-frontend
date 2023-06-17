import './Techs.css';

function Techs() {

  return (
    <section className="techs" id='techs'>
      <p className='techs__description'>Технологии</p>
      <div className='techs__container'>
        <h2 className='techs__title'>7 технологий</h2>
        <p className='techs__info'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <div className='techs__collection'>
          <p className='techs__item'>HTML</p>
          <p className='techs__item'>CSS</p>
          <p className='techs__item'>JS</p>
          <p className='techs__item'>React</p>
          <p className='techs__item'>Git</p>
          <p className='techs__item'>Express.js</p>
          <p className='techs__item'>mongoDB</p>
        </div>
      </div>
    </section>
  )
}

export default Techs;