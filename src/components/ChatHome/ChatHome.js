import React, { useState } from 'react'
import './ChatHome.css'
import LeftBox from './components/LeftBox/LeftBox'
import RightBox from './components/RightBox/RightBox'
import VerticalLine from '../VerticalLine/VerticalLine'

export default function ChatHome() {
  const [chatSelection, setChatSelection] = useState(true)
  return (
    <div className="main centeredDiv">
      <div className='chatWindowHolder' >
        <LeftBox setChatSelection={setChatSelection}  />
        <VerticalLine color="w" />
        <RightBox chatSelection={chatSelection} />
      </div>
    </div>
  )
}
