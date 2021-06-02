import React from 'react'
import firebase from 'firebase/app'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import './ChatMessage.scss'

const ChatMessage = ({ message }) => {

  const { text, uid, photoURL } = message;

  const messageClass = uid === firebase.auth().currentUser.uid ? 'sent' : 'received';

  return (
    <li className={`message ${messageClass}`}>
      <img src={photoURL}/>
      <p>{text}</p>
    </li>
  )
}

export default ChatMessage