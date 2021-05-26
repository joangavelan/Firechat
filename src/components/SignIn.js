import React from 'react'
import SignInButton from './Button'
import './SignIn.scss'

const SignIn = ({ signIn }) => {
  return (
    <div className="container">
      <div className="signIn">
        <div>
          <img src="images/firebase-logo.png" alt="firebase logo" />
          <h1>Firechat</h1>
        </div>
        <p>Easily connect with people around the world.</p>
        <SignInButton onClick={signIn}>
          <img src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png" alt="google" /> 
          <p>Sign in with Google</p>
        </SignInButton>
      </div>
    </div>
  )
}

export default SignIn