import React, { useEffect,useState } from 'react'
import "./Chat.css"
import { Avatar } from '@mui/material'
import { IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';


import { AttachFile, InsertEmoticon, SearchOutlined } from '@mui/icons-material';
import MicIcon from '@mui/icons-material/Mic';

function Chat() {
  const [seed, setSeed] = useState("")
  const [input, setInput] = useState("")

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000))
  }, [])

  const sendMessage = (e) => {
    e.preventDefault()
    console.log("You typed: ", input)
  }

  return (
    <div className='chat'>
      <div className='chat__header'>
        <Avatar src={`https://api.dicebear.com/7.x/avataaars-neutral/svg?seed=${seed}`} /> 

        <div className='chat__headerInfo'>
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>

        <div className='chat__headerRight'>
            <IconButton>
              <SearchOutlined />
            </IconButton>
            <IconButton>
              <AttachFile />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
        </div>
      </div>

      <div className='chat__body'>
        <p className={`chat__message ${true && "chat__reciever"}`}>
          <span className='chat__name'>Tommy Plata</span>
          sdasd
          <span className='chat__timestamp'>3:52pm</span>
        </p>
        <p className='chat__message'>sdasd</p>
      </div>

      <div className='chat__footer'>
        <InsertEmoticon />
        <form>
          <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message" type='text'/>
          <button onClick={sendMessage} type='submit'>Send a message</button>
        </form>
        <MicIcon />
      </div>

    </div>
  )
}

export default Chat