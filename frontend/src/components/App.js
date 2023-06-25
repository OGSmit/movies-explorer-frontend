import './App.css';
import { Route, Routes } from "react-router-dom";
import Main from './main/Main';
import Movies from './movies/Movies'
import Registration from '../components/register/Registration';
import Login from '../components/login/Login';
import SavedMovies from '../components/savedMovies/SavedMovies';
import Profile from '../components/profile/Profile'

function App() {
  return (
    <div className="App">
      <Routes>

        <Route path='/' element={<Main />} />

        <Route path='/sign-up' element={<Registration />} />

        <Route path='/sign-in' element={<Login />} />

        <Route path='/saved-movies' element={ <SavedMovies />} />

        <Route path='/movies' element={<Movies />} />

        <Route path='/profile' element={<Profile />} />

      </Routes>
    </div>
  );
}

export default App;
