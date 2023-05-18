import React from 'react'
import HOC from '../Layout/HOC'
import Navbar from '../navbar'
import img from '../../Images2/e1.png'

const EditProfile = () => {
  return (
    <>
        <Navbar />

        <div className='edit-profile'>
            
            <div className='left'>
                <p>Profile</p>
                <img src={img} alt='' />
                <p>Lorem Ipsum <br /> Instructor</p>
            </div>

            <div className='right'>
                <p>basic Info</p>
                <br />

                <div className='two-sec'></div>
            </div>

        </div>  

    </>
  )
}

export default HOC(EditProfile)