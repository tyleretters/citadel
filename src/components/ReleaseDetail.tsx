import React, { useEffect } from 'react'
import Track from './Track'
import { Release as ReleaseType, Track as TrackType } from '@tyleretters/discography'
import { formatDate } from '../utils/formatting'

function Release({ release, handleClose }: { release: ReleaseType, handleClose: Function }) {

  useEffect(() => {
    if (release) {
      console.log('changed!')
      console.log(release)
    }
  }, [release]);

   return (
    <div className="release-detail">
      <div className="release-close" onClick={() => handleClose()}>&times;</div>
      <h1 className="release-title">{release.title}</h1>
      <h2 className="release-project">{release.project}</h2>
      <h3 className="release-subtitle">{formatDate(release.released)}</h3>
      <div className="row">
        <div className="column">
          <img className="release-cover" src={release.cover_url} alt={release.title} />
          <h3 className="release-subtitle">Tracklist</h3>
          <hr/>
          <ol className="release-tracks">
          {release.tracks.map((track: TrackType) => (
            <Track key={track.id} track={track} hasWav={release.wav} hasMp3={release.mp3} />
          ))}
          </ol>
        </div>
        <div className="column">
          <h3 className="release-subtitle">Notes</h3>
          <hr/>
          <div className="release-notes-html" dangerouslySetInnerHTML={{ __html: release.notes }} />
          <h3 className="release-subtitle">Credits</h3>
          <hr/>
          <div className="release-credits-html" dangerouslySetInnerHTML={{ __html: release.credits }} />
        </div>
      </div>
    </div>
  )
}

export default Release