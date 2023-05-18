import React from 'react'
import HOC from '../Layout/HOC'
import Navbar from '../navbar'

const AddQues = () => {
  return (
    <>
        <Navbar />
        <div className="two-sec-head">
        <p>Review & Questionnaire</p>
      </div>

    </>
  )
}

export default HOC(AddQues)