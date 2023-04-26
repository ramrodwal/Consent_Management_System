import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function PatientProfileView() {
  const [patient, setPatient] = useState([]);

  const navigate = useNavigate();
  const token = localStorage.getItem('authToken'); // get token from localStorage
  const id = localStorage.getItem('id');
  const headers = { Authorization: `Bearer ${token}` }; // add token to headers

  useEffect(() => {
    
    if (token === null) {
      navigate("/");
    }
    else {

      axios.get(`http://localhost:8765/patient/register/${id}`, { headers }).then((response) => {
        setPatient(response.data);
      });
    }

  }, []);

  return (
    <>
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
            <p>{patient.patientAadhar}</p>
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
