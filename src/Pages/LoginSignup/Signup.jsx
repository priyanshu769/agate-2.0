import React from 'react'
import './LoginSignup.css'

export const Signup = () => {
  return (
    <div className="loginSignupBox">
      <input className="inputBox" placeholder="Username" type='text' />
      <input className="inputBox" placeholder="New Password" type='password' />
      <input className="inputBox" placeholder="Confirm Password" type='password' />
      <button className="loginSignupBtn">Signup</button>
      <p>Already a user, Login.</p>
    </div>
  )
}
