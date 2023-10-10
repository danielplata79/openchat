import React, { useEffect,useState } from 'react'
import "./Chat.css"
import { Avatar } from '@mui/material'
import { IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { AttachFile, SearchOutlined } from '@mui/icons-material';

function Chat() {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000))
  }, [])

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
        <p className='chat__message chat__reciever'>
          <span className='chat__name'>Tommy Plata</span>
          sdasd
          <span className='chat_timestamp'>3:52pm</span>
        </p>
        <p className='chat__message'>sdasd</p>
      </div>

    </div>
  )
}

export default Chat