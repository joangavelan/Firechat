import React, { useState, useRef } from 'react'
import firebase from 'firebase/app'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Nav from './Nav'
import ChatMessage from './ChatMessage'
import './ChatRoom.scss'
import WelcomeMessage from './WelcomeMessage';

const ChatRoom = () => {

  const messagesColl = firebase.firestore().collection('messages');
  const query = messagesColl.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, {idField: 'id'});
  const [message, setMessage] = useState();

  let bottom = useRef(null);

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = firebase.auth().currentUser;

    await messagesColl.add({
      text: message,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    });

    setMessage('');

    bottom.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="ChatRoom">      
      <Nav />
      <WelcomeMessage />

      <ul className="messages" style={{listStyle: 'none', padding: '3rem 1.5rem'}}>
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg}/>)}
        <div ref={bottom}></div>
      </ul>

      <form onSubmit={(e) => sendMessage(e)}>
        <input type="text" value={message} onChange={(e) => setMessage(e.target.value)}/>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default ChatRoom