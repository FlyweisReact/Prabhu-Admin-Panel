import React from 'react';
import img from "../Images2/e6.png";
import img2 from "../Images2/e1.png";
import img3 from "../Images2/e7.png";

const Navbar = ()=>{
    return (
        <>

          <div className='navbar'>
            <div className='left'>
                <input type='search' placeholder='search' />
             </div>
             <div className='right'>
              <img src={img} alt='' />
              <img src={img2} alt='' />
              <div>
                <p></p>
              </div>
             </div>
          </div>

        <div className="dash-right-top">
            <div className="dash-top-left">
              <input type="text" placeholder="Search" />
            </div>
            <div className="dash-top-right">
              <img className="img1" src={img} alt="" />
              <img className="img2" src={img2} alt="" />
              <div className="r-cont">
                <h6>Madhav Patil</h6>
                <p>Instructor Logged in</p>
              </div>
              <img className="img1 img3 img4"  src={img3} alt="" />
            </div>
          </div>
        </>
    )
}

export default Navbar;