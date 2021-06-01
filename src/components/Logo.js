import React from 'react'
import './Logo.scss'

const Logo = ({sm}) => {
  return (
    <div className={`Logo ${sm && 'sm'}`}>
      <img src="images/firebase-logo.png" alt="firebase logo"/>
      <h1>Firechat</h1>
    </div>
  )
}

export default Logo