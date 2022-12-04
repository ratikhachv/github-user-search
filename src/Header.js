import React from 'react'
import SwitchBg from './SwitchBg'
import "./header.css"
import { useContext } from 'react'
import { Context } from './Context'

export default function Header() {
  const context = useContext(Context)
  return (
    <header>
      {context.bgChangeActive ? <p>devfinder</p> : <p className='text-active'>devfinder</p>}
        <SwitchBg/>
    </header>
  )
}
