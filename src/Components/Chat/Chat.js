import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import React, { useState } from 'react'
import './Chat.css'
import axios from '../../axios.js'

const Chat = ({ messages }) => {

    const [input, setInput] = useState('');

    const sendMessage = async (e) => {
        e.preventDefault();

        axios.post('/messages/new', {
            message: input,
            name: "demo app",
            timestamp: "just now!",
            received:false
        });

        setInput('');
    }

    return (
        <>

            <div className="chat">

                <div className="chat__header">
                    <Avatar />

                    <div className="chat__headerInfo">
                        <h3>Room name</h3>
                        <p>Last seen at...</p>
                    </div>

                    <div className="chat__headerRight">

                        <IconButton >
                            <SearchOutlined />
                        </IconButton>
                        <IconButton >
                            <AttachFile />
                        </IconButton>
                        <IconButton >
                            <MoreVert />
                        </IconButton>

                    </div>

                </div>

                <div className="chat__body">

                    {messages.map(message =>
                        <p className={`chat__message ${!message.received && "chat__reciever"}`}>
                            <span className="chat__name">{message.name}</span>
                            {message.message}

                            <span className="chat__timestamp">
                                {message.timestamp}
                            </span>

                        </p>
                    )}

                    {/* <p className={`chat__message `}>
                        <span className="chat__name">name</span>
                        body
                        <span className="chat__timestamp">
                            time                            </span>

                    </p> */}

                </div>

                <div className="chat__footer">
                    <InsertEmoticon />

                    <form >
                        <input
                            placeholder='Type a message'
                            type="text"
                            value={input}
                            onChange={e => setInput(e.target.value)}
                        />
                        <button onClick={sendMessage} type='submit'>Send a message</button>
                    </form>
                    <Mic />
                </div>

            </div>

        </>
    )
}

export default Chat