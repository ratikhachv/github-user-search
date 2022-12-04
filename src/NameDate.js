import React, { useContext } from 'react'
import { Context } from './Context'
import "./nameDate.css"

export default function NameDate() {
    const context = useContext(Context)
  return (
    <div className="name-date">
        <p className="name">{context.userName}</p>
        <p className="date">{context.registerDate}</p>
    </div>  
)
}
