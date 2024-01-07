import React from "react"
import { Stream as StreamType } from "@tyleretters/discography"

export default function Stream({stream}: { stream: StreamType }) {
  return (
    <li className="stream">
      <a href={stream.url} target="_blank" rel="noopener noreferrer">{stream.platform}</a>
    </li>
  )
}
