import React from 'react'

export default function VerticalLine({color}) {
  return (
    <div className={!color ? "middleLine" : "middleLineW"}></div>
  )
}
