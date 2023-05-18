import React from 'react'
import HOC from '../Layout/HOC'
import Navbar from '../navbar'

const ManageWebinar = () => {
  return (
    <>
        <Navbar />
        <div className="two-sec-head">
        <p>Manage Webinar</p>
        <div>
        {/* <p></p> */}
        <button >
          <i className="fa-solid fa-plus"></i>Add New Webinar
        </button>
        </div>
      </div>
    </>
  )
}

export default HOC(ManageWebinar)