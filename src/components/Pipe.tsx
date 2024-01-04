import React from 'react'

function Pipe({ className }: { className?: string }) {
  let pipeClassName= 'pipe'
  pipeClassName = className ? `${pipeClassName} ${className}` : pipeClassName
  return <span className={pipeClassName}>&nbsp;|&nbsp;</span>
}

export default Pipe