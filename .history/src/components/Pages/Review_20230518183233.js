import React from 'react'
import HOC from '../Layout/HOC'
import Navbar from '../navbar'
import { Table} from 'react-bootstrap'

const Review = () => {
  return (
    <>
        <Navbar />
        <div className="two-sec-head">
        <p>Review & Questionnaire</p>

        <button className="addbtn2" style={{textAlign : 'center'}} >
          Questionnaire
          </button>
      </div>


      <div className="mainTable">
        <div className="ColorTable-head">
          <p>Review</p>
        </div>
        <Table className="ColorTable">
          <thead>
            <tr>
              <th>Webinar</th>
              <th> Webinar Titles </th>
              <th> Live Date </th>
              <th> Rating </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lorem Ipsum</td>
              <td>
              Cross Industry
              </td>
              <td>05.05.2023</td>
              <td></td>
            </tr>

          </tbody>
        </Table>
      </div>
    </>
   )
}

export default HOC(Review)