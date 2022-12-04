import React from 'react'
import { useContext } from 'react'
import "./container.css"
import { Context } from './Context'
import Header from './Header'
import Search from './Search'
import UserInfo from './UserInfo'

export default function Container() {
  const context = useContext(Context)
  return (
    <>
    {context.bgChangeActive ? 
    <div className="desktop">
      <div className="container">
          <Header/>
          <Search/>
          <UserInfo/>
      </div>
    </div>
  : 
    <div className="desktop-active">
      <div className="container">
        <Header/>
        <Search/>
        <UserInfo/>
      </div>
    </div>}
    </>
    
    
  )
}
