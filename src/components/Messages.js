import React from 'react'
import './Messages.scss'
import ChatMessage from './ChatMessage'

const Messages = ({ messages, bottomRef}) => {
  return (
    <ul className="Messages">
      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg}/>)}
      <div ref={bottomRef}></div>
    </ul>
  )
}

export default Messages