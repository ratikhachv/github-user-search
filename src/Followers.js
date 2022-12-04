import React, { useContext } from 'react'
import { Context } from './Context'
import "./followers.css"

export default function Followers () {
    const context = useContext(Context)
  return (
    <div className='followers-div'>
        <div className='repos'>
            <h3>repos</h3>
            <p>{context.repos}</p>
        </div>
        <div className='followers'>
            <h3>followers</h3>
            <p>{context.followers}</p>
        </div>
        <div className='following'>
            <h3>following</h3>
            <p>{context.following}</p>
        </div>
    </div>
  )
}
