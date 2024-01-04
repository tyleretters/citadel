import React from "react"
import { Track as TrackType } from "@tyleretters/discography"
import Pipe from "./Pipe"

function Track({track, hasMp3, hasWav}: { track: TrackType, hasWav: boolean, hasMp3: boolean }) {
  const downloadButtons = []
  if (hasMp3) {
    downloadButtons.push({ url: track?.mp3_url, label: "Download MP3" })
  }
  if (hasWav) {
    downloadButtons.push({ url: track?.wav_url, label: "Download WAV" })
  }
  return (
    <li className="track" key={track.id}>
      <span className="track-title">{track.title}</span>
      <Pipe />
      <span className="track-length">{track.length}</span>
      {/* {hasMp3 && <span className="track-play">&#9658;</span>} */}
      { hasMp3 || hasWav ? <Pipe /> : null }
      {downloadButtons.map((button, index) => (
        <a key={index} href={button.url} target="_blank" rel="noreferrer" className="track-download">
          {button.label}
        </a>
      ))}
    </li>
  )
}

export default Track