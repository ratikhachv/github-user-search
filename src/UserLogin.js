import React, { useContext } from 'react'
import { Context } from './Context'

export default function UserLogin() {
    const context = useContext(Context)
  return (
    <p id='login'>@{context.confirmedLogin}</p>
  )
}
