import React from 'react'
import close from './close.png'
import trash from './trash.png'
import call from './phone.png'
import blockUser from './blockUser.png'
import mediaFiles from './mediaFiles.png'

export default function TopButtons() {
  return (
    <div className='chatButtons' >
      <div className="call">
        <img src={call} alt="Call Icon" />
      </div>
      <div className="mediaFiles">
        <img src={mediaFiles} alt="media files Icon" />
      </div>
      <div className="blockUser">
        <img src={blockUser} alt="block user Icon" />
      </div>
      <div className="deleteChat">
        <img src={trash} alt="delete chat Icon" />
      </div>
      <div className="closeChat">
        <img src={close} alt="close chat Icon" />
      </div>
    </div>
  )
}
