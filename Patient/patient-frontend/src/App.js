import React from 'react';
import Header from "./components/Header";
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import SignUp from './components/SignUp';
import PatientDashboard from './components/PatientDashboardComponents/PatientDashboard';
import PatientNavbar from './components/PatientDashboardComponents/PatientNavbar';
import Notification from './components/PatientDashboardComponents/Notification';
import Appointments from './components/PatientDashboardComponents/Appointments';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import ConsentResponse from './ConsentResponse';
import ViewUpdateProfile from './ViewUpdateProfile';
import ViewRecords from './ViewRecords';
import ApprovedRecords from './ApprovedRecords';
import PatientProfileView from './components/PatientProfileView';



function LoginPage() {
  return (
    <>
      <Header />
      <Login />
    </>
  );
}
function ForgotPass() {
  return (
    <>
      <Header />
      <ForgotPassword />
    </>
  );
}
function SignUpPage() {
  return (
    <>
      <Header />
      <SignUp />
    </>
  );
}
function PatientDash() {
  return (
    <>
      <PatientNavbar />
      <PatientDashboard />
    </>
  );
} function Notifi() {
  return (
    <>
      <PatientNavbar />
      <Notification />
    </>
  );
}

function Appoin() {
  return (
    <>
      <PatientNavbar />
      <Appointments />
    </>
  );
}

function ConsentRes() {
  return (
    <>
      <PatientNavbar />
      <ConsentResponse />
    </>
  )
}

function ViewUpProf() {
  return (
    <>
      <PatientNavbar />
      <ViewUpdateProfile />
    </>
  )
}

function ViewRecord() {
  return (
    <>
      <PatientNavbar />
      <ViewRecords />
    </>
  )
}

function ApprovedRec() {
  return (
    <>
      <PatientNavbar />
      <ApprovedRecords />
    </>
  )
}
function PatientProfileViews() {
  return (
    <>
      <PatientNavbar />
      <PatientProfileView />
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
          <Route exact path={"/PatientDashboard.js"} element={<PatientDash />}></Route>
          <Route exact path={"/Notification.js"} element={<Notifi />}></Route>
          <Route exact path={"/ConsentResponse.js"} element={<ConsentRes />}></Route>
          <Route exact path={"/ViewUpdateProfile.js"} element={<ViewUpProf />}></Route>
          <Route exact path={"/ViewRecords.js"} element={<ViewRecord />}></Route>
          <Route exact path={"/ApprovedRecords.js"} element={<ApprovedRec />}></Route>
          <Route exact path={"/PatientProfileView.js"} element={<PatientProfileViews />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
