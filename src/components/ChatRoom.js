import React, { useState, useRef } from 'react'
import firebase from 'firebase/app'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Nav from './Nav'
import './ChatRoom.scss'
import WelcomeMessage from './WelcomeMessage';
import Form from './Form';
import Messages from './Messages';

const ChatRoom = () => {

  const messagesColl = firebase.firestore().collection('messages');
  const query = messagesColl.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, {idField: 'id'});

  let bottom = useRef(null);

  return (
    <div className="ChatRoom">      
      <Nav />
      <WelcomeMessage />
      <Messages messages={messages} bottomRef={bottom}/>
      <Form bottomRef={bottom}/>
    </div>
  )
}

export default ChatRoom