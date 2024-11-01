import React from "react";
import Login from "./User/logIN/Login";
import SignUp from "./User/signIn/SignUp";
import Home from "./Home/Home";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import LoginAdmin from "./Admin/LoginAdmin";
import SignUpAdmin from "./Admin/SignUpAdmin";
import DsignUp from "./Doctors/DsignUp";
import DLogin from "./Doctors/DLogin";
import DSelect from "./Doctors/Dselect";
import Select from "./User/Select";
import Profile from "./Doctors/Profile/Profile";
import Appoitment from "./Pages/Appointment";
import ProfileUser from "./Pages/Home/ProfileUser";
import User from "./Pages/Profile/User";
import Chat from "./Pages/Chat";
import Navbar from "./Home/Navbar/Navbar";
import Alldoctors from "./Pages/Home/Doctors/Alldoctors"
import Favorites from "./Pages/Home/Favorites/Favorites";
import Alerm from "./Pages/Home/Alerm/Alerm";
import Settings from "./Pages/Home/Settings/Settings";
import DocInfo from "./Pages/Home/Doctors/Docinfo/DocInfo";
import Favemale from "./Pages/Home/FaveMale/Favemale";
import Favefem from "./Pages/Home/Favefem/Favefem";
import Ratings from "./Pages/Home/Ratings/Ratings";
import { UserProvider } from "./User/ImageProvider";
import Delete from "./Pages/Home/Settings/Delete/Delete";
import Password from "./Pages/Home/Settings/Password/Password";
import Notification from "./Pages/Home/Settings/Notification/Notification";
import Change from "./Pages/Home/Settings/Change/Change";
import { ThemeProvider } from "./Pages/Home/Settings/Change/Theme";
import MyProfile from "./Pages/Profile/Myprofile";
import Verify from "./User/signIn/Verify";
import ForgPass from "./User/logIN/ForgPass";
import ResetPassword from "./User/logIN/ResetPassword";
import Schedule from "./Pages/Home/Doctors/Schedular/Schedule";



const App = () => {
  return (
    <div>
    <ThemeProvider>
      <UserProvider>


     
      <BrowserRouter>
      
        <Routes>
      
          <Route path="/" element={<Home />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignUpAdmin" element={<SignUpAdmin />} />
          <Route path="/LoginAdmin" element={<LoginAdmin />} />
          <Route path="/DsignUp" element={<DsignUp />} />
          <Route path="/DLogin" element={<DLogin />} />
          <Route path="/Dselect" element={<DSelect />} />
          <Route path="/select" element={<Select />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Appointment" element={<Appoitment />} />
          <Route path="/UserProfile" element={<ProfileUser />} />
          <Route path="/User" element={<User />} />
          <Route path="/Chat" element={<Chat />} />
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/Alldoctors" element={<Alldoctors />} />
          <Route path="/Favorites" element={<Favorites/>} />
          <Route path="/Alerm" element={<Alerm />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/DocInfo" element={<DocInfo />} />
          <Route path="/Favemale" element={<Favemale />} />
          <Route path="/Favefem" element={<Favefem/>} />
          <Route path="/Ratings" element={<Ratings />} />
          <Route path="/Delete" element={<Delete />} />
          <Route path="/Notification" element={<Notification/>} />
          <Route path="/Password" element={<Password/>} />
          <Route path="/Change" element={<Change/>} />
          <Route path="/Myprofile" element={<MyProfile/>} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/ForgPass" element={<ForgPass />} />
          <Route path="/resetpassword/:userId/:token" element={<ResetPassword />} />
          <Route path="/Delete" element={<Delete/>} />
          <Route path="/Schedule" element={<Schedule/>} />

        </Routes>
      </BrowserRouter>
      </UserProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;
