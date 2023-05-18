import React from 'react'
import HOC from '../Layout/HOC'
import Navbar from '../navbar'

const Review = () => {
  return (
    <>
        <Navbar />
        <div className="two-sec-head">
        <p>Review & Questionnaire</p>

        <button className="addbtn" style={{textAlign : 'center'}} >
          Questionnaire
          </button>
      </div>
    </>
   )
}

export default HOC(Review)