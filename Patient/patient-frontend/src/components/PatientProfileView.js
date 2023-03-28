import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const PatientProfileView = ({ match }) => {
  const [patient, setPatient] = useState(null);

  const patient_aadhar = "147852369845";

  useEffect(() => {
    const fetchPatient = async () => {
      const { data } = await axios.get(`http://localhost:8765/patient/register/${patient_aadhar}`);
      setPatient(data);
    };

    fetchPatient();
  }, [patient_aadhar]);

 

  if (!patient) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      
      <Navbar.Brand href="/PatientDashboard.js">Patient</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/AllRequest.js">View All Requests</Nav.Link>
          <Nav.Link href="/PatientProfileView.js">View Profile</Nav.Link>
          <Nav.Link href="/ViewRecords.js">View Records</Nav.Link>
          
          
        </Nav>
        <Nav>
          <Nav.Link href="/">Logout</Nav.Link>
         
        </Nav>
      </Navbar.Collapse>
    
  </Navbar>
    <div className="profile-card">
      <div className="profile-header">
        <h2>Your Profile</h2>
      </div>
      <div className="profile-body">
        <div className="profile-section">
          <h3>Name:</h3>
          <p>{patient.fname} {patient.mname} {patient.lname}</p>
        </div>
        <div className="profile-section">
          <h3>Age:</h3>
          <p>{patient.age}</p>
        </div>
        <div className="profile-section">
          <h3>Gender:</h3>
          <p>{patient.gender}</p>
        </div>
        <div className="profile-section">
          <h3>Email:</h3>
          <p>{patient.email}</p>
        </div>
        <div className="profile-section">
          <h3>Contact Number:</h3>
          <p>{patient.contactNo}</p>
        </div>
        <div className="profile-section">
          <h3>State:</h3>
          <p>{patient.state}</p>
        </div>
        <div className="profile-section">
          <h3>City:</h3>
          <p>{patient.city}</p>
        </div>
        <div className="profile-section">
          <h3>Zip Code:</h3>
          <p>{patient.zipcode}</p>
        </div>
        <div className="profile-section">
          <h3>Address:</h3>
          <p>{patient.address}</p>
        </div>
        <div className="profile-section">
          <h3>Aadhar Number:</h3>
          <p>{patient.patient_aadhar}</p>
        </div>
        <div className="profile-footer">
            <Link to="/ViewUpdateProfile.js">
        <button className="update-profile-button" >Update Profile</button>
        </Link>
      </div>
      </div>
    </div>
    </>
  );
};

export default PatientProfileView;
