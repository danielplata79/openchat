import React from 'react'
import "./SidebarChat.css"
import { Avatar } from '@mui/material'

function SidebarChat() {
  return (
    <div className='sidebarChat'>
       <Avatar src="https://api.dicebear.com/7.x/<styleName>/svg" /> 
       <div className='sidebarChat__info'>
         <h2>Room name</h2>
         <p>Last message...</p>
       </div>
    </div>
  )
}

export default SidebarChat