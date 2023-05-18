import React from 'react'
import HOC from '../Layout/HOC'
import Navbar from '../navbar'

const AddQues = () => {
  return (
    <>
        <Navbar />
        <div className="two-sec-head">
        <p>Review & Questionnaire</p>

        <button className="addbtn2" style={{ textAlign: "center" }}
        onClick={() => navigate('/add-ques')}
        >
          Questionnaire
        </button>
      </div>

    </>
  )
}

export default HOC(AddQues)