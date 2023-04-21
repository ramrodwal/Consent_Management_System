import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function PatientDashboard() {
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    const fetchPatient = async () => {
      const token = localStorage.getItem('authToken'); // get token from localStorage
      const id = localStorage.getItem('id');
      const headers = { Authorization: `Bearer ${token}` }; // add token to headers
      const { data } = await axios.get(`http://localhost:8765/patient/view-dashboard/${id}`, { headers });
      console.log(data);
      setPatient(data);
    };

    fetchPatient();
  }, []);

  if (!patient) {
    return <div>
      <h1 style={{ textAlign: "center" }}>
        Cannot Access The Page!
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Button href="/">Login</Button>
      </div>
      <h5 style={{ textAlign: "center" }}>Don't have an account? <a href="/SignUp.js"> Sign Up</a></h5>


    </div>;
  }
  return (
    <>
      <Container>
        <h1 className="patientdashboard">Welcome {patient.fname} {patient.lname} !</h1>

        <CardGroup className="patientcard">
          <Card >
            <a className="patientdashboardcard" href="/ConsentResponse.js">
              <Card.Img variant="top" src="/consent.png" />
            </a>
            <Card.Body>
              <Card.Title>View All Requests</Card.Title>
            </Card.Body>

          </Card>
          <Card >
            <a className="patientdashboardcard" href="/PatientProfileView.js">
              <Card.Img variant="top" src="/profile.png" />
            </a>
            <Card.Body>
              <Card.Title>ViewProfile</Card.Title>

            </Card.Body>

          </Card>
          <Card >
            <a className="patientdashboardcard" href="/ViewRecords.js">
              <Card.Img variant="top" src="/records.jpg" />
            </a>
            <Card.Body>
              <Card.Title>View Records</Card.Title>

            </Card.Body>

          </Card>
        </CardGroup>


      </Container>

    </>
  );

}

export default PatientDashboard;
