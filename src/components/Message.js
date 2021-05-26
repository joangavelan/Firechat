import React from 'react'
import { formatDate } from '../utils'

const Message = ({ photoURL, displayName, createdAt, text }) => {

  return (
    <div>
      {photoURL && <img src={photoURL} alt="Avatar" width={45} height={45}/>}
      <p>{displayName}</p>
      <p>{text}</p>
      <span>{formatDate(createdAt?.seconds * 1000)}</span>
    </div>
  )
}

export default Message