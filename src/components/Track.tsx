import React from 'react'
import { Track as TrackType } from '@tyleretters/discography'

function Track({track, hasMp3, hasWav}: { track: TrackType, hasWav: boolean, hasMp3: boolean }) {
  const downloadButtons = []
  if (hasMp3) {
    downloadButtons.push({ url: track?.mp3_url, label: 'MP3' })
  }
  if (hasWav) {
    downloadButtons.push({ url: track?.wav_url, label: 'WAV' })
  }
  return (
    <li className="track" key={track.id}>
      <span className="track-title">{track.title}</span>
      <span className="track-length">{track.length}</span>
      {downloadButtons.map((button, index) => (
        <span key={index} className="track-download">
          <a href={button.url} target="_blank" rel="noreferrer">
            {button.label}
          </a>
        </span>
      ))}
    </li>
  )
}

export default Track