import React from 'react'
import { useForm } from 'react-hook-form';



const Login_page = () => {

  return (
    <div className="desktop">
      <div className="div">
        <h1 className="text-wrapper">Login</h1>
        <div className="text-wrapper-2">email</div>
        <div className="text-wrapper-3">password</div>
        <img className="line" alt="Line" src="line-1.svg" />
        <img className="img" alt="Line" src="line-2.svg" />
        <div className="overlap-group">
          <div className="text-wrapper-4">Sign Up</div>
        </div>
        <div className="text-wrapper-5">Forgot Password</div>
        <div className="text-wrapper-6">or Sign Up using</div>
        <img
          className="google-logo-icon-png"
          alt="Google logo icon png"
          src="google-logo-icon-png-transparent-background-osteopathy-16-1.png"
        />
        <div className="text-wrapper-7">john@gmail.com</div>
        <div className="text-wrapper-8">password</div>
      </div>
    </div>
  )
}

export default Login_page