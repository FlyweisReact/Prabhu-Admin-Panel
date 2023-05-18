import React from 'react'
import HOC from '../Layout/HOC'
import Navbar from '../navbar'

const AddQues = () => {
  return (
    <>
        <Navbar />
        <div className="two-sec-head">
        <p>Questionnaire</p>
      </div>

      <div className='Question-Div'>
        <p>Q1 Lorem ipsum dolor sit amet, consetetur sadipscing , sed diam 
nonumy eirmod tempor ?</p>

        <div className='answer'>
        

        </div>

      </div>

    </>
  )
}

export default HOC(AddQues)