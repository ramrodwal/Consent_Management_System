import logo from './logo.svg';
import React from 'react';
// import './App.css';
import HospitalHome from './HospitalHome';
import { BrowserRouter as Router, Routes, Route, Redirect,} from "react-router-dom";

import DoctorLogin from './DoctorLogin';
import BookAppointmentDoctor from './BookAppointmentDoctor';
import AdminLogin from './AdminLogin';
import AdminPostLogin from './AdminPostLogin';
import HospitalList from './HospitalList';

function HospHome(){
  return(
      <>
        <HospitalHome/>
      </>
  );
}

function BookAppointmentDoc(){
  return(
    <>
      <BookAppointmentDoctor/>
    </>
  );
}

function DocLogin(){
  return(
    <>
      <DoctorLogin/>
    </>
  );
}

function AdminLog(){
  return(
    <>
      <AdminLogin/>
    </>
  );
}

function AdmPostLog(){
  return(
      <>
        <AdminPostLogin/>
      </>
  );
}

function HospList(){
  return(
      <>
        <HospitalList/>
      </>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        {/* <Route exact path="*" element={<Redirect to="/"/>}></Route> */}
         
        <Route exact path={"/HospitalHome"} element={<HospHome/>}></Route>
        <Route exact path={"/BookAppointmentDoctor"} element={<BookAppointmentDoc/>}></Route>
        <Route exact path={"/DoctorLogin"} element={<DocLogin/>}></Route>
        <Route exact path={"/AdminLogin"} element={<AdminLog/>}></Route>
        <Route exact path={"/AdminPostLogin"} element={<AdmPostLog/>}></Route>
        <Route exact path={"/HospitalList"} element={<HospList/>}></Route>

        </Routes>
      </Router>           
    </div>
  );
}

export default App;
