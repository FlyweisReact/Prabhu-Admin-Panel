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
          
        </div>
      </div>
    </>
  );
};

export default HOC(AddScreen);
