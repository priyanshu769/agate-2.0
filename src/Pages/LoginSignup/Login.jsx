import React from 'react'
import './LoginSignup.css'

export const Login = () => {
  return (
    <div className='loginSignupBox'>
      <input className='inputBox' placeholder='Username' type='text' />
      <input className='inputBox' placeholder='Password' type='password' />
      <button className='loginSignupBtn'>Login</button>
      <p>Already a user, Signup.</p>
    </div>
  )
}
