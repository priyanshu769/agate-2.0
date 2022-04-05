import './App.css'
import { ProductsPage, Cart, Wishlist, Login, Signup } from './Pages'
import { Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <ul>
          <li className='navBullet'>
            <Link className="navLink" activeclassname="selectedNavPill" to="/">
              Home
            </Link>
          </li>
          <li className='navBullet'>
            <Link
              className="navLink"
              activeclassname="selectedNavPill"
              to="/wishlist"
            >
              Wishlist
            </Link>
          </li>
          <li className='navBullet'>
            <Link
              className="navLink"
              activeclassname="selectedNavPill"
              to="/cart"
            >
              Cart
            </Link>
          </li>
          <li className='navBullet'>
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
        <Route path="/" element={<ProductsPage />}>
          Home
        </Route>
        <Route path="/wishlist" element={<Wishlist />}>
          Wishlist
        </Route>
        <Route path="/cart" element={<Cart />}>
          Cart
        </Route>
        <Route path="/login" element={<Login />}>
          Login
        </Route>
        <Route path="/signup" element={<Signup />}>
          Signup
        </Route>
      </Routes>
    </div>
  )
}

export default App
