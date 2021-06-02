import React, { useState, useRef } from 'react'
import firebase from 'firebase/app'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Nav from './Nav'
import ChatMessage from './ChatMessage'
import './ChatRoom.scss'
import WelcomeMessage from './WelcomeMessage';
import Form from './Form';

const ChatRoom = () => {

  const messagesColl = firebase.firestore().collection('messages');
  const query = messagesColl.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, {idField: 'id'});

  let bottom = useRef(null);

  return (
    <div className="ChatRoom">      
      <Nav />
      <WelcomeMessage />

      <ul className="messages" style={{listStyle: 'none', padding: '3rem 1.5rem', height: 'auto'}}>
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg}/>)}
        <div ref={bottom}></div>
      </ul>

      <Form bottomRef={bottom}/>
    </div>
  )
}

export default ChatRoom