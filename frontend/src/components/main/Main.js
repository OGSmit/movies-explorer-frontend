import './Main.css'
import Promo from './promo/Promo';
import AboutMe from './aboutMe/AboutMe';
import Techs from './techs/Techs';
import AboutProject from './aboutProject/AboutProject';
import NavTab from './navTab/NavTab';
import Portfolio from './portfolio/Portfolio';
import Header from './header/Header';

function Main() {

  return (
    <div>
      <Header />
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </div>
  )
}

export default Main;