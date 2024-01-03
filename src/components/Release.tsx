import React from 'react'
import Track from './Track'
import { Release as ReleaseType, Track as TrackType } from '@tyleretters/discography'
import { formatDate } from '../utils/formatting'

function Release({ release }: { release: ReleaseType }) {
  return (
    <div className="release">
      <img src={release.cover_url} alt={release.title} />
      <h1>{release.title}</h1>
      <h2>{release.project}</h2>
      <h3>{formatDate(release.released)}</h3>
      {/* <ol>
      {release.tracks.map((track: TrackType) => (
        <Track key={track.id} track={track} hasWav={release.wav} hasMp3={release.mp3} />
      ))}
      </ol> */}
    </div>
  )
}

export default Release