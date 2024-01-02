import React from 'react'
import Release from './Release'
import discography from '@tyleretters/discography'
import { Release as ReleaseType } from '@tyleretters/discography'

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