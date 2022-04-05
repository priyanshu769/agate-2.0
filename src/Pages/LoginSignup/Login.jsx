import React from 'react'
import './LoginSignup.css'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div className='loginSignupBox'>
      <input className='inputBox' placeholder='Username' type='text' />
      <input className='inputBox' placeholder='Password' type='password' />
      <button className='loginSignupBtn'>Login</button>
      <p>Already a user, <Link to='/signup'>Signup</Link>.</p>
    </div>
  )
}
