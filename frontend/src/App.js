import React, { Fragment } from 'react';
import Header from "./components/Header";
import Homepage from './components/Homepage';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import SignUp from './components/SignUp';
import PatientDashboard from './components/PatientDashboardComponents/PatientDashboard';
import PatientNavbar from './components/PatientDashboardComponents/PatientNavbar';
import Notification from './components/PatientDashboardComponents/Notification';
import Profile from './components/PatientDashboardComponents/Profile';
import Appointments from './components/PatientDashboardComponents/Appointments';
import DoctorAppointments from './components/DoctorDashboardComponents/DoctorAppointments';
import DoctorDashboard from './components/DoctorDashboardComponents/DoctorDashboard';
import DoctorNotification from './components/DoctorDashboardComponents/DoctorNotification';
import DoctorProfile from './components/DoctorDashboardComponents/DoctorProfile';
import DoctorNavbar from './components/DoctorDashboardComponents/DoctorNavbar';
import PatientDetails from './components/DoctorDashboardComponents/PatientDetails.js'
import ConsentRequest from './components/DoctorDashboardComponents/ConsentRequest.js'

import Navigation from './components/DashboardComponents/Navigation';
import Content from './components/DashboardComponents/Content';
import { BrowserRouter as Router, Routes, Route, Redirect,} from "react-router-dom";


function Home(){
    return (
      <>
        <Header />
        <Homepage />
      </>
    );
}
function LoginPage(){
  return (
    <>
      <Header />
      <Login />
    </>
  );
}
function ForgotPass(){
  return (
    <>
      <Header />
      <ForgotPassword />
    </>
  );
}
function SignUpPage(){
  return (
    <>
      <Header />
      <SignUp />
    </>
  );
}
function DashboardPage(){
  return(
    <>
    <Navigation />
    <Content />
    </>
  );
}
function PatientDash(){
  return(
      <>
      <PatientNavbar />
      <PatientDashboard/>
      </>
  );
}
function Notifi(){
  return(
    <>
    <PatientNavbar/>
    <Notification/>
    </>
  );
}
function Prof(){
  return(
    <>
    <PatientNavbar/>
    <Profile/>
    </>
  );
}
function Appoin(){
  return(
    <>
    <PatientNavbar/>
    <Appointments/>
    </>
  );
}
function DoctorDash(){
  return(
    <>
    <DoctorNavbar/>
    <DoctorDashboard/>
    </>
  );
}
function DoctorNotifi(){
  return(
    <>
    <DoctorNavbar/>
    <DoctorNotification/>
    </>
  );
}
function DoctorProf(){
  return(
    <>
    <DoctorNavbar/>
    <DoctorProfile/>
    </>
  );
}
function DoctorAppoin(){
  return(
    <>
    <DoctorNavbar/>
    <DoctorAppointments/>
    </>
  );
}
function PatientDet(){
  return(
    <>
      <DoctorNavbar/>
      <PatientDetails/>
    </>
  );
}
function ConsentReq(){
  return(
    <>
      <DoctorNavbar/>
      <ConsentRequest.js/>
    </>
  );
}
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        {/* <Route exact path="*" element={<Redirect to="/"/>}></Route> */}
        <Route exact path={"/"} element={<Home />}></Route> 
        <Route exact path={"/Login.js"} element={<LoginPage />}></Route>
        <Route exact path={"/ForgotPassword.js"} element={<ForgotPass />}></Route>
        <Route exact path={"/SignUp.js"} element={<SignUpPage />}></Route>
        <Route exact path={"/Dashboard.js"} element={<DashboardPage />}></Route>
        <Route exact path={"/PatientDashboard.js"} element={<PatientDash/>}></Route>
        <Route exact path={"/Notification.js"} element={<Notifi />}></Route>
        <Route exact path={"/Profile.js"} element={<Prof />}></Route>
        <Route exact path={"/Appointments.js"} element={<Appoin/>}></Route>
        <Route exact path={"/DoctorDashboard.js"} element={<DoctorDash/>}></Route>
        <Route exact path={"/DoctorNotification.js"} element={<DoctorNotifi />}></Route>
        <Route exact path={"/DoctorProfile.js"} element={<DoctorProf />}></Route>
        <Route exact path={"/DoctorAppointments.js"} element={<DoctorAppoin/>}></Route>
        <Route exact path={"/ConsentRequest.js"} element={<ConsentReq />}></Route>
        <Route exact path={"/PatientDetails.js"} element={<PatientDet />}></Route>

        </Routes>
      </Router>           
    </div>
    
  );
}

export default App;