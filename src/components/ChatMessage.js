import React from 'react'
import firebase from 'firebase/app'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import './ChatMessage.scss'

const ChatMessage = ({ message }) => {

  const { text, uid, photoURL } = message;

  const messageClass = uid === firebase.auth().currentUser.uid ? 'sent' : 'received';

  const query = firebase.firestore().collection('messages').orderBy('createdAt', 'desc').limit(2);
  const [lastMessages] = useCollectionData(query, {idField: 'id'});

  const lastMessage = lastMessages?.[0];
  const penultimateMessage = lastMessages?.[1];

  console.log(lastMessage?.uid)
  console.log(penultimateMessage?.uid)

  return (
    <li className={`message ${messageClass}`}>
      {lastMessage?.uid !== penultimateMessage?.uid && <img src={photoURL}/>}
      <p>{text}</p>
    </li>
  )
}

export default ChatMessage