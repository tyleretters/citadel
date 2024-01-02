import React from 'react'
import type { ReleaseType } from '../types'

function Release(data: { data: ReleaseType }) {
  const release = data.data // todo
  return (
    <div className="release">
      <h1>{ release.title }<span>{ release.released }</span></h1>
      <p>By: { release.project }</p>
      <ol>
      { release.tracks.map((track, i) => (
        <li key={i}>{ track.title } <span>{ track.length }</span></li>
      )) }
      </ol>
    </div>
  )
}

export default Release