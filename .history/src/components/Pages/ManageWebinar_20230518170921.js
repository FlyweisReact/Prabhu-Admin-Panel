import React from 'react'
import HOC from '../Layout/HOC'
import Navbar from '../navbar'

const ManageWebinar = () => {
  return (
    <>
        <Navbar />
        <div className="two-sec-head">
        <p>Suggest Webinar Topic</p>
        <button onClick={() => setModalShow(true)}>
          <i className="fa-solid fa-plus"></i>Add Webinar Topic
        </button>
      </div>
    </>
  )
}

export default HOC(ManageWebinar)