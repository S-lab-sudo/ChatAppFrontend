import React from 'react'
import SingleChat from './SingleChat/SingleChat'

export default function Chats() {
    let chat = [{ username: 'santosh', lastMessage: 'This is last' }, { username: 'kkk', lastMessage: 'This is kjbjkbljnl' }]
    return (
        <div className="chatsHolder">
            {chat.map((value, index) => {
                return (
                    <div  key={index}>
                        <SingleChat value={value} />
                        <hr />
                    </div>
                );
            })}
        </div>
    )
}
