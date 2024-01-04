import React, { useEffect } from 'react'
import Release from './Release'
import discography from '@tyleretters/discography'
import { Release as ReleaseType } from '@tyleretters/discography'

function Releases() {
  console.log(discography)
  useEffect(() => {
    const elements = document.querySelectorAll('.releases > div');

    elements.forEach((element, index) => {
      (element as HTMLElement).style.animationDelay = `${index * 0.1}s`;
    });
  }, []);

  return (
    <div className="releases">
      {discography.map((release: ReleaseType) => (
        <Release key={release.id} release={release} />
      ))}
    </div>
  )
} 

export default Releases