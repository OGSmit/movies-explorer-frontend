import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import { register, login, tokencheck, userEdit } from '../utils/Auth';
import Main from './main/Main';
import Movies from './movies/Movies';
import Registration from '../components/register/Registration';
import Login from '../components/login/Login';
import SavedMovies from '../components/savedMovies/SavedMovies';
import Profile from '../components/profile/Profile';
import NotFound from './notFound/NotFound';
import ProtectedRouteElement from './ProtectedRoute';
import { getInitialMovies } from '../utils/MoviesApi';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  const navigate = useNavigate();

  const [isloggedIn, setIsloggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({})
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    function handleTokenCheck() {
      const jwt = localStorage.getItem('jwt');
      if (jwt) {
        return tokencheck(jwt).then((res) => {
          setIsloggedIn(true)
          setCurrentUser({
            ...currentUser,
            ...res
          });
        })
          .then(() => {
            navigate("/", { replace: true })
            console.log(currentUser)
          })
          .catch(err => console.log(err))
      }
    }

    handleTokenCheck()
    return () => { }
  }, []);

  async function handleRegistration(name, email, password, e) {
    return register(name, email, password)
      .then((res) => {
        e.target.reset()
      })
    // .catch(err => alert(err))
  }

  async function handleLogin(email, password, e) {
    return login(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('jwt', res.token);
          setIsloggedIn(true);
          navigate("/movies", { replace: true })
        }
        e.target.reset()
      })
    // .catch(err => alert(err))
  }

  async function handleUserEdit(name, email) {
    return userEdit(name, email)
      .then(res => {
        console.log(res)
        setCurrentUser({
          ...currentUser,
          ...res
        })
        navigate("/movies", { replace: true })
      })
  }

  async function goExit() {
    localStorage.removeItem('jwt');
    setIsloggedIn(false)
    navigate('/', { replace: true });
  }

  async function getAllMovies() {
    return getInitialMovies()
      .then(res => {
        setMovies(res);
      })
  }

  useEffect(() => {
    getAllMovies()
  }, []);

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser} >
        <Routes>

          <Route path='/' element={<Main isloggedIn={isloggedIn} />} />

          <Route path='/signup' element={<Registration onLogin={handleLogin} onRegistration={handleRegistration} />} />

          <Route path='/signin' element={<Login onLogin={handleLogin} />} />

          <Route path='/saved-movies' element={<ProtectedRouteElement loggedIn={isloggedIn} element={SavedMovies} allMovies={movies} isloggedIn={isloggedIn} />} />

          <Route path='/movies' element={<ProtectedRouteElement loggedIn={isloggedIn} element={Movies} allMovies={movies} isloggedIn={isloggedIn} />} />

          <Route path='/profile' element={<ProtectedRouteElement goExit={goExit} loggedIn={isloggedIn} element={Profile} setCurrentUser={setCurrentUser} onUserEdit={handleUserEdit} isloggedIn={isloggedIn} />} />

          <Route path='*' element={<NotFound />} />

        </Routes>
      </CurrentUserContext.Provider>

    </div>
  );
}

export default App;
