import React  from 'react'
import Avatar from '@mui/material/Avatar';
import { IconButton } from '@mui/material';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Sidebar.css'
import SidebarChat from './SidebarChat';
import { SearchOutlined } from '@mui/icons-material';

function Sidebar(  ) {



  return (
    <div className='sidebar'>
        <div className='sidebar__header'>
          <Avatar />
          <div className='sidebar__headerRight'>
           <IconButton>
              <DonutLargeIcon />
            </IconButton>
            <IconButton>
              <ChatIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div> 
        </div>

        <div className='sidebar__search'>
          <div className='sidebar__searchContainer'>
            <SearchOutlined />
            <input placeholder='Search or start new chat' type="text" />
          </div>
        </div>

        <div className='sidebar__chats'>
          <SidebarChat addNewChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
        </div>
    </div>
  )
}

export default Sidebar