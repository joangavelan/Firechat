import React, { useState, useEffect } from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import SignIn from './components/SignIn'
import ChatRoom from './components/ChatRoom'

firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env_REACT_APP_APP_ID
})

const App = () => {

  const [user] = useAuthState(firebase.auth());

  return (
    <div className="App">
     {user ? <ChatRoom /> : <SignIn />}
    </div>
  )
}

export default App