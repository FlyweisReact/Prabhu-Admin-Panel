import React from 'react'
import HOC from '../Layout/HOC'
import Navbar from '../navbar'

const ManageWebinar = () => {
  return (
    <>
        <Navbar />
        <div className="two-sec-head">
        <p>Manage Webinar</p>
       Rescheduled Event
        <button >
          <i className="fa-solid fa-plus"></i>Add New Webinar
        </button>
      </div>
    </>
  )
}

export default HOC(ManageWebinar)