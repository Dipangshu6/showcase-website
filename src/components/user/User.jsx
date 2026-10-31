import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  const {userid} = useParams()
  return (
    <div className='bg-gray-400 text-2xl flex justify-center text-white p-4'>User:{userid}</div>
  )
}

export default User