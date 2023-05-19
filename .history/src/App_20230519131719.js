/** @format */

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import DashBoard from "./components/dashboard";
import AddScreen from "./components/add-screen";
import ForgetPass from "./components/forget-pass";
import Profile from "./components/Pages/Profile";
import EditProfile from "./components/Pages/EditProfile";
import { ReactNotifications } from "react-notifications-component";
import Webinar from "./components/Pages/Webinar";
import ManageWebinar from "./components/Pages/ManageWebinar";
import CompleteWebinar from "./components/Pages/CompleteWebinar";
import PaymentDetails from "./components/Pages/PaymentDetails";
import Review from "./components/Pages/Review";
import AddQues from "./components/Pages/AddQues";
import VendorDash from "./Panel/vendor-dash";
import SpeakerList from "./Panel/Pages/SpeakerList";
import WebinarTopics from "./Panel/Pages/Webinar-topics";
import VendorManageWebinar from "./Panel/Pages/Vendor-manage-webinar";
import VendorAddScreen from "./Panel/vendor-add-screen";
import VendorCompleteWebinar from "./Panel/Pages/VendorCompleteWebinar";
import Report from "./Panel/Pages/Report";


function App() {
  return (
    <>
      {" "}
      <ReactNotifications />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/for-pass" element={<ForgetPass />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/add" element={<AddScreen />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/webinar-topic" element={<Webinar />} />
          <Route path="/manage-webinar" element={<ManageWebinar />} />
          <Route path="/complete-webinar" element={<CompleteWebinar />} />
          <Route path="/payment-details" element={<PaymentDetails />} />
          <Route path="/review" element={<Review />} />
          <Route path="/add-ques" element={<AddQues />} />


          {/* Account Manager  */}

          <Route path="/account-manager-dash" element={<VendorDash />} />
          <Route path="/speaker-list" element={<SpeakerList />} />
          <Route path="/suggest-webinar" element={<WebinarTopics />} />
          <Route path="/vendor-manage-webinar" element={<VendorManageWebinar />} />
          <Route path="/vendor-add" element={<VendorAddScreen />} />
          <Route path="/vendor-complete-webinar" element={<VendorCompleteWebinar />} />
          <Route path="/report" element={<Report />} />
           </Routes>
      </Router>
    </>
  );
}

export default App;
