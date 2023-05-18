import React from 'react'
import HOC from '../Layout/HOC'
import Navbar from '../navbar'

const CompleteWebinar = () => {
  return (
    <>
        <Navbar />

        <div className="two-sec-head-2">
        <div className="left">
          <p>Manage Webinar</p>
        </div>

        <div className="right">
          <p className="specialText" >
            Rescheduled Event
          </p>
          <button className="addbtn" onClick={() => navigate('/add')}>
            <i className="fa-solid fa-plus"></i>Add New Webinar
          </button>
          <div className="filter">
            <i class="fa-solid fa-filter"></i>
            <p>Filter</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default HOC(CompleteWebinar)