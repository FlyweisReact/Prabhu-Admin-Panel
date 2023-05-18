import React from 'react';
import img from "../Images2/e6.png";
import img2 from "../Images2/e1.png";

const Navbar = ()=>{
    return (
        <>

          <div className='navbar'>
            <div className='left'>
            <i className="fa-solid fa-magnifying-glass"></i>
                <input type='search' placeholder='search' />
             </div>
             <div className='right'>
              <img src={img} alt='' />
              <img src={img2} alt='' />
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