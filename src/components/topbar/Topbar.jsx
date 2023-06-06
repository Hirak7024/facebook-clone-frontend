import React from 'react'
import './topbar.css'
import { Search,Person, Chat, Notifications } from '@mui/icons-material'

export default function Topbar() {
  return (
    <>
    <div className="topBarContainer">
      <div className="topBarLeft">
        <span className="logo">facebook clone</span>
      </div>
      <div className="topBarCenter">
        <div className="searchBar">
          <Search className='searchIcon' />
          <input placeholder='Search for friends,posts or any video' className="searchInput" />
        </div>
      </div>
      <div className="topBarRight">
        <div className="topBarLinks">
          <span className="topBarLink">Homepage</span>
          <span className="topBarLink">Timeline</span>
        </div>
        <div className="topBarIcons">
          <div className="topBarIconItem">
            <Person />
            <span className="topBarIconBadge">1</span>
          </div>
          <div className="topBarIconItem">
            <Chat />
            <span className="topBarIconBadge">3</span>
          </div>
          <div className="topBarIconItem">
            <Notifications />
            <span className="topBarIconBadge">10</span>
          </div>
        </div>
        <img src="./assets/persons/person1.jpg" alt="" className="topBarImg" />
      </div>
    </div>
    </>
  )
}
