import React, { Component } from 'react'

import logo from '../assets/logo.png'

function Header() {
  return (
    <header>
      <nav>
        <img src={logo}/>
        <div>
          <span>Meu Perfil</span>
          <i className="material-icons">account_circle</i>
        </div>
      </nav>
    </header>
  )
}

export default Header