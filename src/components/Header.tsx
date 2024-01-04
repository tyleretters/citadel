import React from 'react'
import Pipe from './Pipe'

function Header() {
  return (
    <div className="header">
      <h1>The Discography of Tyler Etters</h1>
      <p>
        <Pipe className="d-none d-md-inline-block" />
        <a href="https://paypal.me/tyleretters">Donate</a>
        <Pipe />
        <a href="https://github.com/tyleretters/citadel">GitHub</a>
        <Pipe />
        <a href="https://www.npmjs.com/package/@tyleretters/discography">NPM</a>
        <Pipe />
        <a href="https://nor.the-rn.info">Blog</a>
        <Pipe />
        <a href="https://nor.the-rn.info/about">About</a>
      </p>
    </div>
  )
}

export default Header