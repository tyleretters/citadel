import React from 'react'
import Track from './Track'
import { Release as ReleaseType, Track as TrackType } from '@tyleretters/discography'

function Release({ release }: { release: ReleaseType }) {
  return (
    <div className="release">
      <h1>{release.title}<span>{release.released}</span></h1>
      <img src={release.cover_url} alt={release.title} />
      <p>By: {release.project}</p>
      <ol>
      {release.tracks.map((track: TrackType) => (
        <Track key={track.id} track={track} hasWav={release.wav} hasMp3={release.mp3} />
      ))}
      </ol>
    </div>
  )
}

export default Release