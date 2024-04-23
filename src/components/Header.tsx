import React, { useEffect, useState } from 'react'
import Pipe from './Pipe'
import packageJson from '../../package.json'

export default function Header() {
  const [version, setVersion] = useState('')

  useEffect(() => {
    const discographyVersion = packageJson.dependencies['@tyleretters/discography']
    setVersion(discographyVersion)
  }, [])

  return (
    <div className="header">
      <h1>Discography of Tyler Etters</h1>
      <p>
        <a href="https://github.com/tyleretters/discography-frontend">GitHub</a>
        <Pipe />
        <a href="https://www.npmjs.com/package/@tyleretters/discography">
          {version ? `NPM v${version}` : 'NPM'}
        </a>
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