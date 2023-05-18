import React from 'react'
import HOC from '../Layout/HOC'
import Navbar from '../navbar'

const Review = () => {
  return (
    <>
        <Navbar />
        <div className="two-sec-head">
        <p>Review & Questionnaire</p>

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