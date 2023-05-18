/** @format */

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import DashBoard from "./components/dashboard";
import Staff from "./components/staff";
import Subs from "./components/subscription";
import RemoveStaff from "./components/remove_staff";
import Review from "./components/review";
import AddScreen from "./components/add-screen";
import ForgetPass from "./components/forget-pass";
import Profile from "./components/Pages/Profile";
import EditProfile from "./components/Pages/EditProfile";
import { ReactNotifications } from "react-notifications-component";
import Webinar from "./components/Pages/Webinar";

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
          <Route path="/manage-webinar" element={<}


          <Route path="/staff" element={<Staff />} />
          <Route path="/subs" element={<Subs />} />
          <Route path="/remove-staff" element={<RemoveStaff />} />
          <Route path="/review" element={<Review />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
