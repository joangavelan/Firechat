import React from 'react'
import Logo from './Logo'
import SignOut from './SignOut'
import './Nav.scss'

const Nav = () => {
  return (
    <div className="Nav">
      <Logo sm={true}/>
      <SignOut />
    </div>
  )
}

export default Nav