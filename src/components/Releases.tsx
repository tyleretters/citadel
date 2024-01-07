import React, { useEffect, useState } from "react"
import Release from "./Release"
import { Release as ReleaseType } from "@tyleretters/discography"
import discography from "@tyleretters/discography"

export default function Releases({ handleOpen, isReleaseOpen }: { handleOpen: Function, isReleaseOpen: boolean }) {
  const [openReleaseId, setOpenReleaseId] = useState<string|boolean>(false)

  useEffect(() => {
    if (!isReleaseOpen) {
      setOpenReleaseId(false)
    }
  }, [isReleaseOpen])

  function handleClick(release: ReleaseType){
    setOpenReleaseId(openReleaseId === release.id ? false : release.id)
    handleOpen(release)
  }

  return (
    <ul className="releases">
      {discography.map((release) => {
        return (
          <Release
            key={release.id}
            release={release}
            handleClick={handleClick}
            isOpen={openReleaseId === release.id}
          />
        )
      })}
    </ul>
  )
}