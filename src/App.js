import './App.css'
import { ProductsPage, Cart, Wishlist, Login, Signup } from './Pages'
import { Routes, Route, Link } from 'react-router-dom'
import { PrivateRoute, ReversePrivateRoute } from './Utils'

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <ul>
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
            <Link
              className="navLink"
              activeclassname="selectedNavPill"
              to="/login"
            >
              Login
            </Link>
          </li>
        </ul>
      </nav>
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
