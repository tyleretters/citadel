import React, { useEffect } from 'react'
import Release from './Release'
import discography from '@tyleretters/discography'
import { Release as ReleaseType } from '@tyleretters/discography'

function Releases() {
  let visited = false
  useEffect(() => {
    if (visited) return
    console.log(discography)
    visited = true
  }, []);
  function openEvent(){
    // close all other releases
    console.log('left off here')
  }
  return (
    <div className="releases">
      {discography.map((release: ReleaseType) => (
        <Release
          key={release.id}
          release={release}
          openEvent={openEvent}
        />
      ))}
    </div>
  )
} 

export default Releases