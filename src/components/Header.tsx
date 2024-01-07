import React from "react"
import Pipe from "./Pipe"

export default function Header() {
  return (
    <div className="header">
      <h1>Discography of Tyler Etters</h1>
      <p>
        <a href="https://github.com/tyleretters/discography-frontend">GitHub</a>
        <Pipe />
        <a href="https://www.npmjs.com/package/@tyleretters/discography">NPM</a>
        <Pipe />
        <a href="https://paypal.me/tyleretters">Donate</a>
        <Pipe />
        <a href="https://nor.the-rn.info">Blog</a>
        <Pipe />
        <a href="https://nor.the-rn.info/about">About</a>
      </p>
    </div>
  )
}