import React from "react"
import { Track as TrackType } from "@tyleretters/discography"

export default function Track({ track, hasMp3, hasWav }: { track: TrackType, hasWav: boolean, hasMp3: boolean }) {
  const length = track.length.replace(/^00:/, '')
  const downloadButtons = []
  if (hasMp3) {
    downloadButtons.push({ url: track?.mp3_url, label: "MP3" })
  }
  if (hasWav) {
    downloadButtons.push({ url: track?.wav_url, label: "WAV" })
  }
  return (
    <li className="track" key={track.id}>
      <span className="track-title" dangerouslySetInnerHTML={{ __html: track.title }} />
      <span className="track-length">{length}</span>
      {/* {hasMp3 && <span className="track-play">&#9658;</span>} */}
      {downloadButtons.map((button, index) => (
        <a key={index} href={button.url} target="_blank" rel="noreferrer" className="track-download">
          {button.label}
        </a>
      ))}
    </li>
  )
}