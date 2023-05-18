import React from 'react'
import HOC from '../Layout/HOC'
import Navbar from '../navbar'
import {Table} from 'react-bootstrap'

const CompleteWebinar = () => {
  return (
    <>
        <Navbar />

        <div className="two-sec-head-2">
        <div className="left">
          <p>Completed Webinar</p>
        </div>
      </div>

      <div className="mainTable2">
        <div className="ColorTable-head-2">
          <p>Completed Webinars</p>
        </div>
        <Table className="ColorTable-2">
          <thead>
            <tr>
              <th>Webinar Titles</th>
              <th> Live Date </th>
              <th> Date </th>
              <th> Time </th>
              <th> Status </th>
              <th> Edit </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cross Industry</td>
              <td>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero
              </td>
              <td> 05.05.2023</td>
              <td> 04:00 AM IST</td>
              <td style={{ color: "#F31111" }}>Pending</td>
              <td>
              </td>
            </tr>
          
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default HOC(CompleteWebinar)