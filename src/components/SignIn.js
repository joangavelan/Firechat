import React from 'react'
import './SignIn.scss'
import firebase from 'firebase/app'
import Logo from './Logo'

const SignIn = () => {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  return (
    <div className="container">
      <div className="signIn">
        <Logo />
        <p>Easily connect with people around the world.</p>
        <button onClick={signInWithGoogle}>
          <img src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png" alt="google" /> 
          <p>Sign in with Google</p>
        </button>
      </div>
    </div>
  )
}

export default SignIn