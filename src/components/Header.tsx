import React from 'react'
import Pipe from './Pipe'

function Header() {
  return (
    <div className="header">
      <p>
        The Discography of Tyler Etters
        <Pipe />
        <a href="https://paypal.me/tyleretters">Donate</a>
        <Pipe />
        <a href="https://github.com/tyleretters/citadel">GitHub</a>
        <Pipe />
        <a href="https://www.npmjs.com/package/@tyleretters/discography">NPM</a>
        <Pipe />
        <a href="https://nor.the-rn.info">Blog</a>
      </p>
    </div>
  )
}

export default Header