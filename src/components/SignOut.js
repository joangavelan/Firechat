import React from 'react'
import firebase from 'firebase/app'
import './SignOut.scss'

const SignOut = () => {
  return  firebase.auth().currentUser && (
    <button className="SignOut" onClick={() => firebase.auth().signOut()}>
      Sign Out
    </button>
  )
}

export default SignOut