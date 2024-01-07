import React from "react"

export default function Pipe({ className }: { className?: string }) {
  const pipeClassName = className ? `pipe ${className}` : "pipe"
  return <span className={pipeClassName}> | </span>
}