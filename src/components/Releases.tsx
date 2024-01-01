import React from 'react'
import discogrpahy from '@tyleretters/discography/dist/data.json'
console.log(discogrpahy)

function Releases() {
  return (
    <div className="releases">
      <h2>Releases</h2>
      <p>There are {discogrpahy.length} releases.</p>
    </div>
  )
} 

export default Releases