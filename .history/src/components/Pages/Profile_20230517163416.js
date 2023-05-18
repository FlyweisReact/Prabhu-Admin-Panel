import React from 'react'
import HOC from '../Layout/HOC'
import Navbar from '../navbar'

const Profile = () => {
  return (
    <>
      <Navbar />

        <p className='profileId'>ID-25250002503658</p>

    </>
  )
}

export default HOC(Profile)