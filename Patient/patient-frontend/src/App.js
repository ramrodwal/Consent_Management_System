import logo from './logo.svg';
import React, { Fragment } from 'react';
import Header from "./components/Header";
import Homepage from './components/Homepage';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import SignUp from './components/SignUp';
// import './App.css';
import PatientDashboard from './components/PatientDashboardComponents/PatientDashboard';
import PatientNavbar from './components/PatientDashboardComponents/PatientNavbar';
import Notification from './components/PatientDashboardComponents/Notification';
import Profile from './components/PatientDashboardComponents/Profile';
import Appointments from './components/PatientDashboardComponents/Appointments';
// import VerifyOTP from './components/VerifyOTP';
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
function PatientDash(){
  return(
      <>
      <PatientNavbar />
      <PatientDashboard/>
      </>
  );
}function Notifi(){
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
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      {/* <Route exact path={"/"} element={<Home />}></Route>  */}
        <Route exact path={"/"} element={<LoginPage />}></Route>
        <Route exact path={"/ForgotPassword.js"} element={<ForgotPass />}></Route>
        <Route exact path={"/SignUp.js"} element={<SignUpPage />}></Route>
        <Route exact path={"/PatientDashboard.js"} element={<PatientDash/>}></Route>
        <Route exact path={"/Notification.js"} element={<Notifi />}></Route>
        <Route exact path={"/Profile.js"} element={<Prof />}></Route>
        <Route exact path={"/Appointments.js"} element={<Appoin/>}></Route>
        {/* <Route exact path={"/VerifyOTP.js"} element={<VerifyOTP/>}></Route> */}
        {/* <Route exact path={"/PatientDetails.js"} element={<PatientDet />}></Route> */}
      </Routes>
      </Router>
    </div>
  );
}

export default App;
