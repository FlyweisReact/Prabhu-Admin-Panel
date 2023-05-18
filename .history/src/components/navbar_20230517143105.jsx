import React from 'react';
import img from "../Images2/e6.png";
import img2 from "../Images2/e1.png";

const Navbar = ()=>{
    return (
        <>

          <div className='New-navbar'>
            <div className='left'>
            <div className='under'>
            <i className="fa-solid fa-magnifying-glass"></i>
                <input type='search' placeholder='search' />
           
            </div>
             </div>
             <div className='right'>
              <img src={img} alt='' className='notificationImage' />
              <img src={img2} alt=''  className='profileImage'/>
              <div>
                <p>Palak Sharma</p>
                <p>Instructor Logged In</p>
              </div>

             </div>
          </div>

   
        </>
    )
}

export default Navbar;