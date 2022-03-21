import React from 'react'
import Messages from './Messages/Messages'
import NewMessages from './NewMessage/NewMessage'

export default function ChatMainWindow() {
  return (
    <div className='messageWindow'>
      <Messages></Messages>
      <NewMessages></NewMessages>
    </div>
  )
}
