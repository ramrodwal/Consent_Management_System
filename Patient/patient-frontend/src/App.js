import React from 'react';
import Header from "./components/Header";
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import SignUp from './components/SignUp';

import PatientDashboard from './components/PatientDashboardComponents/PatientDashboard';
import PatientNavbar from './components/PatientDashboardComponents/PatientNavbar';
import Notification from './components/PatientDashboardComponents/Notification';
import Profile from './components/PatientDashboardComponents/Profile';
import Appointments from './components/PatientDashboardComponents/Appointments';

import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import AllRequest from './AllRequest';
import ViewUpdateProfile from './ViewUpdateProfile';
import ViewRecords from './ViewRecords';
import AllRecords from './AllRecords';
import PatientProfileView from './components/PatientProfileView';



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

function AllReq(){
  return(
    <>
    <AllRequest/>
    </>
  )
}

function ViewUpProf(){
  return(
    <>
    <ViewUpdateProfile/>
    </>
  )
}

function ViewRecord(){
  return(
    <>
      <ViewRecords/>
    </>
  )
}

function AllRecord(){
  return(
    <>
      <AllRecords/>
    </>
  )
}
function PatientProfileViews(){
  return(
    <>
    <PatientNavbar/>
    <PatientProfileView/>
    </>
  )
}
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route exact path={"/"} element={<LoginPage />}></Route>
        <Route exact path={"/ForgotPassword.js"} element={<ForgotPass />}></Route>
        <Route exact path={"/SignUp.js"} element={<SignUpPage />}></Route>
        <Route exact path={"/PatientDashboard.js"} element={<PatientDash/>}></Route>
        <Route exact path={"/Notification.js"} element={<Notifi />}></Route>
        <Route exact path={"/Profile.js"} element={<Prof />}></Route>
        <Route exact path={"/AllRequest.js"} element={<AllReq/>}></Route>
        <Route exact path={"/ViewUpdateProfile.js"} element={<ViewUpProf/>}></Route>
        <Route exact path={"/ViewRecords.js"} element={<ViewRecord/>}></Route>
        <Route exact path={"/AllRecords.js"} element={<AllRecord/>}></Route>
        <Route exact path={"/PatientProfileView.js"} element={<PatientProfileViews/>}></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
