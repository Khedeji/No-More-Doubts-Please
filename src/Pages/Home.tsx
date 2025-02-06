import React from 'react'
import '../App.css'
import LeftSideBar from '../Components/LeftSideBar/LeftSideBar.tsx'
import RightSideBar from '../Components/RightSideBar/RightSideBar.tsx'
import HomeMainBar from '../Components/HomeMainBar/HomeMainBar.tsx'

export default function Home() {
  return (
    <div className="home-container-1">
        <LeftSideBar/>
        <div className="home-container-2">
            <HomeMainBar/>
            <RightSideBar/>
        </div>
    </div>
  )
}
