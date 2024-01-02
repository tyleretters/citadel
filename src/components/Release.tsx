import React from 'react'
import { Release as ReleaseType } from '@tyleretters/discography'

function Release(data: { data: ReleaseType }) {
  const release = data.data // todo
  const bucket = 'https://intertext.s3.us-west-1.amazonaws.com/'
  const project_slug = release.project_slug
  const release_slug = release.release_slug
  const imgSrc = `${bucket}${project_slug}/${release.release_slug}/${release_slug}.jpg`
  return (
    <div className="release">
      <h1>{ release.title }<span>{ release.released }</span></h1>
      <img src={ imgSrc } alt={ release.title } />
      <p>By: { release.project }</p>
      <ol>
      { release.tracks.map((track, i) => (
        <li key={i}>{ track.title } <span>{ track.length }</span></li>
      )) }
      </ol>
    </div>
  )
}

export default Release