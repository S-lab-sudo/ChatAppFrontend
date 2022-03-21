import React from 'react'
import TopButtons from './TopButtons/TopButtons'
import ChatMainWindow from './ChatMainWindow/ChatMainWindow'

export default function ShowChat() {
  return (
    <div className='rightBoxContainer' >
        <TopButtons></TopButtons>
        <ChatMainWindow></ChatMainWindow>
    </div>
  )
}
