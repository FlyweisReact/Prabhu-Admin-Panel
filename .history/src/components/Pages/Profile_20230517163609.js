import React from 'react'
import HOC from '../Layout/HOC'
import Navbar from '../navbar'
import img from '../../Images/e1.png'

const Profile = () => {
  return (
    <>
      <Navbar />

        <p className='profileId'>ID-25250002503658</p>

      <div>
        <img src={img} alt='' />
      </div>

    </>
  )
}

export default HOC(Profile)