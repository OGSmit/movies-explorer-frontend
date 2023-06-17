import './Technology.css';

function Technology() {

  return (
    <div className="technology">
      <p className='technology__description'>Технологии</p>
      <div className='technology__container'>
        <h2 className='technology__title'>7 технологий</h2>
        <p className='technology__info'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <div className='technology__collection'>
          <p className='technology__item'>HTML</p>
          <p className='technology__item'>CSS</p>
          <p className='technology__item'>JS</p>
          <p className='technology__item'>React</p>
          <p className='technology__item'>Git</p>
          <p className='technology__item'>Express.js</p>
          <p className='technology__item'>mongoDB</p>
        </div>
      </div>
    </div>
  )
}

export default Technology;