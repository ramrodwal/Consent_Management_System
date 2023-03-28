import "./HospitalComponents/HospitalStyle.css"
import Table from 'react-bootstrap/Table'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState, useEffect } from 'react';
import axios from "axios";


function DoctorList() {
  const [practitioners, setPractitioners] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9099/hospital/admin-login/practitioner-list").then((response) => {
      setPractitioners(response.data);
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
            <Nav.Link href="/DoctorList">Doctors' List</Nav.Link>

          </Nav>
          <Nav>
            <Nav.Link href="/" className="navbar-nav ml-auto">Logout</Nav.Link>

          </Nav>
        </Navbar.Collapse>

      </Navbar>
      <center><h1 className="pageheading">Practitioner's List</h1></center>

      <Table stripped bordered hover variant="dark" size="sm">
        <thead>
          <tr className='tablehead'>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Contact Number</th>
            <th>Address</th>
            <th>State</th>
            <th>City</th>
            <th>Zip</th>
            <th>Aadhar Number</th>
            <th>Medical License Id</th>
            <th>Specialization</th>
            <th>Qualification</th>
            <th>Hospital Id</th>

          </tr>
        </thead>
        <tbody>
          {practitioners.map((practitioner) => (
            <tr key={practitioner.id}>
              <td>{practitioner.fname}</td>
              <td>{practitioner.mname}</td>
              <td>{practitioner.lname}</td>
              <td>{practitioner.age}</td>
              <td>{practitioner.gender}</td>
              <td>{practitioner.email}</td>
              <td>{practitioner.number}</td>
              <td>{practitioner.address}</td>
              <td>{practitioner.state}</td>
              <td>{practitioner.city}</td>
              <td>{practitioner.zipcode}</td>
              <td>{practitioner.practitioner_aadhar}</td>
              <td>{practitioner.medical_license_id}</td>
              <td>{practitioner.specialisation}</td>
              <td>{practitioner.qualification}</td>
              <td>{practitioner.centralHospital.hospital_id}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default DoctorList;