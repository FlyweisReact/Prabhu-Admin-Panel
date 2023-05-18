import React from 'react'
import HOC from '../Layout/HOC'
import Navbar from '../navbar'

const Review = () => {
  return (
    <>
        <Navbar />
        <div className="two-sec-head-2">
        <div className="left">
          <p>Review & Questionnaire</p>
        </div>

        <div className="right">
        
          <button className="addbtn" >
          Questionnaire
          </button>
      
        </div>
      </div>
    </>
   )
}

export default HOC(Review)