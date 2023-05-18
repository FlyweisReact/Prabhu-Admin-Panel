import React from 'react'
import HOC from '../Layout/HOC'
import Navbar from '../navbar'

const ManageWebinar = () => {
  return (
    <>
        <Navbar />
        <div className="two-sec-head-2">
        <p>Manage Webinar</p>

            <div></div>

      </div>
    </>
  )
}

export default HOC(ManageWebinar)