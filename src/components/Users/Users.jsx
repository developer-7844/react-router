import React from 'react'
import { useParams } from 'react-router-dom'
export const Users = () => {
    const {userid} = useParams()
  return (
    <div>Users:{userid} </div>
  )
}
