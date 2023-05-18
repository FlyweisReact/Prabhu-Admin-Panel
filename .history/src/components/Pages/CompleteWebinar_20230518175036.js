import React from 'react'
import HOC from '../Layout/HOC'
import Navbar from '../navbar'

const CompleteWebinar = () => {
  return (
    <>
        <Navbar />

        <div className="two-sec-head-2">
        <div className="left">
          <p>Completed Webinar</p>
        </div>
      </div>

      
    </>
  )
}

export default HOC(CompleteWebinar)