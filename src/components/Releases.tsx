import React from 'react'
import Release from './Release'
import type { ReleaseType } from '../types'
import discography from '@tyleretters/discography/dist/data.json'

function Releases() {
  return (
    <div className="releases">
      {discography.map((data: ReleaseType) => (
        <Release key={data.id} data={data} />
      ))}
    </div>
  )
} 

export default Releases