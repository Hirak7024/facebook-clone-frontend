import React from 'react'
import './homepage.css'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import RightBar from '../../components/rightbar/RightBar'

export default function HomePage() {
  return (
    <>
      <div className="homeMainConatiner">
        < Topbar />
        <div className="homeContainer">
          <Sidebar />
          <Feed />
          <RightBar />
        </div>
      </div>
    </>
  )
}
