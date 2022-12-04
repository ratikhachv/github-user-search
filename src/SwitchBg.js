import React from 'react'
import { useContext } from 'react'
import { Context } from './Context'
import "./switchBg.css"

export default function SwitchBg() {
  const context = useContext(Context)
  return (
    <div className="switch-bg">
        {context.bgChangeActive ?  <span className='light'>{context.color}</span> : <span className='text-active'>{context.color}</span>}
        <img onClick={()=>{context.checkActive(); context.changeBg()}} src={context.bgChangeIconSrc} alt="" />
    </div>
  )
}
