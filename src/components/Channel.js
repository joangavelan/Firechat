import React, { useState, useEffect } from 'react'
import firebase from 'firebase/app'
import Message from './Message'

const Channel = ({ user }) => {

  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const db = firebase.firestore();


  db.collectionGroup('testing')

  const { uid, displayName, photoURL } = user;
  
  useEffect(() => {
    if(db) {
      const unsubscribe = db
        .collection('channel')
        .orderBy('createdAt')
        .limit(100)
        .onSnapshot(querySnapshot => {
          //get all documents from collection with IDS
          const data = querySnapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id
          }))
          //state update
          setMessages(data);
        })

      //detach listener
      return unsubscribe;
    }
  }, [db]); 

  const handleSubmit = (e) => {
    e.preventDefault();

    if(db) {
      db.collection('channel').add({
        text: newMessage,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        displayName,
        photoURL
      })
    }

    setNewMessage('');
  }

  return (
    <React.Fragment>
      <div>
        {messages.map(message => (
          <Message {...message} key={message.id} />
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a new message"/>
        <button type="submit" disabled={!newMessage}>Send</button>
      </form>
    </React.Fragment>
  )
}

export default Channel