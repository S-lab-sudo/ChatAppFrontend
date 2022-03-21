import React from 'react'
import SearchBar from './SearchBar/SearchBar'
import Chats from './Chats/Chats'

export default function LeftBox() {
  return (
    <div className='chatHomeLeftBox'>
      <SearchBar/>
      <Chats/>
    </div>
  )
}
