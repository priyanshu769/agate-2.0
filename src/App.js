import './App.css'
import { ProductsPage, Cart, Wishlist, Login, Signup } from './Pages'
import { Routes, Route, Link } from 'react-router-dom'
import { PrivateRoute, ReversePrivateRoute, loadUser, loadCart, logoutHandle } from './Utils'
import { useEffect, useState } from 'react'
import { useAuth } from './Context/AuthContext'
import { useApp } from './Context/AppContext'

function App() {
  const { auth, authDispatch } = useAuth()
  const { app, appDispatch } = useApp()
  const [userFeat, setUserFeat] = useState(false)
  useEffect(() => {
    const localStorageLoggedInToken = JSON.parse(
      localStorage.getItem('loggedInAgate'),
    )
    if (localStorageLoggedInToken) {
      authDispatch({
        TYPE: 'set_loggedInToken',
        PAYLOAD: localStorageLoggedInToken.token,
      })
      loadUser(localStorageLoggedInToken.token, authDispatch)
      loadCart(localStorageLoggedInToken.token, appDispatch)
    }
  }, [authDispatch, appDispatch])
  console.log(app, auth)
  return (
    <div className="App">
      <nav className="navbar">
        <ul className="navBullets">
          <li className="navBullet">
            <Link className="navLink" activeclassname="selectedNavPill" to="/">
              Home
            </Link>
          </li>
          <li className="navBullet">
            <Link
              className="navLink"
              activeclassname="selectedNavPill"
              to="/wishlist"
            >
              Wishlist
            </Link>
          </li>
          <li className="navBullet">
            <Link
              className="navLink"
              activeclassname="selectedNavPill"
              to="/cart"
            >
              Cart
            </Link>
          </li>
          <li className="navBullet">
            <button onClick={() => setUserFeat(!userFeat)} className="navBtn">
              User
            </button>
          </li>
        </ul>
      </nav>
      <div className={userFeat ? 'navbarAbsolute' : 'displayHidden'}>
        <ul className="navBullets">
          <li className="navBullet">
            {auth.loggedInToken ? auth.user?.name : 'Unknown'}
          </li>
          <li className={!auth.loggedInToken ? 'navBullet' : 'displayHidden'}>
            <Link
              className="navLink"
              activeclassname="selectedNavPill"
              to="/login"
            >
              Login
            </Link>
          </li>
          <li className="navBullet">
            <button
              onClick={() => logoutHandle(auth.loggedInToken, authDispatch)}
              className={auth.loggedInToken ? 'navBtn' : 'displayHidden'}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
      <Routes>
        <Route exact path="/" element={<ProductsPage />} />
        <Route exact path="/wishlist" element={<PrivateRoute />}>
          <Route exact path="/wishlist" element={<Wishlist />} />
        </Route>
        <Route exact path="/cart" element={<PrivateRoute />}>
          <Route exact path="/cart" element={<Cart />} />
        </Route>
        <Route exact path="/login" element={<ReversePrivateRoute />}>
          <Route exact path="/login" element={<Login />} />
        </Route>
        <Route exact path="/signup" element={<ReversePrivateRoute />}>
          <Route exact path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
