import React from 'react'
import HOC from '../Layout/HOC'
import Navbar from '../navbar'

const Webinar = () => {
  return (
    <>
        <Navbar />

        <div className="two-sec-head">
        <p>Dashboard</p>
        <button >
          
          <i className="fa-solid fa-plus"></i>Add New Course
        </button>
      </div>
    </>
  )
}

export default HOC(Webinar)