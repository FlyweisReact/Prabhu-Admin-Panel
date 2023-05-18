import React from 'react'
import HOC from '../Layout/HOC'
import Navbar from '../navbar'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import {Form} from 'react-bootstrap'


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
        <FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
    
        </div>

      </div>

    </>
  )
}

export default HOC(AddQues)