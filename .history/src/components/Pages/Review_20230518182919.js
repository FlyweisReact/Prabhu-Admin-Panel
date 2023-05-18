import React from 'react'
import HOC from '../Layout/HOC'
import Navbar from '../navbar'

const Review = () => {
  return (
    <>
        <Navbar />
        <div className="two-sec-head-2">
        <div className="left">
          <p>Manage Webinar</p>
        </div>

        <div className="right">
        
          <button className="addbtn" onClick={() => navigate('/add')}>
            <i className="fa-solid fa-plus"></i>Add New Webinar
          </button>
      
        </div>
      </div>
    </>
   )
}

export default HOC(Review)