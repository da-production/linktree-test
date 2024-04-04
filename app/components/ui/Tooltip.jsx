import React from 'react'

function Tooltip({position,title,open,...props}) {
  return (
    <div className={`${position} tooltip ${open && 'active'}`} {...props}>{title}</div>
  )
}

export default Tooltip