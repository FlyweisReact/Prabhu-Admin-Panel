import React from 'react'
import HOC from '../Layout/HOC'
import Navbar from '../navbar'

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
          <p>Manage Webinars</p>
        </div>
        <Table className="ColorTable">
          <thead>
            <tr>
              <th>Webinar Titles</th>
              <th> Description </th>
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
                <img src={img} alt="" />
              </td>
            </tr>
            <tr>
              <td>Cross Industry</td>
              <td>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero
              </td>
              <td> 05.05.2023</td>
              <td> 04:00 AM IST</td>
              <td style={{ color: "#2CAD0C" }}>Reviewed</td>
              <td>
                <img src={img} alt="" />
              </td>
            </tr>
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
                <img src={img} alt="" />
              </td>
            </tr>
            <tr>
              <td>Cross Industry</td>
              <td>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero
              </td>
              <td> 05.05.2023</td>
              <td> 04:00 AM IST</td>
              <td style={{ color: "#2CAD0C" }}>Reviewed</td>
              <td>
                <img src={img} alt="" />
              </td>
            </tr>
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
                <img src={img} alt="" />
              </td>
            </tr>
            <tr>
              <td>Cross Industry</td>
              <td>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero
              </td>
              <td> 05.05.2023</td>
              <td> 04:00 AM IST</td>
              <td style={{ color: "#2CAD0C" }}>Reviewed</td>
              <td>
                <img src={img} alt="" />
              </td>
            </tr>
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
                <img src={img} alt="" />
              </td>
            </tr>
            <tr>
              <td>Cross Industry</td>
              <td>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero
              </td>
              <td> 05.05.2023</td>
              <td> 04:00 AM IST</td>
              <td style={{ color: "#2CAD0C" }}>Reviewed</td>
              <td>
                <img src={img} alt="" />
              </td>
            </tr>
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
                <img src={img} alt="" />
              </td>
            </tr>
            <tr>
              <td>Cross Industry</td>
              <td>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero
              </td>
              <td> 05.05.2023</td>
              <td> 04:00 AM IST</td>
              <td style={{ color: "#2CAD0C" }}>Reviewed</td>
              <td>
                <img src={img} alt="" />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
   )
}

export default HOC(Review)