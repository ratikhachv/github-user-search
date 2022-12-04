import React, { useContext } from 'react'
import { Context } from './Context'
import "./userAvatar.css"

export default function UserAvatar() {
    const context = useContext(Context)
    return (
        <div className='avatar-div'>
            <img src={context.avatarUrl} alt="" />
        </div>
    )
}
