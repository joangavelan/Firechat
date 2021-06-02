import React, { useState } from 'react'
import './Form.scss'
import firebase from 'firebase/app'
import { IoSend } from 'react-icons/io5'

const Form = ({ bottomRef }) => {

  const messagesColl = firebase.firestore().collection('messages');
  const [message, setMessage] = useState();

  const sendMessage = async (e) => {
    e.preventDefault();
    if(!message.trim()) return;

    const { uid, photoURL } = firebase.auth().currentUser;

    await messagesColl.add({
      text: message,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    });

    setMessage('');

    bottomRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <form className="Form" onSubmit={(e) => sendMessage(e)}>
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Write a message..."/>
      <button type="submit"><IoSend /></button>
    </form>
  )
}

export default Form