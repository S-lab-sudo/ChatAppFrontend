import React from 'react'
import ShowChat from './ShowChat/ShowChat'

export default function RightBox({chatSelection}) {
  return (
    <div className='chatHomeRightBox centeredDiv'>
      {!chatSelection? <div>Select chat to see conversation</div>: <ShowChat/> }
    </div>
  )
}
