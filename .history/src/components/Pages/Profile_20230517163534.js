import React from 'react'
import HOC from '../Layout/HOC'
import Navbar from '../navbar'
import img from '../'

const Profile = () => {
  return (
    <>
      <Navbar />

        <p className='profileId'>ID-25250002503658</p>

      <div></div>

    </>
  )
}

export default HOC(Profile)