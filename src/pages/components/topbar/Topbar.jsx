import { Chat, Notifications, Search } from '@mui/icons-material'
import React from 'react'
import "./Topbar.css";

export default function Topbar() {
  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <span className='logo'>Personal SNS</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className='searchIcon' style={{ fontSize: 20 }} />
          <input type="text" className='searchInput' placeholder='探し物はなんですか' />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarItemIcons">
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">2</span>
          </div>
          <img src="/assets/person/1.jpeg" alt="" className='topbarImg' />
        </div>
      </div>
    </div>
  )
}
