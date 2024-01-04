import React, { useState } from "react"
import { Release as ReleaseType } from "@tyleretters/discography"
import { formatDate } from "../utils/formatting"

function Release({ release, openEvent, closeEvent }: { release: ReleaseType, openEvent: Function, closeEvent: Function }) {
  const [isOpen, setIsOpen] = useState(false)

  function handleClick() {
    if (!isOpen) {
      openEvent(release.id)
      setIsOpen(true)
    } else {
      closeEvent(release.id)
      setIsOpen(false)
    }
  }

  return (
    <li
      className={"release" + (isOpen ? " open" : "")}
      id={release.id}
      onClick={handleClick}
    >
      <img className="release-cover" src={release.cover_url} alt={release.title} />
      <h1 className="release-title">{release.title}</h1>
      <h2 className="release-project">{release.project}</h2>
      <h3 className="release-date">{formatDate(release.released)}</h3>
    </li>
  )
}

export default Release