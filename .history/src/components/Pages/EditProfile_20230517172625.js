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

                <div className='two-sec'>
                    <div>
                        <label>First Name</label>
                        <input type='text' />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type='text' />
                    </div>
                </div>

                <div className='two-sec'>
                    <div>
                        <label>Mobile Number</label>
                        <input type='text' />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type='text' />
                    </div>
                </div>


                <div className=''></div>

            </div>

        </div>  

    </>
  )
}

export default HOC(EditProfile)