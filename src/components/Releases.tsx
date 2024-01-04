import React, { useEffect, useState } from "react"
import Release from "./Release"
import discography from "@tyleretters/discography"
import { Release as ReleaseType } from "@tyleretters/discography"

function Releases() {
  const [openRelease, setOpenRelease] = useState<string|boolean>(false)

  useEffect(() => {
    console.log(discography)
  }, []);

  function openEvent(releaseId: string){
    // open this release
    setOpenRelease(releaseId)
    console.log("opening " + releaseId)
  }

  function closeEvent(releaseId: string){
    // close all other releases
    console.log("closing " + openRelease)
    setOpenRelease(false)
  }

  return (
    <ul className="releases">
      {discography.map((release: ReleaseType) => {
        return (
          <Release
            key={release.id}
            release={release}
            openEvent={openEvent}
            closeEvent={closeEvent}
          />
        )
      })}
    </ul>
  )
} 

export default Releases