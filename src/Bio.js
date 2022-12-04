import React, { useContext } from 'react'
import { Context } from './Context'
import "./bio.css"

export default function Bio() {
    const context = useContext(Context)
  return (
    <>
    {context.bio != null ? <div className='bio'>{context.bio} </div> : <div className="bio">This profile has no bio</div> }
    </>
  )
}
