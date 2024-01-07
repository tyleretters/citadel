import React from "react"
import Pipe from "./Pipe"

export default function Footer() {
  return (
    <div className="Footer">
      <p>
        <a href="https://intertext.bandcamp.com">Intertext</a>
        <Pipe/>
        <a href="https://nor.the-rn.info">Northern Information</a> 
        <Pipe/>
        2006&nbsp;&mdash;&nbsp;{new Date().getFullYear()}
      </p>
    </div>
  )
}