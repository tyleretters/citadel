import React, { useState } from 'react'
import Track from './Track'
import { Release as ReleaseType, Track as TrackType } from '@tyleretters/discography'
import { formatDate } from '../utils/formatting'

function Release({ release }: { release: ReleaseType }) {
  const [isOpen, setIsOpen] = useState(false)

  function handleOpen(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (!isOpen) {
      event.preventDefault()
      setIsOpen(true)
    }
  }

  function handleClose() {
    setIsOpen(false)
  }

  const releaseClass = isOpen ? 'release open' : 'release';

  return (
    <div className={releaseClass} id={release.id} onClick={handleOpen}>
      <div className="release-close" onClick={handleClose}>&times;</div>
      <div className="left">
        <img src={release.cover_url} alt={release.title} />
        <h1 className="release-title">{release.title}</h1>
        <h2 className="release-project">{release.project}</h2>
        <h3 className="release-date">{formatDate(release.released)}</h3>
        <ol>
        {release.tracks.map((track: TrackType) => (
          <Track key={track.id} track={track} hasWav={release.wav} hasMp3={release.mp3} />
        ))}
        </ol>
      </div>
      <div className="right">
        <h1 className="release-title">{release.title}</h1>
        <h2 className="release-project">{release.project}</h2>
        <h3 className="release-date">{formatDate(release.released)}</h3>
        <hr/>
        <div className="release-notes" dangerouslySetInnerHTML={{ __html: release.notes }} />
        <h3 className="release-credits">Credits</h3>
        <hr/>
        <div className="release-credits" dangerouslySetInnerHTML={{ __html: release.credits }} />
      </div>
    </div>
  )
}

export default Release