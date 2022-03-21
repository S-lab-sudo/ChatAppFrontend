import React from 'react'
import image from '../../../../../LandingPage/logo.png'

export default function SingleChat({value}) {
  return (
    <div className='singleChatHolder' >
        <div className="chatImg">
            <img src={image} alt="" />
        </div>
        <div className="chatNameMessage">
            <div className="chatName"> <b> {value.username} </b> </div>
            <div className="chatMessage">{value.lastMessage}</div>
        </div>
    </div>
  )
}
