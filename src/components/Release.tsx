import React from "react"
import { Release as ReleaseType } from "@tyleretters/discography"
import { formatDate } from "../utils/formatting"

function Release({ release, handleClick, isOpen }: { release: ReleaseType, handleClick: Function, isOpen: boolean }) {
  return (
    <li
      className={"release" + (isOpen ? " open" : "")}
      id={release.id}
      onClick={() => handleClick(release)}
    >
      <img className="release-cover" src={release.cover_url} alt={release.title} />
      <h1 className="release-title">{release.title}</h1>
      <h2 className="release-project">{release.project}</h2>
      <h3 className="release-date">{formatDate(release.released)}</h3>
    </li>
  )
}

export default Release