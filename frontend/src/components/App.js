import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import { register, login, tokencheck } from '../utils/Auth';
import Main from './main/Main';
import Movies from './movies/Movies';
import Registration from '../components/register/Registration';
import Login from '../components/login/Login';
import SavedMovies from '../components/savedMovies/SavedMovies';
import Profile from '../components/profile/Profile';
import NotFound from './notFound/NotFound';
import ProtectedRouteElement from './ProtectedRoute';

function App() {
  const navigate = useNavigate();

  const [isloggedIn, setIsloggedIn] = useState(false);

  // useEffect(() => {
  //   function handleTokenCheck() {
  //     const jwt = localStorage.getItem('jwt');
  //     if (jwt) {
  //       return tokencheck(jwt).then((res) => {
  //         setIsloggedIn(true)
  //       })
  //         .then(() => {
  //           navigate("/", { replace: true })
  //         })
  //         .catch(err => console.log(err))
  //     }
  //   }
  //   handleTokenCheck()
  //   return () => { }
  // }, [])

  async function handleRegistration(name, email, password, e) {
    return register(name, email, password)
      .then((res) => {
        console.log(res)
        e.target.reset()
      })
      .catch(err => alert(err))
  }

  async function handleLogin(email, password, e) {
    return login(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('jwt', res.token);
          setIsloggedIn(true);
          navigate("/movies", { replace: true })
        }
        console.log(res)
        e.target.reset()
      })
      .catch(err => alert(err))
  }

  return (
    <div className="App">
      <Routes>

        <Route path='/' element={<Main isloggedIn={isloggedIn} />} />

        <Route path='/signup' element={<Registration onRegistration={handleRegistration} />} />

        <Route path='/signin' element={<Login onLogin={handleLogin} />} />

        <Route path='/saved-movies' element={<ProtectedRouteElement loggedIn={isloggedIn} element={SavedMovies} isloggedIn={isloggedIn} />} />

        <Route path='/movies' element={<ProtectedRouteElement loggedIn={isloggedIn} element={Movies} isloggedIn={isloggedIn} />} />

        <Route path='/profile' element={<ProtectedRouteElement loggedIn={isloggedIn} element={Profile} isloggedIn={isloggedIn} />} />

        <Route path='*' element={<NotFound />} />

      </Routes>

    </div>
  );
}

export default App;
