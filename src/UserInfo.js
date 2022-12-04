import React from 'react'
import { useContext } from 'react'
import Bio from './Bio'
import { Context } from './Context'
import Followers from './Followers'
import Footer from './Footer'
import NameDate from './NameDate'
import UserAvatar from './UserAvatar'
import "./userInfo.css"
import UserLogin from './UserLogin'

export default function UserInfo() {
  const context = useContext(Context)
  return (
    <>
    {context.bgChangeActive ? 
    <div className='user-info'>
        <UserAvatar/>
        <div className="user-info-main">
            <NameDate/>
            <UserLogin/>
            <Bio/>
            <Followers/>
            <Footer/>
        </div>
    </div>
    :
    <div className='user-info' id='active'>
        <UserAvatar/>
        <div className="user-info-main">
            <NameDate/>
            <UserLogin/>
            <Bio/>
            <Followers/>
            <Footer/>
        </div>
    </div>
  }
    </>
    
  )
}
