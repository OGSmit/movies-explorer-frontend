import "./NavTab.css"

function NavTab() {

  return (
    <section className="navTab">
      <nav className="navTab__list">
        <a href="#aboutProject" className="navTab__item">О&nbsp;проекте</a>
        <a href="#techs" className="navTab__item">Технологии</a>
        <a href="#aboutMe" className="navTab__item">Студент</a>
      </nav>
    </section>
  )
}

export default NavTab;