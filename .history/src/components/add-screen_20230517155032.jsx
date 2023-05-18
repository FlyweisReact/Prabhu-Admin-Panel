import HOC from "./Layout/HOC";
import Navbar from "./navbar";

const AddScreen = () => {
  return (
    <>
      <div className="dash-cont">
        <div className="dash-right">
          <Navbar />
          <div className="addcoursetop">
            <h3>Add New Course</h3>
          </div>
          <div className="addcoursetop2">
            <div className="addcoursetop2l">
              <div className="addtop2cont1">
                <input className="inp" type="text" placeholder="Add Title" />
              </div>

              <div className="addtop2cont2">

                <div className="addtop2cont2itm" tabIndex={0}>
                  <i className="fa-sharp fa-regular fa-image"></i>
                  <p>Add Media</p>
                </div>

                <div className="addtop2cont2itm" tabIndex={0}>
                  <i className="fa-sharp fa-solid fa-calendar-days"></i>
                  <p>Date</p>
                </div>
                <div className="addtop2cont2itm" tabIndex={0}>
                  <i className="fa-regular fa-clock"></i>
                  <p>Time</p>
                </div>
              </div>

              <div className="addtop2cont3">
                <textarea placeholder=""> Paragraph </textarea>
              </div>
              <div className="addtop2cont4">
                  <button>Add</button>
              </div>
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HOC(AddScreen);