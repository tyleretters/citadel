import React from "react"

function Pipe({ className }: { className?: string }) {
  const pipeClassName = className ? `pipe ${className}` : "pipe"
  return <span className={pipeClassName}> | </span>
}

export default Pipe