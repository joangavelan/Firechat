import React, { useState, useEffect } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import Button from './components/Button'
import Channel from './components/Channel'

firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env_REACT_APP_APP_ID
})

const auth = firebase.auth();
const db = firebase.firestore();

const App = () => {

  const [user, setUser] = useState(() => auth.currentUser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => user ? setUser(user) : setUser(null));
    return unsubscribe;
  }, [])

  const SignInWithGoogle = async () => {
    //retrieve Google provider object
    const provider = new firebase.auth.GoogleAuthProvider();
    //set langauge to the default browser preference
    auth.useDeviceLanguage();
    //starts sign in process
    try {
      await auth.signInWithPopup(provider);
    } catch (error) {
      console.log(error)
    }
  }

  const SignOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {user 
        ? 
        <React.Fragment>
          <Button onClick={SignOut}>Sing Out</Button>
          <p>Welcome to the chat</p>
          <Channel user={user} db={db}/>
        </React.Fragment>
        : <Button onClick={SignInWithGoogle}>Sign in with Google</Button>}
    </div>
  )
}

export default App