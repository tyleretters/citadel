import React, { useState } from 'react'
import Track from './Track'
import { Release as ReleaseType, Track as TrackType } from '@tyleretters/discography'
import { formatDate } from '../utils/formatting'

function Release({ release, openEvent }: { release: ReleaseType, openEvent: Function }) {
  const [isOpen, setIsOpen] = useState(false)

  function handleOpen() {
    if (!isOpen) {
      openEvent()
      setIsOpen(true)
      // todo: refactor the following after filtering is built
      window.scrollTo(0, 0)
      const releases = document.querySelector('.releases')
      const thisRelease = document.getElementById(release.id)
      if (releases && thisRelease) {
        releases.prepend(thisRelease)
      }
    }
  }

  function handleClose() {
    if (isOpen) {
      setIsOpen(false)
    }
  }

  return (
    <div
      className={'release' + (isOpen ? ' open' : '')}
      id={release.id}
      onClick={handleOpen}
    >
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