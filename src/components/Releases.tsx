import React from 'react'
import Release from './Release'
import discography from '@tyleretters/discography'
import { Release as ReleaseType } from '@tyleretters/discography'

function Releases() {
  console.log(discography)
  return (
    <div className="releases">
      {discography.map((release: ReleaseType) => (
        <Release key={release.id} release={release} />
      ))}
    </div>
  )
} 

export default Releases