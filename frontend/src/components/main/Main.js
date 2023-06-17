import './Main.css'
import Promo from './Promo';
import AboutMe from './AboutMe';
import Techs from './Techs';
import AboutProject from './AboutProject';
import NavTab from './NavTab';

function Main() {

  return (
    <div>
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
    </div>
  )
}

export default Main;