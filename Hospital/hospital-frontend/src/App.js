import logo from './logo.svg';
import React from 'react';
// import './App.css';
import HospitalHome from './HospitalHome';
import { BrowserRouter as Router, Routes, Route, Redirect, } from "react-router-dom";

import DoctorLogin from './DoctorLogin';
import BookAppointmentDoctor from './BookAppointmentDoctor';
import AdminLogin from './AdminLogin';
import AdminPostLogin from './AdminPostLogin';
import HospitalList from './HospitalList';
import RegisterNewDoctor from './RegisterNewDoctor';
import RegisterNewHospital from './RegisterNewHospital';
import DoctorList from './DoctorList';
import DoctorDashboard from './DoctorDashboard';
import AddMedicalRecords from './AddMedicalRecords';
import ViewConsent from './ViewConsent';
import ConsentRequest from './ConsentRequest';
import DoctorNavbar from './HospitalComponents/DoctorNavbar';
import ViewApprovedRecords from './ViewApprovedRecords';
import AdminNavbar from './HospitalComponents/AdminNavbar';

function HospHome() {
  return (
    <>
      <HospitalHome />
    </>
  );
}

function BookAppointmentDoc() {
  return (
    <>
      <BookAppointmentDoctor />
    </>
  );
}

function DocLogin() {
  return (
    <>
      <DoctorLogin />
    </>
  );
}

function AdminLog() {
  return (
    <>
      <AdminLogin />
    </>
  );
}

function AdmPostLog() {
  return (
    <>
      <AdminNavbar />
      <AdminPostLogin />
    </>
  );
}

function HospList() {
  return (
    <>
      <AdminNavbar />
      <HospitalList />
    </>
  );
}

function RegNewDoc() {
  return (
    <>
      <AdminNavbar />
      <RegisterNewDoctor />
    </>
  );
}

function RegNewHosp() {
  return (
    <>
      <AdminNavbar />
      <RegisterNewHospital />
    </>
  )
}

function DocList() {
  return (
    <>
      <AdminNavbar />
      <DoctorList />
    </>
  )
}


function DocDash() {
  return (
    <>
      <DoctorNavbar />
      <DoctorDashboard />
    </>
  )
}

function AddMedRec() {
  return (
    <>
      <DoctorNavbar />
      <AddMedicalRecords />
    </>
  )
}

function ViewCon() {
  return (
    <>
      <DoctorNavbar />
      <ViewConsent />
    </>
  )
}

function ConsentReq() {
  return (
    <>
      <DoctorNavbar />
      <ConsentRequest />
    </>
  )
}

function ViewApprovedRec() {
  return (
    <>
      <DoctorNavbar />
      <ViewApprovedRecords />
    </>
  );
}


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route exact path="*" element={<Redirect to="/"/>}></Route> */}

          <Route exact path={"/"} element={<HospHome />}></Route>
          <Route exact path={"/BookAppointmentDoctor"} element={<BookAppointmentDoc />}></Route>
          <Route exact path={"/DoctorLogin"} element={<DocLogin />}></Route>
          <Route exact path={"/AdminLogin"} element={<AdminLog />}></Route>
          <Route exact path={"/AdminPostLogin"} element={<AdmPostLog />}></Route>
          <Route exact path={"/HospitalList"} element={<HospList />}></Route>
          <Route exact path={"/RegisterNewDoctor"} element={<RegNewDoc />}></Route>
          <Route exact path={"/DoctorList"} element={<DocList />}></Route>
          <Route exact path={"/RegisterNewHospital"} element={<RegNewHosp />}></Route>
          <Route exact path={"/DoctorDashboard"} element={<DocDash />}></Route>
          <Route exact path={"/AddMedicalRecords"} element={<AddMedRec />}></Route>
          <Route exact path={"/ViewConsent"} element={<ViewCon />}></Route>
          <Route exact path={"/ConsentRequest"} element={<ConsentReq />}></Route>
          <Route exact path={"/ViewApprovedRecords"} element={<ViewApprovedRec />}></Route>



        </Routes>
      </Router>
    </div>
  );
}

export default App;
