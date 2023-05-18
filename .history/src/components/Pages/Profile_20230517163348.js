import React from 'react'
import HOC from '../Layout/HOC'
import Navbar from '../navbar'

const Profile = () => {
  return (
    <>
      <Navbar />

      <div className='profileId'>
        <p>ID-25250002503658</p>
      </div>

    </>
  )
}

export default HOC(Profile)