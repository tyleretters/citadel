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
      {/* {hasMp3 && <span className="track-play">&#9658;</span>} */}
      {downloadButtons.map((button, index) => (
        <a key={index} href={button.url} target="_blank" rel="noreferrer" className="track-download">
          {button.label}
        </a>
      ))}
    </li>
  )
}

export default Track