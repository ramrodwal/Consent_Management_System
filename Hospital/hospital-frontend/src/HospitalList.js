import React, { useState , useEffect } from 'react';
import "./HospitalComponents/HospitalStyle.css"
import Table from 'react-bootstrap/Table'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import axios from "axios";



function HospitalList() {

  const [hospitals,setHospitals]=useState([]);

  useEffect(() => {
    axios.get("http://localhost:9099/hospital/admin-login/hospital-list").then((response) => {
      setHospitals(response.data);
    });
  }, []);

  return (
    <>


      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

        <Navbar.Brand href="/AdminPostLogin"><img
          alt=""
          src="/Admin.jpg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}Admin</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/RegisterNewHospital">Register New Hospital</Nav.Link>
            <Nav.Link href="/RegisterNewDoctor">Register New Doctor</Nav.Link>
            <Nav.Link href="/HospitalList">Hospital List</Nav.Link>
            <Nav.Link href="/DoctorList">Practitioner's List</Nav.Link>

          </Nav>
          <Nav>
            <Nav.Link href="/AdminLogin">Logout</Nav.Link>

          </Nav>
        </Navbar.Collapse>

      </Navbar>


      <center><h1 className='pageheading'>Hospital List</h1></center>

      <Table stripped bordered hover variant="dark" size="sm">
        <thead>
          <tr className='tablehead'>
            <th>Hospital ID</th>
            <th>Hospital Name</th>
            <th>Contact Number</th>
            <th>Address</th>
            <th>State</th>
            <th>City</th>
            <th>ZipCode</th>

          </tr>
        </thead>
        <tbody>
          {hospitals.map((hospital)=>(
            <tr key={hospital.id}>
              <td>{hospital.hospital_id}</td>
              <td>{hospital.hospital_name}</td>
              <td>{hospital.contactNumber}</td>
              <td>{hospital.state}</td>
              <td>{hospital.city}</td>
              <td>{hospital.address}</td>
              <td>{hospital.zipcode}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default HospitalList;