import React, { Component } from 'react'

import logo from '../assets/logo.png'
import userLogo from '../assets/user-logo.png'

class Header extends Component {
  render() {
    return (
      <header>
        <img id="logo" src={logo}/>
        <strong>Meu Perfil</strong>
        <img id="user-logo" src={userLogo} />
      </header>
    )
  }
}

export default Header