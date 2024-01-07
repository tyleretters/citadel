import React, { useEffect } from 'react'
import Track from './Track'
import Stream from './Stream'
import { Release as ReleaseType, Track as TrackType, Stream as StreamType } from '@tyleretters/discography'
import { formatDate } from '../utils/formatting'
import { getRuntime, secondsToFriendly } from '../utils/calculations'


export default function Release({ release, handleClose }: { release: ReleaseType, handleClose: Function }) {
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
          {release.mp3 && (
            <a href="{release.mp3_url}" className="release-download">Download MP3s</a>
          )}
          {release.wav && (
            <a href="{release.wav_url}" className="release-download">Download WAVs</a>
          )}
          {(release.mp3 || release.wav) && (
            <a className="release-donate" href="https://paypal.me/tyleretters" target="_blank" rel="noopener noreferrer">Donate</a>
          )}
          {release.streams && (<>
            <h3 className="release-subtitle">Streaming</h3>
            <hr/>
            <ul className="release-streams">
            {release.streams.map((stream: StreamType) => (
              <Stream key={stream.id} stream={stream} />
            ))}
            </ul>
          </>)}
          <h3 className="release-subtitle">Other</h3>
          <hr/>
          <ul className="release-stats">
            <li className="stat">Tyler's Role: {release.role}</li>
            <li className="stat">Total Runtime: <span className="monospace">{secondsToFriendly(getRuntime(release))}</span></li>
            <li className="stat">Type: {release.type}</li>
            <li className="stat">Format: {release.format}</li>
            <li className="stat">Label: {release.label}</li>
            <li className="stat">Released: {formatDate(release.released)}</li>
          </ul>
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