import React, { useState } from 'react'
import send from './send.png'

export default function NewMessage() {
    const [text, setText] = useState('')
    return (
        <div className='newMessage' >
            <div className="messageInput centeredDiv">
                <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="New Message..." />
            </div>
            <div className="sendButton">
                <img src={send} alt="sendButton" />
            </div>
        </div>
    )
}
